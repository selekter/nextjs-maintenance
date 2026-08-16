"use server";

import { prisma } from "@/lib/prisma";
import { truckSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

//! --- ดึงทะเบียนทั้งหมด ---
export async function getTrucks() {
  const trucks = await prisma.truck.findMany({
    select: {
      id: true,
      license_plate: true,
      driver: { select: { name: true } },
    },

    orderBy: { license_plate: "asc" },
  });

  return trucks.map((truck) => ({
    ...truck,
    id: Number(truck.id),
    drivers_name: truck.driver?.name || "ไม่มีคนขับ",
  }));
}

//! --- เพิ่มทะเบียนรถ ---
export async function createTruck(prevState: any, formData: FormData) {
  const rawData = {
    license_plate: formData.get("license_plate"),
    current_mileage: formData.get("current_mileage"),
  };

  const validationFields = truckSchema.safeParse(rawData);

  if (!validationFields.success) {
    return {
      errors: z.flattenError(validationFields.error).fieldErrors,
    };
  }

  const { license_plate, current_mileage } = validationFields.data;

  try {
    const existing = await prisma.truck.findFirst({
      where: { license_plate: license_plate },
    });

    if (existing) {
      return { errors: { license_plate: ["เลขทะเบียนนี้มีในระบบแล้วครับ"] } };
    }

    await prisma.$transaction(async (tx) => {
      const truck = await tx.truck.create({
        data: {
          license_plate: license_plate,
          current_mileage: current_mileage,
        },
      });

      // สร้างรายการบำรุงรักษาพื้นฐาน
      const maintenanceDefaults = [
        { type: "น้ำมันเครื่อง", interval: 20000 },
        { type: "น้ำมันเกียร์", interval: 70000 },
        { type: "น้ำมันเฟืองท้าย", interval: 60000 },
      ];

      for (const item of maintenanceDefaults) {
        await tx.truckMaintenanceStatus.create({
          data: {
            truck_id: truck.id,
            type: item.type,
            service_mileage: current_mileage,
            next_service_at: current_mileage + item.interval,
          },
        });
      }
    });
    revalidatePath("/dashboard/drivers");
  } catch (error) {
    console.error(error);
    return { messages: "เกิดข้อผิดพลาดบางประการ" };
  }

  redirect("/dashboard/drivers");
}

export async function updateTruckMileage(prevState: any, formData: FormData) {
  const truckId = parseInt(formData.get("truckId") as string);
  const newMileage = parseInt(formData.get("mileage") as string);

  try {
    // 1. ดึงข้อมูลรถคันนี้มาดูเลขไมล์ล่าสุดใน DB จริงๆ
    const currentTruck = await prisma.truck.findUnique({
      where: { id: truckId },
      select: { current_mileage: true },
    });

    // 2. ตรวจสอบเงื่อนไข
    if (!currentTruck) return { success: false, message: "ไม่พบข้อมูลรถ" };

    if (newMileage < currentTruck.current_mileage) {
      return {
        success: false,
        message: `เลขไมล์ใหม่ (${newMileage}) ห้ามน้อยกว่าเลขไมล์เดิม (${currentTruck.current_mileage})`,
      };
    }

    await prisma.$transaction(async (tx) => {
      // 1. อัปเดตเลขไมล์รถปัจจุบัน
      await tx.truck.update({
        where: { id: truckId },
        data: { current_mileage: newMileage },
      });

      // 2. ดึงรายการบำรุงรักษาล่าสุดของรถคันนี้มาเช็ค
      // (ดึงเฉพาะรายการที่ยังไม่ได้ซ่อม หรือดึงตัวล่าสุดของแต่ละประเภท)
      const maintenanceItems = await tx.truckMaintenanceStatus.findMany({
        where: { truck_id: truckId },
        distinct: ["type"],
        orderBy: { service_date: "desc" },
      });

      for (const item of maintenanceItems) {
        // ถ้าเลขไมล์ใหม่ มากกว่า หรือ เท่ากับ รอบที่ต้องเปลี่ยน
        if (newMileage >= item.next_service_at) {
          // ตรวจสอบก่อนว่ามีรายการแจ้งซ่อมนี้ค้างอยู่ในระบบหรือยัง (status: 0 คือยังไม่ซ่อม)
          // เพื่อป้องกันการสร้างรายการซ้ำซ้อนทุกครั้งที่กดอัปเดตเลขไมล์
          const existingReport = await tx.report.findFirst({
            where: {
              truck_id: truckId,
              repair: { contains: item.type },
              status: 0,
            },
          });

          if (!existingReport) {
            await tx.report.create({
              data: {
                truck_id: truckId,
                repair: `เปลี่ยน${item.type}`,
                status: 0,
              },
            });
          }
        }
      }
    });

    revalidatePath("/dashboard/reports");
    revalidatePath("/dashboard/maintenance"); // ปรับ Path ตามหน้าของคุณ
    return { success: true, message: "อัพเดลเลขไมล์เรียบร้อย" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "อัปเดตเลขไมล์ไม่สำเร็จ" };
  }
}

export async function deleteTruck(prevState: any, formData: FormData) {
  const truckId = parseInt(formData.get("truckId") as string);

  try {
    await prisma.truck.delete({
      where: { id: truckId },
    });
  } catch (error) {
    console.error(error);
    return { success: false, message: "ลบรถไม่สำเร็จ" };
  }

  revalidatePath("/dashboard/drivers");
  return { success: true, message: "ลบรถเรียบร้อย" };
}
