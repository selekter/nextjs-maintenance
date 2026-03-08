"use server";

import { db } from "@/libs/db";
import { reportSchema } from "@/libs/zod";
import { GroupedReport, ReportProps, TruckProps } from "@/types";
import { RowDataPacket } from "mysql2";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

//! --- ดึง Report ที่แจ้งซ่อมมาแสดง ---
export async function getReports() {
  const [reports] = await db.query<ReportProps[]>(
    `SELECT
    license_plates.id,
    license_plates.number_plate,
    report_repairs.repair
    FROM report_repairs
    INNER JOIN license_plates
    ON report_repairs.license_plate_id = license_plates.id
    WHERE status = 0
    ORDER BY number_plate
    `,
  );

  const groupedRepairs = reports.reduce<Record<number, GroupedReport>>(
    (acc, item) => {
      if (!acc[item.id]) {
        acc[item.id] = {
          id: item.id,
          license_plate: item.number_plate,
          repairs: [],
        };
      }

      acc[item.id].repairs.push({ repair: item.repair });

      return acc;
    },
    {},
  );

  return Object.values(groupedRepairs).sort((a, b) =>
    a.license_plate.localeCompare(b.license_plate, "th"),
  );
}

//! --- ดึง Report ที่ทำการซ่อมเสร็จแล้วมาแสดง ---
export async function getGroupedRepairHistory(
  page: number = 1,
  limit: number = 10,
  query: string = "",
) {
  // คำนวณ Offset (จุดเริ่มต้น)
  const offset = (page - 1) * limit;
  const searchTerm = `%${query}%`; // เตรียมคำค้นหาสำหรับ LIKE

  const connection = await db.getConnection();

  try {
    const [rows]: any = await connection.execute<ReportProps[]>(
      `
    SELECT 
      report_repairs.license_plate_id,
      report_repairs.updated_at,
      report_repairs.repair,
      report_repairs.description,
      license_plates.number_plate
    FROM report_repairs
    INNER JOIN license_plates
    ON report_repairs.license_plate_id = license_plates.id
    WHERE status = 1
    AND (license_plates.number_plate LIKE ? OR report_repairs.repair LIKE ?)
    ORDER BY updated_at DESC, license_plate_id
    LIMIT ? OFFSET ?
  `,
      [searchTerm, searchTerm, limit, offset],
    );

    // 2. นับจำนวนรายการทั้งหมดเพื่อหาจำนวนหน้าทั้งหมด (Total Pages)
    const [countResult]: any = await connection.execute(
      `
      SELECT COUNT(*) as total
      FROM report_repairs
      INNER JOIN license_plates ON report_repairs.license_plate_id = license_plates.id
      WHERE status = 1
      AND (license_plates.number_plate LIKE ? OR report_repairs.repair LIKE ?)
      `,
      [searchTerm, searchTerm],
    );

    const totalPages = Math.ceil(countResult[0].total / limit);

    const grouped = rows.reduce((acc: any, item: any) => {
      const dateKey = new Date(item.updated_at).toISOString().split("T")[0];

      const groupKey = `${dateKey}_${item.license_plate_id}`;

      if (!acc[groupKey]) {
        acc[groupKey] = {
          date: dateKey,
          license_plate_id: item.license_plate_id,
          number_plate: item.number_plate,
          repairs: [],
        };
      }

      acc[groupKey].repairs.push({
        repair: item.repair,
        description: item.description,
      });

      return acc;
    }, {});

    return { data: Object.values(grouped), totalPages: totalPages };
  } finally {
    connection.release();
  }
}

//! --- ดึงป้ายทะเบียนและชื่อคนขับมา ---
export async function getLicensePlate() {
  const [trucks] = await db.query<TruckProps[]>(
    `SELECT
    license_plates.id, license_plates.number_plate, drivers.name
    FROM license_plates
    INNER JOIN drivers
    ON license_plates.driver_id = drivers.id
    ORDER BY number_plate`,
  );

  return trucks;
}

//! สร้าง Report
export async function createReport(prevState: any, formData: FormData) {
  const rawData = {
    truckId: String(formData.get("truckId") ?? ""),
    maintenaces: formData.getAll("maintenance"),
  };
  const validated = reportSchema.safeParse(rawData);
  if (!validated.success) {
    return {
      errors: z.flattenError(validated.error).fieldErrors,
    };
  }

  const { truckId, maintenaces } = validated.data;

  const repairs = maintenaces
    .map((item) => String(item.trim()))
    .filter((item) => item !== "");

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    const values = repairs.map((repair) => [truckId, repair]);
    await connection.execute(
      `INSERT INTO report_repairs
      (license_plate_id, repair, created_at, updated_at)
      VALUES ${values.map(() => "(?, ?, NOW(), NOW())").join(",")}`,
      values.flat(),
    );

    await connection.commit();
  } catch (error) {
    await connection.rollback();
    console.error("Database Error:", error);
    return { message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" };
  } finally {
    connection.release();
  }
  revalidatePath("/dashboard/reports");
  redirect("/dashboard/reports");
}

export async function getReportsById(id: string) {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT * FROM report_repairs WHERE license_plate_id = ? AND status = 0",
    [id],
  );

  if (rows.length === 0) {
    return null;
  }

  return rows;
}

//! --- อัพเดทการซ่อม ---
export async function updateReport(prevState: any, formData: FormData) {
  const selectedRepairIds = formData.getAll("repair");

  if (!selectedRepairIds || selectedRepairIds.length === 0) {
    return { message: "กรุณาเลือก 1 รายการ" };
  }

  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    for (const id of selectedRepairIds) {
      await connection.execute(
        "UPDATE report_repairs SET status = 1, updated_at = NOW() WHERE id=?",
        [id],
      );
    }
    await connection.commit();
  } catch (error) {
    await connection.rollback();
    console.error(error);
    return { message: "เกิดข้อผิดพลาดในการบันทึก" };
  } finally {
    connection.release();
  }
  revalidatePath("/dashboard/reports");
  redirect("/dashboard/reports");
}
