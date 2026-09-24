import StatCard from "@/components/StatCard";
import { countReports } from "@/features/dashboard/dashboard.actions";
import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  GitCompareArrows,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type DashboardLink = {
  href: string;
  title: string;
  className: string;
  value: number | string;
  icon: ReactNode;
};

export default async function DashboardPage() {
  const pendingCount = await countReports();

  const dashboardLinks: DashboardLink[] = [
    {
      href: "/dashboard/reports",
      title: "รายการรอซ่อม",
      className: "border-teal-100 bg-teal-50 text-teal-800 hover:bg-teal-100",
      value: pendingCount,
      icon: <Wrench size={24} />,
    },
    {
      href: "/dashboard/repair-history",
      title: "ประวัติการซ่อม",
      className:
        "border-amber-100 bg-amber-50 text-amber-800 hover:bg-amber-100",
      value: "ดูประวัติการซ่อมทั้งหมด",
      icon: <FileText size={24} />,
    },
    {
      href: "/dashboard/maintenance",
      title: "ตรวจสอบรอบบำรุงรักษา",
      className: "border-blue-100 bg-blue-50 text-blue-800 hover:bg-blue-100",
      value: "ดูรายการ",
      icon: <ClipboardCheck size={24} />,
    },
    {
      href: "/dashboard/tires",
      title: "ประวัติเปลี่ยนยาง",
      className:
        "border-olive-100 bg-olive-50 text-olive-800 hover:bg-olive-100",
      value: "ดูประวัติเปลี่ยนยาง",
      icon: <GitCompareArrows size={24} />,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm font-semibold text-teal-700">
            ศูนย์ควบคุมงานซ่อมบำรุง
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#102a43]">
            ภาพรวมระบบ
          </h1>
          <p className="mt-2 text-slate-500">
            ติดตามสถานะรถและจัดการงานสำคัญของวันนี้
          </p>
        </div>
        <Link
          href="/dashboard/reports/create"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#147a8a] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0f6674]"
        >
          แจ้งซ่อมใหม่ <ArrowRight size={17} />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {dashboardLinks.map(({ href, title, className, value, icon }) => (
          <Link href={href} key={href}>
            <StatCard
              title={title}
              className={className}
              value={value}
              icon={icon}
            />
          </Link>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-bold text-[#102a43]">เริ่มต้นอย่างรวดเร็ว</h2>
        <p className="mt-1 text-sm text-slate-500">
          เลือกเมนูด้านซ้ายเพื่อจัดการรถบรรทุก รายการแจ้งซ่อม
          และประวัติการบำรุงรักษา
        </p>
      </div>
    </div>
  );
}
