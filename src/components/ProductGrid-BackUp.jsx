import ProductCard from "./ProductCard";
import Cart from "./Cart";
import fakeFetchProducts from "../data/fakeApi";
import { useState, useEffect, useMemo } from "react";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setLoading(true);
    fakeFetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());

      const categoryMatch =
        categoryFilter === "all" || product.category === categoryFilter;

      const colorMatch = colorFilter === "all" || product.color === colorFilter;

      const genderMatch =
        genderFilter === "all" || product.gender === genderFilter;

      return searchMatch && categoryMatch && colorMatch && genderMatch;
    });
  }, [
    products,
    debouncedSearchTerm,
    categoryFilter,
    colorFilter,
    genderFilter,
  ]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleColorChange = (e) => {
    setColorFilter(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGenderFilter(e.target.value);
  };

  const addToCart = (product) => {
    //alert(product.id);
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        // update quantity for that one item, leave others unchanged
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        // add a new entry
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const categories = [...new Set(products.map((product) => product.category))];
  const colors = [...new Set(products.map((product) => product.color))];
  const genders = [...new Set(products.map((product) => product.gender))];

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => {
        return item.product.id !== productId;
      });
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

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>{error}</div>}
      <div className="products-page">
        <div className="filter-section">
          <div className="search">
            <label htmlFor="searchTerm">Search:</label>
            <input
              type="text"
              id="searchTerm"
              name="searchTerm"
              placeholder="Enter your search..."
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="drop-down">
            <label htmlFor="category-select">Category: </label>

            <select
              id="category-select"
              value={categoryFilter}
              onChange={handleCategoryChange}
            >
              <option value="all">All</option>
              {categories.map((category, index) => {
                return (
                  <option value={category} key={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="drop-down">
            <label htmlFor="color-select">Color: </label>

            <select
              id="color-select"
              value={colorFilter}
              onChange={handleColorChange}
            >
              <option value="all">All</option>
              {colors.map((color, index) => {
                return (
                  <option value={color} key={color}>
                    {color}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="drop-down">
            <label htmlFor="gender-select">Gender: </label>

            <select
              id="gender-select"
              value={genderFilter}
              onChange={handleGenderChange}
            >
              <option value="all">All</option>
              {genders.map((gender, index) => {
                return (
                  <option value={gender} key={gender}>
                    {gender}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="products-and-cart">
          <div className="product-grid">
            {filteredProducts.map((product) => {
              return (
                <ProductCard
                  product={product}
                  key={product.id}
                  addToCart={addToCart}
                />
              );
            })}
          </div>
          <div className="cart-wrapper">
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
