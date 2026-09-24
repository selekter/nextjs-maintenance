"use client";

import Alert from "@/components/Alert";
import LoadingPage from "@/components/LoadingPage";
import { signUp } from "@/lib/auth-client";
import { LockKeyhole, Mail, Truck, UserPen } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

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
    <main className="min-h-screen bg-[#f4f7fb] px-5 py-8">
      <div className="grid mx-auto min-h-[calc(100vh-4rem)] max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/10 lg:grid-cols-2">
        <section className="hidden flex-col justify-between bg-[#102a43] p-10 text-white lg:flex">
          <div className="flex items-center gap-3 font-bold">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-500">
              <Truck size={23} />
            </span>
            TruckCare
          </div>
          <div>
            <p className="text-sm font-semibold text-teal-300">
              ยินดีต้อนรับกลับมา
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight">
              ทุกข้อมูลรถ
              <br />
              อยู่ในมือคุณ
            </h1>
            <p className="mt-5 max-w-sm leading-7 text-slate-300">
              ติดตามงานซ่อมและแผนบำรุงรักษาได้อย่างเป็นระบบในพื้นที่เดียว
            </p>
          </div>
          <p className="text-sm text-slate-400">
            ระบบจัดการงานซ่อมบำรุงรถบรรทุก
          </p>
        </section>
        <section className="flex items-center p-7 sm:p-12">
          <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
            {pending && <LoadingPage />}
            <div className="mb-8 lg:hidden flex items-center gap-3 font-bold text-[#102a43]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-600 text-white">
                <Truck size={20} />
              </span>
              TruckCare
            </div>
            <p className="text-sm font-semibold text-teal-700">สมัครสมาชิก</p>
            <p className="mt-2 text-sm text-slate-500">
              กรอกข้อมูลเพื่อสมัครสมาชิก
            </p>

            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}

            <label className="mt-7 block text-sm font-semibold text-slate-700">
              อีเมล
              <div className="relative mt-2">
                <Mail
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
                />
              </div>
            </label>

            <label className="mt-7 block text-sm font-semibold text-slate-700">
              ชื่อผู้ใช้
              <div className="relative mt-2">
                <UserPen
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
                />
              </div>
            </label>

            <label className="mt-5 block text-sm font-semibold text-slate-700">
              รหัสผ่าน
              <div className="relative mt-2">
                <LockKeyhole
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
                />
              </div>
            </label>
            <label className="mt-5 block text-sm font-semibold text-slate-700">
              ยืนยันรหัสผ่าน
              <div className="relative mt-2">
                <LockKeyhole
                  className="absolute left-3 top-3 text-slate-400"
                  size={18}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-50"
                />
              </div>
              {errors?.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword}
                </span>
              )}
            </label>

            <button
              type="submit"
              className={`mt-7 w-full rounded-xl bg-[#147a8a] px-4 py-3 font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:bg-[#0f6674] disabled:cursor-not-allowed disabled:opacity-60`}
              disabled={pending}
            >
              {pending ? "กำลังสมัครสมาชิก..." : "สมัครสมาชิก"}
            </button>
            <p className="mt-6 text-center text-sm text-slate-500">
              เป็นสมาชิคแล้วใช่ไหม ?{" "}
              <Link
                href="/login"
                className="font-semibold text-teal-700 hover:text-teal-800"
              >
                เข้าสู่ระบบ
              </Link>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
