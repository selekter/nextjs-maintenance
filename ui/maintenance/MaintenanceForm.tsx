// components/MaintenanceForm.tsx
"use client";

import { updateMaintenance } from "@/actions/MaintenanceAction";
import { useState } from "react";

export default function MaintenanceForm({ trucks }: { trucks: any[] }) {
  const [interval, setInterval] = useState(20000);

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    if (type === "น้ำมันเครื่อง") {
      setInterval(20000);
    } else if (type === "น้ำมันเกียร์") {
      setInterval(60000);
    } else if (type === "น้ำมันเฟืองท้าย") {
      setInterval(70000);
    }
  };
  return (
    <form
      action={updateMaintenance}
      className="bg-white p-6 rounded-lg shadow-md border"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* เลือกทะเบียนรถ */}
        <div>
          <label className="block text-sm font-medium mb-1">ทะเบียนรถ</label>
          <select name="truckId" className="w-full p-2 border rounded" required>
            <option value="">เลือกทะเบียนรถ</option>
            {trucks.map((t) => (
              <option key={t.id} value={t.id}>
                {t.number_plate}
              </option>
            ))}
          </select>
        </div>

        {/* เลือกประเภทการบำรุงรักษา */}
        <div>
          <label className="block text-sm font-medium mb-1">
            ประเภทการบำรุงรักษา
          </label>
          <select
            name="type"
            className="w-full p-2 border rounded"
            required
            onChange={handleTypeChange}
          >
            <option value="น้ำมันเครื่อง">น้ำมันเครื่อง (20,000 กม.)</option>
            <option value="น้ำมันเกียร์">น้ำมันเกียร์ (60,000 กม.)</option>
            <option value="น้ำมันเฟืองท้าย">
              น้ำมันเฟืองท้าย (70,000 กม.)
            </option>
          </select>
        </div>

        {/* เลขไมล์ปัจจุบันที่มาทำ */}
        <div>
          <label className="block text-sm font-medium mb-1">
            เลขไมล์ที่เปลี่ยน (กม.)
          </label>
          <input
            type="number"
            name="serviceMileage"
            className="w-full p-2 border rounded"
            placeholder="เช่น 50000"
            required
          />
        </div>

        {/* ระยะทางที่จะใช้งานถึงรอบหน้า */}
        <div>
          <label className="block text-sm font-medium mb-1">
            ระยะทางที่ใช้จนถึงรอบหน้า (กม.)
          </label>
          <input
            type="number"
            name="interval"
            className="w-full p-2 border rounded"
            value={interval}
            onChange={(e) => setInterval(parseInt(e.target.value) || 0)}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        บันทึกข้อมูล
      </button>
    </form>
  );
}
