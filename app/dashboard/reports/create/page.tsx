import { getLicensePlate } from "@/actions/ReportAction";
import RepairForm from "@/ui/reports/create/RepairForm";

export default async function CreateReportPage() {
  const trucks = await getLicensePlate();

  return (
    <div className="bg-white rounded-md shadow-md p-5">
      <RepairForm trucks={trucks} />
    </div>
  );
}
