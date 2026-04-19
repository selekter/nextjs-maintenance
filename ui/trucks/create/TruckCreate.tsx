"use client";

import { createTruck } from "@/actions/TruckAction";
import Alert from "@/components/Alert";
import { useActionState, useEffect, useRef } from "react";

const initialState = {
  errors: {},
  message: "",
};

export default function CreateTruckForm() {
  const [state, formAction, isPending] = useActionState(
    createTruck,
    initialState,
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state?.errors?.license_plate) {
      inputRef.current?.focus();
    }
  }, [state.errors]);

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
            className={`bg-white px-2 py-1 rounded-md shadow-sm md:w-80 border border-gray-300 ${state.errors?.license_plate ? "border-red-500" : ""}`}
            placeholder="เลขป้ายทะเบียน ตัวอย่างเช่น 10-1234"
          />
          {state?.errors?.license_plate && (
            <Alert>{state.errors.license_plate[0]}</Alert>
          )}

          <label htmlFor="current_mileage">เลขไมล์ปัจจุบัน (กม.)</label>
          <input
            type="number"
            id="current_mileage"
            name="current_mileage"
            defaultValue="0"
            className={`bg-white px-2 py-1 rounded-md shadow-sm md:w-80 border border-gray-300 ${state.errors?.current_mileage ? "border-red-500" : ""}`}
            placeholder="เช่น 10000"
          />
          {state?.errors?.current_mileage && (
            <Alert>{state.errors.current_mileage[0]}</Alert>
          )}

          {state.messages && <Alert>{state.messages}</Alert>}
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
