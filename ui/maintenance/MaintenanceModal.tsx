"use client";

import { createLicenseMaintenance } from "@/actions/MaintenanceAction";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
import { useActionState, useRef } from "react";

export default function MaintenanceModal({ truckid }: { truckid: any }) {
  const { isOpen, openModal, closeModal } = useModal();
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const result = await createLicenseMaintenance(prevState, formData);
      // ปิด modal เฉพาะเมื่อสำเร็จ
      if (result?.success) {
        closeModal();
      }
      return result;
    },
    null,
  );
  const formRef = useRef<HTMLFormElement>(null);

  // เมื่อกดปุ่มยืนยันใน Modal ให้ submit ฟอร์ม
  const handleConfirm = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={openModal}
        >
          เพิ่มทะเบียน
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="เพิ่มทะเบียนรถ"
        onConfirm={handleConfirm}
        confirmText={isPending ? "กำลังบันทึก..." : "บันทึก"}
        cancelText="ยกเลิก"
        showFooter={true}
        closeOnConfirm={false}
      >
        <form ref={formRef} action={formAction} className="space-y-4">
          {state?.message && (
            <div
              className={`p-2 rounded text-sm ${state.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {state.message}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">
              เลขทะเบียนรถ
            </label>
            <select name="truckId">
              <option value="">เลือกเลขทะเบียนรถ</option>
              {truckid?.map((truck: any) => (
                <option key={truck.id} value={truck.id}>
                  {truck.number_plate}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              เลขไมล์ปัจจุบัน (กม.)
            </label>
            <input
              type="number"
              className="border border-gray-200 p-2 rounded-md w-full"
              placeholder="เช่น 0"
              name="current_mileage"
              defaultValue={0}
              required
              disabled={isPending}
            />
          </div>
        </form>
      </Modal>
    </>
  );
}
