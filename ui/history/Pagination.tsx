"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  return (
    <div className="flex justify-center gap-2 mt-6">
      <button
        disabled={currentPage <= 1}
        onClick={() => router.push(createPageUrl(currentPage - 1))}
        className="px-4 py-2 bg-gray-100 rounded-md transition cursor-pointer hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
      >
        ก่อนหน้า
      </button>
      <span className="px-4 py-2 text-blue-600 font-bold">
        หน้า {currentPage} จาก {totalPages}
      </span>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => router.push(createPageUrl(currentPage + 1))}
        className="px-4 py-2 bg-gray-100 rounded-md transition cursor-pointer hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
      >
        ถัดไป
      </button>
    </div>
  );
}
