const ProductPage = () => {
  return (
    <>
      <style>
        {`
       .product-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
       
      }

        @media (max-width: 768px) {
        .product-grid {
          grid-template-columns: repeat(2, 1fr); /* 2 columns on tablet */
        }
      }

      @media (max-width: 480px) {
        .product-grid {
          grid-template-columns: 1fr; /* 1 column on mobile */
        }
      }
      .product-card {
        border: 1px solid red;
        padding: 20px;
      }

      .price-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}
      </style>
      <div className="product-grid">
        <div className="product-card">
          <img src="https://picsum.photos/300/200" alt="Product" />
          <span>Product Name</span>
          <div className="price-row">
            <span>$25</span>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="product-card">
          <img src="https://picsum.photos/300/200?random=2" alt="Product" />
          <span>Product Name</span>
          <div className="price-row">
            <span>$40</span>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="product-card">
          <img src="https://picsum.photos/300/200?random=3" alt="Product" />
          <span>Product Name</span>
          <div className="price-row">
            <span>$55</span>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
