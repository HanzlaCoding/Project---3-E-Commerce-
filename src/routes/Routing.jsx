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
import AuthWrapper from "./AuthWrapper";
import EditProfile from "../pages/user/EditProfiles";

const Routing = () => {
  const user = useSelector((state) => state?.users?.userData);

  if (!user) {
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

        <Route
          path="/user/user-profile"
          element={
            <AuthWrapper>
              <ProfileUser />
            </AuthWrapper>
          }
        ></Route>
        <Route
          path="/user/user-profile/edit-profile/:id"
          element={
            <AuthWrapper>
              <EditProfile />
            </AuthWrapper>
          }
        ></Route>
        <Route
          path="/user/order-cart"
          element={
            <AuthWrapper>
              <Cart />
            </AuthWrapper>
          }
        ></Route>
        <Route
          path="/admin/create-product"
          element={
            <AuthWrapper>
              <CreateProduct />
            </AuthWrapper>
          }
        ></Route>
        <Route
          path="/admin/update-product/:id"
          element={
            <AuthWrapper>
              <UpdateProduct />
            </AuthWrapper>
          }
        ></Route>

        <Route path="/products/:id" element={<ProductDetails />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
