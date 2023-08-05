import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar!",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpiado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div style={styles.container}>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} style={styles.cartItem}>
            <img style={styles.image} src={elemento.img} alt="" />
            <div style={styles.details}>
              <h4 style={styles.title}>{elemento.title}</h4>
              <p style={styles.description}>{elemento.description}</p>
              <h5 style={styles.price}>Precio: {elemento.price}</h5>
              <h5 style={styles.quantity}>Cantidad: {elemento.quantity}</h5>
              <button
                style={styles.deleteButton}
                onClick={() => deleteById(elemento.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
      <h2 style={{ margin: "10px 0" }}>Total de Tu Compra: {total}</h2>
      <div style={styles.cartActions}>
        <Link to="/checkout" style={buttonFinish}>
          Finalizar compra
        </Link>
        {cart.length > 0 && (
          <button onClick={limpiar} style={buttonClean}>
            Limpiar carrito
          </button>
        )}
        <Link to="/" style={buttonLinkStyles}>
          Seguir Comprando
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cartItem: {
    height: "150px",
    padding: "10px",
    marginBottom: "10px",
    marginRight: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "150px",
    height: "100px",
    marginRight: "10px",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginLeft: "10px",
  },
  description: {
    marginLeft: "10px",
  },
  price: {
    fontSize: "1rem",
    marginLeft: "10px",
  },
  quantity: {
    fontSize: "1rem",
    marginLeft: "10px",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
    marginLeft: "10px",
  },
  cartActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
};
const buttonLinkStyles = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "#0077b6",
  color: "white",
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  fontSize: "1rem",
  margin: "10px 0",
};
const buttonFinish = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "green",
  color: "white",
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  fontSize: "1rem",
  margin: "10px 0",
};
const buttonClean = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "red",
  color: "white",
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  fontSize: "1rem",
  margin: "10px",
  cursor: "pointer",
};

export default CartContainer;
