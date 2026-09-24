// import { getTires, getTireBrands } from "@/actions/TiresAction";
// import { getTrucks } from "@/actions/TruckAction";
import TableSkeleton from "@/components/tableSkeleton";
import TiresTable from "@/features/tire/components/TiresTable";
import { getTireBrands, getTires } from "@/features/tire/tire.actions";
import { getTrucks } from "@/features/trucks/truck.action";
import { TireGrouped } from "@/types";
import { Suspense } from "react";

export default async function TiresPage() {
  const [tires, trucks, brands] = await Promise.all([
    getTires(),
    getTrucks(),
    getTireBrands(),
  ]);

  return (
    <>
      <Suspense fallback={<TableSkeleton />}>
        <TiresTable tires={tires} trucks={trucks} brands={brands} />
      </Suspense>
    </>
  );
}
