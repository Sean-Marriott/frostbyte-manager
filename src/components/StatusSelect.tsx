"use client";

import { MenuItem, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const options = [
  {
    label: "Awaiting Dispatch",
    value: "Awaiting Dispatch",
  },
  {
    label: "Shipped",
    value: "Shipped",
  },
  {
    label: "Recieved",
    value: "Recieved",
  }
];

export default function StatusSelect() {
	const { register, control, formState } = useFormContext();
	const { errors } = formState;

  return (
    <TextField
      select
      fullWidth
      label="Status"
      defaultValue=""
      inputProps={register("status", {
        required: "Please enter a status",
      })}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
