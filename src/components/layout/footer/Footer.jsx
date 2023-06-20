import "./Footer.css";
const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={leftStyle}>
        &copy; 2023 Joquin Gourriet. Todos los derechos reservados.
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#black",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};

const leftStyle = {
  marginRight: "auto",
  color: "white",
};

export default Footer;
