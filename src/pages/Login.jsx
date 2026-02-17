import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake authentication (frontend only demo)
    if (formData.email && formData.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1C2D] flex items-center justify-center text-white px-6">

      <div className="bg-[#12263A] p-10 rounded-2xl w-full max-w-md shadow-2xl">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
          Student Login
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-[#0B1C2D] border border-gray-600 focus:outline-none focus:border-orange-500"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <span className="text-orange-500 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition duration-300"
          >
            Login
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 border-t border-gray-600"></div>

        {/* Register Link */}
        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-500 hover:underline">
            Register Now
          </Link>
        </p>

      </div>
    </div>
  );
}
