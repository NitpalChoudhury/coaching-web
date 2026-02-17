import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0B1C2D]/95 backdrop-blur-md border-b border-gray-700 px-10 py-4 flex justify-between items-center">

      {/* ========== LOGO ========== */}
      <Link to="/" className="text-2xl font-bold text-orange-500">
        JEE Ignite
      </Link>

      {/* ========== NAV LINKS ========== */}
      <div className="hidden md:flex items-center space-x-6">

        {["/", "/courses", "/pricing", "/faculty", "/results", "/contact"].map((path, index) => {
          const names = ["Home", "Courses", "Pricing", "Faculty", "Results", "Contact"];
          return (
            <NavLink
              key={index}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-orange-500 text-black"
                    : "hover:text-orange-500"
                }`
              }
            >
              {names[index]}
            </NavLink>
          );
        })}

      </div>

      {/* ========== RIGHT SIDE BUTTONS ========== */}
      <div className="flex items-center space-x-4">

        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="border border-orange-500 px-5 py-2 rounded-xl hover:bg-orange-500 hover:text-black transition">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="bg-orange-500 px-5 py-2 rounded-xl hover:scale-105 transition">
                Register
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">
              <button className="bg-orange-500 px-5 py-2 rounded-xl hover:scale-105 transition">
                Dashboard
              </button>
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 px-5 py-2 rounded-xl hover:scale-105 transition"
            >
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
}
