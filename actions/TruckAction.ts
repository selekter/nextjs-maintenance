"use server";

import { db } from "@/libs/db";
import { truckSchema } from "@/libs/zod";
import { TruckProps } from "@/types";
import { RowDataPacket } from "mysql2";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

//! --- ดึงทะเบียนทั้งหมด ---
export async function getTrucks() {
  const [trucks] = await db.query<TruckProps[] & RowDataPacket[]>(
    "SELECT * FROM license_plates ORDER BY number_plate",
  );

  return trucks;
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

  const [existing]: any = await db.execute(
    "SELECT id FROM license_plates WHERE number_plate = ?",
    [license_plate],
  );

  if (existing.length > 0) {
    return { errors: { license_plate: ["เลขทะเบียนนี้มีในระบบแล้วครับ"] } };
  }

  try {
    await db.execute(
      "INSERT INTO license_plates(number_plate, created_at, updated_at) VALUES(?,NOW(),NOW())",
      [license_plate],
    );
  } catch (error) {
    return { messages: "เกิดข้อผิดพลาดบางประการ" };
  }

  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
}
