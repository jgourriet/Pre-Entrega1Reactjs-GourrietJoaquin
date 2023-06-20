import { Box, Typography } from "@mui/material";

const ItemList = ({ greeting }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        padding: 2,
        borderRadius: 5,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h1">
        {greeting}
      </Typography>
    </Box>
  );
};
export default ItemList;
