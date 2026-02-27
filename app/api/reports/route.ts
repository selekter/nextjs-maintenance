import { db } from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET() {
  const conn = db();
  const [rows] = await conn.execute(`
    SELECT
      repair_jobs.repair_id,
      repair_jobs.truck_id,
      trucks.license_plate,
      CONCAT(
        '[',
        GROUP_CONCAT(DISTINCT CONCAT('"', repair_jobs.repair_details, '"')),
        ']'
	    ) AS repairs_details
    FROM repair_jobs
    INNER JOIN trucks
    ON trucks.truck_id = repair_jobs.truck_id
    GROUP BY repair_jobs.truck_id`);

  const result = (rows as any[]).map((row) => ({
    truck_id: row.truck_id,
    license_plate: row.license_plate,
    repair_details: JSON.parse(row.repairs_details),
  }));
  return NextResponse.json(result);
}
