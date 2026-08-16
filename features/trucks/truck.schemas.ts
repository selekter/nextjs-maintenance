import { Prisma, TireBrand, Truck } from "@/generated/prisma/client";
import z from "zod";
import { MaintenanceStatus } from "../maintenanceStatus/maintenanceStatus.schemas";

export const truckSchema = z.object({
  license_plate: z
    .string()
    .min(1, "กรุณากรองเลขทะเบียน")
    .regex(/^\d{2}-\d{4}$/, {
      message: "รูปแบบทะเบียนต้องเป็น 00-0000 เท่านั้น เช่น (70-5857)",
    }),
  current_mileage: z.coerce.number().min(0, "เลขไมล์ต้องไม่ต่ำกว่า 0"),
});

export type TruckSelect = Prisma.TruckGetPayload<{
  select: {
    id: true;
    license_plate: true;
  };
}>;

export type BrandProps = TireBrand;

export type TruckProps = Truck;

export interface TruckData {
  id: number;
  license_plate: string;
  current_mileage: number;
  updated_at: Date | string | null;
  MaintenanceStatuses: MaintenanceStatus[];
}
