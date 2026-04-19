"use client";
import Button from "@/components/Button";
import { useState } from "react";

export default function TireChangeForm({ truckId }: { truckId: string }) {
  const [tireItems, setTireItems] = useState([
    { tire_code: "", position: 1, brand_id: "" },
  ]);

  const addTireRow = () =>
    setTireItems([...tireItems, { tire_code: "", position: 1, brand_id: "" }]);
  const removeItem = (index: number) =>
    setTireItems(tireItems.filter((_, i) => i !== index));

  const updateItem = (index: number, field: string, value: string | number) => {
    const newItems = [...tireItems];
    newItems[index] = { ...newItems[index], [field]: value };
    setTireItems(newItems);
  };

  return (
    <form className="space-y-6 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold">บันทึกการเปลี่ยนยาง</h2>

      {/* รายการยางแต่ละเส้น */}
      <div className="space-y-4">
        {tireItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 border rounded-lg bg-gray-50 items-end"
          >
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                หมายเลขยาง (Serial)
              </label>
              <input
                type="text"
                value={item.tire_code}
                onChange={(e) => updateItem(index, "tire_code", e.target.value)}
                className="w-full border p-2 rounded"
                placeholder="เช่น ABC123456"
                required
              />
            </div>

            <div className="w-32">
              <label className="block text-sm font-medium text-gray-700">
                ตำแหน่ง (1-10)
              </label>
              <select
                value={item.position}
                onChange={(e) =>
                  updateItem(index, "position", parseInt(e.target.value))
                }
                className="w-full border p-2 rounded"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    ตำแหน่ง {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {tireItems.length > 1 && (
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="bg-red-100 text-red-600 p-2 rounded hover:bg-red-200"
              >
                ลบ
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <Button
          type="button"
          onClick={addTireRow}
          className="w-full md:w-fit text-blue-600 font-semibold hover:underline"
        >
          + เพิ่มยางอีกเส้น
        </Button>

        <Button
          type="submit"
          className="bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700"
        >
          บันทึกการเปลี่ยนยางทั้งหมด
        </Button>
      </div>
    </form>
  );
}
