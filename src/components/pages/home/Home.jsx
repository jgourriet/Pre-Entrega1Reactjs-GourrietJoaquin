import "./Home.css";
import { Box, Grid } from "@mui/material";
const Home = () => {
  return (
    <Box>
      <h1>HOME</h1>

      <Grid container>
        <Grid item xs={12} md={6}>
          <h2
            style={{ width: "100%", height: "300px", backgroundColor: "blue" }}
          >
            CAJA UNO
          </h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <h2
            style={{ width: "100%", height: "300px", backgroundColor: "red" }}
          >
            CAJA DOS
          </h2>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
