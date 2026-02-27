import { db } from "@/libs/db";
import RepairForm from "@/ui/reports/create/RepairForm";
import { RowDataPacket } from "mysql2";

interface TruckProps extends RowDataPacket {
  id: number;
  license_plate: string;
}

export default async function CreateReportPage() {
  const [trucks] = await db.query<TruckProps[]>(
    "SELECT id, license_plate FROM drivers ORDER BY license_plate ASC",
  );

  return (
    <div className="bg-white rounded-md shadow-md p-5">
      <RepairForm trucks={trucks} />
    </div>
  );
}
