import React from "react";
import { LoginAnime } from "../components/RegisterAnime";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { asyncLoggedInUser } from "../store/actions/UserActions";
import { useDispatch } from "react-redux";
import axios from "../api/AxiosInstance";

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (user) => {
    if (user) {
      const { data } = await axios.get("/users");

      const foundUser = data.find(
        (item) => item.email === user.email && item.password === user.password
      );

      if (foundUser) {
        reset();
        dispatch(asyncLoggedInUser(foundUser));
        toast.success("Login successfully! Redirecting...");
        setTimeout(() => {
          navigate("/products");
        }, 2500);
      } else {
        toast.error("Invalid credentials!");
      }

      console.log(user);
    } else {
      throw new Error("Some error occurred!");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left: Animation or Product Showcase */}
      <div className="w-1/2 h-140 bg-white">
        <LoginAnime />
      </div>

      {/* Right: Login Form */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
          <p className="text-sm text-gray-600 mb-6">Access your account</p>

          <form onSubmit={handleSubmit(loginHandler)} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 border-zinc-400 border-b focus:ring-rose-500 focus:outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-rose-400 p-2">Email is required.</span>
            )}
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 border-zinc-400 border-b focus:ring-rose-500 focus:outline-none"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Password must be shorter than 8 chars.",
                },
                maxLength: {
                  value: 16,
                  message: "Password must be shorter than 16 chars.",
                },
              })}
            />
            {errors.password && (
              <span className="text-rose-400 p-2">
                {errors.password.message}
              </span>
            )}
            <button
              type="submit"
              className="w-full bg-rose-600 text-white cursor-pointer py-2 rounded-lg font-semibold hover:bg-rose-700 transition duration-500"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-rose-600 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
