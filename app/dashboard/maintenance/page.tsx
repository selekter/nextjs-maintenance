import {
  getMaintenanceStatus,
  getTrucks,
} from "@/features/trucks/truck.action";
import { auth } from "@/lib/auth";
import MaintenanceModal from "@/ui/maintenance/MaintenanceModal";
import MaintenanceTable from "@/features/maintenanceStatus/components/MaintenanceTable";
import { headers } from "next/headers";

export default async function MainTenancePage() {
  const maintenanceStatus = await getMaintenanceStatus();
  const trucks = await getTrucks();

  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <>
      {session && <MaintenanceModal trucks={trucks} />}
      <MaintenanceTable data={maintenanceStatus} />
    </>
  );
}
