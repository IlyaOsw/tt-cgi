import { ReactNode, useState } from "react";
import {
  SelectChangeEvent,
  Box,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

interface IFilter {
  label: string;
  children: ReactNode;
}

export const Filter: React.FC<IFilter> = ({ label, children }) => {
  const [filter, setFilter] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) =>
    setFilter(event.target.value as string);

  return (
    <Box sx={{ margin: "25px 0px", backgroundColor: "#f8f8f8" }}>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="filter">{label}</InputLabel>
        <Select
          labelId="filter"
          id="filter"
          value={filter}
          onChange={handleChange}
        >
          {children}
        </Select>
      </FormControl>
    </Box>
  );
};
