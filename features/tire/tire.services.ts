import { tireRepository } from "./tire.repositories";

export const tireServices = {
  async getTireChangeHistoryList() {
    const records = await tireRepository.findAllTireChanges();

    return records;

    // return records.map((record) => ({
    //   id: record.id,
    //   change_date: record.change_date
    //     ? new Date(record.change_date)
    //     : new Date(),
    //   mileage_at_change: record.mileage_at_change || 0,
    //   truck: {
    //     license_plate: record.truck?.license_plate || "ไม่ระบุทะเบียนรถ",
    //   },
    //   items: record.tireItems.map((item) => ({
    //     tire_code: item.tire_code,
    //     position: item.position,
    //     brand_name: item.brand?.name || "ไม่ระบุแบรนด์",
    //   })),
    // }));
  },

  async getTireBrandsList() {
    return tireRepository.findAllBrand();
  },

  async createTireBrand(name: string) {
    try {
      const brand = await tireRepository.createBrand(name);

      return { success: true, message: brand };
    } catch (error: any) {
      console.log(error);
    }
  },
};
