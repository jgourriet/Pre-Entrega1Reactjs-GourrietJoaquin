import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import CartWidget from "../../common/cart.Widget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  const logoURL =
    "https://res.cloudinary.com/dvpasesj3/image/upload/v1687271891/samples/ecommerce/logo-ECO_bnyqku.png";
  return (
    <AppBar
      position="static"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Toolbar>
        <div style={styles.logoContainer}>
          <img src={logoURL} alt="Logo" style={styles.logoImage} />
          <Typography
            variant="h6"
            component="h2"
            style={styles.heading}
            className="logo-title"
          >
            Tecno-Media
          </Typography>
        </div>
        <div style={styles.menu}>
          <Button color="inherit" sx={styles.menuItem}>
            Inicio
          </Button>
          <Button color="inherit" sx={styles.menuItem}>
            Acerca de
          </Button>
          <Button color="inherit" sx={styles.menuItem}>
            Servicios
          </Button>
          <Button color="inherit" sx={styles.menuItem}>
            Contacto
          </Button>
        </div>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  navbar: {
    backgroundColor: "black",
    color: "white",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
  heading: {
    margin: 0,
  },
  menu: {
    marginLeft: "auto",
  },
  menuItem: {
    marginLeft: "10px",
  },
};

export default Navbar;
