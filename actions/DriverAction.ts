"use server";

import { db } from "@/libs/db";
import { driverSchema } from "@/libs/zod";
import { RowDataPacket } from "mysql2";
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
  const [rows] = await db.query<RowDataPacket[]>(
    `SELECT
    *
    FROM license_plates
    INNER JOIN drivers
    ON driver_id = drivers.id
    ORDER BY number_plate
    `,
  );

  return rows;
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

  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    const [result]: any = await connection.execute(
      "INSERT INTO drivers(name,created_at,updated_at) VALUES(?,NOW(),NOW())",
      [driver_name],
    );
    const driver_id = result.insertId;

    await connection.execute(
      "INSERT INTO license_plates(number_plate, driver_id, created_at, updated_at) VALUES(?,?,NOW(),NOW())",
      [license_plate, driver_id],
    );

    await connection.commit();
  } catch (error) {
    console.error(error);
    await connection.rollback();
    return {
      formError: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
      license_plate,
      driver_name,
    };
  } finally {
    connection.release();
  }

  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
}
