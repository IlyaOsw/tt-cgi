import { Box } from "@mui/material";

import styles from "./Loader.module.scss";

export const Loader: React.FC = () => {
  return (
    <Box className={styles.wrapper}>
      <span className={styles.loader}></span>
      <span className={styles.text}>Laadimine...</span>
    </Box>
  );
};
