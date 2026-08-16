import { driverRepository } from "./driver.repositories";

export const driverService = {
  async linkDriverAndTruck(driverName: string, rawTruckId: string) {
    const truckId = Number(rawTruckId);

    if (isNaN(truckId)) {
      throw new Error("INVALID_TRUCK_ID");
    }

    return await driverRepository.assignDriverToTruck(driverName, truckId);
  },
};
