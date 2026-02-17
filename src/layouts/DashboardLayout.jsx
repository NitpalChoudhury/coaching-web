import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#0B1C2D] text-white">

      {/* ========== SIDEBAR ========== */}
      <div className="w-64 bg-[#12263A] p-6 flex flex-col">

        <h2 className="text-2xl text-orange-500 font-bold mb-10">
          Student Panel
        </h2>

        <nav className="flex flex-col space-y-4">

          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-orange-500 text-black" : "hover:bg-gray-700"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/my-courses"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-orange-500 text-black" : "hover:bg-gray-700"
              }`
            }
          >
            My Courses
          </NavLink>

          <NavLink
            to="/dashboard/mock-tests"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-orange-500 text-black" : "hover:bg-gray-700"
              }`
            }
          >
            Mock Tests
          </NavLink>

          <NavLink
            to="/dashboard/analytics"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-orange-500 text-black" : "hover:bg-gray-700"
              }`
            }
          >
            Analytics
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-orange-500 text-black" : "hover:bg-gray-700"
              }`
            }
          >
            Profile
          </NavLink>

        </nav>
      </div>

      {/* ========== MAIN CONTENT AREA ========== */}
      <div className="flex-1 p-10 overflow-y-auto">
        <Outlet />
      </div>

    </div>
  );
}
    