import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Cart from "../pages/Cart";
import ProfileUser from "../pages/user/ProfileUser";
import CreateProduct from "../pages/admin/CreateProduct";
import UpdateProduct from "../pages/admin/UpdateProduct";
import { useSelector } from "react-redux";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";

const Routing = () => {
  const user = useSelector((state) => state?.users?.userData);
  if (user != null || undefined) {
    user;
  } else {
    console.log("unknown user!");
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/user/user-profile" element={<ProfileUser />}></Route>
        <Route path="/user/order-cart" element={<Cart />}></Route>
        
        <Route path="/product/:id" element={<ProductDetails />}></Route>

        <Route path="*" element={<NotFound />}></Route>

        <Route path="/admin/create-product" element={<CreateProduct />}></Route>
        <Route
          path="/admin/update-product/:id"
          element={<UpdateProduct />}
        ></Route>
      </Routes>
    </>
  );
};

export default Routing;
