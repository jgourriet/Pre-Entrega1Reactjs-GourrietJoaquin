import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const ItemList = ({ greeting }) => {
  const [saludo, setSaludo] = useState(greeting);

  const handleClick = () => {
    setSaludo("¡Lo Mejor en Perifericos para tu PC!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url('https://res.cloudinary.com/dvpasesj3/image/upload/v1687290636/Dise%C3%B1o_sin_t%C3%ADtulo_ihzqjh.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: 5,
          py: 2,
          px: 4,
        }}
        onClick={handleClick}
      >
        <Typography variant="h4" component="h1">
          {saludo}
        </Typography>
      </Button>
    </Box>
  );
};

export default ItemList;
