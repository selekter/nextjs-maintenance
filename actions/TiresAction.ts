"use server";

import { prisma } from "@/libs/prisma";
import { revalidatePath } from "next/cache";

export async function getTires() {
  const tires = await prisma.tires.findMany({
    include: {
      truck: {
        select: {
          number_plate: true,
        },
      },
    },
  });
  return tires;
}

export async function getTireBrands() {
  const brands = await prisma.tireBrand.findMany({
    orderBy: { name: "asc" },
  });
  return brands;
}

export async function createTireBrand(name: string) {
  try {
    const brand = await prisma.tireBrand.create({
      data: { name },
    });
    revalidatePath("/dashboard/tires");
    return { success: true, data: brand };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { success: false, error: "ยี่ห้อนี้มีในระบบแล้ว" };
    }
    console.error("Error creating tire brand:", error);
    return { success: false, error: "เกิดข้อผิดพลาดในการบันทึกยี่ห้อยาง" };
  }
}

export async function createTireChange(data: {
  truck_id: string;
  mileage_at_change: number;
  notes?: string;
  tireItems: {
    brand_id: number;
    tire_code: string;
    position: number;
  }[];
}) {
  try {
    await prisma.$transaction(async (tx) => {
      await tx.tireChangeHistory.create({
        data: {
          truck_id: BigInt(data.truck_id),
          mileage_at_change: data.mileage_at_change,
          notes: data.notes,
          tireItems: {
            create: data.tireItems.map((item) => ({
              brand_id: item.brand_id,
              tire_code: item.tire_code,
              position: item.position,
              status: "new",
            })),
          },
        },
      });
    });

    revalidatePath("/dashboard/tires");
    return { success: true };
  } catch (error) {
    console.error("Error creating tire change:", error);
    return { success: false, error: "Failed to save tire change history" };
  }
}
