import { useEffect, useState } from "react";
import { MenuItem, Typography } from "@mui/material";

import { IFlight } from "../../types/flight";
import { useFlightContext } from "../../context/FlightContext";
import { Filter } from "../../components/Filter/Filter";
import { Loader } from "../../components/Loader/Loader";

import { FlightCard } from "./FlightCard/FlightCard";

export const FlightSelection: React.FC = () => {
  const { data, loading } = useFlightContext();
  const [filteredData, setFilteredData] = useState<IFlight[]>([]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const clearFilters = (): void => setFilteredData(data);

  const sortByPrice = (): void =>
    setFilteredData([...data].sort((a, b) => a.price - b.price));

  const sortByDate = (): void =>
    setFilteredData(
      [...data].sort(
        (a, b) =>
          new Date(a.departureDatetime).getTime() -
          new Date(b.departureDatetime).getTime()
      )
    );

  const sortByDuration = (): void =>
    setFilteredData([...data].sort((a, b) => a.duration - b.duration));

  const sortByArrivalLocation = (): void =>
    setFilteredData(
      [...data].sort((a, b) =>
        a.arrivalLocation.localeCompare(b.arrivalLocation)
      )
    );

  return (
    <>
      <Filter label="Sorteeri lennud">
        <MenuItem value="" onClick={clearFilters}>
          <em>Tühista filtrid</em>
        </MenuItem>
        <MenuItem value="arrival" onClick={sortByArrivalLocation}>
          Tähestikulises järjekorras
        </MenuItem>
        <MenuItem value="date" onClick={sortByDate}>
          Kuupäeva järgi
        </MenuItem>
        <MenuItem value="duration" onClick={sortByDuration}>
          Lühim lennuaeg
        </MenuItem>
        <MenuItem value="price" onClick={sortByPrice}>
          Hinna järgi kasvavalt
        </MenuItem>
      </Filter>
      {loading ? (
        <Loader />
      ) : data.length === 0 ? (
        <Typography variant="h5" sx={{ textAlign: "center", color: "#fff" }}>
          Hetkel lende pole.
        </Typography>
      ) : (
        filteredData.map((flight: IFlight) => (
          <FlightCard flight={flight} key={flight.id} />
        ))
      )}
    </>
  );
};
