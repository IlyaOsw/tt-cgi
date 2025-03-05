import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { Link } from "react-router-dom";
import { convertMinutesToHours } from "../../../utils/convert-minutes-to-hours";

import styles from "./TicketInformation.module.scss";
import { TicketInformationPropsType } from "types/ticket-information";
import { TicketPurchase } from "./TicketPurchase/TicketPurchase";
import { convertTime } from "../../../utils/convert-time";

export const TicketInformation: React.FC<TicketInformationPropsType> = ({
  flight,
}) => {
  const [seatCount, setSeatCount] = useState<number>(1);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setSeatCount(event.target.value as number);
  };

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h5">
          Lend algab - {flight.departureLocation} | Sihtkoht -{" "}
          {flight.arrivalLocation}
        </Typography>
        <Typography variant="h6">
          Väljumine | {convertTime(flight.departureDateTime)}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Saabumine | {convertTime(flight.arrivalDateTime)}
        </Typography>
        <Typography variant="h6">
          Lennuaeg | {convertMinutesToHours(flight.duration)}
        </Typography>
        <Divider />
        <Box className={styles.seatCount}>
          <Typography variant="h5">Osta pilet</Typography>
          <FormControl fullWidth>
            <InputLabel>Kogus</InputLabel>
            <Select value={seatCount} label="count" onChange={handleChange}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h5" gutterBottom>
            Hind: {seatCount * flight.price}€
          </Typography>
        </Box>
        <TicketPurchase seatCount={seatCount} flight={flight} />
        <Divider />
        <Link to="/">
          <Button variant="contained" fullWidth>
            Tagasi lennuvaliku juurde
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
