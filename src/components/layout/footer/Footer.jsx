const Footer = () => {
  return (
    <div style={footerContainerStyle}>
      <footer style={footerStyle}>
        <div style={leftStyle}>
          &copy; 2023 Joquin Gourriet. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

const footerContainerStyle = {
  marginTop: "auto",
  left: "0",
  bottom: "0",
  width: "100%",
};

const footerStyle = {
  backgroundColor: "black",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "white",
};

const leftStyle = {
  marginRight: "auto",
};

export default Footer;
