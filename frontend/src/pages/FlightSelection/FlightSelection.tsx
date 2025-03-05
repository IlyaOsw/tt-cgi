import { useState } from "react";
import { MenuItem, Typography } from "@mui/material";

import { IFlight } from "types/flight";
import { FlightCard } from "./FlightCard/FlightCard";

import { mockData } from "../../store";
import { Filter } from "../../components/Filter/Filter";

export const FlightSelection: React.FC = () => {
  const [sortedFlights, setSortedFlights] = useState<IFlight[]>(mockData);

  const clearFilters = (): void => setSortedFlights(mockData);

  const sortByPrice = (): void =>
    setSortedFlights([...mockData].sort((a, b) => a.price - b.price));

  const sortByDate = (): void =>
    setSortedFlights(
      [...mockData].sort(
        (a, b) =>
          new Date(a.departureDateTime).getTime() -
          new Date(b.departureDateTime).getTime()
      )
    );

  const sortByDuration = (): void => {
    setSortedFlights([...mockData].sort((a, b) => a.duration - b.duration));
  };

  const sortByArrivalLocation = (): void =>
    setSortedFlights(
      [...mockData].sort((a, b) =>
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
          Lühike lennuaeg
        </MenuItem>
        <MenuItem value="price" onClick={sortByPrice}>
          Hinna järgi kasvavalt
        </MenuItem>
      </Filter>
      {sortedFlights.length === 0 ? (
        <Typography variant="h5" sx={{ textAlign: "center", color: "#fff" }}>
          Hetkel lende pole.
        </Typography>
      ) : (
        sortedFlights.map((flight: IFlight) => (
          <FlightCard flight={flight} key={flight.id} />
        ))
      )}
    </>
  );
};
