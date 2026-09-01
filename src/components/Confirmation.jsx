import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const orderedItems = location.state?.orderedItems || [];

  const total = orderedItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="confirmation">
      <div className="confirmation-banner">
        <h2>Order Confirmed!</h2>
        <p>Thank you for your order. Here's what you ordered:</p>
      </div>

      {orderedItems.length === 0 ? (
        <p className="confirmation-empty">No order details available.</p>
      ) : (
        <>
          <ul className="confirmation-items">
            {orderedItems.map((item) => (
              <li key={item.product.id} className="confirmation-item">
                <span>
                  {item.product.name} × {item.quantity}
                </span>
                <span>${(item.product.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="confirmation-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Confirmation;
