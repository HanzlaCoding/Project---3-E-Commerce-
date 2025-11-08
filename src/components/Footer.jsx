import React from "react";

const Footer = () => {
  return (
    <footer className="bg-rose-600 py-10 mt-10 text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-bold mb-2">YourShop</h3>
          <p>
            Curated collections. Seamless shopping. Designed for the modern you.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/login" className="hover:underline">
                Login
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p>Email: support@yourshop.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Location: Lahore, Pakistan</p>
        </div>
      </div>
      <div className="text-center text-xs mt-6">
        &copy; {new Date().getFullYear()} YourShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
