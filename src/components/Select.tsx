import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IPerson } from '../interfaces/person';

export default function BasicSelect({ items, value, onChange }: any) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  const names = items.map((item: any) => item.name).sort();

  return (
    <Box sx={{ minWidth: "80%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Imie/Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {
            names.map((name: any, index: number) => (
              <MenuItem key={index} value={items.find((x: { name: any; }) => x.name === name)}>{name}</MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </Box>
  );
}
