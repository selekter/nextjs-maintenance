"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ session }: { session: any }) {
  const pathname = usePathname();
  const NavLink = [
    { name: "dashboard", path: "/dashboard" },
    { name: "พนักงานขับรถ", path: "/dashboard/drivers" },
    { name: "แจ้งซ่อม", path: "/dashboard/reports" },
    { name: "บันทึกการซ่อมบำรุง", path: "/dashboard/repair-history" },
  ];
  return (
    <nav className="bg-neutral-900 text-white sm:min-h-screen sm:w-xs">
      <div className="sticky top-0">
        <ul className="flex flex-col gap-1 my-2">
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

        {session && (
          <button
            className="py-1 bg-red-500 hover:bg-red-700 transition w-full md:rounded-md cursor-pointer"
            onClick={() => signOut()}
          >
            ออกจากระบบ
          </button>
        )}
      </div>
    </nav>
  );
}
