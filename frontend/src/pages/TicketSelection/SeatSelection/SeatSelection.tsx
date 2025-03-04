import { Box, Typography } from "@mui/material";

import { ISeat } from "../../../types/seat";
import { SeatSelectionPropsType } from "../../../types/seat-selection";
import styles from "./SeatSelection.module.scss";

export const SeatSelection: React.FC<SeatSelectionPropsType> = ({ seats }) => {
  const groupSeatsByRow = (seats: ISeat[]) => {
    const grouped: { [key: string]: typeof seats } = {};
    seats.forEach((seat: ISeat) => {
      const rowNumber = seat.id.slice(0, seat.id.length - 1);
      if (!grouped[rowNumber]) {
        grouped[rowNumber] = [];
      }
      grouped[rowNumber].push(seat);
    });
    return grouped;
  };

  const groupedSeats = groupSeatsByRow(seats);

  return (
    <Box className={styles.plane}>
      <Box className={styles.cockpit}>
        <Typography variant="h5" className={styles.title}>
          Valige endale istmed
        </Typography>
      </Box>
      <Box className={`${styles.exit} ${styles.fuselage}`}></Box>
      <ol className={`${styles.cabin} ${styles.fuselage}`}>
        {Object.entries(groupedSeats).map(([row, seats]) => (
          <li key={row} className={styles.row}>
            <ol className={styles.seats} type="A">
              {seats.map((seat: ISeat) => (
                <li key={seat.id} className={styles.seat}>
                  <input
                    type="checkbox"
                    id={seat.id}
                    disabled={seat.isAvailable}
                  />
                  <label
                    htmlFor={seat.id}
                    className={`${seat.isFiltered ? styles.filteredSeat : ""}`}
                  >
                    {seat.id}
                  </label>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
      <Box className={`${styles.exit} ${styles.fuselage}`}></Box>
    </Box>
  );
};
