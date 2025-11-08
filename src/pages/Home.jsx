import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-Helvetica-med">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Discover <span className="text-rose-600">style</span> that speaks to
            you
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Curated collections. Seamless shopping. Designed for the modern you.
          </p>
          <Link
            to="/products"
            className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition transform hover:scale-105"
          >
            Explore Products
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Featured Picks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center text-center"
              >
                <img
                  src={`/images/product${item}.jpg`}
                  alt={`Product ${item}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  Product Name
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Elegant and versatile for daily wear.
                </p>
                <button className="mt-4 w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimistic CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to elevate your wardrobe?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands who trust YourShop for quality, style, and
            simplicity.
          </p>
          <Link
            to={"/register"}
            className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
