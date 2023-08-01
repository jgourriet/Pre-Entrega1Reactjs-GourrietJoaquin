import { Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  let arr1 = [1, 2, 3, 4];
  let arr2 = [5, 6, 7, 8];
  let arr3 = [9, 10];

  return (
    <div style={{ margin: "50px" }}>

      {items.length > 0 ? (
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
      ) : (
        <>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {arr1.map((e) => (
              <div key={e} style={{ width: "210px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap", }}>
                <Skeleton variant="rectangular" width={300} height={140} sx={{ borderRadius: "8px" }} />
                <Skeleton variant="text" sx={{ fontSize: "24px", width: "100%" }} />
                <Skeleton variant="text" sx={{ fontSize: "24px", width: "100%" }} />
                <Skeleton variant="rectangular" width={100} height={40} sx={{ borderRadius: "8px", marginBottom:"20px"}} />
              </div>
            ))}
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {arr2.map((e) => (
              <div key={e} style={{ width: "210px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap" }}>
                <Skeleton variant="rectangular" width={300} height={140} sx={{ borderRadius: "8px" }} />
                <Skeleton variant="text" sx={{ fontSize: "1.3rem", width: "100%" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
                <Skeleton variant="rectangular" width={210} height={40} sx={{ borderRadius: "8px", marginBottom:"20px" }} />
              </div>
            ))}
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {arr3.map((e) => (
              <div key={e} style={{ width: "210px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap" }}>
                <Skeleton variant="rectangular" width={300} height={140} sx={{ borderRadius: "8px" }} />
                <Skeleton variant="text" sx={{ fontSize: "1.3rem", width: "100%" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
                <Skeleton variant="rectangular" width={210} height={40} sx={{ borderRadius: "8px", marginBottom:"20px" }} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ItemList;
