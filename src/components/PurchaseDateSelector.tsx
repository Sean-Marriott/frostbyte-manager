import * as React from "react";
import "dayjs/locale/en-gb";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";

const PurchaseDateSelector = () => {
  const { register, control } = useFormContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <Controller
        name="purchaseDate"
        control={control}
        render={({ field }) => {
          return (
            <DatePicker
              sx={{ width: "100%" }}
              label="Date"
              value={field.value}
              inputRef={field.ref}
              onChange={(date) => {
                field.onChange(date);
              }}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default PurchaseDateSelector;
