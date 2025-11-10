import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.fullname?.toString()?.split(" ");
  const formattedName = username ? username[0] : "Loading...";
  console.log(user);

  return (
    <div>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-rose-600 tracking-tight">
            <Link to="/">YourShop</Link>
          </h1>
          <nav className="space-x-6 text-sm text-gray-700 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-rose-500" : "")}
            >
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-rose-600 transition">
              About
            </NavLink>
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
              </>
            ) : (
              <>
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
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
