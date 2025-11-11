import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogoutUser } from "../../store/actions/UserActions";

const ProfileUser = () => {
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-50 font-Helvetica-med">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow p-6  flex justify-between">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {userData.fullname}
              </h2>
              <p className="text-sm text-gray-500 mt-2">Joined: Jan 2024</p>
            </div>
          </div>
          <li className="list-none block bg-red-500 px-2 py-1 rounded h-fit">
            <Link
              onClick={() => dispatch(asyncLogoutUser())}
              to="/"
              className="text-white font-bold"
            >
              Log Out
            </Link>
          </li>
        </div>

        {/* Account Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Orders */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Recent Orders
            </h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex justify-between border-b pb-2">
                <span>Order #12345</span>
                <span className="text-rose-600 font-medium">Delivered</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Order #12346</span>
                <span className="text-rose-600 font-medium">In Transit</span>
              </li>
              <li className="flex justify-between">
                <span>Order #12347</span>
                <span className="text-rose-600 font-medium">Processing</span>
              </li>
            </ul>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Account Settings
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <Link
                  to="/user/edit-profile"
                  className="hover:text-rose-600 transition"
                >
                  Edit Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/notifications"
                  className="hover:text-rose-600 transition"
                >
                  Notification Preferences
                </Link>
              </li>
            </ul>
          </div>

          {/* Admin Panel*/}

          {userData.isAdmin ? (
            <>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Admin Panel
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>
                    <Link
                      to="/admin/create-product"
                      className="hover:text-rose-600 transition"
                    >
                      Create Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/change-password"
                      className="hover:text-rose-600 transition"
                    >
                      Update Product
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileUser;
