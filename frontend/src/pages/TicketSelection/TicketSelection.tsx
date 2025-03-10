import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box, Card, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";

import { Filter } from "../../components/Filter/Filter";
import { ISeat } from "../../types/seat";
import { IFlight } from "../../types/flight";
import { Loader } from "../../components/Loader/Loader";
import { useFlightContext } from "../../context/FlightContext";

import { TicketInformation } from "./TicketInfromation/TicketInformation";
import { SeatSelection } from "./SeatSelection/SeatSelection";
import styles from "./TicketSelection.module.scss";

const TicketSelection: React.FC = () => {
  const { data, loading } = useFlightContext();
  const [sortedSeats, setSortedSeatsIds] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();

  const getFlightById = (id: string | undefined): IFlight | undefined => {
    return data.find((flight) => flight.id.toString() === id);
  };

  const flight = getFlightById(id);

  const clearFilters = (): void => setSortedSeatsIds([]);

  const sortByWindowSeats = (): void => {
    if (flight) {
      const windowSeatIds = flight.seats
        .filter(
          (seat: ISeat) =>
            ["A", "F"].includes(seat.seatId.slice(-1)) && seat.isAvailable
        )
        .map((seat: ISeat) => seat.seatId);

      setSortedSeatsIds(windowSeatIds);
    }
  };

  const sortByExtraLegroom = (): void => {
    if (flight) {
      const extraLegroomIds = flight.seats
        .filter(
          (seat: ISeat) => parseInt(seat.seatId) === 1 && seat.isAvailable
        )
        .map((seat: ISeat) => seat.seatId);

      setSortedSeatsIds(extraLegroomIds);
    }
  };

  const sortByNearExit = (): void => {
    if (flight) {
      const nearExitIds = flight.seats
        .filter(
          (seat: ISeat) =>
            [1, 6].includes(parseInt(seat.seatId)) && seat.isAvailable
        )
        .map((seat: ISeat) => seat.seatId);

      setSortedSeatsIds(nearExitIds);
    }
  };

  // FIX
  const sortByDoubleSeats = (): void => {
    const doubleSeatsIds: string[] = [];
    if (flight) {
      const groupedSeats = flight.seats.reduce<{ [key: string]: ISeat[] }>(
        (acc, seat) => {
          const row = seat.seatId.slice(0, -1);
          if (!acc[row]) {
            acc[row] = [];
          }
          acc[row].push(seat);
          return acc;
        },
        {}
      );
      Object.values(groupedSeats).forEach((seats) => {
        seats.sort((a, b) => a.seatId.localeCompare(b.seatId));
        for (let i = 0; i < seats.length - 1; i++) {
          const currentSeat = seats[i];
          const nextSeat = seats[i + 1];
          if (
            currentSeat.isAvailable &&
            nextSeat.isAvailable &&
            !["C"].includes(currentSeat.seatId.slice(-1)) &&
            currentSeat.seatId.charCodeAt(currentSeat.seatId.length - 1) + 1 ===
              nextSeat.seatId.charCodeAt(nextSeat.seatId.length - 1)
          ) {
            doubleSeatsIds.push(currentSeat.seatId, nextSeat.seatId);
          }
        }
      });
      setSortedSeatsIds(doubleSeatsIds);
    }
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
      {loading && <Loader />}
      {flight && (
        <Box className={styles.container}>
          <TicketInformation flight={flight} />
          <Card className={styles.card}>
            <CardContent>
              <SeatSelection seats={flight.seats} sortedSeats={sortedSeats} />
            </CardContent>
          </Card>
        </Box>
      )}
    </>
  );
};

export default TicketSelection;
