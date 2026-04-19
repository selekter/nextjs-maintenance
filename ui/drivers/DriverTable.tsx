"use client";

// import { getDrivers } from "@/actions/DriverAction";
// import { authOptions } from "@/auth";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
// import { getServerSession } from "next-auth";

interface DriverProp {
  id: bigint;
  number_plate: string;
  current_mileage: number;
  drivers: {
    name: string;
  } | null;
}

export default function DriverTable({
  drivers,
  session,
}: {
  drivers: DriverProp[];
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
            <th className="px-6 py-4 font-semibold text-gray-700">เลขไมล์</th>
            {session && <th className="px-6 py-4 text-right">จัดการ</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {drivers.map((truck, index) => (
            <tr key={index} className="transition hover:bg-blue-100">
              <td className="px-6 py-4 font-medium">{truck.number_plate}</td>
              <td className="px-6 py-4 font-medium">
                {truck.drivers?.name ? (
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
                    {truck.drivers.name}
                  </span>
                ) : (
                  <span className="bg-blue-100 text-red-500 px-3 py-1 rounded-md">
                    ยังไม่มี พขร
                  </span>
                )}
              </td>
              <td className="px-6 py-4 font-medium">
                {truck.current_mileage.toLocaleString()} กม.
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
        title={`แก้ไขทะเบียน ${data?.number_plate}`}
      >
        <p>Modal</p>
        {data?.number_plate}
      </Modal>
    </div>
  );
}
