import { Prisma } from "@/generated/prisma/client";
import z from "zod";

export const tireBrandSchema = z.object({
  name: z.string().trim().min(1, "กรุณากรอกชื่อยี่ห้อยาง"),
});

export type TireBrandInput = z.infer<typeof tireBrandSchema>;

export interface CreateTireBrandState {
  success?: boolean;
  message?: string;
  errors?: {
    name?: string[];
  };
  formError?: string;
  data?: {
    id: number;
    name: string;
  };
}

export type TireHistory = Prisma.TireChangeHistoryGetPayload<{
  select: {
    id: true;
    change_date: true;
    mileage_at_change: true;
    truck: {
      select: {
        license_plate: true;
      };
    };
    tireItems: {
      select: {
        tire_code: true;
        position: true;
        brand: {
          select: {
            name: true;
          };
        };
      };
    };
  };
}>;
