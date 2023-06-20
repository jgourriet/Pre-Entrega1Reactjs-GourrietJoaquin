import { ShoppingCart } from "@mui/icons-material";

const CartWidget = () => {
  const cartItemCount = 7;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <ShoppingCart />

      <span
        style={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {cartItemCount}
      </span>
    </div>
  );
};

export default CartWidget;
