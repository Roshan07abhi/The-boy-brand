import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import "./App.css";
import Men from "./components/men";
import Women from "./components/women";
import Product from "./components/Product";
import Login from "./components/login";
import Profile from "./components/Profile";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ProductSection
                title="Men's Wear"
                products={products.filter((p) => p.category === "men")}
              />
              <ProductSection
                title="Women's Wear"
                products={products.filter((p) => p.category === "women")}
              />
              <Footer />
            </>
          }
        />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
