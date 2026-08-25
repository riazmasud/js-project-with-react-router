import CartCount from "./CartCount";
const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>

      <CartCount cart={cart} />
      <div>
        <div className="cart-items">
          {cart.map((item) => {
            return (
              <div key={item.product.id}>
                <span>{item.product.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>
                  Price: ${(item.product.price * item.quantity).toFixed(2)}
                </span>
                <button onClick={() => updateQuantity(item.product.id, "add")}>
                  +
                </button>
                <button
                  onClick={() => updateQuantity(item.product.id, "remove")}
                >
                  -
                </button>
                <button onClick={() => removeFromCart(item.product.id)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
