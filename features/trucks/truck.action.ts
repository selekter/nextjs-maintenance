"use server";

import { truckService } from "./truck.services";
import z from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { truckSchema } from "./truck.schemas";

export type ActionState = {
  success?: boolean;
  message?: string;
};

export type FormState = {
  errors?: {
    license_plate?: string[];
    current_mileage?: string[];
  };
  message?: string;
};

export async function getTrucks() {
  return truckService.getTrucks();
}

//! ดึงทะเบียนและเลขไมล์ของน้ำมันต่างๆ
export async function getMaintenanceStatus() {
  return await truckService.getTrucksAndStatus();
}

//! --- เพิ่มทะเบียนรถ ---
export async function createTruck(
  prevState: any,
  formData: FormData,
): Promise<FormState> {
  const rawData = {
    license_plate: formData.get("license_plate"),
    current_mileage: formData.get("current_mileage"),
  };

  const validationFields = truckSchema.safeParse(rawData);

  if (!validationFields.success) {
    return {
      errors: z.flattenError(validationFields.error).fieldErrors,
    };
  }

  const { license_plate, current_mileage } = validationFields.data;

  try {
    await truckService.registerNewTruck(license_plate, current_mileage);

    revalidatePath("/dashboard/trucks");
  } catch (error: any) {
    if (error.message === "LICENSE_PLATE_EXISTS") {
      return { errors: { license_plate: ["เลขทะเบียนมีในระบบแล้วครับ"] } };
    }

    console.error(error);
    return { message: "เกิดข้อผิดพลาดบางประการ" };
  }

  redirect("/dashboard/trucks");
}

export async function updateTruckMileage(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const truckId = Number(formData.get("truckId"));
  const newMileage = Number(formData.get("mileage"));

  if (!truckId || isNaN(newMileage)) {
    return { success: false, message: "ข้อมูลไม่ถูกต้อง" };
  }

  try {
    await truckService.updateMileageAndCheckMaintenance(truckId, newMileage);

    revalidatePath("/dashboard/reports");
    revalidatePath("/dashboard/maintenance");

    return { success: true, message: "อัปเดทเลขไมล์เรียบร้อย" };
  } catch (err: any) {
    if (err.message === "TRUCK_NOT_FOUND") {
      return { success: false, message: "ไม่พบข้อมูลรถในระบบ" };
    }

    if (err.message?.startsWith("MILEAGE_LESS_THAN_CURRENT")) {
      const currentMileage = err.message.split(":")[1];
      return {
        success: false,
        message: `เลขไมล์ใหม่ (${newMileage}) ห้ามน้อยกว่าเลขไมล์เดิม (${currentMileage})`,
      };
    }

    console.error("Update Mileage Error:", err);
    return { success: false, message: "เกิดข้อผิดพลาดในการอัปเดตเลขไมล์" };
  }
}
