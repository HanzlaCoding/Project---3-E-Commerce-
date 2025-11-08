import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { asyncCreateProduct } from "../../store/actions/ProductActions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CreateProduct = ({ success }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (productData) => {
    // Simulate API call
    console.log("Product Data:", productData);
    toast.success("Product created successfully!");
    dispatch(asyncCreateProduct(productData));
    reset();
    navigate("/products");
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-center" />

      {/* Success Message */}
      {success && success.length > 0 && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 p-3 rounded-md bg-blue-500">
          <span className="inline-block text-white">{success}</span>
        </div>
      )}

      <div className="min-h-screen flex flex-col bg-gray-50">
        <div className="container px-10 py-20 flex grow">
          <main className="w-full bg-white p-8 shadow ml-4 rounded-lg">
            <h2 className="text-xl font-bold mb-6">Create New Product</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
              className="space-y-6"
            >
              {/* Product Image */}
              <div>
                <label className="block mb-2 font-medium">Product Image</label>
                <input
                  {...register("image", { required: "Image URL is required" })}
                  type="text"
                  placeholder="Paste image url"
                  className="py-2 px-4 bg-zinc-100 rounded w-full"
                />
                {errors.image && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>

              {/* Product Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("title", { required: "Title is required" })}
                    type="text"
                    placeholder="Product Title"
                    className="bg-zinc-50 border-zinc-100 border p-2 rounded w-full outline-0"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.title.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("price", {
                      required: "Price is required",
                      valueAsNumber: true,
                      min: {
                        value: 0.01,
                        message: "Price must be greater than 0",
                      },
                    })}
                    type="number"
                    step="0.01"
                    placeholder="Product Price"
                    className="bg-zinc-50 border-zinc-100 border p-2 rounded w-full outline-0"
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.price.message}
                    </p>
                  )}
                </div>
              </div>

              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Product Description"
                rows={4}
                className="bg-zinc-50 border-zinc-100 border p-2 rounded w-full outline-0"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}

              <input
                {...register("category", { required: "Category is required" })}
                type="text"
                placeholder="Category"
                className="bg-zinc-50 border-zinc-100 border p-2 rounded w-full outline-0"
              />
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}

              {/* Rating Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("rate", {
                      required: "Rating is required",
                      valueAsNumber: true,
                      min: { value: 0, message: "Minimum rating is 0" },
                      max: { value: 5, message: "Maximum rating is 5" },
                    })}
                    type="number"
                    step="0.1"
                    placeholder="Rating (Rate)"
                    className="bg-zinc-50 border-zinc-100 border p-2 rounded w-full outline-0"
                  />
                  {errors.rate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.rate.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("count", {
                      required: "Rating count is required",
                      valueAsNumber: true,
                      min: { value: 0, message: "Count must be 0 or more" },
                    })}
                    type="number"
                    placeholder="Rating Count"
                    className="bg-zinc-50 border-zinc-100 border p-2 rounded w-full outline-0"
                  />
                  {errors.count && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.count.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="px-5 py-2 rounded mt-3 bg-rose-600 text-white font-semibold hover:bg-rose-700 transition cursor-pointer"
              >
                Create Product
              </button>
            </form>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateProduct;
