import { useContext } from "react";
import "./CartButton.css";
import { BsCart4 } from "react-icons/bs";
import AppContext from "../../Context/AppContext";

export default function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart-button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <BsCart4 />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
}
