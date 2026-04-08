"use client";

import {
  addRepairAction,
  deleteReport,
  updateReport,
} from "@/actions/ReportAction";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
import { useActionState, useEffect, useState, useTransition } from "react";

const initialState = {
  message: "",
  success: false
};

export default function ReportEditForm({
  report,
  license_plate_id,
}: {
  report: any;
  license_plate_id: string;
}) {
  const [state, formAction, isPending] = useActionState(
    updateReport,
    initialState,
  );

  const [addState, addFormAction, isAdding] = useActionState(
    addRepairAction,
    initialState,
  );

  const { isOpen, openModal, closeModal } = useModal();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isDeleting, startTransition] = useTransition();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== value));
    }
  };

  const handleDelete = async () => {
    if (selectedItems.length === 0) return;

    if (confirm(`ยืนยันการลบ ${selectedItems.length} รายการที่เลือก`)) {
      startTransition(async () => {
        const result = await deleteReport(selectedItems);
        if (result.message === "ลบรายการสำเร็จ") {
          setSelectedItems([]);
        }
        alert(result.message);
      });
    }
  };

  useEffect(() => {
    if (addState?.success) {
      closeModal();
    }
  }, [addState, closeModal]);

  const commonRepairs = [
    "เปลี่ยนน้ำมันเครื่อง",
    "เปลี่ยนน้ำมันเกียร์",
    "เปลี่ยนน้ำมันเฟืองท้าย",
  ];

  const existingRepairs = report.map((item: any) => item.repair);
  const filteredCommonRepairs = commonRepairs.filter(
    (repair) => !existingRepairs.includes(repair),
  );

  return (
    <div className="rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-y-hidden overflow-x-auto">
      <div className="flex justify-between items-center bg-blue-200 p-4">
        <label className="block font-bold">รายการแจ้งซ่อม</label>
        <Button type="button" variant="primary" onClick={() => openModal()}>
          เพิ่มรายการแจ้งซ่อม
        </Button>
      </div>
      <form action={formAction}>
        <div className="space-y-2 mb-2 pt-2">
          {report.map((item: any) => (
            <div key={item.id} className="flex items-center gap-2 px-4">
              <input
                type="checkbox"
                id={`repair-${item.id}`}
                value={item.id}
                onChange={handleCheckboxChange}
                className="border p-2 rounded size-4 cursor-pointer"
                name="repair"
              />
              <label className="cursor-pointer" htmlFor={`repair-${item.id}`}>
                {item.repair}
              </label>
            </div>
          ))}
          <div className="px-4">
            <textarea
              name="description"
              placeholder="รายละเอียด (ถ้ามี)"
              className="border border-gray-200 rounded-md w-80 h-28 p-2"
            ></textarea>
          </div>
          {state?.message && (
            <div className="px-4">
              <Alert>{state.message}</Alert>
            </div>
          )}
        </div>
        <div className="flex m-4 gap-2">
          <Button
            type="submit"
            variant="primary"
            disabled={isPending || selectedItems.length === 0}
          >
            {isPending ? "กำลังบันทึก..." : "บันทึกรายการที่เลือก"}
          </Button>
          <Button
            type="button"
            variant="danger"
            onClick={handleDelete}
            disabled={isDeleting || isPending || selectedItems.length === 0}
          >
            ลบ
          </Button>
        </div>
      </form>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="เพิ่มรายการแจ้งซ่อม"
        showFooter={false}
      >
        <form action={addFormAction} className="space-y-4">
          <input
            type="hidden"
            name="license_plate_id"
            value={license_plate_id}
          />
          <div className="space-y-2">
            {filteredCommonRepairs.map((repair) => (
              <label key={repair} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="maintenance"
                  value={repair}
                  className="size-4 cursor-pointer"
                />
                <span className="cursor-pointer">{repair}</span>
              </label>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              อื่นๆ (ถ้ามี)
            </label>
            <input
              type="text"
              name="repair"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="กรอกรายการที่ต้องการแจ้งซ่อม"
            />
          </div>
          {addState?.message && (
            <Alert variant={addState.success ? "success" : "danger"}>
              {addState.message}
            </Alert>
          )}
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="danger" onClick={closeModal}>
              ยกเลิก
            </Button>
            <Button type="submit" variant="primary" disabled={isAdding}>
              {isAdding ? "กำลังบันทึก..." : "ยืนยัน"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
