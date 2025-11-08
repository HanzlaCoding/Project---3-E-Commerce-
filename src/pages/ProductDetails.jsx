import { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../api/AxiosInstance";
import { toast } from "react-hot-toast";

import {
  FaShippingFast,
  FaUndoAlt,
  FaStar,
  FaRegStar,
  FaShoppingCart,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const user = useSelector((state) => state?.usersReducer?.userData);
  console.log(user);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        toast.error("Failed to load product details");
      }
    };
    fetchProduct();
  }, [id]);

  const fakeReviews = [
    {
      name: "Ayesha K.",
      comment:
        "Absolutely loved it! Quality is top-notch and delivery was quick.",
      rating: 5,
      date: "15 Jul 2024",
    },
  ];

  const relatedProducts = [
    { title: "Polo with Contrast Trims", price: 1999, image: product?.image },
    { title: "Gradient Graphic T-shirt", price: 1799, image: product?.image },
    { title: "Polo with Tipping Details", price: 2199, image: product?.image },
    { title: "Striped Jacket", price: 2999, image: product?.image },
  ];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading product details...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="w-full px-10 py-12 rounded-xl min-h-screen">
        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-140 object-contain rounded-lg "
            />
          </div>

          <div>
            <h1 className="text-5xl font-normal leading-15 text-gray-800 mt-2">
              {product.title}
            </h1>
            <p className="text-4xl text-rose-600 font-medium mt-3">
              $ {product.price}
            </p>
            {/* Add to Cart */}
            <button className="mt-4 w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition flex items-center justify-center gap-2">
              <FaShoppingCart /> Add to Cart
            </button>

            <div className="admin-buttons">
              {user && user.isAdmin && (
                <>
                  <Link to={`/admin/update-product/${product.id}`}>
                    <button className="mt-6 mr-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                      Update Product
                    </button>
                  </Link>

                  <Link to={`/admin/delete-product/${product.id}`}>
                    <button className="mt-6 px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-red-700 transition">
                      Delete Product
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/*Rating*/}
            <div className="flex items-center mt-4">
              <div className="flex text-yellow-500">
                {product?.rating?.rate % 1 !== 0 && <FaRegStar />}
              </div>
              <span className="text-lg text-gray-800 ml-2">
                ({product?.rating?.count || 0} reviews)
              </span>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-700 mb-2">
                Description
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Model is 6’1” and wears a size M. Relaxed fit with dropped
                shoulders. Soft brushed fleece inside. Ribbed trims and kangaroo
                pocket.
              </p>
            </div>

            {/* Shipping Info */}
            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-700 mb-2">
                Shipping
              </h3>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaShippingFast className="text-rose-500" />
                Estimated delivery: Netx day delivery available
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2 mt-2">
                <FaUndoAlt className="text-rose-500" />
                Free returns within 30 days
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-rose-700 mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-2 mb-4">
            <p className="text-3xl font-bold text-gray-800">4.5</p>
            <div className="flex text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaRegStar />
            </div>
            <p className="text-sm text-gray-500">(Based on 29 reviews)</p>
          </div>

          {/* Featured Review */}
          <div className="bg-white p-4 rounded-md border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-gray-800">Ayesha K.</p>
              <span className="text-xs text-gray-400">15 Jul 2024</span>
            </div>
            <p className="text-gray-600 text-sm italic">
              "Absolutely loved it! Quality is top-notch and delivery was
              quick."
            </p>
            <p className="text-yellow-500 text-sm mt-2">
              <FaStar />
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-rose-700 mb-6">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm border border-rose-100"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="text-sm font-medium text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-rose-600 font-semibold">
                  Rs {item.price}
                </p>
                <p className="text-yellow-500 text-sm">
                  <FaStar />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
