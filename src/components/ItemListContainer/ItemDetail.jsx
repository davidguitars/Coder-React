import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ products }) => {
  const notify = () => {
    toast.success("Producto agregado correctamente!", {
      pauseOnHover: false,
      autoClose: 3000,
      hideProgressBar: true,
    });
  };
  // const { addToCart} 
  const [cant, setCant] = useState(0);

  const onAdd = (cant) => {
    setCant(cant);
    addToCart(item, cant);
    notify();
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
        {
                    cant === 0 ? 
                    <ItemCount stock={products.stock} initial={1} onAdd={onAdd} /> 
                    :
                    <><ToastContainer/> <Link to={"/cart"}>Ir al carrito</Link></>
                }
        </div>
      </header>
    </div>
  );
};

export default ItemDetail;
