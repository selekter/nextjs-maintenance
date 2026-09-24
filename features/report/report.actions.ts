"use server";

import { reportSchema } from "@/lib/zod";
import { reportService } from "./report.services";
import z from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ActionState } from "@/components/Type";
import { maintenanceService } from "../maintenanceStatus/maintenanceStatus.services";
import { completedRepairSchema } from "./report.schemas";
import { prisma } from "@/lib/prisma";
import { BusinessError } from "@/components/Class";

//! ดึงการแจ้งซ่อมที่รอซ่อม
export async function getReports() {
  return await reportService.getReportPending();
}

export async function getGroupedRepairHistory(
  page: number = 1,
  limit: number = 10,
  query: string = "",
) {
  try {
    return await reportService.getGroupedHistory(page, limit, query);
  } catch (error) {
    console.error("Error fetching history in query layer", error);
    return { data: [], totalPages: 0 };
  }
}

//! สร้าง Report
export async function createReport(prevState: any, formData: FormData) {
  const rawData = {
    truckId: formData.get("truckId"),
    maintenaces: formData.getAll("maintenance"),
  };

  const validated = reportSchema.safeParse(rawData);
  if (!validated.success) {
    return {
      success: false,
      message: "",
      errors: z.flattenError(validated.error).fieldErrors,
    };
  }

  const { truckId, maintenaces } = validated.data;

  try {
    await reportService.createNewReport(truckId, maintenaces);
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล" };
  }

  revalidatePath("/dashboard/reports");
  redirect("/dashboard/reports");
}

//! ดึงรายงานจาก ID
export async function getReportsById(id: string) {
  return reportService.getReportById(parseInt(id));
}

// อัปเดทการซ่อม
export async function completedRepairAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const rawData = {
    repairedMileage: formData.get("repaired_mileage"),
    description: formData.get("description"),

    // รับค่าประเภทรายการที่ซ่อม (รองรับทั้ง Array และ String แยกด้วย comma)
    reportId: formData.getAll("reportId"),
  };

  const validationFields = completedRepairSchema.safeParse(rawData);

  if (!validationFields.success) {
    return {
      errors: z.flattenError(validationFields.error).fieldErrors,
    };
  }

  const { reportId, repairedMileage, description } = validationFields.data;

  try {
    await reportService.completedRepairService({
      reportId,
      repairedMileage,
      description,
    });

    revalidatePath("/dashboard/reports");
    return { success: true, message: "บันทึกการซ่อมบำรุงเรียบร้อยแล้ว" };
  } catch (err) {
    console.error("completedRepairAction error:", err);

    if (err instanceof BusinessError) {
      return { success: false, message: err.message };
    }
    return {
      success: false,
      message: "เกิดข้อผิดพลาดในการอัปเดตข้อมูล กรุณาลองใหม่อีกครั้ง",
    };
  }
}
