import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { asyncRenderProducts } from "../store/actions/ProductActions";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();

  // Always default to an array
  const products = useSelector((state) => state?.productsReducer?.productData);

  // Fetch products on mount
  useEffect(() => {
    dispatch(asyncRenderProducts());
  }, [dispatch]);

  // Ensure products is always an array
  const safeProducts = Array.isArray(products) ? products : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="bg-white h-fit rounded-xl shadow p-6 space-y-6 md:col-span-1">
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Category
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Clothes
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Furniture
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Electronics
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" /> Wearables
                </label>
              </li>
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Price Range
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <label>
                  <input type="radio" name="price" className="mr-2" /> Under $50
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="price" className="mr-2" /> $50 -
                  $100
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="price" className="mr-2" /> Over $100
                </label>
              </li>
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="md:col-span-3">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Products
          </h2>

          {safeProducts.length === 0 ? (
            <p className="text-gray-500">No products available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {safeProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title.length > 30
                      ? `${product.title.slice(0, 30)}...`
                      : product.title}
                  </h3>
                  <div className="price-rating flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-800 mt-1">
                      $ {product.price}
                    </p>
                    <p className="text-sm text-yellow-500 mt-1 whitespace-nowrap">
                      &#9733; {product.rate || 0}
                      <span className="text-zinc-800 ml-1">
                        ({product.count || 0} reviews)
                      </span>
                    </p>
                  </div>
                  <Link to={`/products/${product.id}`}>
                    <button className="mt-4 w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
