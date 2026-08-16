"use server";

import { revalidatePath } from "next/cache";
import { CreateTireBrandState, tireBrandSchema } from "./tire.schemas";
import { tireServices } from "./tire.services";

export async function getTires() {
  try {
    return await tireServices.getTireChangeHistoryList();
  } catch (error) {
    console.error("Error fetching tire records in query layer:", error);
    return [];
  }
}

export async function getTireBrands() {
  return await tireServices.getTireBrandsList();
}

export async function createTireBrand(
  name: string,
): Promise<CreateTireBrandState> {
  const validation = tireBrandSchema.safeParse({ name });

  if (!validation.success) {
    return {
      success: false,
      message: validation.error.message || "ข้อมูลไม่ถูกต้อง",
    };
  }

  try {
    const result = await tireServices.createTireBrand(validation.data.name);
    revalidatePath("/dashboard/tires");

    return { success: true, message: "เพิ่มชื่อยี่ห้อยางเรียบร้อย" };
  } catch (err: any) {
    if (err.message === "BRAND_NAME_EXISTS") {
      return { success: false, message: "ยี่ห้อนี้มีในระบบแล้ว" };
    }

    return { success: false, message: "เกิดข้อผิดพลาดในการบันทึกยี่ห้อยาง" };
  }
}
