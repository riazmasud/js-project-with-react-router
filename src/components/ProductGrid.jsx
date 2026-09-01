import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import SearchInput from "./SearchInput";
import DropDown from "./DropDown";
import SortDropDown from "./SortDropDown";
//import fakeFetchProducts from "../data/fakeApi";
import fetchProducts from "../data/api.js";
import { useState, useEffect, useMemo } from "react";

const ProductGrid = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } =
    useOutletContext();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");
  const [sortOption, setSortOption] = useState("none");
  const [visibleCount, setVisibleCount] = useState(8);

  /* Get product from hard coded file */
  // useEffect(() => {
  //   setLoading(true);
  //   fakeFetchProducts()
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((e) => {
  //       setError(e.message);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  /* Fetching real data from github json repo */
  useEffect(() => {
    setLoading(true);
    fetchProducts()
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

  useEffect(() => {
    setVisibleCount(8);
  }, [filteredProducts]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    if (sortOption === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [filteredProducts, sortOption]);

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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const categories = [...new Set(products.map((product) => product.category))];
  const colors = [...new Set(products.map((product) => product.color))];
  const genders = [...new Set(products.map((product) => product.gender))];

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>{error}</div>}
      <div className="products-page">
        <div className="filter-section">
          <SearchInput searchTerm={searchTerm} handleChange={handleChange} />
          <DropDown
            id={"category-select"}
            label={"Category"}
            options={categories}
            value={categoryFilter}
            onChange={handleCategoryChange}
          />
          <DropDown
            id={"color-select"}
            label={"Color"}
            options={colors}
            value={colorFilter}
            onChange={handleColorChange}
          />
          <DropDown
            id={"gender-select"}
            label={"Gender"}
            options={genders}
            value={genderFilter}
            onChange={handleGenderChange}
          />
          <SortDropDown
            id="sort-select"
            label="Sort"
            value={sortOption}
            onChange={handleSortChange}
          />
        </div>
        <div className="products-and-cart">
          <div className="product-grid-wrapper">
            <div className="product-grid">
              {sortedProducts.slice(0, visibleCount).map((product) => {
                return (
                  <ProductCard
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                  />
                );
              })}
            </div>
            {visibleCount < sortedProducts.length && (
              <button onClick={handleLoadMore}>Load More</button>
            )}
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
