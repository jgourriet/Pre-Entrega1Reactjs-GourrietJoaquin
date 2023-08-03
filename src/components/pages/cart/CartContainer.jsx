import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);

  let total = getTotalPrice()

  const limpiar = ()=>{
    Swal.fire({
      title: 'Seguro quieres limpiar el carrito?',
      showDenyButton: true,
      confirmButtonText: 'Si, eliminar!',
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Carrito limpiado exitosamente', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El carrito queda como estaba', '', 'info')
      }
    })
    
  }

  return (
    <div>
      <h1>Carritoooo</h1>

      {cart.map((elemento) => {
  return (
    <div key={elemento.id} style={styles.cartItem}>
      <h4 style={styles.title}>{elemento.title}</h4>
      <h5 style={styles.price}>Precio: {elemento.price}</h5>
      <h5 style={styles.quantity}>Cantidad: {elemento.quantity}</h5>
      <img style={styles.image} src={elemento.img} alt="" />
      <button style={styles.deleteButton} onClick={() => deleteById(elemento.id)}>Eliminar</button>
      
    </div>
  );
})}

   
   {
    cart.length > 0  && <button onClick={limpiar}>Limpiar carrito</button>
   }

  <h2>El total es: {total}</h2>
  <Link to="/checkout" >Finalizar compra</Link>
    </div>
  );
};

const styles = {
  cartItem: {
    border: "2px solid black",
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  price: {
    fontSize: "1rem",
    marginBottom: "5px",
  },
  quantity: {
    fontSize: "1rem",
    marginBottom: "5px",
  },
  image: {
    width: "200px",
    height: "200px",
    marginBottom: "5px",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default CartContainer;