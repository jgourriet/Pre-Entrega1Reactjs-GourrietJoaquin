import { useState } from "react";
import CartWidget from "../../common/cart.Widget/CartWidget";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logoURL2 = "https://res.cloudinary.com/dvpasesj3/image/upload/v1691194899/SEA-REACTJS_hbji2e.png";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  

  return (
    <div>
      <AppBar style={navStyle} position="static">
        <Toolbar>
        <Link to="/">
            <div style={logoContainer}>
              <img src={logoURL2} alt="Logo" style={logoImage} />
            </div>
          </Link>
          <List sx={{ display: "flex", flexDirection: "row", marginLeft: "auto", }}>
            <ListItem button sx={{ display: { xs: "none", md: "block",}, }}>
              <Link to="/" style={{ textDecoration: "none", color:"white" }}>
                <ListItemText primary="Todo" />
              </Link>
            </ListItem>
            <ListItem button sx={{ display: { xs: "none", md: "block" } }}>
              <Link to="/category/teclados" style={{ textDecoration: "none", color:"white" }}>
                <ListItemText primary="Teclados" />
              </Link>
            </ListItem>
            <ListItem button sx={{ display: { xs: "none", md: "block" } }}>
              <Link to="/category/mouse" style={{ textDecoration: "none", color:"white" }}>
                <ListItemText primary="Mouse" />
              </Link>
            </ListItem>
            <ListItem button sx={{ display: { xs: "none", md: "block" } }}>
              <Link to="/category/auriculares" style={{ textDecoration: "none", color:"white" }}>
                <ListItemText primary="Auriculares" />
              </Link>
            </ListItem>
            <ListItem button sx={{ display: { xs: "none", md: "block" } }}>
              <Link to="/category/monitores" style={{ textDecoration: "none", color:"white" }}>
                <ListItemText primary="Monitores" />
              </Link>
            </ListItem>
            <ListItem button sx={{ display: { xs: "none", md: "block" } }}>
              <Link to="/category/pad" style={{ textDecoration: "none", color:"white" }}>
                <ListItemText primary="Pad" />
              </Link>
            </ListItem>
          </List>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ display: { xs: 'block', md: 'none' }, marginRight: '10px' }}
          >
            <MenuIcon />
          </IconButton>
          <CartWidget />
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={isMenuOpen} onClose={closeMenu}>
        <List style={navStyleM}>
          <ListItem onClick={closeMenu} button component={Link} to="/" sx={linkStyle}>
            <ListItemText primary="Todo" />
          </ListItem>
          <ListItem onClick={closeMenu} button component={Link} to="/category/teclados">
            <ListItemText primary="Teclados" />
          </ListItem>
          <ListItem onClick={closeMenu} button component={Link} to="/category/mouse">
            <ListItemText primary="Mouse" />
          </ListItem>
          <ListItem onClick={closeMenu} button component={Link} to="/category/auriculares">
            <ListItemText primary="Auriculares" />
          </ListItem>
          <ListItem onClick={closeMenu} button component={Link} to="/category/monitores">
            <ListItemText primary="Monitores" />
          </ListItem>
          <ListItem onClick={closeMenu} button component={Link} to="/category/pad">
            <ListItemText primary="Pad" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

const navStyle = {
  backgroundColor: "#000", // Fondo negro
  color: "#fff", // Texto blanco
};
const navStyleM = {
  backgroundColor: "#000", // Fondo negro
  color: "#fff", // Texto blanco
  padding: "10px"
  
};
const logoContainer = {
    display: "flex",
    alignItems: "center",
  }
 const logoImage= {
  width: "150px",
  height: "80px",
  margin: "10px",
}
const linkStyle = {
  textDecoration: "none", // Quitar subrayado del enlace
  color: "black", // Color del texto del enlace
  padding: "10px",
}
export default Navbar;
