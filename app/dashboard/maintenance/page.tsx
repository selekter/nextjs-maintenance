import { getMaintenanceStatus } from "@/actions/MaintenanceAction";
import { getTrucks } from "@/actions/TruckAction";
import { auth } from "@/lib/auth";
import MaintenanceModal from "@/ui/maintenance/MaintenanceModal";
import MaintenanceTable from "@/ui/maintenance/MaintenanceTable";
import { headers } from "next/headers";

export default async function MainTenancePage() {
  const maintenance = await getMaintenanceStatus();
  const truckId = await getTrucks();

  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <>
      {session && <MaintenanceModal truckid={truckId} />}
      <MaintenanceTable data={maintenance} />
    </>
  );
}
