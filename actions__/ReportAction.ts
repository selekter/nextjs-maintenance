"use server";

import { prisma } from "@/lib/prisma";
import { reportEditSchema, reportSchema } from "@/lib/zod";
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
        license_plate: true,
        reports: {
          where: { status: 0 },
          select: {
            repair: true,
          },
        },
      },
      orderBy: { license_plate: "asc" },
    });

    return reports;
  } catch (error) {
    console.error("Error feching trucks with reports:", error);
    return [];
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
            { truck: { license_plate: { contains: word } } },
            { repair: { contains: word } },
          ],
        })),
      },
      include: {
        truck: {
          select: { license_plate: true },
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
            { truck: { license_plate: { contains: word } } },
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

      const groupKey = `${dateKey}_${item.truck_id}`;

      if (!acc[groupKey]) {
        acc[groupKey] = {
          date: item.updated_at?.toString(),
          truck_id: item.truck_id.toString(),
          license_plate: item.truck?.license_plate,
          repairs: [],
          mileage: item.mileage,
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
        truck_id: parseInt(truckId),
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
      truck_id: parseInt(id),
      status: 0,
    },
  });

  if (report.length === 0) {
    return null;
  }

  return report.map((item) => ({
    ...item,
    id: item.id.toString(),
    license_plate_id: item.truck_id.toString(),
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
  const idsAsInt = selectedRepairIds.map((id) => parseInt(id));

  try {
    await prisma.$transaction(async (tx) => {
      // 1. ดึงข้อมูลรายการซ่อมที่กำลังจะปิดงานมาดูว่ามีอะไรบ้าง
      const reportToUpdate = await tx.report.findMany({
        where: { id: { in: idsAsInt } },
        select: { id: true, repair: true, truck_id: true },
      });

      if (reportToUpdate.length === 0) return;

      // 2. อัปเดตสถานะรายงานทั้งหมดเป็นซ่อมเสร็จ (status: 1)
      await tx.report.updateMany({
        where: {
          id: {
            in: idsAsInt,
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

      // เก็บ truck_id ทั้งหมดเพื่อนำไปอัปเดตเลขไมล์ทีเดียว
      const updatedTruckIds = new Set<number>();

      for (const report of reportToUpdate) {
        for (const rule of maintenaceRules) {
          if (report.repair.includes(rule.key)) {
            await tx.truckMaintenanceStatus.create({
              data: {
                truck_id: report.truck_id,
                type: rule.key,
                service_mileage: currentMileage,
                next_service_at: currentMileage + rule.interval,
              },
            });

            updatedTruckIds.add(report.truck_id);

            // 4. อัปเดตเลขไมล์ล่าสุดของรถ (ทำครั้งเดียวต่อ Truck ID และอัปเดตเฉพาะเมื่อเลขไมล์ใหม่มากกว่า)
            for (const truckId of updatedTruckIds) {
              const truck = await tx.truck.findUnique({
                where: {
                  id: truckId,
                },
                select: {
                  current_mileage: true,
                },
              });

              if (truck && currentMileage > truck.current_mileage) {
                // อัปเดตเลขไมล์ล่าสุดของรถคันนั้นๆ ด้วย
                await tx.truck.update({
                  where: { id: report.truck_id },
                  data: { current_mileage: currentMileage },
                });
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error(error);
    return { message: "เกิดข้อผิดพลาดในการบันทึก" };
  }

  revalidatePath("/dashboard/reports");
  revalidatePath("/dashboard/maintenance");
  redirect("/dashboard/reports");
}

export async function addRepairAction(prevState: any, formData: FormData) {
  const truckId = formData.get("truck_id") as string;
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
        truck_id: parseInt(truckId),
        repair: r,
        status: 0,
      })),
    });
  } catch (error) {
    console.error("Database Error:", error);
    return { message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" };
  }

  revalidatePath(`/dashboard/reports/${truckId}/edit`);
  return { message: "เพิ่มรายการแจ้งซ่อมสำเร็จ", success: true };
}

export async function deleteReport(ids: string[]) {
  if (!ids || ids.length === 0) return { message: "กรุณาเลือกรายการที่จะลบ" };

  try {
    await prisma.report.deleteMany({
      where: {
        id: {
          in: ids.map((id) => parseInt(id)),
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
