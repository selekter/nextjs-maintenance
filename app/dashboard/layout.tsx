import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({ headers: await headers() });
  return <div className="min-h-screen bg-[#f4f7fb] md:flex"><Navbar session={session} /><main className="w-full px-4 pb-8 pt-20 sm:px-6 md:pt-8 lg:px-10">{children}</main></div>;
}
