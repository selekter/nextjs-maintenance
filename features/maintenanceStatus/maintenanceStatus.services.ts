import { prisma } from "@/lib/prisma";
import { reportRepository } from "../report/report.repositories";
import { maintenanceStatusRepository } from "./maintenanceStatus.Repositories";

const MAINTENANCE_INTERVALS: Record<string, number> = {
  น้ำมันเครื่อง: 20000,
  น้ำมันเกียร์: 70000,
  น้ำมันเฟืองท้าย: 60000,
};

export interface CompletedRepairDTO {
  reportId: number;
  truckId: number;
  repairTypes: string[];
  repairedMileage: number;
}

export const maintenanceService = {
  async completedRepair(dto: CompletedRepairDTO) {
    return await prisma.$transaction(async (tx) => {
      // 1. อัปเดต Report เป็น ซ่อมแล้ว (status: 1)
      await reportRepository.updateStatusToCompleted(dto.reportId, tx);

      // 2. อัปเดต TruckMaintenanceStatus ของแต่ละประเภทที่เปลี่ยน
      for (const type of dto.repairTypes) {
        const interval = MAINTENANCE_INTERVALS[type] || 20000;
        const nextServiceAt = dto.repairedMileage + interval;

        await maintenanceStatusRepository.updateServiceMileage(
          dto.truckId,
          type,
          dto.repairedMileage,
          nextServiceAt,
          tx,
        );
      }

      return true;
    });
  },
};
