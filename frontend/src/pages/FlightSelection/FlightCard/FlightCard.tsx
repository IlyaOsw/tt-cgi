import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import { IFlightCard } from "../../../types/flight-card";
import { convertMinutesToHours } from "../../../utils/convert-minutes-to-hours";
import { convertTime } from "../../../utils/convert-time";

import styles from "./FlightCard.module.scss";

export const FlightCard: React.FC<IFlightCard> = ({ flight }) => {
  return (
    <Card className={styles.container}>
      <CardActionArea>
        <Link to={`/ticket/${flight.id}`}>
          <CardContent className={styles.card}>
            <Box>
              <Typography variant="h6">{flight.departureLocation}</Typography>
              <Typography variant="body1">
                {convertTime(flight.departureDatetime)}
              </Typography>
            </Box>
            <Box className={styles.pricaAndDuration}>
              <Typography variant="h6">Hind: {flight.price}€</Typography>
              <Box className={styles.lineHorizontal} />
              <Typography variant="body1">
                Lennuaeg {convertMinutesToHours(flight.duration)}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">{flight.arrivalLocation}</Typography>
              <Typography variant="body1">
                {convertTime(flight.arrivalDatetime)}
              </Typography>
            </Box>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
