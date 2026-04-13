"use client";

import {
  ClipboardClock,
  Gauge,
  IdCard,
  LifeBuoy,
  PowerOff,
  Truck,
  Wrench,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ session }: { session: any }) {
  const pathname = usePathname();
  const NavLink = [
    { name: "dashboard", path: "/dashboard", icon: <Gauge size={20} /> },
    {
      name: "พนักงานขับรถ",
      path: "/dashboard/drivers",
      icon: <IdCard size={20} />,
    },
    {
      name: "แจ้งซ่อม",
      path: "/dashboard/reports",
      icon: <Wrench size={20} />,
    },
    {
      name: "บันทึกการซ่อมบำรุง",
      path: "/dashboard/repair-history",
      icon: <ClipboardClock size={20} />,
    },
    {
      name: "บันทึกการเปลี่ยนยาง",
      path: "/dashboard/tires",
      icon: <LifeBuoy size={20} />,
    },
    {
      name: "บันทึกเลขไมล์",
      path: "/dashboard/maintenance",
      icon: <Truck size={20} />,
    },
  ];
  return (
    <nav className="bg-neutral-900 text-white sm:min-h-screen sm:w-xs">
      <div className="sticky top-0 flex flex-col justify-between md:h-screen p-2">
        <ul className="flex flex-col gap-1 my-2">
          {NavLink.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`
                ${pathname === link.path ? "bg-neutral-600" : ""}
                block transition hover:bg-neutral-700 p-2 rounded-md`}
              >
                <div className="flex gap-1">
                  {link.icon}
                  {link.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {session && (
          <button
            className="p-1 bg-red-500 hover:bg-red-700 transition w-full md:rounded-md cursor-pointer flex gap-1"
            onClick={() => signOut()}
          >
            <PowerOff size={20} />
            ออกจากระบบ
          </button>
        )}
      </div>
    </nav>
  );
}
