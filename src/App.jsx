import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import ItemList from "./components/pages/itemList/ItemList";
/*import Navbar from "./components/layout/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";*/
function App() {
  return (
    <div>
      <Navbar />
      <ItemList greeting="¡Hola, bienvenido a mi tienda en línea!" />
      <Footer />
    </div>
  );
}

export default App;
