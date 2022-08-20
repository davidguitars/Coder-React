import { useCartContext } from "../components/Context/CartContext";
import { addDoc, getFirestore, collection } from "firebase/firestore";


const CartView = () => {
  const { cart, totalProducts, clearCart } = useCartContext();
  const order = {
    buyers:{
        name: '',
        email: '',
        phone: ''
    },
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalProducts(),
}

const terminarCompra = () => {
    
   const db = getFirestore()
   const ordersCollection = collection (db, 'orders')
   addDoc(ordersCollection, order)
   .then(({id}) => console.log(id))


}

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
                <div>   <i onClick={() => removeProduct(item.id)} className="fa-solid fa-trash-can"></i></div>
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
          <button onClick={terminarCompra} className="btn btn-danger">
            terminar compra
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
