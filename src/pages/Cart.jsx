import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/reducers/CartSlice";


const Cart = ({
  onRemove = null,
  onCheckout = () => {},
  onUpdateQuantity = null,
}) => {
  
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [coupon, setCoupon] = useState("");

  const cartItems = useSelector((state) => state.cartReducer.cartItems || []);
  console.log(cartItems);

  const handleDecrease = (item) => {
    const newQty = Math.max(1, (item.quantity || 1) - 1);
    if (typeof onUpdateQuantity === "function") {
      onUpdateQuantity(item.id, newQty);
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: newQty }));
    }
  };

  const handleIncrease = (item) => {
    const newQty = (item.quantity || 1) + 1;
    if (typeof onUpdateQuantity === "function") {
      onUpdateQuantity(item.id, newQty);
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: newQty }));
    }
  };

  const handleRemove = (id) => {
    if (typeof onRemove === "function") {
      onRemove(id);
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const subtotal = cartItems.reduce(
    (sum, it) => sum + (it.price || 0) * (it.quantity || 0),
    0
  );

  // ...existing code...
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
            {cartItems.length === 0 ? (
              <div className="products">
                <h3 className="text-4xl font-medium tracking-tighter">
                  No Products Available
                </h3>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow p-4 flex items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name || item.title || "product"}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold">
                      {item.name || item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.category} • {item.brand}
                    </p>
                    <p className="text-sm text-green-600">
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">
                      ${Number(item.price || 0).toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="px-2 py-1 bg-gray-200 rounded-l"
                        aria-label={`Decrease ${item.name || item.title} quantity`}
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity || 1}</span>
                      <button
                        onClick={() => handleIncrease(item)}
                        className="px-2 py-1 bg-gray-200 rounded-r"
                        aria-label={`Increase ${item.name || item.title} quantity`}
                      >
                        +
                      </button>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Total: $
                      {Number((item.price || 0) * (item.quantity || 1)).toFixed(
                        2
                      )}
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="mt-2 text-sm text-white bg-rose-600 px-3 py-1 rounded hover:bg-rose-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
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
                <p>Cart Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Design by Fluttertop: Free</p>
                <p>Discount: $0.00</p>
                <p className="font-bold text-lg">
                  Cart Total: ${subtotal.toFixed(2)}
                </p>
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
// ...existing code...