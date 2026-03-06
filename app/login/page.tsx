"use client"; // เปลี่ยนเป็น Client Component

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // สำคัญ: ปิด redirect เพื่อเช็ค error เอง
    });

    if (result?.error) {
      setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="p-10 bg-white shadow-lg rounded-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">เข้าสู่ระบบ</h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full p-2 border mb-6 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
}
