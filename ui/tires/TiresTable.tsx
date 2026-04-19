"use client";

import Button from "@/components/Button";
import LinkButton from "@/components/LinkButton";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";
import { TiresProps } from "@/types";
import Link from "next/link";

const formatDateThai = (date: any) => {
  const dateThai = new Date(date).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return dateThai;
};

export default function TiresTable({ tires }: { tires: TiresProps[] }) {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div className="flex justify-end mb-2">
        <Button onClick={openModal}>เปิด Modal</Button>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} title="ชื่อ Modal" size="xl">
        <p>เนื้อหาของ Modal</p>
      </Modal>
      <div className="bg-white rounded-md shadow-md overflow-y-hidden overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead className="bg-blue-200 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4">วันที่</th>
              <th>หมายเลขยาง</th>
              <th>ยี่ห้อ</th>
              <th>ตำแหน่ง</th>
              <th>เลขไมล์ที่เปลี่ยน</th>
              <th className="px-6 py-4 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tires.map((tires) => (
              <tr key={tires.number}>
                <td className="px-6 py-4">
                  {formatDateThai(tires.created_at)}
                </td>
                <td>{tires.number}</td>
                <td>{tires.brand}</td>
                <td>{tires.position}</td>
                <td>{tires.kilometer}</td>
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
