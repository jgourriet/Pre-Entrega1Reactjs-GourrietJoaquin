import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button, TextField, Typography, IconButton, Paper, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  minHeight: "100vh",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "2px solid #ccc",
  padding: "20px",
  width: "80%",
  maxWidth: "600px",
};

const inputStyle = {
  margin: "10px",
};

const buttonStyle = {
  marginTop: "10px",
};

const estilosH1 = {
  color: 'blue',         
  fontSize: '32px',      
  fontWeight: 'bold',   
  textAlign: 'center',
  margin:"20px",  
};

const CheckoutContainer = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, getTotalPrice } = useContext(CartContext);

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = getTotalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    // CREAR LA ORDEN EN FIREBASE
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    // MODIFICAR EL STOCK EN FIREBASE DE CADA DOCUMENTO
    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };

  return (
    <Box sx={containerStyle}>
      <Typography variant="h1" sx={estilosH1}>
        CHECKOUT
      </Typography>

      {orderId ? (
        <Paper sx={formStyle}>
          <Typography variant="h4" gutterBottom>
            Gracias por su compra.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Numero de compra: {orderId}
          </Typography>
          
          <IconButton sx={{ mt: 2, color: 'green' }}>
            <CheckCircleIcon />
          </IconButton>
          <Link to="/">
            <Button variant="contained">Volver al inicio</Button>
          </Link>
        </Paper>
      ) : (
        <form style={formStyle} onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            style={inputStyle}
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <TextField
            style={inputStyle}
            type="text"
            placeholder="Ingrese su telefono"
            name="phone"
            onChange={handleChange}
          />
          <TextField
            style={inputStyle}
            type="email"
            placeholder="Ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="success"
            type="submit"
            style={buttonStyle}
          >
            Comprar
          </Button>
        </form>
      )}
    </Box>
  );
};

export default CheckoutContainer;

