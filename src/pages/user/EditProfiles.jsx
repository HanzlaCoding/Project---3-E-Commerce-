import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const EditProfile = () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log([e.target.name], e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
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
                value={userData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={userData.fullname}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none"
                placeholder="Enter your Fullname"
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
              <input
                type="password"
                name="password"
                id="password"
                value={userData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-zinc-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none"
                placeholder="Enter new password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EditProfile;
