import { prisma } from "@/lib/prisma";

export const driverRepository = {
  async assignDriverToTruck(driverName: string, truckId: number) {
    return await prisma.$transaction(async (tx) => {
      const driver = await tx.driver.upsert({
        where: { name: driverName },
        update: {},
        create: { name: driverName },
      });

      const updatedTruck = await tx.truck.update({
        where: { id: truckId },
        data: {
          driver_id: driver.id,
        },
      });

      return { driver, updatedTruck };
    });
  },
};
