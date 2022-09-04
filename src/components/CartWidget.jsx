import { useCartContext } from "../components/Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart, totalProducts } = useCartContext();

  if (cart.length === 0) {
    return <></>;
  }
  return (
    <div>
      <Link to={"/cart"}>
        <i className="fa fa-shopping-cart"></i>
        <span className="countCart">{totalProducts() || ""}</span>
      </Link>
    </div>
  );
};
export default CartWidget;
