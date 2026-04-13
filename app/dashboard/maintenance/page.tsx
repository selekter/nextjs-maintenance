import { getMaintenanceStatus } from "@/actions/MaintenanceAction";
import MaintenanceTable from "@/ui/maintenance/MaintenanceTable";

export default async function MainTenancePage() {
  const maintenance = await getMaintenanceStatus();
  return (
    <>
      <MaintenanceTable data={maintenance} />
    </>
  );
}
