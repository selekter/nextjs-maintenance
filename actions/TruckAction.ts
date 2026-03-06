"use server";

import { db } from "@/libs/db";
import { TruckProps } from "@/types";
import { RowDataPacket } from "mysql2";

//! --- ดึงทะเบียนทั้งหมด ---
export async function getTrucks() {
  const [trucks] = await db.query<TruckProps[] & RowDataPacket[]>(
    "SELECT * FROM license_plates ORDER BY number_plate",
  );

  return trucks;
}

export async function createTruck(
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> {
  const truck = formData.get("numberPlate");

  if (!truck) {
    return { message: "error" };
  }

  // try {
  //   await db.execute("INSERT INTO ")
  // }

  return { message: "success" };
}
