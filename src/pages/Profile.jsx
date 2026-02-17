import { useState } from "react";

export default function Profile() {

  const [editMode, setEditMode] = useState(false);

  return (
    <div className="bg-[#0B1C2D] text-white min-h-screen px-10 py-10">

      {/* ================= PAGE HEADER ================= */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">
          My Profile 👤
        </h1>
        <p className="text-gray-400">
          Manage your personal information and subscription.
        </p>
      </div>

      {/* ================= PROFILE CARD ================= */}
      <div className="bg-[#12263A] p-10 rounded-2xl shadow-lg mb-12">

        <div className="flex items-center gap-8">

          {/* Avatar */}
          <div className="h-24 w-24 bg-gray-600 rounded-full"></div>

          <div>
            <h2 className="text-2xl font-bold">Nitpal Choudhury</h2>
            <p className="text-gray-400">nitpal@email.com</p>
            <p className="text-orange-500 mt-2">Elite Plan Subscriber</p>
          </div>

        </div>

      </div>

      {/* ================= PERSONAL INFO ================= */}
      <div className="bg-[#12263A] p-10 rounded-2xl shadow-lg mb-12">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Personal Information</h2>
          <button
            onClick={() => setEditMode(!editMode)}
            className="bg-orange-500 px-4 py-2 rounded-xl"
          >
            {editMode ? "Cancel" : "Edit"}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8">

          <div>
            <label className="text-gray-400 block mb-2">Full Name</label>
            <input
              type="text"
              disabled={!editMode}
              defaultValue="Nitpal Choudhury"
              className="w-full p-3 rounded-xl bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="text-gray-400 block mb-2">Email</label>
            <input
              type="email"
              disabled={!editMode}
              defaultValue="nitpal@email.com"
              className="w-full p-3 rounded-xl bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="text-gray-400 block mb-2">Batch</label>
            <input
              type="text"
              disabled={!editMode}
              defaultValue="Class 12"
              className="w-full p-3 rounded-xl bg-[#0B1C2D] border border-gray-600"
            />
          </div>

          <div>
            <label className="text-gray-400 block mb-2">Phone</label>
            <input
              type="text"
              disabled={!editMode}
              defaultValue="+91 9876543210"
              className="w-full p-3 rounded-xl bg-[#0B1C2D] border border-gray-600"
            />
          </div>

        </div>

        {editMode && (
          <button className="mt-6 bg-orange-500 px-6 py-2 rounded-xl">
            Save Changes
          </button>
        )}

      </div>

      {/* ================= SUBSCRIPTION DETAILS ================= */}
      <div className="bg-[#12263A] p-10 rounded-2xl shadow-lg mb-12">

        <h2 className="text-xl font-bold mb-6">
          Subscription Details
        </h2>

        <div className="grid grid-cols-3 gap-8">

          <div>
            <p className="text-gray-400">Current Plan</p>
            <p className="text-orange-500 font-bold text-lg">Elite</p>
          </div>

          <div>
            <p className="text-gray-400">Valid Till</p>
            <p className="font-bold text-lg">30 March 2026</p>
          </div>

          <div>
            <p className="text-gray-400">Status</p>
            <p className="font-bold text-green-400 text-lg">Active</p>
          </div>

        </div>

      </div>

      {/* ================= CHANGE PASSWORD ================= */}
      <div className="bg-[#12263A] p-10 rounded-2xl shadow-lg mb-12">

        <h2 className="text-xl font-bold mb-6">
          Change Password
        </h2>

        <div className="grid grid-cols-3 gap-8">

          <input
            type="password"
            placeholder="Current Password"
            className="p-3 rounded-xl bg-[#0B1C2D] border border-gray-600"
          />

          <input
            type="password"
            placeholder="New Password"
            className="p-3 rounded-xl bg-[#0B1C2D] border border-gray-600"
          />

          <button className="bg-orange-500 rounded-xl">
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
          className="bg-red-600 px-8 py-3 rounded-xl hover:scale-105 transition"
        >
          Logout
        </button>
      </div>

    </div>
  );
}
