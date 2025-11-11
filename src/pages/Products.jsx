import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { asyncRenderProducts } from "../store/actions/ProductActions";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Always default to an array
  const storeProducts = useSelector(
    (state) => state.productsReducer.productData || []
  );

  // Filter products by category
  const filterProducts = (category) => {
    const filtered = storeProducts.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filtered);
  };

  // Filter products by price
  const filterByPrice = (priceOrder) => {
    let sorted = [...filteredProducts]; // copy current filtered list

    if (priceOrder === "High to Low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (priceOrder === "Low to High") {
      sorted.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(sorted);
  };

  // Fetch products on mount
  useEffect(() => {
    dispatch(asyncRenderProducts());
  }, [dispatch]);

  // Update filteredProducts when storeProducts changes
  useEffect(() => {
    setFilteredProducts(storeProducts);
  }, [storeProducts]);

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
              {["Wearables", "Clothes", "Furniture", "Electronics"].map(
                (item) => (
                  <li key={item}>
                    <label htmlFor={item} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        id={item}
                        onClick={() => filterProducts(item)}
                        className="mr-2 accent-rose-600 focus:ring-rose-600"
                      />
                      <span className="capitalize">{item}</span>
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Price Range
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {["High to Low", "Low to High"].map((price) => (
                <li key={price}>
                  <label>
                    <input
                      type="radio"
                      onClick={() => filterByPrice(price)}
                      name="price"
                      className="mr-2 accent-rose-600 focus:ring-rose-600"
                    />
                    {price}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="md:col-span-3">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Products
          </h2>

          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
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
