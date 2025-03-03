import MenuItem from "@mui/material/MenuItem";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import { Filter } from "../../components/Filter/Filter";
import { mockData } from "../../store";
import { convertMinutesToHours } from "../../utils/convert-minutes-to-hours";
import { convertTime } from "../../utils/convert-time";
import { SeatSelection } from "./SeatSelection/SeatSelection";
import styles from "./TicketSelection.module.scss";

const TicketSelection: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const flight = mockData.find((flight) => flight.id === Number(id));

  if (!flight) {
    return (
      <Typography variant="h5" sx={{ textAlign: "center", color: "#fff" }}>
        Flight not found
      </Typography>
    );
  }

  return (
    <>
      <Filter label="Sorteeri istekoha(d)">
        <MenuItem value="" onClick={() => {}}>
          <em>Tühista filtrid</em>
        </MenuItem>
        <MenuItem value="isNearWindow" onClick={() => {}}>
          Istekoht akna all
        </MenuItem>
        <MenuItem value="isExtraLegroom" onClick={() => {}}>
          Rohkem jalaruumi
        </MenuItem>
        <MenuItem value="isNearExit" onClick={() => {}}>
          Lähedal väljapääsule
        </MenuItem>
        {/* <MenuItem value="isDoubleSeat" onClick={() => {}}>
          Istekohad kõrvuti
        </MenuItem> */}
      </Filter>
      <Box className={styles.container}>
        <Card className={styles.card}>
          <CardContent>
            <Typography variant="h5">
              Lend algab: {flight.departureLocation} - Sihtkoht:{" "}
              {flight.arrivalLocation}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Hind: {flight.price}€
            </Typography>
            <Typography variant="h6">
              Väljumine: {convertTime(flight.departureDateTime)}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Saabumine: {convertTime(flight.arrivalDateTime)}
            </Typography>
            <Typography variant="h6">
              Lennuaeg: {convertMinutesToHours(flight.duration)}
            </Typography>
          </CardContent>
        </Card>
        <Card className={styles.card}>
          <CardContent>
            <SeatSelection seats={flight.seats} />
          </CardContent>
        </Card>
      </Box>
      <Link to="/">
        <Button variant="contained" fullWidth className={styles.link}>
          Tagasi lennuvaliku juurde
        </Button>
      </Link>
    </>
  );
};

export default TicketSelection;
