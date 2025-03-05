import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box, Card, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";

import { Filter } from "../../components/Filter/Filter";
import { mockData } from "../../store";
import { SeatSelection } from "./SeatSelection/SeatSelection";
import { ISeat } from "types/seat";

import { TicketInformation } from "./TicketInfromation/TicketInformation";
import styles from "./TicketSelection.module.scss";

const TicketSelection: React.FC = () => {
  const [sortedSeats, setSortedSeatsIds] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();

  const flight = mockData.find((flight) => flight.id === Number(id));

  const clearFilters = (): void => setSortedSeatsIds([]);

  const sortByWindowSeats = (): void => {
    const windowSeatIds = flight!.seats
      .filter(
        (seat) => ["A", "F"].includes(seat.id.slice(-1)) && seat.isAvailable
      )
      .map((seat) => seat.id);

    setSortedSeatsIds(windowSeatIds);
  };

  const sortByExtraLegroom = (): void => {
    const extraLegroomIds = flight!.seats
      .filter((seat) => parseInt(seat.id) === 1 && seat.isAvailable)
      .map((seat) => seat.id);

    setSortedSeatsIds(extraLegroomIds);
  };

  const sortByNearExit = (): void => {
    const nearExitIds = flight!.seats
      .filter((seat) => [1, 6].includes(parseInt(seat.id)) && seat.isAvailable)
      .map((seat) => seat.id);

    setSortedSeatsIds(nearExitIds);
  };

  // FIX
  const sortByDoubleSeats = (): void => {
    const doubleSeatsIds: string[] = [];

    const groupedSeats = flight!.seats.reduce<{ [key: string]: ISeat[] }>(
      (acc, seat) => {
        const row = seat.id.slice(0, -1);
        if (!acc[row]) {
          acc[row] = [];
        }
        acc[row].push(seat);
        return acc;
      },
      {}
    );

    Object.values(groupedSeats).forEach((seats) => {
      seats.sort((a, b) => a.id.localeCompare(b.id));

      for (let i = 0; i < seats.length - 1; i++) {
        const currentSeat = seats[i];
        const nextSeat = seats[i + 1];

        if (
          currentSeat.isAvailable &&
          nextSeat.isAvailable &&
          !["C"].includes(currentSeat.id.slice(-1)) &&
          currentSeat.id.charCodeAt(currentSeat.id.length - 1) + 1 ===
            nextSeat.id.charCodeAt(nextSeat.id.length - 1)
        ) {
          doubleSeatsIds.push(currentSeat.id, nextSeat.id);
        }
      }
    });

    setSortedSeatsIds(doubleSeatsIds);
  };

  return (
    <>
      <Filter label="Sorteeri istekoha(d)">
        <MenuItem value="" onClick={clearFilters}>
          <em>Tühista filtrid</em>
        </MenuItem>
        <MenuItem value="isNearWindow" onClick={sortByWindowSeats}>
          Istekoht akna all
        </MenuItem>
        <MenuItem value="isExtraLegroom" onClick={sortByExtraLegroom}>
          Rohkem jalaruumi
        </MenuItem>
        <MenuItem value="isNearExit" onClick={sortByNearExit}>
          Lähedal väljapääsule
        </MenuItem>
        <MenuItem value="isDoubleSeat" onClick={sortByDoubleSeats}>
          Istekohad kõrvuti
        </MenuItem>
      </Filter>
      <Box className={styles.container}>
        <TicketInformation flight={flight!} />
        <Card className={styles.card}>
          <CardContent>
            <SeatSelection seats={flight!.seats} sortedSeats={sortedSeats} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default TicketSelection;
