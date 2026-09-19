"use client";

import { signOut } from "@/lib/auth-client";
import { cn } from "@/lib/utility";
import { ClipboardClock, Gauge, LifeBuoy, Menu, PowerOff, Truck, TruckIcon, Wrench, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "ภาพรวม", path: "/dashboard", icon: Gauge },
  { name: "จัดการรถบรรทุก", path: "/dashboard/trucks", icon: TruckIcon },
  { name: "แจ้งซ่อม", path: "/dashboard/reports", icon: Wrench },
  { name: "ประวัติการซ่อม", path: "/dashboard/repair-history", icon: ClipboardClock },
  { name: "เปลี่ยนยาง", path: "/dashboard/tires", icon: LifeBuoy },
  { name: "บันทึกเลขไมล์", path: "/dashboard/maintenance", icon: Truck },
];

export default function Navbar({ session }: { session: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleSignOut = async () => await signOut({ fetchOptions: { onSuccess: () => { router.push("/login"); router.refresh(); } } });

  return <>
    <button onClick={() => setIsOpen(true)} className="fixed left-4 top-4 z-30 grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden" aria-label="เปิดเมนู"><Menu size={21} /></button>
    {isOpen && <div className="fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm md:hidden" onClick={() => setIsOpen(false)} />}
    <aside className={cn("fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-[#102a43] px-4 py-5 text-white shadow-2xl transition-transform duration-300 md:sticky md:top-0 md:h-screen md:translate-x-0 md:shadow-none", isOpen ? "translate-x-0" : "-translate-x-full")}>
      <div>
        <div className="mb-9 flex items-center justify-between px-2"><Link href="/dashboard" className="flex items-center gap-3 font-bold" onClick={() => setIsOpen(false)}><span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500 text-white"><Truck size={21} /></span><span>FleetCare</span></Link><button onClick={() => setIsOpen(false)} aria-label="ปิดเมนู" className="rounded-lg p-2 text-slate-300 hover:bg-white/10 md:hidden"><X size={20} /></button></div>
        <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">เมนูหลัก</p>
        <nav className="space-y-1">{navLinks.map(({ name, path, icon: Icon }) => <Link key={path} href={path} onClick={() => setIsOpen(false)} className={cn("flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition", pathname === path ? "bg-teal-500 text-white shadow-lg shadow-teal-950/20" : "text-slate-300 hover:bg-white/10 hover:text-white")}><Icon size={19} />{name}</Link>)}</nav>
      </div>
      <div className="border-t border-white/10 pt-4">{session ? <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-rose-500/15 hover:text-rose-200" onClick={handleSignOut}><PowerOff size={19} />ออกจากระบบ</button> : <Link className="block rounded-xl bg-teal-500 px-3 py-3 text-center text-sm font-semibold" href="/login">เข้าสู่ระบบ</Link>}</div>
    </aside>
  </>;
}
