import { prisma } from "@/lib/prisma";
import { truckRepository } from "./truck.repositories";
import { maintenanceStatusRepository } from "../maintenanceStatus/maintenanceStatus.Repositories";
import { reportRepository } from "../report/report.repositories";

export const truckService = {
  async getTrucks() {
    return await truckRepository.findAllTrucksAndDriver();
  },

  async getTrucksAndStatus() {
    return await truckRepository.findTrucksAndStatus();
  },

  async registerNewTruck(licensePlate: string, currentMileage: number) {
    const existing = await truckRepository.findByLicensePlate(licensePlate);
    if (existing) {
      throw new Error("LICENSE_PLATE_EXISTS");
    }

    return await prisma.$transaction(async (tx) => {
      // 1. สร้าง Truck (ส่ง tx เข้าไป)
      const truck = await truckRepository.createWithDefaultMaintenance(
        {
          license_plate: licensePlate,
          current_mileage: currentMileage,
        },
        tx,
      );

      // 2. เตรียมข้อมูล Maintenance Defaults
      const maintenanceDefaults = [
        { id: 1, type: "น้ำมันเครื่อง", interval: 20000 },
        { id: 1, type: "น้ำมันเกียร์", interval: 70000 },
        { id: 1, type: "น้ำมันเฟืองท้าย", interval: 60000 },
      ];

      const statusesToCreate = maintenanceDefaults.map((item) => ({
        truck_id: truck.id,
        type: item.type,
        service_mileage: currentMileage,
        next_service_at: currentMileage + item.interval,
      }));

      // 3. สร้าง Statuses (ส่ง tx เข้าไป)
      await maintenanceStatusRepository.createMany(statusesToCreate, tx);

      return truck;
    });
  },

  async updateMileageAndCheckMaintenance(truckId: number, newMileage: number) {
    return await prisma.$transaction(async (tx) => {
      // 1. ดึงข้อมูลรถและสถานะการบำรุงรักษา
      const truck = await truckRepository.findTruckById(truckId, tx);
      if (!truck) {
        throw new Error("TRUCK_NOW_FOUND");
      }

      // 2. ตรวจสอบเลขไมล์
      if (newMileage < truck.current_mileage) {
        throw new Error(`MILEAGE_LESS_THAN_CURRENT:${truck.current_mileage}`);
      }

      // 3. อัปเดตเลขไมล์ปัจจุบันของรถ
      await truckRepository.updateMileage(truckId, newMileage, tx);

      // 4. วนลูปเช็ค MaintenanceStatuses ทั้งหมดของรถคันนี้
      for (const item of truck.MaintenanceStatuses) {
        if (newMileage >= item.next_service_at) {
          const repairName = `เปลี่ยน${item.type}`;

          // เช็คว่ามีรายการแจ้งซ่อมประเภทนี้ที่ค้างอยู่ (status: 0) หรือยัง
          const existingReport = await reportRepository.findPendingByRepair(
            truckId,
            item.type,
            tx,
          );

          if (!existingReport) {
            await reportRepository.createReport(
              {
                truck_id: truckId,
                repair: repairName,
                status: 0,
              },
              tx,
            );
          }
        }
      }
      return true;
    });
  },
};
