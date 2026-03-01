"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const term = formData.get("query")?.toString();

    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-1 gap-2">
      <div className="relative flex-1">
        <input
          name="query"
          className="bg-white peer block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-blue-500 placeholder:text-gray-500"
          placeholder="ค้นหาทะเบียน หรือรายการซ่อม..."
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
      >
        ค้นหา
      </button>
    </form>
  );
}
