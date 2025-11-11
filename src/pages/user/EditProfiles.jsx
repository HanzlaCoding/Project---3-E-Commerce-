import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EyeButton from "../../components/EyeButton";
import { useDispatch } from "react-redux";
import { asyncUpdateUser } from "../../store/actions/UserActions";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const storedUser = localStorage.getItem("user");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const initialData = storedUser
    ? JSON.parse(storedUser)
    : {
        email: "",
        fullname: "",
        password: "",
      };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    dispatch(asyncUpdateUser(formData, id));
    navigate("/user/user-profile");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Edit Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full py-2 border-zinc-400 border-b focus:ring-rose-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="w-full py-2 border-zinc-400 border-b focus:ring-rose-500 focus:outline-none"
                placeholder="Enter your username"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="password-input flex items-center relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full py-2 border-zinc-400 border-b focus:ring-rose-500 focus:outline-none"
                  placeholder="Enter new password"
                />
                <div
                  className="visible toggle absolute right-3 cursor-pointer transition duration-300 text-xl  hover:text-rose-600 hover:scale-110"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  <EyeButton />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditProfile;
