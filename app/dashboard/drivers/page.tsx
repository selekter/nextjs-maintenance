import TableSkeleton from "@/components/tableSkeleton";
import DriverTable from "@/ui/drivers/DriverTable";
import Link from "next/link";
import { Suspense } from "react";

export default function DriverPage() {
  return (
    <>
      <div className="flex justify-end mb-2">
        <Link
          href="/dashboard/drivers/create"
          className="bg-blue-400 transition hover:bg-blue-600 hover:shadow px-3 py-2 rounded"
        >
          เพิ่ม พขร
        </Link>
      </div>
      <Suspense fallback={<TableSkeleton />}>
        <DriverTable />
      </Suspense>
    </>
  );
}
