"use server";

import { db } from "@/libs/db";
import { RowDataPacket } from "mysql2";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface ReportProps extends RowDataPacket {
  id: number;
  license_plate: string;
  repairs: string;
}

interface GroupedReport {
  id: number;
  license_plate: string;
  items: string[];
}

export async function getReports() {
  const [reports] = await db.query<ReportProps[]>(
    `SELECT
    reports.id, reports.truck_id, reports.repair, drivers.license_plate
    FROM reports
    INNER JOIN drivers
    ON reports.truck_id = drivers.id
    WHERE is_completed = 0
    ORDER BY drivers.license_plate`,
  );

  const groupedRepairs = reports.reduce<GroupedReport[]>((acc, current) => {
    // หาว่ามีข้อมูล ป้ายทะเบียน นี้อยู่ในหมวดหมู่ที่จัดไว้หรือยัง
    const existingRepair = acc.find(
      (item) => item.license_plate === current.license_plate,
    );

    if (existingRepair) {
      // ถ้ามีแล้ว ให้ตรวจสอบก่อนว่ามี current.repair ส่งมาจริงไหม แล้วค่อย push
      if (current.repair) {
        existingRepair.items.push(current.repair);
      }
    } else {
      // ถ้ายังไม่มี ให้สร้าง Object ใหม่ที่มีโครงสร้าง items เป็น Array เสมอ
      acc.push({
        id: current.truck_id,
        license_plate: current.license_plate,
        // ถ้า current.repair เป็น null/undefined ให้เป็น Array ว่างไว้ก่อนเพื่อป้องกัน map พัง
        items: current.repair ? [current.repair] : [],
      });
    }

    return acc; // สำคัญมาก: ต้อง return acc กลับไปทุกรอบ
  }, []);

  return groupedRepairs;
}

export async function getReportsById(id: string) {
  const [rows] = await db.execute<RowDataPacket[]>(
    "SELECT * FROM reports WHERE truck_id = ? AND is_completed = 0",
    [id],
  );

  if (rows.length === 0) {
    return null;
  }

  return rows;
}

export async function createReport(prevState: any, formData: FormData) {
  const truckId = formData.get("truckId");

  if (!truckId) {
    return { message: "คุณไม่ได้เลือกทะเบียน" };
  }

  const maintenaces = formData
    .getAll("maintenance")
    .map((item) => item.toString().trim())
    .filter((item) => item !== "");

  if (maintenaces.length === 0) {
    return { message: "กรุณาเลือกอย่างน้อย 1 รายการ" };
  }

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    for (const item of maintenaces) {
      await connection.execute(
        "INSERT INTO reports (truck_id, repair, created_at, updated_at) VALUES(?, ?, NOW(), NOW())",
        [truckId, item],
      );
    }

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
        "UPDATE reports SET is_completed = 1 WHERE id=?",
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
