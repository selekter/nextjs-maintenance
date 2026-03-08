"use client";

import { createTruck } from "@/actions/TruckAction";
import { useActionState, useEffect, useRef } from "react";

const initialState = {
  messages: {},
};

export default function CreateTruckForm() {
  const [state, formAction, isPending] = useActionState(
    createTruck,
    initialState,
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state?.messages?.license_plate) {
      inputRef.current?.focus();
    }
  }, [state.messages]);

  return (
    <>
      <form action={formAction}>
        <div className="flex flex-col space-y-2 bg-white p-3 rounded-md shadow">
          <label htmlFor="license_plate">เลขป้ายทะเบียน</label>
          <input
            type="text"
            id="license_plate"
            name="license_plate"
            defaultValue=""
            autoFocus
            ref={inputRef}
            className={`bg-white px-2 py-1 rounded-md shadow-sm md:w-80 border border-gray-300 ${state.messages?.license_plate ? "border-red-500" : ""}`}
            placeholder="เลขป้ายทะเบียน ตัวอย่างเช่น 10-1234"
          />
          {state?.messages?.license_plate && (
            <p className="bg-red-100 text-red-500 py-2 px-3 rounded-md border border-red-300 border-l-4 border-l-red-500 text-sm">
              {state.messages.license_plate}
            </p>
          )}
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
