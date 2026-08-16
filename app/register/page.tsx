"use client";

import Alert from "@/components/Alert";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useActionState, useRef, useState } from "react";

type ErrorState = {
  confirmPassword: string;
};

export default function RegisterPage() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<ErrorState>({
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "รหัสไม่ตรงกัน",
      }));
      setPending(false);
      return;
    }

    setErrors({ confirmPassword: "" });

    const res = await signUp.email({
      name: name,
      email: email,
      password: password,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
      setPending(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="p-10 bg-white shadow-lg rounded-xl w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">สมัครสมาชิก</h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
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
            className={`w-full p-2 border-2 rounded outline-0 ${errors?.confirmPassword ? "border-red-500" : "border-gray-200 focus:border-blue-300"}`}
          />
          {errors?.confirmPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={pending}
        >
          {pending ? "กำลังสมัครสมาชิก" : "สมัครสมาชิก"}
        </button>
      </form>
    </div>
  );
}
