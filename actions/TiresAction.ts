import { prisma } from "@/libs/prisma";

export async function getTires() {
  const tires = await prisma.tires.findMany({
    include: {
      truck: {
        select: {
          number_plate: true,
        },
      },
    },
  });
  return tires;
}
