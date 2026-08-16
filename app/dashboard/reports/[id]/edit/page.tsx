import { getReportsById } from "@/features/report/report.actions";
import ReportEditForm from "@/features/report/components/ReportEditForm";
import { redirect } from "next/navigation";

export default async function EditReportPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const report = await getReportsById(id);

  if (!report || report.length === 0) {
    redirect("/dashboard/reports");
  }

  return (
    <>
      <ReportEditForm report={report} truckId={id} />
    </>
  );
}
