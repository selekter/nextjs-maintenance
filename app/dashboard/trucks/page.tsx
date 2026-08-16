// import { getDrivers } from "@/actions/DriverAction";
import TableSkeleton from "@/components/tableSkeleton";
import { getTrucks } from "@/features/trucks/truck.action";
import { auth } from "@/lib/auth";
import DriverTable from "@/features/drivers/components/drivers/DriverTable";
import { headers } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

export default async function DriverPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  const trucks = await getTrucks();

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
        <DriverTable trucks={trucks} session={session} />
      </Suspense>
    </>
  );
}
