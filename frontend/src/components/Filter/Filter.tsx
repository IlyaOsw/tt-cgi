import { ReactNode, useState } from "react";
import {
  SelectChangeEvent,
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
    <FormControl
      variant="filled"
      fullWidth
      sx={{ margin: "15px 0px", backgroundColor: "#f8f8f8" }}
    >
      <InputLabel>{label}</InputLabel>
      <Select id="filter" value={filter} onChange={handleChange}>
        {children}
      </Select>
    </FormControl>
  );
};
