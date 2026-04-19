"use client";
import Button from "@/components/Button";
import { createTireChange } from "@/actions/TiresAction";
import { useState } from "react";
import Alert from "@/components/Alert";

interface Truck {
  id: number;
  number_plate: string;
}

interface Brand {
  id: number;
  name: string;
}

export default function TireChangeForm({
  trucks,
  brands,
}: {
  trucks: Truck[];
  brands: Brand[];
}) {
  const [truckId, setTruckId] = useState("");
  const [mileage, setMileage] = useState<number>(0);
  const [notes, setNotes] = useState("");
  const [tireItems, setTireItems] = useState([
    { tire_code: "", position: 1, brand_id: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "danger";
    text: string;
  } | null>(null);

  const addTireRow = () =>
    setTireItems([...tireItems, { tire_code: "", position: 1, brand_id: "" }]);

  const removeItem = (index: number) =>
    setTireItems(tireItems.filter((_, i) => i !== index));

  const updateItem = (index: number, field: string, value: string | number) => {
    const newItems = [...tireItems];
    newItems[index] = { ...newItems[index], [field]: value } as any;
    setTireItems(newItems);
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!truckId) {
      setMessage({ type: "danger", text: "กรุณาเลือกทะเบียนรถ" });
      return;
    }

    if (tireItems.some((item) => !item.brand_id || !item.tire_code)) {
      setMessage({ type: "danger", text: "กรุณากรอกข้อมูลยางให้ครบถ้วน" });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const data = {
        truck_id: truckId,
        mileage_at_change: mileage,
        notes,
        tireItems: tireItems.map((item) => ({
          brand_id: parseInt(item.brand_id),
          tire_code: item.tire_code,
          position: item.position,
        })),
      };

      const result = await createTireChange(data);

      if (result.success) {
        setMessage({
          type: "success",
          text: "บันทึกการเปลี่ยนยางเรียบร้อยแล้ว",
        });
        setTireItems([{ tire_code: "", position: 1, brand_id: "" }]);
        setMileage(0);
        setNotes("");
        setTruckId("");
      } else {
        setMessage({
          type: "danger",
          text: result.error || "เกิดข้อผิดพลาดในการบันทึก",
        });
      }
    } catch (error) {
      setMessage({ type: "danger", text: "เกิดข้อผิดพลาดในการเชื่อมต่อ" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {message && (
        <Alert variant={message.type} className="mb-4">
          {message.text}
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ทะเบียนรถ
          </label>
          <select
            value={truckId}
            onChange={(e) => setTruckId(e.target.value)}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">เลือกทะเบียนรถ</option>
            {trucks.map((truck) => (
              <option key={truck.id} value={truck.id}>
                {truck.number_plate}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            เลขไมล์เมื่อเปลี่ยน
          </label>
          <input
            type="number"
            value={mileage}
            onChange={(e) => setMileage(parseInt(e.target.value) || 0)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          หมายเหตุ
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full border p-2 rounded"
          rows={2}
        />
      </div>

      {/* รายการยางแต่ละเส้น */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-700">รายการยาง</h3>
          {brands.length === 0 && (
            <p className="text-xs text-red-500">
              * ไม่พบข้อมูลยี่ห้อยางในระบบ กรุณาเพิ่มข้อมูลยี่ห้อยางก่อน
            </p>
          )}
        </div>
        {tireItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-lg bg-gray-50 items-end"
          >
            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                ยี่ห้อยาง
              </label>
              <select
                value={item.brand_id}
                onChange={(e) => updateItem(index, "brand_id", e.target.value)}
                className="w-full border p-2 rounded"
                required
              >
                <option value="">เลือกยี่ห้อ</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

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

            <div className="flex">
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
              {tireItems.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200"
                >
                  ลบ
                </button>
              )}
            </div>

            {/* <div className="flex justify-end">
              {tireItems.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200"
                >
                  ลบ
                </button>
              )}
            </div> */}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <button
          type="button"
          onClick={addTireRow}
          className="w-full md:w-fit text-blue-600 font-semibold hover:underline text-left"
        >
          + เพิ่มยางอีกเส้น
        </button>

        <Button
          type="submit"
          disabled={loading || (brands.length === 0 && tireItems.length > 0)}
          className="bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 py-3 disabled:bg-gray-400"
        >
          {loading ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนยางทั้งหมด"}
        </Button>
      </div>
    </form>
  );
}
