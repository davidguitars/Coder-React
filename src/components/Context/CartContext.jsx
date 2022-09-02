import React, {useState, useContext, useEffect} from 'react';
 const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext) 

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0)


  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cart'))) {
      setCart(JSON.parse(localStorage.getItem('cart')))
       setCount((JSON.parse(localStorage.getItem('cart'))))
    }
  }, [])


  const addToCart = (item, quantity) => {
    if (isInCart(item.id)){
        setCart(cart.map(products => {
            return products.id === item.id ? {...products, quantity: products.quantity + quantity} : products
        }));
        localStorage.setItem('cart', JSON.stringify(cart))
        setCount(cart)

    }else {
         setCart([...cart, {...item, quantity}]);
     }
     localStorage.setItem('cart', JSON.stringify(cart))
     setCount(cart)
 }

 const totalPrice = () => {
    return cart.reduce((prev, act ) => prev + act.quantity * act.price, 0);
 }

 const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

  const clearCart = () => setCart([]);
  localStorage.setItem('cart', JSON.stringify([]))


 const isInCart = (id) =>
    cart.find((products) => products.id === id) ? true : false;

  const deleteItem = (id) => {
    const products = cart.filter(prod => prod.id !== id)
    setCart(products)
    localStorage.setItem('cart', JSON.stringify(products))
    setCount(cartLenght(products))
}


  return (
    <CartContext.Provider
      value={{
      
        clearCart,
        isInCart,
        deleteItem,
        addToCart,
        totalPrice,
        totalProducts,
        cart
      
      }}>

      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
