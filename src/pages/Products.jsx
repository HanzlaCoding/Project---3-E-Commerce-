import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { asyncRenderProducts } from "../store/actions/ProductActions";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncRenderProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.productsReducer.productData);

  // {
  //     "id": "1",
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     "price": 109.95,
  //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     "category": "men's clothing",
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  //     "rating": {
  //         "rate": 3.9,
  //         "count": 120
  //     }
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="bg-white rounded-xl shadow p-6 space-y-6 md:col-span-1">
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Category
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Clothing
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Accessories
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Footwear
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
                  <input type="radio" name="price" className="mr-2" />
                  Under $50
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="price" className="mr-2" />
                  $50 - $100
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="price" className="mr-2" />
                  Over $100
                </label>
              </li>
            </ul>
          </div>

          {/* Color Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Color</h3>
            <div className="flex gap-2">
              <span className="w-6 h-6 bg-black rounded-full border cursor-pointer" />
              <span className="w-6 h-6 bg-white border rounded-full cursor-pointer" />
              <span className="w-6 h-6 bg-rose-600 rounded-full border cursor-pointer" />
              <span className="w-6 h-6 bg-gray-400 rounded-full border cursor-pointer" />
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="md:col-span-3">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
              >
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {`${product.title.slice(0, 30)}...`}
                </h3>
                <div className="price-rating flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-800 mt-1">
                    $ {product.price}
                  </p>
                  <p className="text-sm text-yellow-500 mt-1  whitespace-nowrap rounded-lg">
                    &#9733;
                    {product?.rating?.rate}{" "}
                    {product?.rating?.count ? (
                      <p className="inline-block text-zinc-800 ml-1">
                        ({product.rating.count}) reviews
                      </p>
                    ) : (
                      <p className="inline-block text-zinc-800 ml-1">
                        (0) reviews
                      </p>
                    )}
                  </p>
                </div>
                <Link to={`/product/${product.id}`}>
                  <button className="mt-4 w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
