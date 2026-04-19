import z from "zod";

// ✅ Login validation schema
export const loginSchema = z.object({
  email: z.email({ message: "รูปแบบอีเมลไม่ถูกต้อง" }).min(1, "กรุณากรองอีเมล"),
  password: z
    .string()
    .min(6, "รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร")
    .max(128, "รหัสผ่านต้องไม่เกิน 128 ตัวอักษร"),
});

export const driverSchema = z.object({
  driver_name: z.string().min(1, "กรุณากรองชื่อ พขร ด้วยครับ"),
  license_plate: z.string().min(1, "กรุณาเลือกทะเบียนด้วยครับ"),
});

export const truckSchema = z.object({
  license_plate: z
    .string()
    .min(1, "กรุณากรองเลขทะเบียน")
    .regex(/^\d{2}-\d{4}$/, {
      message: "รูปแบบทะเบียนต้องเป็น 00-0000 เท่านั้น เช่น (70-5857)",
    }),
  current_mileage: z.coerce.number().min(0, "เลขไมล์ต้องไม่ต่ำกว่า 0"),
});

export const reportSchema = z.object({
  truckId: z.string().min(1, "กรุณาเลือกทะเบียนรถ"),
  maintenaces: z
    .array(z.string())
    .refine((val) => val.length > 0 && val.some((v) => v.trim() !== ""), {
      message: "กรุณาเลือกรายการซ่อมอย่างน้อย 1 รายการ",
    }),
});

export const reportEditSchema = z.object({
  selectedRepairIds: z
    .array(z.string())
    .refine((val) => val.length > 0 && val.some((v) => v.trim() !== ""), {
      message: "กรุณาเลือกรายการซ่อมอย่างน้อย 1 รายการ",
    }),
});
