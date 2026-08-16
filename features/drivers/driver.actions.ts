"use server";

import { driverSchema } from "@/lib/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";
import { CreateDriverState } from "./driver.schemas";
import { driverService } from "./driver.services";

//! --- เพิ่มพนักงานขับรถ ---
export async function CreateDriver(
  prevState: CreateDriverState,
  formData: FormData,
): Promise<CreateDriverState> {
  const rawData = {
    license_plate: String(formData.get("license_plate") ?? ""),
    driver_name: String(formData.get("driver_name") ?? ""),
  };

  const validationFields = driverSchema.safeParse(rawData);

  if (!validationFields.success) {
    return {
      messages: z.flattenError(validationFields.error).fieldErrors,
      license_plate: rawData.license_plate,
      driver_name: rawData.driver_name,
    };
  }
  const { driver_name, license_plate } = validationFields.data;

  try {
    await driverService.linkDriverAndTruck(driver_name, license_plate);

    revalidatePath("/dashboard/drivers");
  } catch (error: any) {
    console.error(error);

    const errorMessage =
      error.message === "INVALID_TRUCK_ID"
        ? "ทะเบียนรถไม่ถูกต้อง"
        : "เกิดข้อผิดพลาดในการบันทึกข้อมูล";
    return {
      formError: errorMessage,
      license_plate,
      driver_name,
    };
  }

  redirect("/dashboard/drivers");
}
