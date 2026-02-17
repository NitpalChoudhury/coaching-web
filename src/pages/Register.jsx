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

    // Fake save in localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0B1C2D] text-white">
      <div className="bg-[#12263A] p-10 rounded-2xl w-full max-w-md shadow-xl">

        <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
          Student Registration
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500"
              placeholder="Create password"
            />
          </div>

          <div>
            <label className="block mb-2">Select Batch</label>
            <select
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500"
            >
              <option>Class 11</option>
              <option>Class 12</option>
              <option>Dropper</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition"
          >
            Register Now
          </button>

        </form>

      </div>
    </div>
  );
}
