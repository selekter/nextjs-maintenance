"use server";

import { db } from "@/libs/db";
import { RowDataPacket } from "mysql2";
import { redirect } from "next/navigation";

interface CreateDriverState {
  message: string;
  license_plate: string | null;
  driver_name: string | null;
}

export async function getDrivers() {
  const [rows] = await db.query<RowDataPacket[]>(
    "SELECT id, name, license_plate FROM drivers ORDER BY license_plate ASC",
  );

  return rows;
}
export async function CreateDriver(
  prevState: CreateDriverState,
  formData: FormData,
): Promise<CreateDriverState> {
  const license_plate = formData.get("licensePlate") as string;
  const driver_name = formData.get("driverName") as string;

  if (!license_plate || !driver_name) {
    return {
      message: "กรุณากรองข้อมูลให้ครบถ้วยด้วยครับ",
      license_plate,
      driver_name,
    };
  }

  try {
    await db.execute(
      "INSERT INTO drivers(name,license_plate,created_at,updated_at) VALUES(?,?,NOW(),NOW())",
      [driver_name, license_plate],
    );
  } catch (error) {
    console.error(error);
    return {
      message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
      license_plate,
      driver_name,
    };
  }

  redirect("/dashboard/drivers");
}
