"use client";

import { Register } from "@/actions/Register";
import Alert from "@/components/Alert";
import { useActionState, useRef, useState } from "react";

export default function RegisterPage() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const values = Object.fromEntries(formData);
      return await Register(values as any);
    },
    null,
  );

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <form
        action={formAction}
        className="p-10 bg-white shadow-lg rounded-xl w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">สมัครสมาชิก</h2>

        {state?.error && (
          <p className="text-red-500 text-sm mb-4 text-center">{state.error}</p>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border-2 border-gray-200 outline-0 focus:border-blue-300 rounded"
        />

        <input
          type="text"
          name="name"
          placeholder="ชื่อผู้ใช้"
          className="w-full p-2 border-2 border-gray-200 outline-0 focus:border-blue-300 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
          className="w-full p-2 border-2 border-gray-200 outline-0 focus:border-blue-300 rounded"
        />
        <div className="">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className={`w-full p-2 border-2 rounded outline-0 ${state?.errors?.confirmPassword ? "border-red-500" : "border-gray-200 focus:border-blue-300"}`}
          />
          {state?.errors?.confirmPassword && (
            <span className="text-red-500 text-sm">
              {state.errors.confirmPassword}
            </span>
          )}
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={isPending}
        >
          {isPending ? "กำลังเข้าสู่ระบบ" : "เข้าสู่ระบบ"}
        </button>
      </form>
    </div>
  );
}
