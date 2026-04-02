import { getTires } from "@/actions/TiresAction";
import LinkButton from "@/components/LinkButton";
import TableSkeleton from "@/components/tableSkeleton";
import TiresTable from "@/ui/tires/TiresTable";
import { Suspense } from "react";

export default async function TiresPage() {
  const tires = await getTires();

  // console.log(tires);

  return (
    <>
      {/* <div className="flex justify-end mb-2">
        <LinkButton
          href="/dashboard/tires/create"
          className="bg-blue-400 hover:bg-blue-600 px-3 py-2"
        >
          Create Tires
        </LinkButton>
      </div> */}
      <Suspense fallback={<TableSkeleton />}>
        <TiresTable tires={tires} />
      </Suspense>
    </>
  );
}
