import Navbar from "@/components/Navbar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="flex flex-col sm:flex-row gap-2 bg-neutral-200">
      <Navbar session={session} />
      <main className="p-2 w-full">{children}</main>
    </div>
  );
}
