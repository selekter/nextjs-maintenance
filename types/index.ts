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

export interface TiresProps {
  id: bigint;
  tire_change_id: bigint;
  brand_id: number;
  tire_code: string;
  position: number;
  brand: {
    name: string;
  };
  history: {
    change_date: Date;
    mileage_at_change: number;

    truck: {
      number_plate: string;
    };
  };
}
