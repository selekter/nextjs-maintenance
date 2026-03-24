"use server";

import { db } from "@/libs/db";
import { prisma } from "@/libs/prisma";
import { reportEditSchema, reportSchema } from "@/libs/zod";
import { GroupedReport, ReportProps, TruckProps } from "@/types";
import { RowDataPacket } from "mysql2";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

//! --- ดึง Report ที่แจ้งซ่อมมาแสดง ---
export async function getReports() {
  try {
    const reports = await prisma.truck.findMany({
      where: {
        reports: {
          some: { status: 0 },
        },
      },
      select: {
        id: true,
        number_plate: true,
        reports: {
          where: { status: 0 },
          select: {
            repair: true,
          },
        },
      },
      orderBy: { number_plate: "asc" },
    });

    return reports.map((truck) => ({
      id: truck.id.toString(),
      license_plate: truck.number_plate,
      repairs: truck.reports.map((r) => ({
        repair: r.repair,
      })),
    }));
  } catch (error) {
    console.error("Error feching trucks with reports:", error);
  }
}

//! --- ดึง Report ที่ทำการซ่อมเสร็จแล้วมาแสดง ---
export async function getGroupedRepairHistory(
  page: number = 1,
  limit: number = 10,
  query: string = "",
) {
  // คำนวณ Offset (จุดเริ่มต้น)
  const offset = (page - 1) * limit;

  const searchWords = query.trim().split(/\s+/);

  try {
    const report = await prisma.report.findMany({
      where: {
        status: 1,
        AND: searchWords.map((word) => ({
          OR: [
            { trucks: { number_plate: { contains: word } } },
            { repair: { contains: word } },
          ],
        })),
      },
      include: {
        trucks: {
          select: { number_plate: true },
        },
      },
      orderBy: [{ updated_at: "desc" }],
      take: limit,
      skip: offset,
    });

    const totalCount = await prisma.report.count({
      where: {
        status: 1,
        AND: searchWords.map((word) => ({
          OR: [
            { trucks: { number_plate: { contains: word } } },
            { repair: { contains: word } },
          ],
        })),
      },
    });

    const totalPages = Math.ceil(totalCount / limit);

    const grouped = report.reduce((acc: any, item) => {
      const dateKey = item.updated_at
        ? new Date(item.updated_at).toLocaleDateString("th-TH")
        : "ไม่ระบุวันที่";

      const groupKey = `${dateKey}_${item.license_plate_id}`;

      if (!acc[groupKey]) {
        acc[groupKey] = {
          date: item.updated_at?.toString(),
          license_plate_id: item.license_plate_id.toString(),
          number_plate: item.trucks?.number_plate,
          repairs: [],
        };
      }

      acc[groupKey].repairs.push({
        repair: item.repair,
        description: item.description,
      });

      return acc;
    }, {});

    return {
      data: Object.values(grouped),
      totalPages: totalPages,
    };
  } catch (error) {
    console.error("Error fetching history:", error);
    return { data: [], totalPages: 0 };
  }

  // const connection = await db.getConnection();

  // try {
  //   const [rows]: any = await connection.execute<ReportProps[]>(
  //     `
  //   SELECT
  //     report_repairs.license_plate_id,
  //     report_repairs.updated_at,
  //     report_repairs.repair,
  //     report_repairs.description,
  //     license_plates.number_plate
  //   FROM report_repairs
  //   INNER JOIN license_plates
  //   ON report_repairs.license_plate_id = license_plates.id
  //   WHERE status = 1
  //   AND (license_plates.number_plate LIKE ? OR report_repairs.repair LIKE ?)
  //   ORDER BY updated_at DESC, license_plate_id
  //   LIMIT ? OFFSET ?
  // `,
  //     [searchTerm, searchTerm, limit, offset],
  //   );

  //   // 2. นับจำนวนรายการทั้งหมดเพื่อหาจำนวนหน้าทั้งหมด (Total Pages)
  //   const [countResult]: any = await connection.execute(
  //     `
  //     SELECT COUNT(*) as total
  //     FROM report_repairs
  //     INNER JOIN license_plates ON report_repairs.license_plate_id = license_plates.id
  //     WHERE status = 1
  //     AND (license_plates.number_plate LIKE ? OR report_repairs.repair LIKE ?)
  //     `,
  //     [searchTerm, searchTerm],
  //   );

  //   const totalPages = Math.ceil(countResult[0].total / limit);

  //   const grouped = rows.reduce((acc: any, item: any) => {
  //     const dateKey = new Date(item.updated_at).toISOString().split("T")[0];

  //     const groupKey = `${dateKey}_${item.license_plate_id}`;

  //     if (!acc[groupKey]) {
  //       acc[groupKey] = {
  //         date: dateKey,
  //         license_plate_id: item.license_plate_id,
  //         number_plate: item.number_plate,
  //         repairs: [],
  //       };
  //     }

  //     acc[groupKey].repairs.push({
  //       repair: item.repair,
  //       description: item.description,
  //     });

  //     return acc;
  //   }, {});

  //   return { data: Object.values(grouped), totalPages: totalPages };
  // } finally {
  //   connection.release();
  // }
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

  try {
    await prisma.report.createMany({
      data: repairs.map((repair) => ({
        license_plate_id: BigInt(truckId),
        repair: repair,
        status: 0,
      })),
    });
  } catch (error) {
    console.error("Database Error:", error);
    return { message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" };
  }

  revalidatePath("/dashboard/reports");
  redirect("/dashboard/reports");
}

export async function getReportsById(id: string) {
  const report = await prisma.report.findMany({
    where: {
      license_plate_id: BigInt(id),
      status: 0,
    },
  });

  if (report.length === 0) {
    return null;
  }

  return report;
}

//! --- อัพเดทการซ่อม ---
export async function updateReport(prevState: any, formData: FormData) {
  console.log(formData);

  const rawData = { selectedRepairIds: formData.getAll("repair") };
  const description = formData.get("description") as string;

  const validated = reportEditSchema.safeParse(rawData);

  if (!validated.success) {
    // ส่ง Mapper function (issue) => issue.message เข้าไป
    // เพื่อบอก Zod ว่าเราต้องการดึงแค่ข้อความ string ออกมา
    const { fieldErrors } = validated.error.flatten((issue) => issue.message);

    return {
      // เข้าถึง fieldErrors.selectedRepairIds ได้แบบ Type-safe
      message: fieldErrors.selectedRepairIds?.[0] || "ข้อมูลไม่ถูกต้อง",
    };
  }

  const { selectedRepairIds } = validated.data;

  try {
    await prisma.report.updateMany({
      where: {
        id: {
          in: selectedRepairIds.map((id) => BigInt(id)),
        },
      },
      data: {
        status: 1,
        description: description,
      },
    });
  } catch (error) {
    console.error(error);
    return { message: "เกิดข้อผิดพลาดในการบันทึก" };
  }

  revalidatePath("/dashboard/reports");
  redirect("/dashboard/reports");
}

export async function deleteReport(ids: string[]) {
  if (!ids || ids.length === 0) return { message: "กรุณาเลือกรายการที่จะลบ" };

  try {
    await prisma.report.deleteMany({
      where: {
        id: {
          in: ids.map((id) => BigInt(id)),
        },
      },
    });
  } catch (error) {
    console.error(error);
    return { message: "เกิดข้อผิดพลาดในการบันทึก" };
  }

  revalidatePath("/dashboard/reports");
  redirect("/dashboard/reports");
}
