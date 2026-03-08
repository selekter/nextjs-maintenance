"use server";

import { db } from "@/libs/db";
import { truckSchema } from "@/libs/zod";
import { TruckProps } from "@/types";
import { RowDataPacket } from "mysql2";
import z from "zod";

//! --- ดึงทะเบียนทั้งหมด ---
export async function getTrucks() {
  const [trucks] = await db.query<TruckProps[] & RowDataPacket[]>(
    "SELECT * FROM license_plates ORDER BY number_plate",
  );

  return trucks;
}

export async function createTruck(prevState: any, formData: FormData) {
  const rawData = {
    license_plate: formData.get("license_plate"),
  };

  const validationFields = truckSchema.safeParse(rawData);

  if (!validationFields.success) {
    return { messages: z.flattenError(validationFields.error).fieldErrors };
  }

  return { message: "success" };
}
