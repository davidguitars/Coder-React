import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../components/Context/CartContext";
import React, { useState } from "react";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, totalProducts, clearCart, deleteItem } = useCartContext();
  const orderDoc = {
    buyers: {
      name: "",
      email: "",
      phone: "",
    },
    items: {
      id: "david",
      title: "cesartitulo",
      price: "100",
      quantity: "2",
    },
    total: "20",
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const regexEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const regexPhone = /^[0-9]+$/;

  let order;
  const orderFunction = () => {
    cart.map((item) => {
      order = {
        buyers: {
          name: document.getElementById("Name").value,
          email: document.getElementById("Email").value,
          phone: document.getElementById("Phone").value,
        },
        items: {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        },
        total: totalProducts(),
      };
    });
  };
  const clearAll = () => {
    clearCart();
  };

  const terminarCompra = () => {
    cart.map((item) => {
      order = {
        buyers: {
          name: document.getElementById("Name").value,
          email: document.getElementById("Email").value,
          phone: document.getElementById("Phone").value,
        },
        items: {
          title: item?.title,
          price: item?.price,
          quantity: item?.quantity,
        },
        total: totalProducts(),
      };
      //Doesn't admit empty entries
      if (Email === "" || phone === "" || Name === "" || Email === "") {
        Swal.fire({
          title: "Error!",
          text: "Please fill all fields",
          icon: "error",
          confirmButtonText: "Continue",
        });
        return;
      }

      //Phone number validation
      if (phone !== "" && !regexPhone.test(phone)) {
        Swal.fire({
          title: "Error!",
          text: "Please enter a valid phone number",
          icon: "error",
          confirmButtonText: "Continue",
        });
        return;
      }

      //Wrong email adress validation
      if (email !== "" && !regexEmail.test(email)) {
        Swal.fire({
          title: "Error!",
          text: "Please enter a valid email address",
          icon: "error",
          confirmButtonText: "Continue",
        });
        return;
      }

      Swal.fire(
        "Hemos Recibido tu compra!",
        "Un ejecutivo te contactara!",
        "success"
      );
      setTimeout(() => (location.href = "/"), 1000);
    });

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    console.log(order, "soy la linea 57");
    if (order) {
      addDoc(ordersCollection, order)
        .then(() => {})
        .catch((error) => {});
      return;
    }
  };

  if (cart.length === 0) {
    return <h1>No hay articulos en el carrito!</h1>;
  }

  return (
    <>
      <div className="cart-container_New">
        {cart.map((item) => (
          <div key={item.id}>
            <div className="item__card card-in-cart">
              <div className="item__description card-in-cart-description ">
                <div className="img__cart">
                  <img src={item.image} alt={item.title}></img>
                </div>
                <h5 className="name">{item.title}</h5>
                <h2 className="price">${item.price}</h2>
                <div>
                  <ion-icon
                    name="trash-outline"
                    onClick={() => deleteItem(item.id)}
                  ></ion-icon>
                </div>
                <p>Subtotal : {item.price * item.quantity}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="formulario">
          <p>Total de Products: {totalProducts()}</p>
          <span className="text-bg-info">
            Para terminar la compra es obligatorio completar los datos
          </span>
          <div>
            <form className="body__formulario">
              <label>
                Name:
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <br />
                Email:
                <input
                  type="text"
                  name="Email"
                  id="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <br />
                Phone:
                <input
                  type="phone"
                  name="phone"
                  id="Phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                <br />
              </label>
            </form>
          </div>

          <button
            onClick={terminarCompra}
            className="boton_terminar btn btn-danger"
          >
            Emitir Compra
          </button>

          <button onClick={clearAll} className="boton_eliminar btn btn-danger">
            Vaciar carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default CartView;
