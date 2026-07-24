"use client";

import { signOut } from "@/lib/auth-client";
import { cn } from "@/lib/utility";
import {
  ClipboardClock,
  Gauge,
  IdCard,
  LifeBuoy,
  Menu,
  PowerOff,
  Truck,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar({ session }: { session: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
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

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh();
        },
      },
    });
  };
  return (
    <>
      {/* ปุ่ม Hamburger - แสดงเฉพาะจอเล็ก */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-30 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md md:hidden"
        aria-label="เปิดเมนู"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay - แสดงเฉพาะตอนเปิดในจอเล็ก */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 bg-neutral-900 h-screen text-white w-64 transform transition-transform ease-in-out md:static md:translate-x-0 md:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <ul className="flex flex-col gap-1 my-2">
          {NavLink.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={cn(
                  "block transition hover:bg-neutral-700 p-2 rounded-md",
                  pathname === link.path ? "bg-neutral-600" : "",
                )}
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
            onClick={handleSignOut}
          >
            <PowerOff size={20} />
            ออกจากระบบ
          </button>
        )}
        {/* </div> */}
      </aside>
    </>
  );
}
