import { getTrucks } from "@/actions/TruckAction";
import { auth } from "@/lib/auth";
import ReportForm from "@/ui/reports/create/ReportForm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function CreateReportPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/login");
  }

  const trucks = await getTrucks();

  return (
    <div className="bg-white rounded-md shadow-md p-5">
      <ReportForm trucks={trucks} />
    </div>
  );
}
