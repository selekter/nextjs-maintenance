"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Table";
import { ReportPendingProps } from "@/features/report/report.schemas";
import { useModal } from "@/hooks/useModal";
import Link from "next/link";

export default function ReportTable({
  reports,
  session,
}: {
  reports: ReportPendingProps[];
  session: any;
}) {
  const { isOpen, data, openModal, closeModal } = useModal();

  return (
    <>
      <Table>
        <TableHeader className="bg-blue-200">
          <TableRow>
            <TableHead>ทะเบียน</TableHead>
            <TableHead>รายการแจ้งซ่อม</TableHead>
            {session && <TableHead className="text-right">จัดการ</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports?.map((report) => (
            <tr key={report.id} className="hover:bg-gray-200 transition-colors">
              <TableCell>{report.license_plate}</TableCell>
              <td className="px-6 py-4">
                <span className="flex flex-col gap-2">
                  {report.reports.map((item, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 w-fit px-3 py-1 rounded-md"
                    >
                      {item.repair}
                    </span>
                  ))}
                </span>
              </td>
              {session && (
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3 md:justify-end">
                    <Link
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                      href={`/dashboard/reports/${report.id}/edit`}
                    >
                      แก้ไข
                    </Link>
                    <button className="text-red-500 hover:text-red-700 cursor-pointer">
                      ลบ
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
