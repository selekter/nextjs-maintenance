import z from "zod";

export const driverSchema = z.object({
  driver_name: z.string().min(1, "กรุณากรองชื่อ พขร ด้วยครับ"),
  license_plate: z.string().min(1, "กรุณาเลือกทะเบียนด้วยครับ"),
});

export const truckSchema = z.object({
  license_plate: z
    .string()
    .min(1, "กรุณากรองเลขทะเบียน")
    .regex(
      /^\d{2}-\d{4}$/,
      "รูปแบบทะเบียนต้องเป็น 00-0000 เท่านั้น เช่น (70-5857)",
    ),
});
