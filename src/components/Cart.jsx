import CartCount from "./CartCount";
const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>

      <CartCount cart={cart} />
      {cart.length === 0 ? (
        <div className="cart-empty">Your cart is empty</div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => {
            return (
              <div className="cart-item" key={item.product.id}>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.product.id)}
                  aria-label="Remove item"
                >
                  &times;
                </button>
                <span className="cart-item-name">{item.product.name}</span>
                <div className="qty-controls">
                  <button
                    onClick={() => updateQuantity(item.product.id, "remove")}
                  >
                    &minus;
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, "add")}
                  >
                    +
                  </button>
                </div>
                <span className="cart-item-price">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
