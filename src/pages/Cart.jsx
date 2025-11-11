// import React from "react";

// const Cart = () => {
//   return (
//     <div className="w-full h-screen flex items-start px-20 py-20 gap-10">
//       {/* Left: Cart Item */}
//       <div className="w-[30%] rounded-md overflow-hidden shadow">
//         <div className="w-full h-80 bg-yellow-500"></div>
//         <div className="w-full flex justify-between px-5 py-4">
//           <h3 className="text-2xl">Clinge Bag</h3>
//           <div className="flex items-center gap-2">
//             <i className="w-7 h-7 bg-white flex rounded-full items-center justify-center ri-add-line"></i>
//             <div className="px-2 py-1 rounded-md bg-white text-black">01</div>
//             <i className="w-7 h-7 bg-white flex rounded-full items-center justify-center ri-subtract-line"></i>
//           </div>
//         </div>
//         <div className="flex items-center justify-between px-5 py-3">
//           <h4 className="text-lg">Net Total</h4>
//           <h2 className="text-lg">₹ 1200</h2>
//         </div>
//       </div>

//       {/* Right: Price Breakdown */}
//       <div className="w-[70%]">
//         <h3 className="text-xl">Price Breakdown</h3>
//         <div className="px-10 mt-5">
//           <div className="flex mt-2">
//             <h4 className="w-1/3">Total MRP</h4>
//             <h4>₹ 1920</h4>
//           </div>
//           <div className="flex mt-2">
//             <h4 className="w-1/3">Discount on MRP</h4>
//             <h4>₹ 0</h4>
//           </div>
//           <div className="flex mt-2">
//             <h4 className="w-1/3">Platform Fee</h4>
//             <h4>₹ 20</h4>
//           </div>
//           <div className="flex mt-2">
//             <h4 className="w-1/3">Shipping Fee</h4>
//             <h4>FREE</h4>
//           </div>
//         </div>

//         <div className="w-full h-[1px] bg-black mt-10"></div>

//         <div className="flex mt-5">
//           <h3 className="w-1/3 text-xl">Total Amount</h3>
//           <h3 className="font-semibold text-xl text-green-600">₹ 1940</h3>
//         </div>

//         <form action=""></form>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Cart = ({ onRemove, onCheckout }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [coupon, setCoupon] = useState("");

  const cartItems = [
    {
      id: "prod_001",
      name: "Floral Print Wrap Dress",
      description: "Elegant and breezy, perfect for brunch or beach days",
      price: 20.5,
      quantity: 2,
      image: "https://example.com/images/dress1.png",
      category: "Women",
      brand: "Fluttertop",
      inStock: true,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Shopping Bag</h2>
        <p className="text-gray-600 mb-6">
          {cartItems.length} item(s) in your bag.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow p-4 flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.category} • {item.brand}
                  </p>
                  <p className="text-sm text-green-600">
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2">
                    <button className="px-2 py-1 bg-gray-200 rounded-l">
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button className="px-2 py-1 bg-gray-200 rounded-r">
                      +
                    </button>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="mt-2 text-sm text-white bg-rose-600 px-3 py-1 rounded hover:bg-rose-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-2">Calculated Shipping</h4>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full mb-2 p-2 border rounded"
              >
                <option value="">Country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="USA">USA</option>
              </select>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full mb-2 p-2 border rounded"
              >
                <option value="">State / City</option>
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
              </select>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="ZIP Code"
                className="w-full mb-2 p-2 border rounded"
              />
              <button className="w-full bg-black text-white py-2 rounded">
                Update
              </button>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">Coupon Code</h4>
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon"
                className="w-full mb-2 p-2 border rounded"
              />
              <button className="w-full bg-black text-white py-2 rounded">
                Apply
              </button>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">Cart Total</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p>Cart Subtotal: 222</p>
                <p>Design by Fluttertop: Free</p>
                <p>Discount: $22</p>
                <p className="font-bold text-lg">Cart Total: $222</p>
              </div>
              <button
                onClick={onCheckout}
                className="w-full mt-4 bg-rose-600 text-white py-2 rounded hover:bg-rose-700"
              >
                Checkout 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
