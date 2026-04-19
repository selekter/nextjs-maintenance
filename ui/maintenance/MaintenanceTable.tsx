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
    if (remaining <= 2000)
      return {
        label: "ใกล้ถึงรอบ",
        color: "text-yellow-500",
        bg: "bg-yellow-100",
      };
    return { label: "ปกติ", color: "text-green-600", bg: "bg-green-100" };
  };
  return (
    <div className="space-y-4">
      {data.map((truck) => {
        const isUpdatedToday =
          truck.updated_at &&
          new Date(truck.updated_at).toDateString() ===
            new Date().toDateString();

        return (
          <div
            key={truck.number_plate}
            className="border rounded-lg overflow-hidden bg-white shadow-sm"
          >
            {/* ส่วนหัว: แสดงทะเบียนและเลขไมล์ปัจจุบัน */}
            <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg">
                    🚚 ทะเบียน: {truck.number_plate}
                  </h3>
                  {isUpdatedToday && (
                    <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-md animate-pulse font-bold">
                      NEW
                    </span>
                  )}
                </div>
                {truck.updated_at && (
                  <span className="text-xs text-gray-400">
                    อัพเดทล่าสุด:{" "}
                    {new Date(truck.updated_at).toLocaleString("th-TH", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                )}
              </div>
              <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">
                ไมล์ปัจจุบัน: {truck.current_mileage}
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
                {truck.items
                  .sort((a: any, b: any) => {
                    const order: { [key: string]: number } = {
                      น้ำมันเครื่อง: 1,
                      น้ำมันเกียร์: 2,
                      น้ำมันเฟืองท้าย: 3,
                    };
                    return (order[a.type] || 99) - (order[b.type] || 99);
                  })
                  .map((item: any, idx: number) => {
                    const remaining =
                      item.next_service_at - truck.current_mileage;
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
                        <td
                          className={`p-2 text-center font-bold ${statusColor}`}
                        >
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
        );
      })}
    </div>
  );
}
