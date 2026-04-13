"use server";

import { prisma } from "@/libs/prisma";
import { reportEditSchema, reportSchema } from "@/libs/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

export async function countReports() {
  try {
    const countReportPending = await prisma.truck.count({
      where: {
        reports: {
          some: {
            status: 0,
          },
        },
      },
    });

    return countReportPending;
  } catch (error) {
    console.error("Error feching trucks with reports:", error);
  }
}

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
            { truck: { number_plate: { contains: word } } },
            { repair: { contains: word } },
          ],
        })),
      },
      include: {
        truck: {
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
            { truck: { number_plate: { contains: word } } },
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
          number_plate: item.truck?.number_plate,
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

  return report.map((item) => ({
    ...item,
    id: item.id.toString(),
    license_plate_id: item.license_plate_id.toString(),
  }));
}

//! --- อัพเดทการซ่อม ---
export async function updateReport(prevState: any, formData: FormData) {
  const rawData = { selectedRepairIds: formData.getAll("repair") };
  const description = formData.get("description") as string;
  const currentMileage =
    parseInt(formData.get("current_mileage") as string) || 0; // รับเลขไมล์จากฟอร์ม

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
  const idsAsBigInt = selectedRepairIds.map((id) => BigInt(id));

  try {
    await prisma.$transaction(async (tx) => {
      // 1. ดึงข้อมูลรายการซ่อมที่กำลังจะปิดงานมาดูว่ามีอะไรบ้าง
      const reportToUpdate = await tx.report.findMany({
        where: { id: { in: idsAsBigInt } },
        select: { id: true, repair: true, license_plate_id: true },
      });

      // 2. อัปเดตสถานะรายงานทั้งหมดเป็นซ่อมเสร็จ (status: 1)
      await tx.report.updateMany({
        where: {
          id: {
            in: idsAsBigInt,
          },
        },
        data: {
          status: 1,
          description: description,
        },
      });

      // 3. เช็คคำสำคัญ (Keywords) เพื่อลงประวัติ MaintenanceLog
      const maintenaceRules = [
        { key: "น้ำมันเครื่อง", interval: 20000 },
        { key: "น้ำมันเกียร์", interval: 60000 },
        { key: "น้ำมันเฟืองท้าย", interval: 70000 },
      ];

      for (const report of reportToUpdate) {
        for (const rule of maintenaceRules) {
          if (report.repair.includes(rule.key)) {
            await tx.maintenanceLog.create({
              data: {
                truck_id: report.license_plate_id,
                type: rule.key,
                service_mileage: currentMileage,
                next_service_at: currentMileage + rule.interval,
              },
            });

            // อัปเดตเลขไมล์ล่าสุดของรถคันนั้นๆ ด้วย
            await tx.truck.update({
              where: { id: report.license_plate_id },
              data: { current_mileage: currentMileage },
            });
          }
        }
      }
    });
  } catch (error) {
    console.error(error);
    return { message: "เกิดข้อผิดพลาดในการบันทึก" };
  }

  revalidatePath("/dashboard/reports");
  redirect("/dashboard/reports");
}

export async function addRepairAction(prevState: any, formData: FormData) {
  const license_plate_id = formData.get("license_plate_id") as string;
  const maintenance = formData.getAll("maintenance") as string[];
  const repair = formData.get("repair") as string;

  const repairsToAdd = maintenance
    .map((item) => item.trim())
    .filter((item) => item !== "");

  if (repair && repair.trim() !== "") {
    repairsToAdd.push(repair.trim());
  }

  if (repairsToAdd.length === 0) {
    return { message: "กรุณาเลือกหรือกรอกรายการแจ้งซ่อม" };
  }

  try {
    await prisma.report.createMany({
      data: repairsToAdd.map((r) => ({
        license_plate_id: BigInt(license_plate_id),
        repair: r,
        status: 0,
      })),
    });
  } catch (error) {
    console.error("Database Error:", error);
    return { message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" };
  }

  revalidatePath(`/dashboard/reports/${license_plate_id}/edit`);
  return { message: "เพิ่มรายการแจ้งซ่อมสำเร็จ", success: true };
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
