import React from "react";
import {
  SelectChangeEvent,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import styles from "./Filter.module.scss";

export const Filter: React.FC = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box className={styles.container}>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="filter">Sorteeri lennud</InputLabel>
        <Select
          labelId="filter"
          id="filter"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Hinna järgi kasvavalt</MenuItem>
          <MenuItem value={2}>Hinna järgi kahanevalt</MenuItem>
          <MenuItem value={3}>Kõige lähemal</MenuItem>
          <MenuItem value={4}>Kõige kaugemal</MenuItem>
          <MenuItem value={5}>Kõige kiirem</MenuItem>
          <MenuItem value={6}>Kõige pikem</MenuItem>
          <MenuItem value={7}>Tähestikulises järjekorras</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
