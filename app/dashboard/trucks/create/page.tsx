import { auth } from "@/lib/auth";
import CreateTruckForm from "@/features/trucks/components/TruckCreate";
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
