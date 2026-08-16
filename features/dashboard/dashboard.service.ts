import { dashboardRepository } from "./dashboard.repository";

export const DashboardServices = {
  async CountReports() {
    return await dashboardRepository.countReports();
  },
};
