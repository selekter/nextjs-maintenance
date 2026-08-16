"use client";

import { createLicenseMaintenance } from "@/actions__/MaintenanceAction";
import Modal from "@/components/Modal";
import { TruckProp } from "@/features/trucks/truck.type";
import { useModal } from "@/hooks/useModal";
import { useActionState, useRef } from "react";

export default function MaintenanceModal({ trucks }: { trucks: TruckProp[] }) {
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
      <Modal isOpen={isOpen} onClose={closeModal} title="เพิ่มทะเบียนรถ">
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
              เลขทะเบียนรถ <span className="text-red-500">*</span>
            </label>
            <select name="truckId">
              <option value="">เลือกเลขทะเบียนรถ</option>
              {trucks?.map((truck) => (
                <option key={truck.id} value={truck.id}>
                  {truck.license_plate}
                </option>
              ))}
            </select>
            {state?.errors?.truckId && (
              <p className="text-red-500 text-sm">{state.errors.truckId}</p>
            )}
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
          {state?.errors?.currentMileage && (
            <p className="text-red-500 text-sm">
              {state.errors.currentMileage}
            </p>
          )}
        </form>
      </Modal>
    </>
  );
}
