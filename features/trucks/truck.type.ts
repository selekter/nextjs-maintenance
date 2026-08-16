import { Prisma } from "@/generated/prisma/client";

export type TruckProp = Prisma.TruckGetPayload<{
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
