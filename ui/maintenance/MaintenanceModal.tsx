"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";

export default function MaintenanceModal() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div className="flex justify-end">
        <Button onClick={openModal}>เพิ่มทะเบียน</Button>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} title="เพิ่มทะเบียนรถ">
        <form action="">
          <input
            type="text"
            className="border border-gray-200 p-2 rounded-md w-full"
            placeholder="เลขทะเบียนรถ"
            name=""
          />
        </form>
      </Modal>
    </>
  );
}
