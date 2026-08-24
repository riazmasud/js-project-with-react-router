import ProductCard from "./ProductCard";
//import Products from "../data/products";
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

  const categories = [...new Set(products.map((product) => product.category))];
  const colors = [...new Set(products.map((product) => product.color))];
  const genders = [...new Set(products.map((product) => product.gender))];

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>{error}</div>}
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
      <div className="category">
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
      <div className="color">
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
      <div className="gender">
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

      <div className="product-grid">
        {filteredProducts.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default ProductGrid;
