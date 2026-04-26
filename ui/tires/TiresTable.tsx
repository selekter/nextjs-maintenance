"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
import { TiresProps } from "@/types";
import Link from "next/link";
import TireChangeForm from "../tirehistory/TireChangeForm";
import AddBrandForm from "./AddBrandForm";

const formatDateThai = (date: any) => {
  const dateThai = new Date(date).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return dateThai;
};

interface Truck {
  id: number;
  number_plate: string;
}

interface Brand {
  id: number;
  name: string;
}

export default function TiresTable({
  tires,
  trucks,
  brands,
}: {
  tires: TiresProps[];
  trucks: Truck[];
  brands: Brand[];
}) {
  const changeTireModal = useModal();
  const addBrandModal = useModal();

  return (
    <>
      <div className="flex justify-end mb-2 gap-2">
        <button
          onClick={addBrandModal.openModal}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition-colors border border-gray-300 cursor-pointer"
        >
          + เพิ่มยี่ห้อยาง
        </button>
        <Button onClick={changeTireModal.openModal}>บันทึกการเปลี่ยนยาง</Button>
      </div>

      {/* Modal บันทึกการเปลี่ยนยาง */}
      <Modal
        isOpen={changeTireModal.isOpen}
        onClose={changeTireModal.closeModal}
        title="แบบฟอร์มบันทึกการเปลี่ยนยาง"
        size="3xl"
        showFooter={false}
      >
        <TireChangeForm trucks={trucks} brands={brands} />
      </Modal>

      {/* Modal เพิ่มยี่ห้อยาง */}
      <Modal
        isOpen={addBrandModal.isOpen}
        onClose={addBrandModal.closeModal}
        title="เพิ่มยี่ห้อยางใหม่"
        size="md"
        showFooter={false}
      >
        <AddBrandForm onSuccess={addBrandModal.closeModal} />
      </Modal>

      <div className="bg-white rounded-md shadow-md overflow-y-hidden overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead className="bg-blue-200 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4">วันที่</th>
              <th>ทะเบียน</th>
              <th>หมายเลขยาง</th>
              <th>ยี่ห้อ</th>
              <th>ตำแหน่ง</th>
              <th>เลขไมล์ที่เปลี่ยน</th>
              <th className="px-6 py-4 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tires.map((tires) => (
              <tr key={tires.id}>
                <td className="px-6 py-4">
                  {formatDateThai(tires.history.change_date)}
                </td>
                <td>{tires.history.truck.number_plate}</td>
                <td>{tires.tire_code}</td>
                <td>{tires.brand.name}</td>
                <td>{tires.position}</td>
                <td>{tires.history.mileage_at_change}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3 md:justify-end">
                    <Link
                      href="#"
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                      แก้ไข
                    </Link>
                    <button className="text-red-500 hover:text-red-700 cursor-pointer">
                      ลบ
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
