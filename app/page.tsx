import { ArrowRight, ClipboardCheck, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: ClipboardCheck,
    title: "ติดตามงานซ่อม",
    detail: "เห็นรายการที่ต้องดำเนินการทันที",
  },
  {
    icon: Truck,
    title: "ข้อมูลรถครบถ้วน",
    detail: "จัดการรถและผู้ขับขี่เป็นระเบียบ",
  },
  {
    icon: ShieldCheck,
    title: "วางแผนล่วงหน้า",
    detail: "รู้รอบบำรุงรักษาก่อนถึงกำหนด",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7fb] text-[#172033]">
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-16">
        <div className="absolute -right-28 top-24 z-0 h-96 w-96 rounded-full bg-teal-200/50 blur-3xl" />
        <nav className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-[#102a43]">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#147a8a] text-white shadow-lg shadow-teal-900/20">
              <Truck size={23} />
            </span>
            <span className="text-lg">TruckCare</span>
          </div>
          <Link
            href="/login"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
          >
            เข้าสู่ระบบ
          </Link>
        </nav>
        <section className="relative z-10 flex flex-1 flex-col justify-center py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              ระบบจัดการงานซ่อมบำรุงรถ
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#102a43] sm:text-5xl lg:text-6xl">
              ดูแลรถทุกคัน
              <br />
              <span className="text-[#147a8a]">ให้พร้อมใช้งานเสมอ</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              จัดการใบแจ้งซ่อม ประวัติการบำรุงรักษา และการเปลี่ยนยางในที่เดียว
              เพื่อให้ทีมทำงานได้รวดเร็วและไม่พลาดทุกกำหนดการสำคัญ
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl bg-[#147a8a] px-5 py-3 font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:-translate-y-0.5 hover:bg-[#0f6674]"
              >
                เริ่มใช้งาน <ArrowRight size={18} />
              </Link>
              <Link
                href="/dashboard"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                ดูแดชบอร์ด
              </Link>
            </div>
          </div>
          <div className="mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur"
              >
                <Icon className="mb-4 text-[#147a8a]" size={22} />
                <h2 className="font-bold text-[#102a43]">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
