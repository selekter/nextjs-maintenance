import { getTires, getTireBrands } from "@/actions/TiresAction";
import { getTrucks } from "@/actions/TruckAction";
import TableSkeleton from "@/components/tableSkeleton";
import { TireGrouped } from "@/types";
import TiresTable from "@/ui/tires/TiresTable";
import { Suspense } from "react";

export default async function TiresPage() {
  const [tires, trucks, brands] = await Promise.all([
    getTires(),
    getTrucks(),
    getTireBrands(),
  ]);

  const tireGrouped = Object.values(
    tires.reduce<Record<string, TireGrouped>>((acc: any, item: any) => {
      const date = new Date(item.history.change_date)
        .toISOString()
        .split("T")[0];

      const plate = item.history.truck.number_plate;

      const key = `${plate}-${date}`;

      if (!acc[key]) {
        acc[key] = {
          date,
          plate_number: plate,
          mileage: item.history.mileage_at_change,
          tires: [],
        };
      }

      acc[key].tires.push({
        position: item.position,
        brand: item.brand.name,
        tire_code: item.tire_code,
      });

      return acc;
    }, {}),
  );

  return (
    <>
      <Suspense fallback={<TableSkeleton />}>
        <TiresTable tires={tireGrouped} trucks={trucks} brands={brands} />
      </Suspense>
    </>
  );
}
