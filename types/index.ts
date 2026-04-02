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
  number: string;
  kilometer: number;
  brand: string;
  created_at: Date;
  position: number;
  truck: {
    number_plate: string;
  };
}
