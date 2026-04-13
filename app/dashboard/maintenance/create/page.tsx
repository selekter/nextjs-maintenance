import { getTrucks } from "@/actions/TruckAction";
import MaintenanceForm from "@/ui/maintenance/MaintenanceForm";

export default async function MainTenanceCreatePage() {
  const trucks = await getTrucks();
  return (
    <>
      <MaintenanceForm trucks={trucks} />
    </>
  );
}
