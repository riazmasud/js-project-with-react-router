const CartCount = ({ cart }) => {
  const cartCount = cart.reduce((acc, item) => {
    return item.quantity + acc;
  }, 0);

  const cartTotal = cart.reduce((total, item) => {
    return item.product.price * item.quantity + total;
  }, 0);
  return (
    <div className="shopping-cart" aria-live="polite">
      <div>
        <span>Items: </span>
        <span>{cartCount}</span>
      </div>
      <div>
        <span>Total: </span>
        <span>${cartTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartCount;
