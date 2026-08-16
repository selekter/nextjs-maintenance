"use client";

import Modal from "@/components/Modal";
import { TruckProp } from "@/features/trucks/truck.type";
import { useModal } from "@/hooks/useModal";

export default function DriverTable({
  trucks,
  session,
}: {
  trucks: TruckProp[];
  session: any;
}) {
  const { isOpen, data, openModal, closeModal } = useModal();
  return (
    <div className="rounded-xl overflow-x-auto overflow-y-hidden shadow-md">
      <table className="w-full text-left bg-white table-auto">
        <thead className="bg-blue-200">
          <tr className="">
            <th className="px-6 py-4 font-semibold text-gray-700">ทะเบียน</th>
            <th className="px-6 py-4 font-semibold text-gray-700">
              พนักงานขับรถ
            </th>
            {session && <th className="px-6 py-4 text-right">จัดการ</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {trucks.map((truck, index) => (
            <tr key={index} className="transition hover:bg-blue-100">
              <td className="px-6 py-4 font-medium">{truck.license_plate}</td>
              <td className="px-6 py-4 font-medium">
                {truck.driver?.name ? (
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
                    {truck.driver.name}
                  </span>
                ) : (
                  <span className="bg-blue-100 text-red-500 px-3 py-1 rounded-md">
                    ยังไม่มี พขร
                  </span>
                )}
              </td>
              {session && (
                <td className="flex gap-3 justify-end px-6 py-4">
                  <button
                    className="text-blue-500 hover:text-blue-800 cursor-pointer"
                    onClick={() => openModal(truck)}
                  >
                    แก้ไข
                  </button>
                  <button className="text-red-500 hover:text-red-800 cursor-pointer">
                    ลบ
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={`แก้ไขทะเบียน ${data?.license_plate}`}
      >
        <p>Modal</p>
        {data?.license_plate}
      </Modal>
    </div>
  );
}
