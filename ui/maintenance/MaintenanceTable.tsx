import UpdateMileageBtn from "@/components/UpdateMileageBtn";

// components/MaintenanceGroupedTable.tsx
export default function MaintenanceGroupedTable({ data }: { data: any[] }) {
  const getStatus = (remaining: number) => {
    if (remaining <= 0)
      return {
        label: "ถึงรอบเปลี่ยน",
        color: "text-red-600",
        bg: "bg-red-100",
      };
    if (remaining <= 1000)
      return {
        label: "ใกล้ถึงรอบ",
        color: "text-yellow-500",
        bg: "bg-yellow-100",
      };
    return { label: "ปกติ", color: "text-green-600", bg: "bg-green-100" };
  };
  return (
    <div className="space-y-4">
      {data.map((truck) => (
        <div
          key={truck.number_plate}
          className="border rounded-lg overflow-hidden bg-white shadow-sm"
        >
          {/* ส่วนหัว: แสดงทะเบียนและเลขไมล์ปัจจุบัน */}
          <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
            <h3 className="font-bold text-lg">
              🚚 ทะเบียน: {truck.number_plate}
            </h3>
            <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">
              ไมล์ปัจจุบัน: {truck.current_mileage.toLocaleString()} กม.
            </span>
          </div>

          <UpdateMileageBtn truck={truck} />

          {/* ส่วนเนื้อหา: รายการน้ำมันต่างๆ ของคันนั้น */}
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 border-b text-gray-600">
                <th className="p-2 text-left">ประเภทการบำรุงรักษา</th>
                <th className="p-2 text-right">เปลี่ยนล่าสุด</th>
                <th className="p-2 text-right">รอบถัดไป</th>
                <th className="p-2 text-center">คงเหลือ (กม.)</th>
                <th className="p-2 text-center">สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {truck.items.map((item: any, idx: number) => {
                const remaining = item.next_service_at - truck.current_mileage;
                const statusColor =
                  remaining <= 0
                    ? "text-red-600"
                    : remaining <= 2000
                      ? "text-orange-500"
                      : "text-green-600";

                const status = getStatus(remaining);

                return (
                  <tr
                    key={idx}
                    className="border-b last:border-0 hover:bg-gray-50"
                  >
                    <td className="p-2 font-medium">{item.type}</td>
                    <td className="p-2 text-right text-gray-500">
                      {item.last_service_at}
                    </td>
                    <td className="p-2 text-right font-semibold text-blue-700">
                      {item.next_service_at}
                    </td>
                    <td className={`p-2 text-center font-bold ${statusColor}`}>
                      {remaining.toLocaleString()}
                    </td>
                    <td className={"p-2 text-center"}>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${status.bg} ${status.color}`}
                      >
                        {status.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
