"use client";

import { CreateDriver } from "@/actions/DriverAction";
import { useActionState } from "react";

const initialState = {
  message: "",
  license_plate: "",
  driver_name: "",
};

export default function CreateDriverForm() {
  const [state, formAction, isPending] = useActionState(
    CreateDriver,
    initialState,
  );
  return (
    <div className="bg-white p-3 md:p-5 rounded-md shadow-md space-y-2">
      <form action={formAction}>
        <div className="flex flex-col gap-3">
          <label className="space-x-1 flex items-center">
            <span>ทะเบียน</span>
            <input
              type="text"
              className="px-3 py-1 border border-neutral-300 rounded-sm w-full md:w-96"
              name="licensePlate"
              key={`plate-${state?.license_plate}`}
              defaultValue={state?.license_plate ?? ""}
            />
          </label>
          <label className="space-x-1 flex items-center">
            <span>ชื่อ พขร</span>
            <input
              type="text"
              className="px-3 py-1 border border-neutral-300 rounded-sm w-full md:w-96"
              name="driverName"
              key={`name-${state?.driver_name}`}
              defaultValue={state?.driver_name ?? ""}
            />
          </label>
          {state?.message && (
            <p className="bg-red-100 text-red-500 py-2 px-3 rounded-md border border-red-300 border-l-4 border-l-red-500 text-sm">
              {state.message}
            </p>
          )}
          <button
            className="sm:w-fit bg-blue-500 hover:shadow-md shadow-blue-500 hover:bg-blue-800 transition px-3 py-1 rounded-md text-white cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            type="submit"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <div className="flex">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/center"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  กำลังเพิ่มข้อมูล...
                </div>
              </>
            ) : (
              "เพิ่มข้อมูล"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
