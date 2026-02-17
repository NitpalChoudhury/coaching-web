import { useState } from "react";

export default function Profile() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="bg-[#0B1C2D] text-white min-h-screen">

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-12">

        {/* ================= PAGE HEADER ================= */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            My Profile 👤
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Manage your personal information and subscription.
          </p>
        </div>

        {/* ================= PROFILE CARD ================= */}
        <div className="bg-[#12263A] p-6 md:p-8 rounded-2xl shadow-lg mb-10">

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

            {/* Avatar */}
            <div className="h-20 w-20 md:h-24 md:w-24 bg-gray-600 rounded-full"></div>

            <div className="text-center sm:text-left">
              <h2 className="text-xl md:text-2xl font-bold">
                Nitpal Choudhury
              </h2>
              <p className="text-gray-400 text-sm">
                nitpal@email.com
              </p>
              <p className="text-orange-500 mt-2 text-sm">
                Elite Plan Subscriber
              </p>
            </div>

          </div>
        </div>

        {/* ================= PERSONAL INFO ================= */}
        <div className="bg-[#12263A] p-6 md:p-8 rounded-2xl shadow-lg mb-10">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg md:text-xl font-bold">
              Personal Information
            </h2>

            <button
              onClick={() => setEditMode(!editMode)}
              className="bg-orange-500 px-4 py-2 rounded-xl text-sm"
            >
              {editMode ? "Cancel" : "Edit"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="text-gray-400 block mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                disabled={!editMode}
                defaultValue="Nitpal Choudhury"
                className="w-full p-3 rounded-xl bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500 text-sm"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                disabled={!editMode}
                defaultValue="nitpal@email.com"
                className="w-full p-3 rounded-xl bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500 text-sm"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-2 text-sm">
                Batch
              </label>
              <input
                type="text"
                disabled={!editMode}
                defaultValue="Class 12"
                className="w-full p-3 rounded-xl bg-[#0B1C2D] border border-gray-600 text-sm"
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-2 text-sm">
                Phone
              </label>
              <input
                type="text"
                disabled={!editMode}
                defaultValue="+91 9876543210"
                className="w-full p-3 rounded-xl bg-[#0B1C2D] border border-gray-600 text-sm"
              />
            </div>

          </div>

          {editMode && (
            <button className="mt-6 bg-orange-500 px-6 py-2 rounded-xl text-sm">
              Save Changes
            </button>
          )}

        </div>

        {/* ================= SUBSCRIPTION DETAILS ================= */}
        <div className="bg-[#12263A] p-6 md:p-8 rounded-2xl shadow-lg mb-10">

          <h2 className="text-lg md:text-xl font-bold mb-6">
            Subscription Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div>
              <p className="text-gray-400 text-sm">Current Plan</p>
              <p className="text-orange-500 font-bold text-lg">Elite</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Valid Till</p>
              <p className="font-bold text-lg">30 March 2026</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Status</p>
              <p className="font-bold text-green-400 text-lg">Active</p>
            </div>

          </div>
        </div>

        {/* ================= CHANGE PASSWORD ================= */}
        <div className="bg-[#12263A] p-6 md:p-8 rounded-2xl shadow-lg mb-10">

          <h2 className="text-lg md:text-xl font-bold mb-6">
            Change Password
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <input
              type="password"
              placeholder="Current Password"
              className="p-3 rounded-xl bg-[#0B1C2D] border border-gray-600 text-sm"
            />

            <input
              type="password"
              placeholder="New Password"
              className="p-3 rounded-xl bg-[#0B1C2D] border border-gray-600 text-sm"
            />

            <button className="bg-orange-500 rounded-xl py-3 text-sm">
              Update
            </button>

          </div>
        </div>

        {/* ================= LOGOUT ================= */}
        <div className="text-center">
          <button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              window.location.href = "/";
            }}
            className="bg-red-600 px-8 py-3 rounded-xl hover:scale-105 transition text-sm"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}
