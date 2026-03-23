import { getTrucks } from "@/actions/TruckAction";
import ReportForm from "@/ui/reports/create/ReportForm";

export default async function CreateReportPage() {
  const trucks = await getTrucks();

  return (
    <div className="bg-white rounded-md shadow-md p-5">
      <ReportForm trucks={trucks} />
    </div>
  );
}
