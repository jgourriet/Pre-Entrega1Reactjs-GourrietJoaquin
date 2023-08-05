import { useState } from "react";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      setOpenSnackbar(true); 
    }
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message="Cantidad máxima"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
    </>
  );
};

export default CounterContainer;

