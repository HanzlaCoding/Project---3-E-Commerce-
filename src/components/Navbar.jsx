import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.fullname?.toString()?.split(" ");
  const formattedName = username ? username[0] : "Loading...";

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
                  to="/cart"
                  className="inline-block hover:text-rose-600 transition"
                >
                  <div className="count bg-rose-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center absolute -mt-5 ml-3 z-20">
                    1
                  </div>
                  <BsBag className="h-5 mb-1 mr-1 absolute top-6" />
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
