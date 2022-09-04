import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";

const Item = ({ image, title, price, id, stock }) => {
  const urlDetails = `./item/${id}`;

  return (
    <div className="card-container">
      <header className="image-header">
        <img className="image-main" src={image} />
        <h1>{title}</h1>
        <h2 className="tittle-card">{id}</h2>
        <p className="eth">${price}</p>
        <div>stock: {stock} </div>
        <Link to={urlDetails}>
          <button className="boton btn btn-warning">Ver Detalle</button>
        </Link>
      </header>
    </div>
  );
};

export default memo(Item);
