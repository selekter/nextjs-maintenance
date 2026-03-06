import { authOptions } from "@/auth";
import Navbar from "@/components/navbar";
import { getServerSession } from "next-auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-col sm:flex-row gap-2 bg-neutral-200">
      <Navbar session={session} />
      <main className="p-2 w-full">{children}</main>
    </div>
  );
}
