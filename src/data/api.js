const API_URL =
  "https://my-json-server.typicode.com/riazmasud/mock-api-data/products";

const fetchProducts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

export default fetchProducts;
