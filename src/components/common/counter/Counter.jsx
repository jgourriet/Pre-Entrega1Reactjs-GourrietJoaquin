
const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div style={counterContainerStyle}>
      
      
      <button style={buttonStyle} onClick={restar}>
      <span style={buttonTextStyle}>-</span>
      </button>
      <h3>{contador}</h3>
      <button style={buttonStyle} onClick={sumar}>
      <span style={buttonTextStyle}>+</span>
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
  flexDirection: "row",
  alignItems: "center",
};

const buttonStyle = {
  width: "40px",
  height: "40px",
  backgroundColor: "steelblue",
  color: "white",
  border: "none",
  borderRadius: "50%",
  margin: "10px",
  cursor: "pointer",
  transition: "background-color 0.3s"
};
const buttonTextStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  color: "white"
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
