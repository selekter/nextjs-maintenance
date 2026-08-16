import { prisma } from "@/lib/prisma";

export const dashboardRepository = {
  async countReports() {
    return await prisma.truck.count({
      where: {
        reports: {
          some: {
            status: 0,
          },
        },
      },
    });
  },
};
