import { getTires, getTireBrands } from "@/actions/TiresAction";
import { getTrucks } from "@/actions/TruckAction";
import TableSkeleton from "@/components/tableSkeleton";
import TireChangeForm from "@/ui/tirehistory/TireChangeForm";
import TiresTable from "@/ui/tires/TiresTable";
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
