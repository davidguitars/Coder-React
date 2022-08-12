import "./App.css";
import NavbarContent from "./components/NavbarContent";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import TestEvents from "./components/TestEvents"
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./components/Context/CartContext";


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
            <Route path="/" element={<ItemListContainer /> } />
            <Route path="/item/:itemId" element={<ItemDetailContainer /> } />
             <Route path="/testEvents" element={<TestEvents />} />
             <Route path="/cart" element={<h1>soy el carrito</h1>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
