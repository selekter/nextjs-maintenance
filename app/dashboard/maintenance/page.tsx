import { getMaintenanceStatus } from "@/actions/MaintenanceAction";
import { getTrucks } from "@/actions/TruckAction";
import MaintenanceModal from "@/ui/maintenance/MaintenanceModal";
import MaintenanceTable from "@/ui/maintenance/MaintenanceTable";

export default async function MainTenancePage() {
  const maintenance = await getMaintenanceStatus();
  const truckId = await getTrucks();

  console.log(truckId);

  return (
    <>
      <MaintenanceModal truckid={truckId} />
      <MaintenanceTable data={maintenance} />
    </>
  );
}
