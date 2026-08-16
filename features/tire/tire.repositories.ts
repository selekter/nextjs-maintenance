import { prisma } from "@/lib/prisma";

export const tireRepository = {
  async findAllTireChanges() {
    return await prisma.tireChangeHistory.findMany({
      select: {
        id: true,
        change_date: true,
        mileage_at_change: true,
        truck: {
          select: {
            license_plate: true,
          },
        },
        tireItems: {
          select: {
            tire_code: true,
            position: true,
            brand: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        change_date: "desc",
      },
    });
  },

  async findAllBrand() {
    return await prisma.tireBrand.findMany();
  },

  async createBrand(name: string) {
    return await prisma.tireBrand.create({
      data: {
        name,
      },
    });
  },
};
