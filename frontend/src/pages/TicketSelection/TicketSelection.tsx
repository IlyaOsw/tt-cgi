import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Filter } from "../../components/Filter/Filter";
import { mockData } from "../../store";
import { SeatSelection } from "./SeatSelection/SeatSelection";
import { ISeat } from "../../types/seat";

import { TicketInformation } from "./TicketInfromation/TicketInformation";
import styles from "./TicketSelection.module.scss";

const TicketSelection: React.FC = () => {
  const [sortedSeats, setSortedSeats] = useState<ISeat[]>([]);
  const { id } = useParams<{ id: string }>();

  const flight = mockData.find((flight) => flight.id === Number(id));

  const clearFilters = (): void => {
    setSortedSeats(
      flight!.seats.map((seat) => ({ ...seat, isFiltered: false }))
    );
  };

  const filterByWindowSeats = () => {
    const windowSeats = flight!.seats.map((seat) => ({
      ...seat,
      isFiltered: ["A", "F"].includes(seat.id.slice(-1)) && !seat.isAvailable,
    }));
    setSortedSeats(windowSeats);
  };

  if (!flight) {
    return (
      <Typography variant="h5" sx={{ textAlign: "center", color: "#fff" }}>
        Flight not found
      </Typography>
    );
  }

  return (
    <>
      <Filter label="Sorteeri istekoha(d)">
        <MenuItem value="" onClick={clearFilters}>
          <em>Tühista filtrid</em>
        </MenuItem>
        <MenuItem value="isNearWindow" onClick={filterByWindowSeats}>
          Istekoht akna all
        </MenuItem>
        <MenuItem value="isExtraLegroom" onClick={() => {}}>
          Rohkem jalaruumi
        </MenuItem>
        <MenuItem value="isNearExit" onClick={() => {}}>
          Lähedal väljapääsule
        </MenuItem>
        <MenuItem value="isDoubleSeat" onClick={() => {}}>
          Istekohad kõrvuti
        </MenuItem>
      </Filter>

      <Box className={styles.container}>
        <TicketInformation flight={flight} />
        <Card className={styles.card}>
          <CardContent>
            <SeatSelection
              seats={sortedSeats.length ? sortedSeats : flight.seats}
            />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default TicketSelection;
