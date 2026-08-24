import ProductCard from "./ProductCard";
import Products from "../data/products";

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {Products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductGrid;
