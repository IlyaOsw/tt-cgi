import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import { FlightCardPropsType } from "../../../types/flight-card";
import styles from "./FlightCard.module.scss";

export const FlightCard: React.FC<FlightCardPropsType> = ({ flight }) => {
  return (
    <Card className={styles.cardContainer}>
      <CardActionArea>
        <Link to={`/ticket/${flight.id}`}>
          <CardContent className={styles.card}>
            <Box className={styles.departure}>
              <Typography variant="h6">
                From {flight.departureLocation}
              </Typography>
              <Typography variant="body1">
                {flight.departureTime} | {flight.departureDate}
              </Typography>
            </Box>
            <Box className={styles.onTheWay}>
              <Typography variant="h6">{flight.price} €</Typography>
              <Box className={styles.lineHorizontal} />
              <Typography variant="body1">
                Lennuaeg {flight.duration}
              </Typography>
            </Box>
            <Box className={styles.destination}>
              <Typography variant="h6">To {flight.arrivalLocation}</Typography>
              <Typography variant="body1">
                {flight.arrivalTime} | {flight.arrivalDate}
              </Typography>
            </Box>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};
