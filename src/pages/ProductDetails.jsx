import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../api/AxiosInstance";
import { toast } from "react-hot-toast";
import Loading from "../components/Loading";

import {
  FaShippingFast,
  FaUndoAlt,
  FaStar,
  FaRegStar,
  FaShoppingCart,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { asyncDeleteProducts } from "../store/actions/ProductActions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state?.productsReducer?.productData);
  const foundProduct = products?.find((item) => item.id === id);

  const deleteProduct = () => {
    dispatch(asyncDeleteProducts(id));
    navigate("/products");
    toast.success("Product deleted successfully");
  };

  const user = useSelector((state) => state?.usersReducer?.userData);

  const relatedProducts = [
    {
      title: "Polo with Contrast Trims",
      price: 1999,
      image: foundProduct?.image,
    },
    {
      title: "Gradient Graphic T-shirt",
      price: 1799,
      image: foundProduct?.image,
    },
    {
      title: "Polo with Tipping Details",
      price: 2199,
      image: foundProduct?.image,
    },
    { title: "Striped Jacket", price: 2999, image: foundProduct?.image },
  ];

  if (!foundProduct) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500">
        <Loading />
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
              src={foundProduct?.image}
              alt={foundProduct?.title}
              className="w-full h-140 object-contain rounded-lg "
            />
          </div>

          <div>
            <h1 className="text-5xl font-normal leading-15 text-gray-800 mt-2">
              {foundProduct?.title}
            </h1>
            <p className="text-4xl text-rose-600 font-medium mt-3">
              $ {foundProduct?.price}
            </p>
            {/* Add to Cart */}
            <button className="mt-4 w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition flex items-center justify-center gap-2">
              <FaShoppingCart /> Add to Cart
            </button>

            <div className="admin-buttons">
              {user && user.isAdmin && (
                <>
                  <Link to={`/admin/update-product/${foundProduct.id}`}>
                    <button className="mt-6 mr-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                      Update Product
                    </button>
                  </Link>

                  <button
                    onClick={deleteProduct}
                    className="mt-6 px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-red-700 transition"
                  >
                    Delete Product
                  </button>
                </>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center mt-4">
              <div className="flex text-yellow-500">
                {foundProduct?.rating?.rate % 1 !== 0 && <FaRegStar />}
              </div>
              <span className="text-lg text-gray-800 ml-2">
                ({foundProduct?.rating?.count || 0} reviews)
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
                Estimated delivery: Next day delivery available
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2 mt-2">
                <FaUndoAlt className="text-rose-500" />
                Free returns within 30 days
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {/* ... keep your reviews section unchanged ... */}

        {/* Related Products */}
        {/* ... keep your related products section unchanged ... */}
      </div>
    </>
  );
};

export default ProductDetails;
