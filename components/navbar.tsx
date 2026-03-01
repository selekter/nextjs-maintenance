"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const NavLink = [
    { name: "dashboard", path: "/dashboard" },
    { name: "พนักงานขับรถ", path: "/dashboard/drivers" },
    { name: "แจ้งซ่อม", path: "/dashboard/reports" },
    { name: "บันทึกการซ่อมบำรุง", path: "/dashboard/repair-history" },
  ];
  return (
    <nav className="bg-neutral-900 text-white sm:min-h-screen sm:w-xs">
      <ul className="flex flex-col gap-1 my-2 sticky top-0">
        {NavLink.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`
                ${pathname === link.path ? "bg-neutral-600" : ""}
                block transition hover:bg-neutral-700 p-2 mx-2 rounded-md`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
