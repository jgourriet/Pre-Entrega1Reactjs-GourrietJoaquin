import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = () => {
  const { addToCart } = useContext(CartContext);

  const [producto, setProducto] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
  };

  return (
    <div style={itemDetailContainerStyle}>
    <h2 style={titleStyle}>{producto.title}</h2>
    <h4 style={priceStyle}>{producto.price}</h4>
    <img style={imgStyle}src={producto.img} alt="" />

      <CounterContainer stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};


const itemDetailContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyle = {
  marginTop: "20px",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const priceStyle = {
  fontSize: "18px",
  marginBottom: "20px",

};

const imgStyle ={
  width: '350px',  
  height: 'auto',  
  borderRadius: '8px',
  
};

export default ItemDetail;




