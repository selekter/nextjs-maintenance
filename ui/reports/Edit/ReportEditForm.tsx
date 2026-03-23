"use client";

import { deleteReport, updateReport } from "@/actions/ReportAction";
import Alert from "@/components/Alert";
import Button from "@/components/Button";
import { useActionState, useState, useTransition } from "react";

const initialState = {
  message: "",
};

export default function ReportEditForm({ report }: { report: any }) {
  const [state, formAction, isPending] = useActionState(
    updateReport,
    initialState,
  );

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

  return (
    <div className="rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-y-hidden overflow-x-auto">
      <form action={formAction}>
        <div className="space-y-2 mb-2">
          <label className="block font-bold mb-2 bg-blue-200 p-4">
            รายการแจ้งซ่อม
          </label>
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
    </div>
  );
}
