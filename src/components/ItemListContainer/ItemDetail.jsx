import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount";
import "toastify-js/src/toastify.css";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addToCart } = useCartContext();

  const notify = () => {
    Toastify({
      text: "Producto agregado Correctamente",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  };

  const onAdd = (quantity) => {
    setGoToCart(true);
    addToCart(data, quantity);
    notify();
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
            <button className="boton2 btn btn-secondary">
              {" "}
              <Link to="/cart"> Ir al Checkout</Link>
            </button>
          ) : (
            <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
          )}
        </div>
      </header>
    </div>
  );
};

export default ItemDetail;
