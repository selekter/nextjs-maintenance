import { getTires } from "@/actions/TiresAction";
import TableSkeleton from "@/components/tableSkeleton";
import TiresTable from "@/ui/tires/TiresTable";
import { Suspense } from "react";

export default async function TiresPage() {
  const tires = await getTires();

  // console.log(tires);

  return (
    <>
      <Suspense fallback={<TableSkeleton />}>
        <TiresTable tires={tires} />
      </Suspense>
    </>
  );
}
