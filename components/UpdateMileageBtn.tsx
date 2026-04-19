"use client";
import { updateTruckMileage } from "@/actions/TruckAction";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
import { useActionState, useEffect, useState } from "react";
import Alert from "./Alert";

// แยก Form ออกมาเป็น Component เพื่อให้ Reset State ได้เมื่อเปิด Modal ใหม่
function MileageForm({ truck, onClose }: { truck: any; onClose: () => void }) {
  const initialState = { success: false, message: "" };

  const [state, formAction, isPending] = useActionState(
    updateTruckMileage,
    initialState,
  );

  // ปิด Modal เมื่อสำเร็จ
  useEffect(() => {
    if (state?.success) {
      onClose();
    }
  }, [state?.success, onClose]);

  return (
    <form action={formAction} className="space-y-4">
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
          className={`w-full border-2 border-gray-200 rounded-xl p-3 text-2xl font-bold text-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all
            ${state?.success === false && state?.message ? "border-red-500 bg-red-50 text-red-600" : ""}
            `}
          autoFocus
          required
        />
      </div>

      {state?.success === false && state?.message && (
        <Alert>{state.message}</Alert>
      )}

      <div className="flex gap-2 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
        >
          ยกเลิก
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-md shadow-blue-200 transition-colors cursor-pointer disabled:opacity-50"
          disabled={isPending}
        >
          {isPending ? "กำลังบันทึกข้อมูล" : "บันทึกข้อมูล"}
        </button>
      </div>
    </form>
  );
}

export default function UpdateMileageBtn({ truck }: { truck: any }) {
  const { isOpen, openModal, closeModal } = useModal();
  const [formKey, setFormKey] = useState(0);

  // เมื่อกดเปิด ให้เพิ่มค่า key เพื่อให้ Component MileageForm ถูกสร้างใหม่ (Reset State)
  const handleOpen = () => {
    setFormKey((prev) => prev + 1);
    openModal();
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-xs bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-3 py-1.5 rounded-lg font-bold shadow-sm transition-all active:scale-95 cursor-pointer"
      >
        ⚙️ อัปเดตเลขไมล์
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="อัปเดตเลขไมล์ปัจจุบัน"
        size="sm"
        showFooter={false}
      >
        <MileageForm key={formKey} truck={truck} onClose={closeModal} />
      </Modal>
    </>
  );
}
