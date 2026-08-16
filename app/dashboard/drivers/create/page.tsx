import { getTrucks } from "@/features/trucks/truck.action";
import { auth } from "@/lib/auth";
import CreateDriverForm from "@/features/drivers/components/drivers/create/DriverCreate";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function CreateDriverPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  const licensePlate = await getTrucks();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <CreateDriverForm licensePlate={licensePlate} />
    </>
  );
}
