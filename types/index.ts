import { RowDataPacket } from "mysql2";

export interface ReportProps extends RowDataPacket {
  id: number;
  license_plate: string;
  repairs: string;
}

export interface TruckProps extends RowDataPacket {
  id: number;
  number_plate: string;
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
