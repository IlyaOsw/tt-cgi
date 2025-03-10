import { useState } from "react";
import { Button, Modal, Backdrop, Fade, Box, Typography } from "@mui/material";

import { TicketPurchasePropsType } from "../../../../types/ticket-purchase";

import styles from "./TicketPurchase.module.scss";

export const TicketPurchase: React.FC<TicketPurchasePropsType> = ({
  seatCount,
  flight,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        color="success"
        fullWidth
        onClick={handleOpen}
      >
        Osta piletid
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className={styles.modal}>
            <Typography variant="h5">Aitäh ostu eest!</Typography>
            <Typography variant="h6">
              Ostsite {seatCount} pilet{seatCount > 1 ? "it" : ""} hinnaga{" "}
              {seatCount * flight.price}€.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
