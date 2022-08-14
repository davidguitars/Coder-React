import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount";
import "react-toastify/dist/ReactToastify.css";

export const ItemDetail = ({ products }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addToCart(products, quantity);
  };

  return (
    <div className="card-container">
      <header className="image-header">
        <img className="image-main" src={products.image} />
        <h1>{products.title}</h1>
        <p className="eth">precio: ${products.price}</p>
        <h3>Descripcion:{products.description}</h3>
        <span>stock:{products.stock}</span>
        <div className="boton btn btn-warning">
          {goToCart ? (
            <Link to="/cart">terminar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={products.stock} onAdd={onAdd} />
          )}
        </div>
      </header>
    </div>
  );
};

export default ItemDetail;
