"use client";

import { MenuItem, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const options = [
  {
    label: "New",
    value: "New",
  },
  {
    label: "Used",
    value: "Used",
  },
  {
    label: "Faulty",
    value: "Faulty",
  },
  {
    label: "Test",
    value: "Test",
  },
];

export default function ConditionSelect() {
	const { register, control, formState } = useFormContext();
	const { errors } = formState;

  return (
    <TextField
      select
      fullWidth
      label="Condition"
      defaultValue=""
      inputProps={register("condition", {
        required: "Please enter a condition",
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
