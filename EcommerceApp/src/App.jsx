/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Components/Header/Index";
import Home from "./Modules/Home/Index";
import Footer from "./Components/Footer/Index";
import { Routes, Route } from "react-router-dom";
import Product from "./Modules/Product/Index";
import ProductCard from "./Modules/ProductCard/Index";
import CategoriesProducts from "./Modules/CategoriesProducts/Index";
import Cart from "./Components/Cart/Cart";
import Contact from "./Modules/Contact/Contact";

function App() {
  return (
    <>
  
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<ProductCard />} />
        <Route path="/categories/:name" element={<CategoriesProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
