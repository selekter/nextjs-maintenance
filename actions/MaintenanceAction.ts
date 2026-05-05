// actions/MaintenanceAction.ts
"use server";
import { prisma } from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export async function getMaintenanceStatus() {
  const reports = await prisma.maintenancelog.findMany({
    include: {
      license_plates: {
        select: {
          id: true,
          number_plate: true,
          current_mileage: true,
          updated_at: true,
        },
      },
    },
    orderBy: { created_at: "desc" },
  });

  // จัดกลุ่มด้วย Reduce
  const grouped = reports.reduce((acc, log) => {
    const plate = log.license_plates.number_plate;
    if (!acc[plate]) {
      acc[plate] = {
        id: log.license_plates.id,
        number_plate: plate,
        current_mileage: log.license_plates.current_mileage,
        updated_at: log.license_plates.updated_at,
        items: [],
      };
    }

    // ตรวจสอบว่าในคันนี้ มีประเภทนี้ไปหรือยัง (เอาเฉพาะรายการล่าสุดของประเภทนั้น)
    const hasType = acc[plate].items.find((i: any) => i.type === log.type);
    if (!hasType) {
      acc[plate].items.push({
        type: log.type,
        next_service_at: log.next_service_at,
        last_service_at: log.service_mileage,
      });
    }
    return acc;
  }, {} as any);

  const result = Object.values(grouped).sort((a: any, b: any) => {
    return a.number_plate.localeCompare(b.number_plate, undefined, {
      numeric: true,
      sensitiveity: "base",
    });
  });

  return result;
}

export async function updateMaintenance(prevState: any, formData: FormData) {
  const truckId = formData.get("truckId") as string;
  const type = formData.get("type") as string;
  const serviceMileage = parseInt(formData.get("serviceMileage") as string);
  const interval = parseInt(formData.get("interval") as string);

  try {
    // ใช้ Transaction เพื่อความปลอดภัยของข้อมูล
    await prisma.$transaction([
      // 1. บันทึกประวัติการเปลี่ยน
      prisma.maintenancelog.create({
        data: {
          truck_id: BigInt(truckId),
          type: type,
          service_mileage: serviceMileage,
          next_service_at: serviceMileage + interval,
        },
      }),
      // 2. อัปเดตเลขไมล์ปัจจุบันของรถให้เป็นค่าล่าสุด
      prisma.truck.update({
        where: { id: BigInt(truckId) },
        data: { current_mileage: serviceMileage },
      }),
    ]);

    revalidatePath("/dashboard/maintenance");

    return { success: true, message: "บันทึกข้อมูลเรียบร้อย" };
  } catch (error) {
    console.error(error);
  }
}

export async function createLicenseMaintenance(
  prevState: any,
  formData: FormData,
) {
  const truckId = formData.get("truckId") as string;
  const currentMileage =
    parseInt(formData.get("current_mileage") as string) || 0;

  if (!truckId || truckId.trim() === "") {
    return { success: false, message: "กรุณากรอกเลขทะเบียนรถ" };
  }

  try {
    const existing = await prisma.maintenancelog.findFirst({
      where: { truck_id: BigInt(truckId) },
    });

    if (existing) {
      return { success: false, message: "เลขทะเบียนนี้มีในระบบแล้ว" };
    }

    await prisma.$transaction(async (tx) => {
      await tx.truck.update({
        where: { id: BigInt(truckId) },
        data: {
          current_mileage: currentMileage,
        },
      });
      // สร้างรายการบำรุงรักษาพื้นฐาน
      const maintenanceDefaults = [
        { type: "น้ำมันเครื่อง", interval: 20000 },
        { type: "น้ำมันเกียร์", interval: 70000 },
        { type: "น้ำมันเฟืองท้าย", interval: 60000 },
      ];

      for (const item of maintenanceDefaults) {
        await tx.maintenancelog.create({
          data: {
            truck_id: BigInt(truckId),
            type: item.type,
            service_mileage: currentMileage,
            next_service_at: currentMileage + item.interval,
            description: "เริ่มต้นระบบ",
          },
        });
      }
    });

    revalidatePath("/dashboard/maintenance");
    return { success: true, message: "เพิ่มทะเบียนรถเรียบร้อยแล้ว" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "เกิดข้อผิดพลาดในการเพิ่มทะเบียนรถ" };
  }
}
