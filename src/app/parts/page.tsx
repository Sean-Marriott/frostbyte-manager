"use client"
import RecentOrders from "@/components/RecentOrders";
import Grid from "@mui/material/Unstable_Grid2";

export default function partsPage() {
    return (
        <Grid>
            <h1>Recent Orders</h1>
            <RecentOrders />
        </Grid>
    )
}