import { DbClient } from "@/components/Type";
import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export interface CreateMaintenanceStatusInput {
  type: string;
  service_mileage?: number;
  next_service_at: number;
}

export interface CreateTruckData {
  license_plate: string;
  current_mileage: number;
  driver_id?: number | null;
  maintenanceStatuses: CreateMaintenanceStatusInput[];
}

export const truckRepository = {
  async findAllTrucks() {
    return prisma.truck.findMany();
  },

  async findAllTrucksAndDriver() {
    return prisma.truck.findMany({
      select: {
        id: true,
        license_plate: true,
        current_mileage: true,
        driver: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        license_plate: "asc",
      },
    });
  },

  async findByLicensePlate(licensePlate: string) {
    return await prisma.truck.findFirst({
      where: { license_plate: licensePlate },
    });
  },

  async findTrucksAndStatus() {
    return await prisma.truck.findMany({
      orderBy: {
        license_plate: "asc",
      },
      include: {
        MaintenanceStatuses: {
          orderBy: {
            id: "asc",
          },
        },
      },
    });
  },

  // ดึงรถบรรทุกจาก ID
  async findTruckById(truckId: number, db: DbClient = prisma) {
    return await db.truck.findUnique({
      where: {
        id: truckId,
      },
      include: {
        MaintenanceStatuses: true,
      },
    });
  },

  // ดึงรถบรรทุกจาก ID และ Status
  async findTruckByIdAndStatus(truckId: number, db: DbClient = prisma) {
    return await db.truck.findUnique({
      where: {
        id: truckId,
      },
      include: {
        MaintenanceStatuses: true,
      },
    });
  },

  async createWithDefaultMaintenance(
    data: {
      license_plate: string;
      current_mileage: number;
      driver_id?: number | null;
    },
    db: DbClient = prisma,
  ) {
    return await db.truck.create({ data });
  },

  async updateMileage(id: number, mileage: number, db: DbClient = prisma) {
    return await db.truck.update({
      where: {
        id,
      },
      data: {
        current_mileage: mileage,
      },
    });
  },

  async updateTruckMileage(
    truckId: number,
    mileage: number,
    db: DbClient = prisma,
  ) {
    return await db.truck.update({
      where: {
        id: truckId,
      },
      data: {
        current_mileage: mileage,
      },
    });
  },
};
