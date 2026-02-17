import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/courses", name: "Courses" },
    { path: "/pricing", name: "Pricing" },
    { path: "/faculty", name: "Faculty" },
    { path: "/results", name: "Results" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0B1C2D]/95 backdrop-blur-md border-b border-gray-700 text-white">

      <div className="flex justify-between items-center px-6 md:px-12 py-4">

        {/* LOGO */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-orange-500">
          JEE Ignite
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-orange-500 text-black"
                    : "hover:text-orange-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#12263A] px-6 pb-6 space-y-4">

          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className="block py-2 border-b border-gray-700"
            >
              {link.name}
            </NavLink>
          ))}

          {!isLoggedIn ? (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <button className="w-full border border-orange-500 py-2 rounded-xl mt-4">
                  Login
                </button>
              </Link>

              <Link to="/register" onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-orange-500 py-2 rounded-xl mt-2">
                  Register
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-orange-500 py-2 rounded-xl mt-4">
                  Dashboard
                </button>
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full bg-red-600 py-2 rounded-xl mt-2"
              >
                Logout
              </button>
            </>
          )}

        </div>
      )}

    </nav>
  );
}
