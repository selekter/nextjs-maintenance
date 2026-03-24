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
