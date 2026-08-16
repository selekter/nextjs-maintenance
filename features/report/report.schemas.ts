import { Prisma } from "@/generated/prisma/client";
import z from "zod";

export const completedRepairSchema = z.object({
  repairedMileage: z.coerce
    .number("กรุณากรอกเลขไมล์เป็นตัวเลข")
    .min(0, "เลขไมล์ต้องไม่ติดลบ"),
  reportId: z
    .array(z.coerce.number())
    .min(1, "กรุณาเลือกหรือระบุรายการซ่อมอย่างน้อย 1 รายการ"),
  // .transform((items) =>
  //   items.map((item) => item.replace(/^เปลี่ยน/, "").trim()),
  // ),
  description: z.string().optional(),
});

export type CompletedRepairInput = z.infer<typeof completedRepairSchema>;

export type ReportPendingProps = Prisma.TruckGetPayload<{
  select: {
    id: true;
    license_plate: true;
    reports: {
      select: {
        repair: true;
      };
    };
  };
}>;

export interface GroupedRepairItem {
  id: number;
  date?: string;
  truck_id: string;
  license_plate?: string;
  mileage: number | null;
  repairs: Array<{
    repair: string;
    description: string | null;
  }>;
}
