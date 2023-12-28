"use client";
import StyledPaper from "./StyledPaper";
import ConditionSelect from "./ConditionSelect";
import StatusSelect from "./StatusSelect";
import PurchaseDateSelector from "./PurchaseDateSelector";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FormProvider, useForm } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/en-gb";
import PocketBase from "pocketbase";

export type FormValues = {
  name: string;
  description: string;
  price: number;
  purchaseDate: Dayjs;
  condition: string;
  status: string;
};

const pb = new PocketBase("http://127.0.0.1:8090");

const PartForm = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      description: "",
      purchaseDate: dayjs(),
      condition: "",
      status: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: FormValues) => {
    const record = await pb.collection("parts").create({
      name: data.name,
      description: data.description,
      price: data.price,
      purchase_date: data.purchaseDate.toISOString(),
      condition: data.condition,
      status: data.status,
    });
  };

  return (
    <Grid container>
      <Grid container spacing={2} mr={{ xs: 0, sm: 3 }}>
        <Grid xs={12}>
          <h1>Add a Part</h1>
        </Grid>
        <Grid>
          <StyledPaper sx={{ borderRadius: 6 }}>
            <FormProvider {...form}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={3} p={1}>
                  <Grid xs={12} sm={6}>
                    <TextField
                      label="Name"
                      fullWidth
                      {...register("name", {
                        required: "Name is required",
                      })}
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField
                      label="Description"
                      fullWidth
                      {...register("description", {
                        required: "Description is required",
                      })}
                      error={!!errors.description}
                      helperText={errors.description?.message}
                    />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                      {...register("price", {
                        required: "Price is required",
                      })}
                      error={!!errors.price}
                      helperText={errors.price?.message}
                    />
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
                  <Stack
                    direction={"row-reverse"}
                    sx={{ width: "100%" }}
                    pr={1}
                  >
                    <Button type="submit" variant="outlined">
                      Submit
                    </Button>
                  </Stack>
                </Grid>
              </form>
            </FormProvider>
          </StyledPaper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PartForm;
