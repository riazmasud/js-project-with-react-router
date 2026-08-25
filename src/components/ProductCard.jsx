import "./ProductCard.scss";
const ProductCard = ({ product, addToCart }) => {
  const { image, name, price, color, brand } = product;
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product">
        <div className="name">
          <span>Name: </span>
          <span>{name}</span>
        </div>
        <div className="color">
          <span>Color: </span>
          <span>{color}</span>
        </div>
        <div className="brand">
          <span>Brand: </span>
          <span>{brand}</span>
        </div>
        <div className="price">
          <div>
            <span>Price: </span>
            <span>${price.toFixed(2)}</span>
          </div>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
