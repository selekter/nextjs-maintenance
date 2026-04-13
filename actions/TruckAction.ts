"use server";

import { db } from "@/libs/db";
import { prisma } from "@/libs/prisma";
import { truckSchema } from "@/libs/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

//! --- ดึงทะเบียนทั้งหมด ---
export async function getTrucks() {
  const trucks = await prisma.truck.findMany({
    select: {
      id: true,
      number_plate: true,
      drivers: { select: { name: true } },
    },

    orderBy: { number_plate: "asc" },
  });

  return trucks.map((truck) => ({
    ...truck,
    id: Number(truck.id),
    drivers_name: truck.drivers?.name || "ไม่มีคนขับ",
  }));
}

//! --- เพิ่มทะเบียนรถ ---
export async function createTruck(prevState: any, formData: FormData) {
  const rawData = {
    license_plate: formData.get("license_plate"),
  };

  const validationFields = truckSchema.safeParse(rawData);

  if (!validationFields.success) {
    return {
      errors: z.flattenError(validationFields.error).fieldErrors,
    };
  }

  const { license_plate } = validationFields.data;

  try {
    const existing = await prisma.truck.findFirst({
      where: { number_plate: license_plate },
    });

    if (existing) {
      return { errors: { license_plate: ["เลขทะเบียนนี้มีในระบบแล้วครับ"] } };
    }
    await prisma.truck.create({
      data: {
        number_plate: license_plate,
      },
    });
  } catch (error) {
    return { messages: "เกิดข้อผิดพลาดบางประการ" };
  }

  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
}

export async function updateTruckMileage(formData: FormData) {
  const truckId = BigInt(formData.get("truckId") as string);
  const newMileage = parseInt(formData.get("mileage") as string);

  try {
    await prisma.$transaction(async (tx) => {
      // 1. อัปเดตเลขไมล์รถปัจจุบัน
      await tx.truck.update({
        where: { id: truckId },
        data: { current_mileage: newMileage },
      });

      // 2. ดึงรายการบำรุงรักษาล่าสุดของรถคันนี้มาเช็ค
      // (ดึงเฉพาะรายการที่ยังไม่ได้ซ่อม หรือดึงตัวล่าสุดของแต่ละประเภท)
      const maintenanceItems = await tx.maintenanceLog.findMany({
        where: { truck_id: truckId },
        distinct: ["type"],
        orderBy: { created_at: "desc" },
      });

      for (const item of maintenanceItems) {
        // ถ้าเลขไมล์ใหม่ มากกว่า หรือ เท่ากับ รอบที่ต้องเปลี่ยน
        if (newMileage >= item.next_service_at) {
          // ตรวจสอบก่อนว่ามีรายการแจ้งซ่อมนี้ค้างอยู่ในระบบหรือยัง (status: 0 คือยังไม่ซ่อม)
          // เพื่อป้องกันการสร้างรายการซ้ำซ้อนทุกครั้งที่กดอัปเดตเลขไมล์
          const existingReport = await tx.report.findFirst({
            where: {
              license_plate_id: truckId,
              repair: { contains: item.type },
              status: 0,
            },
          });

          if (!existingReport) {
            await tx.report.create({
              data: {
                license_plate_id: truckId,
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
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, message: "อัปเดตเลขไมล์ไม่สำเร็จ" };
  }
}
