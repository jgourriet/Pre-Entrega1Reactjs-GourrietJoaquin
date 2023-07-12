const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div style={counterContainerStyle}>
      <button style={buttonStyle} onClick={sumar}>
        Sumar
      </button>
      <h3>{contador}</h3>
      <button style={buttonStyle} onClick={restar}>
        Restar
      </button>

      <button style={addToCartButtonStyle} onClick={() => onAdd(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

const counterContainerStyle = {
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const buttonStyle = {
  backgroundColor: "steelblue",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  margin: "10px",
  cursor: "pointer",
};

const addToCartButtonStyle = {
  backgroundColor: "steelblue",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  margin: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Counter;
