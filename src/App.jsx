import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
function App() {
  return (
    <div>
      <Navbar>
        <ItemListContainer />
      </Navbar>
      <Footer />
    </div>
  );
}

export default App;
