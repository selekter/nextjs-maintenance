import { getDrivers } from "@/actions/DriverAction";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

interface DriverProp {
  id: number;
  number_plate: string;
  drivers: {
    name: string;
  } | null;
}

export default async function DriverTable() {
  const drivers = (await getDrivers()) as unknown as DriverProp[];
  const session = await getServerSession(authOptions);
  return (
    <div className="rounded-xl overflow-x-auto overflow-y-hidden shadow-md">
      <table className="w-full text-left bg-white table-auto">
        <thead className="bg-blue-200">
          <tr className="">
            <th className="px-6 py-4 font-semibold text-gray-700">ทะเบียน</th>
            <th className="px-6 py-4 font-semibold text-gray-700">
              พนักงานขับรถ
            </th>
            {session && <th className="px-6 py-4 text-right">จัดการ</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {drivers.map((truck, index) => (
            <tr key={index} className="transition hover:bg-blue-100">
              <td className="px-6 py-4 font-medium">{truck.number_plate}</td>
              <td className="px-6 py-4 font-medium">
                {truck.drivers?.name ? (
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
                    {truck.drivers.name}
                  </span>
                ) : (
                  <span className="bg-blue-100 text-red-500 px-3 py-1 rounded-md">
                    ยังไม่มี พขร
                  </span>
                )}
              </td>
              {session && (
                <td className="flex gap-3 justify-end px-6 py-4">
                  <button className="text-blue-500 hover:text-blue-800 cursor-pointer">
                    แก้ไข
                  </button>
                  <button className="text-red-500 hover:text-red-800 cursor-pointer">
                    ลบ
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
