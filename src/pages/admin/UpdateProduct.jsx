import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/AxiosInstance";
import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateProducts } from "../../store/actions/ProductActions";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productData = useSelector(
    (state) => state?.productsReducer?.productData
  );

  const foundProduct = productData.find(
    (prod) => String(prod?.id) === String(id)
  );

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  // ✅ Initialize local state when foundProduct changes
  useEffect(() => {
    if (foundProduct) {
      setProduct({
        name: foundProduct.title || "",
        price: foundProduct.price || "",
        description: foundProduct.description || "",
        image: foundProduct.image || "",
        category: foundProduct.category || "",
      });
    }
  }, [foundProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      dispatch(
        asyncUpdateProducts(id, {
          title: product.name,
          price: product.price,
          description: product.description,
          image: product.image,
          category: product.category,
        })
      );

      toast.success("Product updated successfully!");
      navigate("/products");
    } catch (error) {
      toast.error("Update failed");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 px-6 py-8 bg-rose-50 rounded-xl shadow-sm">
      <h2 className="text-3xl font-semibold text-rose-700 mb-6 text-center flex items-center justify-center gap-2">
        <FaEdit /> Update Product
      </h2>
      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full border border-rose-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full border border-rose-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter description"
            rows="4"
            className="w-full border border-rose-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full border border-rose-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Clothes, Electronics, etc."
            className="w-full border border-rose-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition flex items-center justify-center gap-2"
        >
          <FaEdit /> Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
