import { Box, Typography } from "@mui/material";
import styles from "./SeatSelection.module.scss";
import { ISeat } from "../../../types/seat";

interface SeatSelectionProps {
  seats: {
    id: string;
    occupied: boolean;
    nearWindow: boolean;
    extraLegroom: boolean;
    nearExit: boolean;
  }[];
}

export const SeatSelection: React.FC<SeatSelectionProps> = ({ seats }) => {
  const groupSeatsByRow = (seats: any) => {
    const grouped: { [key: string]: typeof seats } = {};
    seats.forEach((seat: any) => {
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
                  <label htmlFor={seat.id}>{seat.id}</label>
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
