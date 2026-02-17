import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    batch: "Class 11"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Save user
    localStorage.setItem("user", JSON.stringify(formData));

    // Mark user logged in
    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0B1C2D] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-[#12263A] rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">

        <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-500 mb-6">
          Student Registration
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="block mb-2 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500 text-sm"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500 text-sm"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full p-3 rounded-lg bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500 text-sm"
            />
          </div>

          {/* BATCH */}
          <div>
            <label className="block mb-2 text-sm">Select Batch</label>
            <select
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500 text-sm"
            >
              <option>Class 11</option>
              <option>Class 12</option>
              <option>Dropper</option>
            </select>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-orange-500 py-3 rounded-lg text-base font-semibold hover:scale-105 transition duration-300"
          >
            Register Now
          </button>

        </form>

      </div>

    </div>
  );
}
