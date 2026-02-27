import { getDrivers } from "@/actions/DriverAction";

interface DriverProp {
  id: number;
  name: string;
  license_plate: string;
}

export default async function DriverTable() {
  const drivers = (await getDrivers()) as DriverProp[];
  return (
    <div className="rounded-xl overflow-x-auto overflow-y-hidden shadow-md">
      <table className="w-full text-left bg-white table-auto">
        <thead className="bg-blue-200">
          <tr className="">
            <th className="px-6 py-4 font-semibold text-gray-700">ทะเบียน</th>
            <th className="px-6 py-4 font-semibold text-gray-700">
              พนักงานขับรถ
            </th>
            <th className="px-6 py-4 text-right">จัดการ</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {drivers.map((driver) => (
            <tr key={driver.id} className="transition hover:bg-blue-100">
              <td className="px-6 py-4 font-medium">{driver.license_plate}</td>
              <td className="px-6 py-4 font-medium">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
                  {driver.name}
                </span>
              </td>
              <td className="flex gap-3 justify-end px-6 py-4">
                <button className="text-blue-500 hover:text-blue-800 cursor-pointer">
                  แก้ไข
                </button>
                <button className="text-red-500 hover:text-red-800 cursor-pointer">
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
