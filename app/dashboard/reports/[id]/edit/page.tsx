import { getReportsById } from "@/actions/ReportAction";
import ReportEditForm from "@/ui/reports/Edit/ReportEditForm";
import { redirect } from "next/navigation";

export default async function EditReportPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const report = await getReportsById(id);
  if (!report) {
    redirect("/dashboard/reports");
  }
  return (
    <>
      <ReportEditForm report={report} />
    </>
  );
}
