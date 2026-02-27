import Navbar from "@/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 bg-neutral-100">
      <Navbar />
      <main className="p-2 w-full">{children}</main>
    </div>
  );
}
