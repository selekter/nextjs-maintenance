import { getMaintenanceStatus } from "@/actions/MaintenanceAction";
import MaintenanceModal from "@/ui/maintenance/MaintenanceModal";
import MaintenanceTable from "@/ui/maintenance/MaintenanceTable";

export default async function MainTenancePage() {
  const maintenance = await getMaintenanceStatus();
  return (
    <>
      {/* <MaintenanceModal /> */}
      <MaintenanceTable data={maintenance} />
    </>
  );
}
