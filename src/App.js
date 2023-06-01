import React from "react";
import Products from "./Component/Products";
import Navbar from "./Component/Navbar";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import ProductList from "./Pages/ProductList";

export default function App() {
  return (
    <>
      <Home />
      <Products />
      <Product />
      <Cart />
      <ProductList />
    </>
  );
}
