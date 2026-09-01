import { useOutletContext } from "react-router-dom";
import Cart from "../components/Cart";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity } = useOutletContext();

  return (
    <div>
      <h2>Checkout</h2>
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      {cart.length > 0 && <CheckoutForm />}
    </div>
  );
};

export default Checkout;
