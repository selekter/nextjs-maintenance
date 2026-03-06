import { authOptions } from "@/auth";
import TableSkeleton from "@/components/tableSkeleton";
import DriverTable from "@/ui/drivers/DriverTable";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Suspense } from "react";

export default async function DriverPage() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session && (
        <div className="flex justify-end mb-2 space-x-2">
          <Link
            href="/dashboard/trucks/create"
            className="bg-blue-400 transition hover:bg-blue-600 hover:shadow px-3 py-2 rounded"
          >
            เพิ่มทะเบียน
          </Link>
          <Link
            href="/dashboard/drivers/create"
            className="bg-blue-400 transition hover:bg-blue-600 hover:shadow px-3 py-2 rounded"
          >
            เพิ่ม พขร
          </Link>
        </div>
      )}
      <Suspense fallback={<TableSkeleton />}>
        <DriverTable />
      </Suspense>
    </>
  );
}
