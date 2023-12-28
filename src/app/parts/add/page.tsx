import PartForm from "@/components/PartForm";
import { Grid, Box } from "@mui/material";

export default function partsPage() {
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={7}>
        <h1>Parts Table</h1>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Grid>
      <Grid item xs={5}>
        <PartForm />
      </Grid>
    </Grid>
  );
}
