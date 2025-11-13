import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.fullname?.toString()?.split(" ");
  const formattedName = username ? username[0] : "Loading...";
  const cartData = useSelector((state) => state.cartReducer.cartItems);
  console.log(cartData);

  return (
    <div>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
          <h1 className="text-2xl font-bold text-rose-600 tracking-tight">
            <Link to="/">YourShop</Link>
          </h1>
          <nav className="space-x-6 text-sm text-gray-700 font-medium">
            {user ? (
              <>
                <NavLink
                  to="/products"
                  className="hover:text-rose-600 transition"
                >
                  Products
                </NavLink>
                <NavLink
                  to="/user/user-profile"
                  className="hover:text-rose-600 transition"
                >
                  Hi 👋, {formattedName ? formattedName : "Error"}
                </NavLink>
                <NavLink
                  to="/user/order-cart"
                  className="relative inline-block hover:text-rose-600 transition"
                >
                  {/* Cart Icon */}
                  <BsBag className="h-5" />

                  {/* Badge */}
                  {cartData.length > 0 && (
                    <div className="count bg-rose-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 z-20">
                      {cartData.length}
                    </div>
                  )}
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-rose-500" : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink to="/login">
                  <button className="px-5 py-2 -mr-3 bg-rose-500 rounded-full text-white">
                    Login
                  </button>
                </NavLink>
                <NavLink to="/register">
                  <button className="px-5 py-2 bg-rose-500 rounded-full text-white">
                    Register
                  </button>
                </NavLink>
              </>
            )}
            {/* <NavLink to="/about" className="hover:text-rose-600 transition">
              About
            </NavLink> */}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
