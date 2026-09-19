"use client";

import { signIn } from "@/lib/auth-client";
import LoadingPage from "@/components/LoadingPage";
import { LockKeyhole, Mail, Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); setIsPending(true); setError(null);
    const formData = new FormData(e.currentTarget);
    const result = await signIn.email({ email: formData.get("email") as string, password: formData.get("password") as string });
    if (result?.error) { setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง"); if (passwordRef.current) passwordRef.current.value = ""; setIsPending(false); return; }
    router.push("/dashboard"); router.refresh();
  };
  return <main className="min-h-screen bg-[#f4f7fb] px-5 py-8"><div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/10 lg:grid-cols-2"><section className="hidden flex-col justify-between bg-[#102a43] p-10 text-white lg:flex"><div className="flex items-center gap-3 font-bold"><span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-500"><Truck size={23} /></span>FleetCare</div><div><p className="text-sm font-semibold text-teal-300">ยินดีต้อนรับกลับมา</p><h1 className="mt-3 text-4xl font-bold leading-tight">ทุกข้อมูลรถ<br />อยู่ในมือคุณ</h1><p className="mt-5 max-w-sm leading-7 text-slate-300">ติดตามงานซ่อมและแผนบำรุงรักษาได้อย่างเป็นระบบในพื้นที่เดียว</p></div><p className="text-sm text-slate-400">ระบบจัดการงานซ่อมบำรุงรถบรรทุก</p></section><section className="flex items-center p-7 sm:p-12"><form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">{isPending && <LoadingPage />}<div className="mb-8 lg:hidden flex items-center gap-3 font-bold text-[#102a43]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-600 text-white"><Truck size={20} /></span>FleetCare</div><p className="text-sm font-semibold text-teal-700">เข้าสู่ระบบ</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-[#102a43]">ยินดีต้อนรับ</h2><p className="mt-2 text-sm text-slate-500">กรอกข้อมูลเพื่อเข้าสู่แดชบอร์ด</p>{error && <p role="alert" className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}<label className="mt-7 block text-sm font-semibold text-slate-700">อีเมล<div className="relative mt-2"><Mail className="absolute left-3 top-3 text-slate-400" size={18} /><input name="email" type="email" placeholder="name@company.com" required autoFocus className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-50" /></div></label><label className="mt-5 block text-sm font-semibold text-slate-700">รหัสผ่าน<div className="relative mt-2"><LockKeyhole className="absolute left-3 top-3 text-slate-400" size={18} /><input name="password" type="password" placeholder="••••••••" ref={passwordRef} required className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-50" /></div></label><button type="submit" disabled={isPending} className="mt-7 w-full rounded-xl bg-[#147a8a] px-4 py-3 font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:bg-[#0f6674] disabled:cursor-not-allowed disabled:opacity-60">{isPending ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}</button><p className="mt-6 text-center text-sm text-slate-500">ยังไม่มีบัญชี? <Link href="/register" className="font-semibold text-teal-700 hover:text-teal-800">สมัครสมาชิก</Link></p></form></section></div></main>;
}
