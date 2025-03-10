import { Box, Typography } from "@mui/material";

import { SeatSelectionPropsType } from "../../../types/seat-selection";
import { groupSeatsByRow } from "../../../utils/group-seats";

import styles from "./SeatSelection.module.scss";

export const SeatSelection: React.FC<SeatSelectionPropsType> = ({
  seats,
  sortedSeats,
}) => {
  const groupedSeats = groupSeatsByRow(seats);

  return (
    <>
      <Box className={styles.cockpit}>
        <Typography variant="h5" className={styles.title}>
          Valige endale istmed
        </Typography>
      </Box>
      <Box className={`${styles.exit} ${styles.fuselage}`}></Box>
      <ol className={`${styles.cabin} ${styles.fuselage}`}>
        {/* AI */}
        {Object.entries(groupedSeats).map(([row, seats]) => (
          <li key={row} className={styles.row}>
            <ol className={styles.seats}>
              {seats.map(({ id, seatId, isAvailable }) => (
                <li key={id} className={styles.seat}>
                  <input type="checkbox" id={seatId} disabled={!isAvailable} />
                  <label
                    htmlFor={seatId}
                    className={
                      sortedSeats.includes(seatId) ? styles.filteredSeat : ""
                    }
                  >
                    {seatId}
                  </label>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
      <Box className={`${styles.exit} ${styles.fuselage}`}></Box>
    </>
  );
};
