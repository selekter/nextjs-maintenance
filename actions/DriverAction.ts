"use server";

import { prisma } from "@/libs/prisma";
import { driverSchema } from "@/libs/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

interface CreateDriverState {
  messages?: {
    license_plate?: string[];
    driver_name?: string[];
  };
  formError?: string;
  license_plate?: string | null;
  driver_name?: string | null;
}

//! --- ดึงพนักงานขับรถ ---
export async function getDrivers() {
  try {
    const rows = await prisma.truck.findMany({
      include: {
        drivers: true,
      },
      orderBy: {
        number_plate: "asc",
      },
    });

    return rows;
  } catch (error) {
    console.error("Error feching trucks with drivers:", error);
    return [];
  }
}

//! --- เพิ่มพนักงานขับรถ ---
export async function CreateDriver(
  prevState: CreateDriverState,
  formData: FormData,
): Promise<CreateDriverState> {
  const rawData = {
    license_plate: String(formData.get("license_plate") ?? ""),
    driver_name: String(formData.get("driver_name") ?? ""),
  };

  const validationFields = driverSchema.safeParse(rawData);

  if (!validationFields.success) {
    return {
      messages: z.flattenError(validationFields.error).fieldErrors,
      license_plate: rawData.license_plate,
      driver_name: rawData.driver_name,
    };
  }
  const { driver_name, license_plate } = validationFields.data;

  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. หาหรือสร้าง Driver ในคำสั่งเดียว (Upsert)
      // หมายเหตุ: ชื่อ Driver ควรจะทำ Unique Constraint ใน Schema ไว้ด้วย
      const driver = await tx.driver.upsert({
        where: { name: driver_name },
        update: {},
        create: { name: driver_name },
      });
      // 2. อัปเดต Truck โดยใช้ ID ที่ได้จาก driver (ไม่ว่าจะเพิ่งสร้างหรือมีอยู่เดิม)
      await tx.truck.update({
        where: { id: Number(license_plate) },
        data: {
          driver_id: driver.id,
        },
      });
    });
  } catch (error) {
    console.error(error);
    return {
      formError: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
      license_plate,
      driver_name,
    };
  }

  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
}
