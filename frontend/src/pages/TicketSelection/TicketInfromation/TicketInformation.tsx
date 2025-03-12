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
import { TicketInformationPropsType } from "../../../types/ticket-information";
import { convertTime } from "../../../utils/convert-time";

import { TicketPurchase } from "./TicketPurchase/TicketPurchase";
import styles from "./TicketInformation.module.scss";

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
          Alguspunkt - {flight.departureLocation} | Sihtpunkt -{" "}
          {flight.arrivalLocation}
        </Typography>
        <Typography variant="h6">
          Väljumine | {convertTime(flight.departureDatetime)}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Saabumine | {convertTime(flight.arrivalDatetime)}
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
          <Typography variant="h5">
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
