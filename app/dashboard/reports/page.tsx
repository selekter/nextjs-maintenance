import TableSkeleton from "@/components/tableSkeleton";
import ReportTable from "@/ui/reports/ReportTable";
import Link from "next/link";
import { Suspense } from "react";

export default function ReportPage() {
  return (
    <>
      <div className="flex justify-end mb-2">
        <Link
          href="/dashboard/reports/create"
          className="bg-blue-400 transition hover:bg-blue-600 hover:shadow px-3 py-2 rounded"
        >
          แจ้งซ่อม
        </Link>
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <ReportTable />
      </Suspense>
    </>
  );
}
