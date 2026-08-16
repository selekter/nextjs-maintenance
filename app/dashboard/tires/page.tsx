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

  console.log(tires);

  // const tireGrouped = Object.values(
  //   tires.reduce<Record<string, TireGrouped>>((acc: any, item: any) => {
  //     const date = new Date(item.change_date).toISOString().split("T")[0];

  //     const plate = item.truck.license_plate;

  //     const key = `${plate}-${date}`;

  //     if (!acc[key]) {
  //       acc[key] = {
  //         date,
  //         license_plate: plate,
  //         mileage: item.mileage_at_change,
  //         tires: [],
  //       };
  //     }

  //     acc[key].tires.push({
  //       position: item.position,
  //       brand: item.brand.name,
  //       tire_code: item.tire_code,
  //     });

  //     return acc;
  //   }, {}),
  // );

  return (
    <>
      <Suspense fallback={<TableSkeleton />}>
        <TiresTable tires={tires} trucks={trucks} brands={brands} />
      </Suspense>
    </>
  );
}
