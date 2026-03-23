"use server";

import { db } from "@/libs/db";
import { prisma } from "@/libs/prisma";
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

  console.log(formData.get("license_plate"));

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
      `UPDATE license_plates
      SET driver_id = ?
      WHERE id = ?`,
      [driver_id, license_plate],
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
