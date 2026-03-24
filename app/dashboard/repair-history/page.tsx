import { getGroupedRepairHistory } from "@/actions/ReportAction";
import { GroupedReport } from "@/types";
import HistoryTable from "@/ui/history/HistoryTable";
import Pagination from "@/ui/history/Pagination";
import Search from "@/ui/history/Search";

export default async function repairHistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; query?: string }>;
}) {
  const { page, query } = await searchParams;
  const currentPage = Number(page) || 1;
  const searchQuery = query || "";

  const { data, totalPages } = (await getGroupedRepairHistory(
    currentPage,
    10,
    searchQuery,
  )) as {
    data: GroupedReport[];
    totalPages: number;
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">ประวัติการซ่อม</h1>
        <div className="w-full md:w-96">
          <Search />
        </div>
      </div>
      <HistoryTable repairHistory={data} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
