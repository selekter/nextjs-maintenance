import { DbClient } from "@/components/Type";
import { prisma } from "@/lib/prisma";

export const maintenanceStatusRepository = {
  async createMany(
    statuses: Array<{
      truck_id: number;
      type: string;
      service_mileage: number;
      next_service_at: number;
    }>,
    db: DbClient = prisma,
  ) {
    return await db.truckMaintenanceStatus.createMany({ data: statuses });
  },

  // อัพเดทเลขไมล์สำหรับการซ่อมเสร็จแล้ว
  async updateServiceMileage(
    truckId: number,
    type: string,
    serviceMileage: number,
    nextServiceAt: number,
    db: DbClient = prisma,
  ) {
    return await db.truckMaintenanceStatus.update({
      where: {
        truck_id_type: {
          truck_id: truckId,
          type: type,
        },
      },
      data: {
        service_mileage: serviceMileage,
        next_service_at: nextServiceAt,
      },
    });
  },

  // ค้นหา Maintenance Status
  async findMaintenanceStatus(
    truckId: number,
    type: string,
    db: DbClient = prisma,
  ) {
    return await db.truckMaintenanceStatus.findUnique({
      where: {
        truck_id_type: {
          truck_id: truckId,
          type,
        },
      },
    });
  },

  // อัปเดต Maintenance Status
  async updateMainTenanceStatus(
    id: number,
    serviceMileage: number,
    nextServiceAt: number,
    db: DbClient = prisma,
  ) {
    return await db.truckMaintenanceStatus.update({
      where: {
        id,
      },
      data: {
        service_mileage: serviceMileage,
        next_service_at: nextServiceAt,
      },
    });
  },
};
