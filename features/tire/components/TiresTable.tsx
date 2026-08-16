"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import { TireHistory } from "../tire.schemas";
import TireChangeForm from "./TireChangeForm";
import AddBrandForm from "./AddBrandForm";
import { BrandProps, TruckSelect } from "@/features/trucks/truck.schemas";
import { formatDateThai } from "@/components/FormatDateThai";

export default function TiresTable({
  tires,
  trucks,
  brands,
}: {
  tires: TireHistory[];
  trucks: TruckSelect[];
  brands: BrandProps[];
}) {
  const changeTireModal = useModal();
  const addBrandModal = useModal();

  const { data: session } = useSession();

  return (
    <>
      {session && (
        <div className="flex justify-end mb-2 gap-2">
          <button
            onClick={addBrandModal.openModal}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition-colors border border-gray-300 cursor-pointer"
          >
            + เพิ่มยี่ห้อยาง
          </button>
          <Button onClick={changeTireModal.openModal}>
            บันทึกการเปลี่ยนยาง
          </Button>
        </div>
      )}

      {/* Modal บันทึกการเปลี่ยนยาง */}
      <Modal
        isOpen={changeTireModal.isOpen}
        onClose={changeTireModal.closeModal}
        title="แบบฟอร์มบันทึกการเปลี่ยนยาง"
        size="3xl"
      >
        <TireChangeForm trucks={trucks} brands={brands} />
      </Modal>

      {/* Modal เพิ่มยี่ห้อยาง */}
      <Modal
        isOpen={addBrandModal.isOpen}
        onClose={addBrandModal.closeModal}
        title="เพิ่มยี่ห้อยางใหม่"
        size="md"
      >
        <AddBrandForm onSuccess={addBrandModal.closeModal} />
      </Modal>

      <div className="bg-white rounded-md shadow-md overflow-y-hidden overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead className="bg-blue-200 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4">วันที่</th>
              <th>ทะเบียน</th>
              <th>หมายเลขยาง/ยี่ห้อ</th>
              <th>ตำแหน่ง</th>
              <th>เลขไมล์ที่เปลี่ยน</th>
              <th className="px-6 py-4 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tires.map((tire) => (
              <tr key={tire.id}>
                <td className="px-6 py-4">
                  {formatDateThai(tire.change_date)}
                </td>
                <td>{tire.truck.license_plate}</td>
                <td className="p-2">
                  {tire.tireItems.map((t, i) => (
                    <div key={i}>
                      {t.tire_code} ({t.brand.name})
                    </div>
                  ))}
                </td>
                <td>
                  {tire.tireItems.map((t, i) => (
                    <div key={i}>{t.position}</div>
                  ))}
                </td>
                <td>{tire.mileage_at_change}</td>
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
