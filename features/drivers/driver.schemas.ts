import z from "zod";

export const driverSchema = z.object({
  license_plate: z.string().min(1, "กรุณาเลือกทะเบียนรถบรรทุก"),
  driver_name: z.string().min(1, "กรุณากรอกชื่อพนักงานขับรถ"),
});

export type DriverInput = z.infer<typeof driverSchema>;

export interface CreateDriverState {
  messages?: {
    license_plate?: string[];
    driver_name?: string[];
  };
  message?: string;
  formError?: string;
  license_plate?: string | null;
  driver_name?: string | null;
  errors?: {
    truckId?: string[];
    maintenances?: string[];
  };
}
