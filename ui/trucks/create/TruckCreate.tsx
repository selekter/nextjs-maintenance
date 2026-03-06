"use client";

import { createTruck } from "@/actions/TruckAction";
import { useActionState } from "react";

const initialState = {
  message: "",
};

export default function CreateTruckForm() {
  const [state, formAction, isPending] = useActionState(
    createTruck,
    initialState,
  );
  return (
    <>
      <form action={formAction}>
        <div className="flex flex-col space-y-2 bg-white p-3 rounded-md shadow">
          <label htmlFor="numberPlate">เลขป้ายทะเบียน</label>
          <input
            type="text"
            id="numberPlate"
            name="numberPlate"
            defaultValue=""
            className="bg-white px-2 py-1 rounded-md shadow-sm md:w-80 border border-gray-300"
            placeholder="เลขป้ายทะเบียน ตัวอย่างเช่น 10-1234"
          />
          <button
            disabled={isPending}
            className={`bg-blue-300 hover:bg-blue-500 transition px-3 py-1 rounded-md cursor-pointer md:w-fit disabled:bg-gray-200 disabled:cursor-not-allowed`}
          >
            {isPending ? "กำลังบันทึกข้อมูล..." : "บันทึกข้อมูล"}
          </button>
        </div>
      </form>
    </>
  );
}
