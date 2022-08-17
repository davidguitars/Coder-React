import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount";
import "react-toastify/dist/ReactToastify.css";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addToCart(data, quantity);
  };

  return (
    <div className="card-container">
      <header className="image-header">
        <img className="image-main" src={data.image} />
        <h1>{data.title}</h1>
        <p className="eth">precio: ${data.price}</p>
        <h3>Descripcion:{data.description}</h3>
        <span>stock:{data.stock}</span>
        <div className="boton btn btn-warning">
          {goToCart ? (
            <Link to="/cart">terminar Compra</Link>
          ) : (
            <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
          )}
        </div>
      </header>
    </div>
  );
};

export default ItemDetail;
