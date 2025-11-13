import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(stored);
  }, []);

  const addProduct = (newProduct) => {
    const next = [...products, newProduct];
    setProducts(next);
    localStorage.setItem("products", JSON.stringify(next));
  };

  const removeProduct = (productId) => {
    const remItem = products.filter(
      (state) => (state?.productId ?? state?.id ?? state?._id) !== productId
    );
    setProducts(remItem);
    localStorage.setItem("products", JSON.stringify(remItem));
  };

  const updateProduct = () => {
    setProducts();
    localStorage.setItem("products", JSON.stringify());
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        updateProduct,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
