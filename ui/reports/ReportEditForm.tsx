"use client";

import { updateReport } from "@/actions/ReportAction";
import { useActionState, useState } from "react";

export default function ReportEditForm({ report }: { report: any }) {
  const [state, formAction, isPending] = useActionState(updateReport, null);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      setSelectedItems((prev) => prev.filter((id) => id !== value));
    }
  };

  return (
    <div className="rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-y-hidden overflow-x-auto">
      <form action={formAction}>
        <div className="mb-4">
          <label className="block font-bold mb-2 bg-blue-200 p-4">
            รายการแจ้งซ่อม
          </label>
          {report.map((item: any) => (
            <div key={item.id} className="flex items-center gap-2 mb-2 px-4">
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
        </div>
        <div className="px-4 mb-4">
          <button
            type="submit"
            disabled={isPending || selectedItems.length === 0}
            className="bg-blue-300 hover:bg-blue-500 not-disabled:hover:shadow-md transition px-4 py-1 rounded-md cursor-pointer disabled:cursor-auto disabled:bg-gray-300"
          >
            {isPending ? "กำลังบันทึก..." : "บันทึกรายการที่เลือก"}
          </button>
        </div>
      </form>
    </div>
  );
}
