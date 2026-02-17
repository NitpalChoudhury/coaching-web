import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0B1C2D] text-white">

      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* ================= SIDEBAR ================= */}
      <div
        className={`
        fixed md:static z-50 top-0 left-0 h-full w-64 bg-[#12263A] p-6
        transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300
      `}
      >
        <h2 className="text-2xl text-orange-500 font-bold mb-10">
          Student Panel
        </h2>

        <nav className="flex flex-col space-y-4">

          {[
            { path: "/dashboard", name: "Dashboard" },
            { path: "/dashboard/my-courses", name: "My Courses" },
            { path: "/dashboard/mock-tests", name: "Mock Tests" },
            { path: "/dashboard/analytics", name: "Analytics" },
            { path: "/dashboard/profile", name: "Profile" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-orange-500 text-black"
                    : "hover:bg-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col">

        {/* MOBILE HEADER */}
        <div className="md:hidden flex items-center justify-between p-4 bg-[#12263A]">

          <button
            onClick={() => setIsOpen(true)}
            className="text-orange-500 text-2xl"
          >
            ☰
          </button>

          <h2 className="text-lg font-bold text-orange-500">
            Student Panel
          </h2>

          <div></div>
        </div>

        {/* PAGE CONTENT */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          <Outlet />
        </div>

      </div>

    </div>
  );
}
