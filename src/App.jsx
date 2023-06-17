import Home from "./components/page/home/Home";
import ItemList from "./components/pages/itemList/ItemList";
import Navbar from "./components/layout/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Cart />
      <ItemList />
    </div>
  );
}

export default App;
