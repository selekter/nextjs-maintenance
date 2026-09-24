import { prisma } from "@/lib/prisma";
import { reportRepository } from "./report.repositories";
import { CompletedRepairInput, GroupedRepairItem } from "./report.schemas";
import { maintenanceStatusRepository } from "../maintenanceStatus/maintenanceStatus.Repositories";
import { truckRepository } from "../trucks/truck.repositories";
import { BusinessError } from "@/components/Class";

const MAINTENANCE_INTERVALS: Record<string, number> = {
  น้ำมันเครื่อง: 20000,
  น้ำมันเกียร์: 70000,
  น้ำมันเฟืองท้าย: 60000,
};

export const reportService = {
  async getReportPending() {
    return await reportRepository.findReportPending();
  },

  async getGroupedHistory(
    page: number = 1,
    limit: number = 10,
    query: string = "",
  ) {
    const offset = (page - 1) * limit;
    const searchWords = query.trim().split(/\s+/);

    // 1. ดึงข้อมูลและนับจำนวนพร้อมกันจาก Repository
    const [reports, totalCount] = await Promise.all([
      reportRepository.findRepairHistory({ searchWords, limit, offset }),
      reportRepository.countRepairHistory(searchWords),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    // 2. แปลงข้อมูลและจัดกลุ่ม (Data Transformation)
    const grouped = reports.reduce(
      (acc: Record<string, GroupedRepairItem>, item) => {
        const dateKey = item.updated_at
          ? new Date(item.updated_at).toLocaleDateString("th-TH")
          : "ไม่ระบุวันที่";

        const groupKey = `${dateKey}_${item.truck_id}`;

        if (!acc[groupKey]) {
          acc[groupKey] = {
            id: item.id,
            date: item.updated_at?.toString(),
            truck_id: item.truck_id.toString(),
            license_plate: item.truck?.license_plate,
            repairs: [],
            mileage: item.mileage,
          };
        }

        acc[groupKey].repairs.push({
          repair: item.repair,
          description: item.description,
        });

        return acc;
      },
      {},
    );
    return { data: Object.values(grouped), totalPages };
  },

  async createNewReport(truckId: number, rawMaintenances: unknown[]) {
    if (isNaN(truckId)) {
      throw new Error("INVALID_TRUCK_ID");
    }

    // ทำความสะอาดข้อมูล (Clean data)
    const repairs = rawMaintenances
      .map((item) => String(item).trim())
      .filter((item) => item !== "");

    if (repairs.length === 0) {
      throw new Error("NO_REPAIRS_SPECIFIED");
    }

    return await reportRepository.createManyReports(truckId, repairs);
  },

  async getReportById(truckId: number) {
    return await reportRepository.findActiveReportsByTruckId(truckId);
  },

  async completedRepairService(input: CompletedRepairInput) {
    const { reportId, repairedMileage, description } = input;

    return await prisma.$transaction(async (tx) => {
      // =====================================================
      // 1. ดึง Reports
      // =====================================================
      const reports = await reportRepository.findReportsByIds(reportId, tx);

      // =====================================================
      // 2. ตรวจสอบว่า Report ครบทุกตัว
      // =====================================================
      if (reports.length !== reportId.length) {
        throw new Error("พบรายงานบางรายการไม่ถูกต้อง");
      }

      // =====================================================
      // 3. หา Truck ID
      // =====================================================
      const truckId = reports[0]?.truck_id;
      if (!truckId) {
        throw new Error("ไม่พบข้อมูลรถ");
      }

      // =====================================================
      // 4. ตรวจสอบว่า Reports ทั้งหมดเป็นของ Truck เดียวกัน
      // =====================================================
      const hasDifferentTruck = reports.some(
        (report) => report.truck_id !== truckId,
      );

      if (hasDifferentTruck) {
        throw new Error("สามารถอัปเดตการซ่อมได้ทีละรถเท่านั้น");
      }

      // ดึงข้อมูล Truck
      const truck = await truckRepository.findTruckById(truckId, tx);

      if (!truck) {
        throw new Error("ไม่พบข้อมูลรถ");
      }

      // ตรวจสอบว่ามี Report ที่ต้องใช้เลขไมล์หรือไม่
      const shouldUpdateMileage = reports.some((report) => {
        const type = report.repair.replace(/^เปลี่ยน/, "").trim();
        return Boolean(MAINTENANCE_INTERVALS[type]);
      });

      // ตรวจสอบเลขไมล์
      if (shouldUpdateMileage) {
        if (repairedMileage <= truck.current_mileage) {
          throw new BusinessError(
            `เลขไมล์ต้องมากกว่าเลขไมล์ปัจจุบัน (${truck.current_mileage.toLocaleString()} กม.)`,
          );
        }
      }

      // =====================================================
      // 5. อัปเดต Reports
      // =====================================================
      for (const report of reports) {
        await reportRepository.updateReportCompleted(
          report.id,
          repairedMileage,
          description,
          tx,
        );

        // ===================================================
        // 6. หา Type ของการซ่อม
        // ===================================================
        const type = report.repair.replace(/^เปลี่ยน/, "").trim();

        // ===================================================
        // 7. หา Maintenance Status
        // ===================================================
        const maintenanceStatus =
          await maintenanceStatusRepository.findMaintenanceStatus(
            report.truck_id,
            type,
            tx,
          );

        if (!maintenanceStatus) continue;

        // ===================================================
        // 8. หา Maintenance Interval
        // ===================================================
        const interval = MAINTENANCE_INTERVALS[type];

        if (!interval) continue;

        // ===================================================
        // 9. คำนวณเลขไมล์ครั้งถัดไป
        // ===================================================
        const nextServiceAt = repairedMileage + interval;

        // ===================================================
        // 10. Update Maintenance Status
        // ===================================================
        await maintenanceStatusRepository.updateMainTenanceStatus(
          maintenanceStatus.id,
          repairedMileage,
          nextServiceAt,
          tx,
        );

        // =====================================================
        // 11. Update Truck Current Mileage
        // =====================================================
      }
      if (shouldUpdateMileage) {
        await truckRepository.updateTruckMileage(truckId, repairedMileage, tx);
      }
    });
  },
};
