import React from "react";
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <div>
      {data.map((producto) => (
        <Item
          key={producto.id}
          image={producto.image}
          title={producto.title}
          price={producto.price}
          description={producto.description}
          stock={producto.stock}
          id={producto.id}
       item={producto}  />
      ))}
    </div>
  );
};

export default ItemList;


