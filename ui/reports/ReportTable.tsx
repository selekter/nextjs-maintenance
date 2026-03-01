import { getReports } from "@/actions/ReportAction";
import Link from "next/link";

export default async function ReportTable() {
  const groupedRepairs = await getReports();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-y-hidden overflow-x-auto">
      <table className="text-left w-full table-auto">
        <thead className="bg-blue-200 border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 font-semibold text-gray-700">ทะเบียน</th>
            <th className="px-6 py-4 font-semibold text-gray-700">
              รายการแจ้งซ่อม
            </th>
            <th className="px-6 py-4 text-right">จัดการ</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {/* เปลี่ยนจาก reports เป็น groupedRepairs */}
          {groupedRepairs.map((report, index) => (
            <tr key={index} className="hover:bg-gray-200 transition-colors">
              <td className="px-6 py-4 font-medium">{report.license_plate}</td>
              <td className="px-6 py-4">
                {/* แสดงรายการซ่อมที่รวมกลุ่มแล้ว แยกด้วยจุลภาค หรือทำเป็น Label */}
                <span className="flex flex-col gap-2">
                  {report.repairs.map((item, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 w-fit px-3 py-1 rounded-md"
                    >
                      {item.repair}
                    </span>
                  ))}
                </span>
              </td>
              <td className="px-6 py-4 flex md:justify-end">
                <Link
                  className="text-blue-600 hover:text-blue-800 mr-3 cursor-pointer"
                  href={`/dashboard/reports/${report.id}/edit`}
                >
                  แก้ไข
                </Link>
                <button className="text-red-500 hover:text-red-700 cursor-pointer">
                  ลบ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
