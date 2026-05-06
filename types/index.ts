import { RowDataPacket } from "mysql2";

export interface ReportProps extends RowDataPacket {
  id: number;
  license_plate: string;
  repairs: string;
}

export interface TruckProps {
  id: number;
  number_plate: string;
  drivers_name: string;
}

type RepairItem = {
  repair: string;
  description?: string | null;
};

export interface GroupedReport {
  id: number;
  license_plate: string;
  repairs: RepairItem[];
}

export interface TireGrouped {
  date: string;
  plate_number: string;
  mileage: number;
  tires: TireItem[];
}

export interface TireItem {
  tire_code: string;
  brand: string;
  position: number;
}

export interface TiresProps {
  id: bigint;
  date: string;
  plate_number: string;
  tire_change_id: bigint;
  brand_id: number;
  tire_code: string;
  position: number;
  brand: {
    name: string;
  };
  tires: {
    tire_code: string;
    brand: string;
    position: number;

    truck: {
      number_plate: string;
    };
  };
}
