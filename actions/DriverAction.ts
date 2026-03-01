"use server";

import { db } from "@/libs/db";
import { RowDataPacket } from "mysql2";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreateDriverState {
  message: string;
  license_plate: string | null;
  driver_name: string | null;
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
  const license_plate = formData.get("licensePlate") as string;
  const driver_name = formData.get("driverName") as string;

  if (!license_plate || !driver_name) {
    return {
      message: "กรุณากรองข้อมูลให้ครบถ้วยด้วยครับ",
      license_plate,
      driver_name,
    };
  }

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
    connection.rollback();
    return {
      message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
      license_plate,
      driver_name,
    };
  } finally {
    connection.release();
  }

  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
}
