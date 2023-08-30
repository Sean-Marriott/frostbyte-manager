"use client";
import RecentOrders from "@/components/RecentOrders";
import Grid from "@mui/material/Unstable_Grid2";

export default function partsPage() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <h1>Recent Orders</h1>
      </Grid>
      <Grid xs={12}>
        <RecentOrders />
      </Grid>
    </Grid>
  );
}
