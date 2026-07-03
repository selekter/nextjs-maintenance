import { auth } from "@/lib/auth";
import CreateTruckForm from "@/ui/trucks/create/TruckCreate";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function CreateNumberPlatePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <CreateTruckForm />
    </>
  );
}
