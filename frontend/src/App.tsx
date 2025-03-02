import { Typography } from "@mui/material";

import { Routing } from "./routes/Routing";
import styles from "./App.module.scss";

export const App: React.FC = () => {
  return (
    <>
      <Typography className={styles.title} variant="h4">
        CGI suvepraktika provitöö
      </Typography>
      <Routing />
    </>
  );
};
