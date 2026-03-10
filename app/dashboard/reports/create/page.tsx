import { getLicensePlate } from "@/actions/ReportAction";
import ReportForm from "@/ui/reports/create/ReportForm";

export default async function CreateReportPage() {
  const trucks = await getLicensePlate();

  return (
    <div className="bg-white rounded-md shadow-md p-5">
      <ReportForm trucks={trucks} />
    </div>
  );
}
