import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
Button
const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const [producto, setProducto] = useState({});
  const [isZoomed, setIsZoomed] = useState(false); // Nuevo estado para el zoom

  const { id } = useParams();

  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
    toast.success("Producto agregado exitosamente", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const imgStyle = {
    width: isZoomed ? "700px" : "350px",
    height: "auto",
    borderRadius: "8px",
    cursor: "zoom-in",
  };

  return (
    <div style={itemDetailContainerStyle}>
      <div style={imageContainerStyle}>
        <img
          style={imgStyle}
          src={producto.img}
          alt=""
          onClick={toggleZoom} 
        />
      </div>
      <div style={detailsContainerStyle}>
      <Link to="/" style={linkStyle}><Button variant="text">Volver al inicio</Button>
        </Link>
        <h2 style={titleStyle}>{producto.title}</h2>
        <p style={descriptionStyle}>{producto.description}</p>
        <h4 style={priceStyle}>{producto.price}</h4>

        {(typeof totalQuantity === "undefined" || producto.stock > totalQuantity) &&
          producto.stock > 0 && (
            <CounterContainer
              stock={producto.stock}
              onAdd={onAdd}
              initial={totalQuantity}
            />
          )}

        {producto.stock === 0 && <h2>No hay stock</h2>}

        {typeof totalQuantity !== "undefined" &&
          totalQuantity === producto.stock && (
            <h2>Tienes las máximas cantidades en el carrito</h2>
          )}

        <ToastContainer />
      </div>
    </div>
  );
};

const itemDetailContainerStyle = {
  position: "relative",
  top: "60px", // Ajusta la posición para que empiece después del navbar
  left: "0",
  right: "0",
  bottom: "0",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 100px)", // Res
};

const imageContainerStyle = {
  marginRight: "20px",
};

const detailsContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const descriptionStyle = {
  fontSize: "16px",
  marginBottom: "10px",
};

const priceStyle = {
  fontSize: "18px",
  marginBottom: "20px",
};
const linkStyle = {
  position: "absolute",
  top: "20px",
  letft: "100px", // Ajustamos la posición para que esté a la derecha
  fontSize: "16px",
  color: "blue",
  textDecoration: "none",
};

export default ItemDetail;
