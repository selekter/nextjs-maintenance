export interface MaintenanceStatus {
  id: number;
  truck_id: number;
  type: string;
  service_mileage: number;
  next_service_at: number;
  service_date: Date | string;
}
