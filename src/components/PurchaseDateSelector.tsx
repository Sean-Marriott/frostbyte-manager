import * as React from 'react';
import 'dayjs/locale/en-gb';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl } from '@mui/material';

const PurchaseDateSelector = () => {
  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
          <DatePicker label="Basic date picker" />
      </LocalizationProvider>
    </FormControl>
  );
}

export default PurchaseDateSelector;