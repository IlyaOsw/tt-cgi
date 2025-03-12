import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box, Card, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";

import { Filter } from "../../components/Filter/Filter";
import { ISeat } from "../../types/seat";
import { Loader } from "../../components/Loader/Loader";
import { useFlightContext } from "../../context/FlightContext";

import { TicketInformation } from "./TicketInfromation/TicketInformation";
import { SeatSelection } from "./SeatSelection/SeatSelection";
import styles from "./TicketSelection.module.scss";

const TicketSelection: React.FC = () => {
  const { data, loading } = useFlightContext();
  const [sortedSeats, setSortedSeatsIds] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();

  const getFlightById = (id: string | undefined) =>
    data.find((flight) => flight.id.toString() === id);

  const flight = getFlightById(id);

  if (!flight) return;

  const clearFilters = (): void => setSortedSeatsIds([]);

  const sortByWindowSeats = (): void => {
    const windowSeatIds = flight.seats
      .filter(
        (seat) => ["A", "F"].includes(seat.seatId.slice(-1)) && seat.isAvailable
      )
      .map((seat) => seat.seatId);

    setSortedSeatsIds(windowSeatIds);
  };

  const sortByExtraLegroom = (): void => {
    const extraLegroomIds = flight.seats
      .filter((seat) => parseInt(seat.seatId) === 1 && seat.isAvailable)
      .map((seat) => seat.seatId);

    setSortedSeatsIds(extraLegroomIds);
  };

  const sortByNearExit = (): void => {
    const nearExitIds = flight.seats
      .filter(
        (seat) => [1, 6].includes(parseInt(seat.seatId)) && seat.isAvailable
      )
      .map((seat) => seat.seatId);

    setSortedSeatsIds(nearExitIds);
  };

  // AI help
  const sortByDoubleSeats = (): void => {
    const doubleSeatsIds: string[] = [];
    const groupedSeats = flight.seats.reduce<{ [key: string]: ISeat[] }>(
      (acc, seat) => {
        const row = seat.seatId.slice(0, -1);
        (acc[row] = acc[row] || []).push(seat);
        return acc;
      },
      {}
    );

    const checkPair = (left: ISeat, right: ISeat): void => {
      if (left.isAvailable && right.isAvailable) {
        doubleSeatsIds.push(left.seatId, right.seatId);
      }
    };

    Object.values(groupedSeats).forEach((seats) => {
      seats.sort((a, b) => a.seatId.localeCompare(b.seatId));

      if (seats[1]?.isAvailable) {
        checkPair(seats[0], seats[1]);
        checkPair(seats[1], seats[2]);
      }
      if (seats[4]?.isAvailable) {
        checkPair(seats[3], seats[4]);
        checkPair(seats[4], seats[5]);
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
