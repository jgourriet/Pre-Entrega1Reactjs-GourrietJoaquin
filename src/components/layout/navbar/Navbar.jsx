import { AppBar, Toolbar, Button } from "@mui/material";
import CartWidget from "../../common/cart.Widget/CartWidget";
import "./Navbar.css";
import ItemListContainer from "../../pages/itemList/ItemListContainer";

const Navbar = () => {
  const logoURL =
    "https://res.cloudinary.com/dvpasesj3/image/upload/v1687271891/samples/ecommerce/logo-ECO_bnyqku.png";
  const logoURL2 =
    "https://res.cloudinary.com/dvpasesj3/image/upload/v1687288049/title.logo_eom2ej.png";
  return (
    <div>
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
            <img src={logoURL2} alt="Logo" style={styles.logoImage2} />
          </div>
          <div style={styles.menu}>
            <Button color="inherit" size="small" sx={styles.menuItem}>
              Inicio
            </Button>
            <Button color="inherit" size="small" sx={styles.menuItem}>
              Teclados
            </Button>
            <Button color="inherit" size="small" sx={styles.menuItem}>
              Mouse
            </Button>
            <Button color="inherit" size="small" sx={styles.menuItem}>
              Auriculares
            </Button>
            <Button color="inherit" size="small" sx={styles.menuItem}>
              Monitores
            </Button>
            <Button color="inherit" size="small" sx={styles.menuItem}>
              Pad
            </Button>
            <Button
              variant="contained"
              size="small"
              color="success"
              sx={styles.menuItem}
            >
              Contacto
            </Button>
          </div>
          <CartWidget />
        </Toolbar>
      </AppBar>
      <ItemListContainer />
    </div>
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
  logoImage2: {
    width: "200px",
    height: "40px",
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
    marginRight: "5px",
  },
};

export default Navbar;
