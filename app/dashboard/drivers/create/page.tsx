import { getTrucks } from "@/actions/TruckAction";
import CreateDriverForm from "@/ui/drivers/create/DriverCreate";

export default async function CreateDriverPage() {
  const plateNumber = await getTrucks();

  return (
    <>
      <CreateDriverForm plateNumber={plateNumber} />
    </>
  );
}
