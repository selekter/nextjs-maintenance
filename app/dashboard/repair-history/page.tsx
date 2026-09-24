import HistoryTable from "@/ui/history/HistoryTable";
import Pagination from "@/components/Pagination";
import Search from "@/ui/history/Search";
import { getGroupedRepairHistory } from "@/features/report/report.actions";

interface PageProps {
  searchParams: Promise<{ page?: string; search?: string }>;
}

export default async function repairHistoryPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const searchQuery = params.search || "";

  // เรียกใช้ฟังก์ชันผ่าน Feature Queries Layer
  const { data, totalPages } = await getGroupedRepairHistory(
    currentPage,
    10,
    searchQuery,
  );

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
