import Products from "./products";

const fakeFetchProducts = ({ shouldFail = false, delay = 1000 } = {}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Failed to fetch"));
      } else {
        resolve(Products);
      }
    }, delay);
  });
};

export default fakeFetchProducts;
