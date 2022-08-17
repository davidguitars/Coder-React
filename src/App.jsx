import "./App.css";
import NavbarContent from "./components/NavbarContent";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer'
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/Context/CartContext";
import CartView from "./components/CartView";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <header>
            <NavbarContent />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
             
              <Route path="/cart" element={<CartView />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
