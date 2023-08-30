import RecentOrders from "@/components/RecentOrders";
import Sidebar from "@/components/Sidebar";
import Grid from "@mui/material/Unstable_Grid2";
import DashboardAnalytics from "@/components/DashboardAnalytics";
import PcShowcase from "@/components/PcShowcase";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Grid container columnGap={2}>
      <Grid xs={12} md={9}>
        <Stack spacing={2}>
          <Stack spacing={2}>
            <h1>Dashboard</h1>
            <div className="dashboard">
              <DashboardAnalytics />
            </div>
          </Stack>
          <Stack spacing={2}>
            <h2>Current Listings</h2>
            <PcShowcase />
          </Stack>
          <Stack spacing={2}>
            <h2>Recent Orders</h2>
            <div className="recent-orders">
              <RecentOrders />
            </div>
          </Stack>
        </Stack>
      </Grid>
      <Grid xs sx={{mt:2}}>
        <Sidebar />
      </Grid>
    </Grid>
  );
}
