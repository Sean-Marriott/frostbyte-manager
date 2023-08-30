import RecentOrders from "@/components/RecentOrders";
import Sidebar from "@/components/Sidebar";
import Grid from "@mui/material/Unstable_Grid2";
import DashboardAnalytics from "@/components/DashboardAnalytics";
import PcShowcase from "@/components/PcShowcase";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Grid container sx={{ border: 1 }} columnGap={2}>
      <Grid sx={{ border: 1 }} spacing={2} xs={12} md={9}>
        <Stack spacing={2} sx={{ border: 1 }}>
          <h1>Dashboard</h1>
          <div className="dashboard">
            <DashboardAnalytics />
          </div>
        </Stack>
        <Stack sx={{ border: 1 }}>
          <PcShowcase />
        </Stack>
        <Stack spacing={2} sx={{ border: 1 }}>
          <h2>Recent Orders</h2>
          <div className="recent-orders">
            <RecentOrders />
          </div>
        </Stack>
      </Grid>
      <Grid sx={{border:1}} xs>
        <Sidebar />
      </Grid>
    </Grid>
  );
}
