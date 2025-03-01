import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

import styles from "./FlightCard.module.scss";

export const FlightCard: React.FC = () => {
  return (
    <>
      <Card className={styles.cardContainer}>
        <CardActionArea>
          <CardContent className={styles.card}>
            <div className={styles.departure}>
              <Typography variant="h6">Tallinn</Typography>
              <Typography variant="body1">12:00 | 2.03.2025</Typography>
            </div>
            <div className={styles.onTheWay}>
              <Typography variant="h6">100 €</Typography>
              <div className={styles.lineHorizontal}></div>
              <Typography variant="body1">Lennuaeg 1:30</Typography>
            </div>
            <div className={styles.destination}>
              <Typography variant="h6">Stockholm</Typography>
              <Typography variant="body1">13:30 | 2.03.2025</Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={styles.cardContainer}>
        <CardActionArea>
          <CardContent className={styles.card}>
            <div className={styles.departure}>
              <Typography variant="h6">Tallinn</Typography>
              <Typography variant="body1">12:00 | 2.03.2025</Typography>
            </div>
            <div className={styles.onTheWay}>
              <Typography variant="h6">100 €</Typography>
              <div className={styles.lineHorizontal}></div>
              <Typography variant="body1">Lennuaeg 1:30</Typography>
            </div>
            <div className={styles.destination}>
              <Typography variant="h6">Stockholm</Typography>
              <Typography variant="body1">13:30 | 2.03.2025</Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
