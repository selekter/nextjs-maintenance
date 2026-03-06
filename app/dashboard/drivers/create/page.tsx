import { getTrucks } from "@/actions/TruckAction";
import { authOptions } from "@/auth";
import CreateDriverForm from "@/ui/drivers/create/DriverCreate";
import { getServerSession } from "next-auth";

export default async function CreateDriverPage() {
  const plateNumber = await getTrucks();
  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <>
      <CreateDriverForm plateNumber={plateNumber} />
    </>
  );
}
