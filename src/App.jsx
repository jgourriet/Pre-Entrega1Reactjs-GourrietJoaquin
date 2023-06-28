import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import FetchingData from "./components/pages/fechingData/FechingData";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
function App() {
  return (
    <div>
      <Navbar>
        <ItemListContainer />
      </Navbar>
      <FetchingData />
      <Footer />
    </div>
  );
}

export default App;
