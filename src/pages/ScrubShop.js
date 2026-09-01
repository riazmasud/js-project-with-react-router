import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PageIntro from "../components/PageIntro";

const ScrubShop = () => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("scrubshop-cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("scrubshop-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.product.id !== productId);
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) => {
      if (delta === "add") {
        return prevCart.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else if (delta === "remove") {
        const updated = prevCart.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
        return updated.filter((item) => item.quantity > 0);
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="scrub-shop">
      <h1>ScrubShop</h1>
      <PageIntro />
      <Outlet
        context={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
      />
    </div>
  );
};

export default ScrubShop;
