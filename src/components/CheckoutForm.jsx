import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useOutletContext();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const isFormValid =
    fullName.trim() !== "" &&
    address.trim() !== "" &&
    email.trim() !== "" &&
    email.includes("@");

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/scrubshop/confirmation", { state: { orderedItems: cart } });
  };

  return (
    <div className="checkout-form-wrapper">
      <form onSubmit={handleSubmit} method="post" className="checkout-form">
        <fieldset className="checkout-fieldset">
          <legend className="checkout-legend">Shipping Information</legend>

          <div className="checkout-field">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullName}
            />
          </div>

          <div className="checkout-field">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={address}
              onChange={handleAddress}
            />
          </div>

          <div className="checkout-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
          </div>
        </fieldset>

        <button
          type="submit"
          disabled={!isFormValid}
          className="checkout-submit"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
