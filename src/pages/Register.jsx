import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { RegisterAnime } from "../components/RegisterAnime";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../store/actions/UserActions";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const RegisterHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    if (user) {
      reset();
      dispatch(asyncRegisterUser(user));
      toast.success("Register successfully! Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 2500);
      console.log(user);
    } else {
      throw new Error("Some error occur!");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-1/2 bg-white">
        <RegisterAnime />
      </div>

      {/* Right: Signup Form */}
      <div className="w-1/2 flex items-center justify-center p-10 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign up</h2>
          <p className="text-sm text-gray-600 mb-6">Create your account</p>

          <form onSubmit={handleSubmit(RegisterHandler)} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-rose-400 text-sm text-center block ">
                Fullname is required.
              </span>
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-rose-400 text-sm text-center block ">
                Email is required.
              </span>
            )}
            <input
              type="password"
              placeholder="Must be 8 characters long."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
             focus:ring-2 focus:ring-rose-600 focus:border-rose-600 transition"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long.",
                },
                maxLength: {
                  value: 16,
                  message: "Password cannot exceed 16 characters.",
                },
              })}
            />

            {errors.password && (
              <span className="text-rose-400 text-sm text-center block">
                {errors.password.message}
              </span>
            )}

            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-2 cursor-pointer rounded-lg font-semibold hover:bg-rose-700 transition duration-500"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-rose-600 font-medium hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
