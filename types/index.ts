import { Prisma, Truck, TireBrand } from "@/generated/prisma/client";

type RepairItem = {
  repair: string;
  description?: string | null;
};

export interface GroupedReport {
  id: number;
  license_plate: string;
  mileage: number;
  repairs: RepairItem[];
}

export interface TireGrouped {
  date: string;
  license_plate: string;
  mileage: number;
}

export type ReportProps = Prisma.TruckGetPayload<{
  select: {
    id: true;
    license_plate: true;
    reports: {
      select: {
        repair: true;
      };
    };
  };
}>;

export type TruckProps = Prisma.TruckGetPayload<{
  select: {
    id: true;
    license_plate: true;
    current_mileage: true;
    driver: {
      select: {
        name: true;
      };
    };
  };
}>;

export type TireBrandProps = TireBrand;
