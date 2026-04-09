import { countReports } from "@/actions/ReportAction";
import StatCard from "@/components/StatCard";
import { Wrench } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const pendingCount = await countReports();

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">แดซบอร์ดระบบซ่อมบำรุง</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/dashboard/reports">
          <StatCard
            title="จำนวนที่รอซ่อม"
            className="bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100"
            value={pendingCount}
            icon={<Wrench size={24} />}
          />
        </Link>
      </div>
    </>
  );
}
