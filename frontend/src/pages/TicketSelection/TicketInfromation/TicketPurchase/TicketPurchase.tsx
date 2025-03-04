import { useState } from "react";
import { Button, Modal, Backdrop, Fade, Box, Typography } from "@mui/material";
import { TicketPurchasePropsType } from "../../../../types/ticket-purchase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Aitäh ostu eest!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Ostsite {seatCount} pilet{seatCount > 1 ? "it" : ""} hinnaga{" "}
              {seatCount * flight.price}€.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
