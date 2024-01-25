import { useContext } from "react";
import { CartItem } from "../CartItem/CartItem";
import "./Cart.css";
import AppContext from "../../Context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

export const Cart = () => {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <section className={`cart ${isCartVisible ? "cart-active" : ""}`}>
      <div className="cart-items">
        {cartItems.map((cart) => (
          <CartItem key={cart.id} data={cart} />
        ))}
      </div>

      <div className="cart-resume">
        <h3>Total</h3>
        {formatCurrency(totalPrice)}
      </div>

      <div className="confirm">
        <button className="button-confirm">Confirmar Pedido</button>
      </div>
    </section>
  );
};
