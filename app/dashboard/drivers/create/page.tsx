import { getTrucks } from "@/actions/TruckAction";
import { auth } from "@/lib/auth";
import CreateDriverForm from "@/ui/drivers/create/DriverCreate";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function CreateDriverPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  const plateNumber = await getTrucks();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <CreateDriverForm plateNumber={plateNumber} />
    </>
  );
}
