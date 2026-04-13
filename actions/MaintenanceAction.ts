// actions/MaintenanceAction.ts
"use server";
import { prisma } from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export async function getMaintenanceStatus() {
  const reports = await prisma.maintenanceLog.findMany({
    include: {
      truck: {
        select: { id: true, number_plate: true, current_mileage: true },
      },
    },
    orderBy: { created_at: "desc" },
  });

  // จัดกลุ่มด้วย Reduce
  const grouped = reports.reduce((acc, log) => {
    const plate = log.truck.number_plate;
    if (!acc[plate]) {
      acc[plate] = {
        id: log.truck.id,
        number_plate: plate,
        current_mileage: log.truck.current_mileage,
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

export async function updateMaintenance(formData: FormData) {
  const truckId = formData.get("truckId") as string;
  const type = formData.get("type") as string;
  const serviceMileage = parseInt(formData.get("serviceMileage") as string);
  const interval = parseInt(formData.get("interval") as string);

  try {
    // ใช้ Transaction เพื่อความปลอดภัยของข้อมูล
    await prisma.$transaction([
      // 1. บันทึกประวัติการเปลี่ยน
      prisma.maintenanceLog.create({
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
  } catch (error) {
    console.error(error);
  }
}
