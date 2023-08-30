"use client";
import StyledPaper from "./StyledPaper";
import ConditionSelect from "./ConditionSelect";
import StatusSelect from "./StatusSelect";
import PurchaseDateSelector from "./PurchaseDateSelector";
import {
    Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const PartForm = () => {
  return (
    <Grid container> 
        <Grid container spacing={2} mr={{xs:0, sm:3}}>
        <Grid xs={12}>
        <h1>Add a Part</h1>
      </Grid>
      <Grid>
        <StyledPaper sx={{ borderRadius: 6 }}>
          <form noValidate>
            <Grid container spacing={3} p={1}>
              <Grid xs={12} sm={6}>
                <TextField label="Name" fullWidth />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField label="Description" fullWidth />
              </Grid>
              <Grid xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-price">
                    Price
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-price"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Price"
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} sm={6}>
                <PurchaseDateSelector />
              </Grid>
              <Grid xs={12} sm={6}>
                <ConditionSelect />
              </Grid>
              <Grid xs={12} sm={6}>
                <StatusSelect />
              </Grid>
              <Stack direction={'row-reverse'} sx={{width:'100%'}} pr={1}>
                <Button variant="outlined">Submit</Button>
              </Stack>
            </Grid>
          </form>
        </StyledPaper>
      </Grid>
        </Grid>
        
      
    </Grid>
  );
};

export default PartForm;
