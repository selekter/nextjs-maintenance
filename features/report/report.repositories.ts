import { DbClient } from "@/components/Type";
import { prisma } from "@/lib/prisma";

export const reportRepository = {
  // ดึงรายการที่รอซ่อม
  async findReportPending() {
    return await prisma.truck.findMany({
      where: {
        reports: {
          some: { status: 0 },
        },
      },
      select: {
        id: true,
        license_plate: true,
        reports: {
          where: { status: 0 },
          select: {
            repair: true,
          },
        },
      },
    });
  },

  // ดึงทะเบียนที่มีการแจ้งซ่อมว่ามีอยู่แล้วไหม
  async findPendingByRepair(
    truckId: number,
    repairName: string,
    db: DbClient = prisma,
  ) {
    return await db.report.findFirst({
      where: {
        truck_id: truckId,
        repair: { contains: repairName },
        status: 0,
      },
    });
  },

  // สร้างแจ้งซ่อมใหม่
  async createReport(
    data: {
      truck_id: number;
      repair: string;
      status: number;
    },
    db: DbClient = prisma,
  ) {
    return await db.report.create({ data });
  },

  // อัพเดทการซ่อเสร็จเรียบร้อย
  async updateStatusToCompleted(reportId: number, db: DbClient = prisma) {
    return await db.report.update({
      where: {
        id: reportId,
      },
      data: {
        status: 1,
      },
    });
  },

  // สร้างตัวกรองการค้นหาจากคำค้นหลายๆ คำ (Multi-word search)
  buildSearchWhereClause(searchWords: string[]) {
    if (
      searchWords.length === 0 ||
      (searchWords.length === 1 && searchWords[0] === "")
    ) {
      return { status: 1 };
    }

    return {
      status: 1,
      AND: searchWords.map((word) => ({
        OR: [
          { truck: { license_plate: { contains: word } } },
          { repair: { contains: word } },
        ],
      })),
    };
  },

  // ดึงประวัติการซ่อมแบบจำกัดหน้า (Pagination)
  async findRepairHistory({
    searchWords,
    limit,
    offset,
  }: {
    searchWords: string[];
    limit: number;
    offset: number;
  }) {
    const where = this.buildSearchWhereClause(searchWords);

    return await prisma.report.findMany({
      where,
      include: {
        truck: {
          select: { license_plate: true },
        },
      },
      orderBy: [{ updated_at: "desc" }],
      take: limit,
      skip: offset,
    });
  },

  // นับจำนวนรีพอร์ตทั้งหมดที่ตรงตามเงื่อนไขเพื่อใช้หาจำนวนหน้าสูงสุด
  async countRepairHistory(searchWords: string[]) {
    const where = this.buildSearchWhereClause(searchWords);
    return await prisma.report.count({ where });
  },

  async createManyReports(truckId: number, repairs: string[]) {
    return await prisma.report.createMany({
      data: repairs.map((repair) => ({
        truck_id: truckId,
        repair: repair,
        status: 0,
      })),
    });
  },

  async findActiveReportsByTruckId(truckId: number) {
    return await prisma.report.findMany({
      select: {
        id: true,
        repair: true,
        truck: {
          select: {
            current_mileage: true,
          },
        },
      },
      where: {
        truck_id: truckId,
        status: 0,
      },
      orderBy: {
        id: "asc",
      },
    });
  },

  // ค้นหา report ด้วย ID
  async findReportsByIds(reportIds: number[], db: DbClient = prisma) {
    return await db.report.findMany({
      where: {
        id: {
          in: reportIds,
        },
      },
    });
  },

  async updateReportCompleted(
    reportId: number,
    repairedMileage: number,
    description?: string,
    db: DbClient = prisma,
  ) {
    return await db.report.update({
      where: {
        id: reportId,
      },
      data: {
        status: 1,
        mileage: repairedMileage,
        ...(description ? { description } : {}),
      },
    });
  },
};
