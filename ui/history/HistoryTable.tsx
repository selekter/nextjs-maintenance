import { GroupedReport } from "@/types";

export default function HistoryTable({
  repairHistory,
}: {
  repairHistory: GroupedReport[];
}) {
  const formatThaiDate = (date: any) => {
    const thaiDate = new Date(date).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "long",
    });

    return thaiDate;
  };

  //* ฟังก์ชั่นสำหรับแปลงเวลาเป็นตัวเลข
  const formatDate = (getDate: any) => {
    const date = new Date(getDate);

    const convertDate = date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return convertDate;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-y-hidden overflow-x-auto">
      <table className="w-full text-left table-auto">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-6 py-4 font-semibold text-gray-700">วันที่</th>
            <th className="px-6 py-4 font-semibold text-gray-700">ทะเบียน</th>
            <th className="px-6 py-4 font-semibold text-gray-700">
              รายการซ่อม
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {repairHistory.length > 0 ? (
            repairHistory.map((group: any) => (
              <tr key={`${group.date}-${group.license_plate_id}`}>
                <td className="px-6 py-4">
                  <div className="group cursor-pointer flex items-center text-center relative">
                    {formatThaiDate(group.date)}
                    <small className="transition duration-1000 hidden group-hover:block absolute -top-5 p-1 text-xs rounded bg-green-200 shadow-xl">
                      {formatDate(group.date)}
                    </small>
                  </div>
                </td>
                <td className="px-6 py-4">{group.number_plate}</td>
                <td className="flex flex-col gap-2 px-6 py-4">
                  {group.repairs.map((item: any, index: any) => (
                    <div key={index}>
                      <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-md">
                        {item.repair}
                      </span>
                      <span></span>
                      {item.description && (
                        <p>
                          <span className="text-red-500 mr-2">หมายเหตุ</span>
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="px-6 py-10 text-center text-gray-500">
                ไม่พบข้อมูลประวัติในหน้านี้
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
