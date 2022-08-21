import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../components/Context/CartContext";

const CartView = () => {
  const { cart, totalProducts, clearCart } = useCartContext();
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

  let order 
  const orderFunction = () => {
    cart.map((item) => {
      console.log(item);
      order = {
        buyers: { name: document.getElementById('Name').value, email: document.getElementById('Email').value, phone: document.getElementById('Phone').value },
        items: {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        },
        total: totalProducts(),
      };
    });
    console.log(order, "soy la data");
   
 
  };

  const terminarCompra = () => {
    cart.map((item) => {
      console.log(item);
      order = {
        buyers: { name: document.getElementById('Name').value, email: document.getElementById('Email').value, phone: document.getElementById('Phone').value },
        items: {

          title: item?.title,
          price: item?.price,
          quantity: item?.quantity,
        },
        total: totalProducts(),
      };
    });
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    console.log(order,'soy la linea 57')
    if (order) {
      addDoc(ordersCollection, order)
        .then(() => {
          console.log("paso");
        })
        .catch((error) => {
          console.log(error);
        });
      return;
    }

  };

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
                <div className="img__cart">
                  <img src={item.image} alt={item.title}></img>
                </div>
                <h5 className="name">{item.title}</h5>
                <h2 className="price">${item.price}</h2>
                <div>
                  {" "}
                  <i
                    onClick={() => removeProduct(item.id)}
                    className="fa-solid fa-trash-can"
                  ></i>
                </div>
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
          <span className="text-bg-info">
            Para terminar la compra es obligatorio completar los datos
          </span>
          <div className="formulario">
            <form className="body__formulario">
              <label>
                Name:
                <input type="text" name="Name" id='Name' />
                <br />
                Email:
                <input type="text" name="Email" id='Email' />
                <br />
                Phone:
                <input type="phone" name="phone" id='Phone'  />
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

          <button onClick={clearAll} className="btn btn-danger">
            Vaciar carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default CartView;
