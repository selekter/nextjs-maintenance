"use client";
import { createReport } from "@/actions/ReportAction";
import { useActionState } from "react";

interface TruckProps {
  id: number;
  license_plate: string;
}

const initialState = {
  message: "",
};

export default function RepairForm({ trucks }: { trucks: TruckProps[] }) {
  const [state, formAction, isPending] = useActionState(
    createReport,
    initialState,
  );

  return (
    <form action={formAction}>
      <div className="space-y-2">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <label htmlFor="license_plate">ป้ายทะเบียน</label>
          <select
            id="license_plate"
            name="truckId"
            className="bg-white px-3 py-1 rounded-md border cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              -- กรุณาเลือกทะเบียน --
            </option>
            {trucks.map((truck) => (
              <option key={truck.id} value={truck.id}>
                {truck.license_plate}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-0.5">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              name="maintenance"
              value="เปลี่ยนน้ำมันเครื่อง"
            />
            <span className="cursor-pointer">เปลี่ยนน้ำมันเครื่อง</span>
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              name="maintenance"
              value="เปลี่ยนน้ำมันเกียร์"
            />
            <span className="cursor-pointer">เปลี่ยนน้ำมันเกียร์</span>
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              name="maintenance"
              value="เปลี่ยนน้ำมันเฟืองท้าย"
            />
            <span className="cursor-pointer">เปลี่ยนน้ำมันเฟืองท้าย</span>
          </label>
          <input
            type="text"
            name="maintenance"
            className="border border-gray-400 rounded-md px-2 py-1 w-80"
            placeholder="อื่นๆ (ถ้ามี)"
          />
        </div>
        {/* แสดง Error ถ้ามี */}
        {state?.message && (
          <p className="text-red-500 text-sm">{state.message}</p>
        )}
        <button
          className="bg-blue-500 hover:shadow-md shadow-blue-500 hover:bg-blue-800 transition px-3 py-1 rounded-md text-white cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "บันทึกแจ้งซ่อม" : "เพิ่มแจ้งซ่อม"}
        </button>
      </div>
    </form>
  );
}
