"use client";
import { updateTruckMileage } from "@/actions/TruckAction";
import Modal from "./Modal";
import { useModal } from "@/hooks/useModal";

export default function UpdateMileageBtn({ truck }: { truck: any }) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button
        onClick={openModal}
        className="text-xs bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-3 py-1.5 rounded-lg font-bold shadow-sm transition-all active:scale-95 cursor-pointer"
      >
        ⚙️ อัปเดตเลขไมล์
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="อัปเดตเลขไมล์ปัจจุบัน"
        size="sm"
        showFooter={false} // เราจะใช้ปุ่มใน Form แทนเพื่อให้ใช้ type="submit" ได้ง่าย
      >
        <form
          action={async (formData) => {
            const res = await updateTruckMileage(formData);
            if (res.success) {
              closeModal();
            } else {
              alert(res.message);
            }
          }}
          className="space-y-4"
        >
          {/* ส่ง ID ไปด้วย (ต้องเป็น string เพราะส่งผ่าน form) */}
          <input type="hidden" name="truckId" value={truck.id.toString()} />

          <div>
            <p className="text-sm text-gray-500 mb-2">
              ทะเบียน:{" "}
              <span className="font-bold text-gray-800">
                {truck.number_plate}
              </span>
            </p>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              เลขไมล์ล่าสุด (กม.)
            </label>
            <input
              name="mileage"
              type="number"
              defaultValue={truck.current_mileage}
              className="w-full border-2 border-gray-200 rounded-xl p-3 text-2xl font-bold text-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              autoFocus
              required
            />
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors cursor-pointer"
            >
              บันทึกข้อมูล
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
