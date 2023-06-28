import ProductCard from "../../common/productCard/ProductCard";
const ItemList = ({ items }) => {
  console.log({ items });

  return (
    <div style={{ margin: "50px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};
export default ItemList;
