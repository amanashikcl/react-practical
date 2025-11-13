import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home products={products} />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
