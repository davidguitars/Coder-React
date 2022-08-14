import { useCartContext } from "../components/Context/CartContext";
import React from "react";

const CartView = () => {
const { cart, totalProducts, clearCart } = useCartContext();

const clearAll = () => {
  clearCart();
};

  if (cart.length === 0) {
    return <h1>No hay articulos en el carrito!</h1>;
  }


  return (
    <>
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id}>
          <div className="item__card card-in-cart">
            <div className="item__description card-in-cart-description ">
              <h5 className="name">{item.name}</h5>
              <h2 className="price">${item.price}</h2>
              <ion-icon
                name="trash-outline"
                onClick={() => removeProduct(item.id)}
              ></ion-icon>
              <p>Subtotal : {item.price * item.quantity}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="cart-footer">
      <div>
        <p>Total: ${totalProducts()}</p>
        <button onClick={clearAll} className="btn btn-danger">
          Vaciar carrito
        </button>
      </div>
    </div>
    
  </>
);
};

export default CartView;
