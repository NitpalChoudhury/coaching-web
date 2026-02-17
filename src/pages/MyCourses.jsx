export default function MyCourses() {
  return (
    <div className="bg-[#0B1C2D] text-white min-h-screen px-10 py-10">

      {/* ================= PAGE HEADER ================= */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">
          My Enrolled Courses 📚
        </h1>
        <p className="text-gray-400">
          Track your progress and continue your preparation.
        </p>
      </div>

      {/* ================= COURSE GRID ================= */}
      <div className="grid grid-cols-3 gap-8">

        {/* Course 1 */}
        <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">

          <h2 className="text-xl font-bold mb-4">
            Class 12 Target Batch
          </h2>

          <p className="text-gray-400 mb-4">
            Complete advanced preparation for JEE 2026.
          </p>

          <p className="mb-2 text-sm text-gray-400">Progress: 70%</p>
          <div className="w-full bg-gray-700 h-3 rounded-full mb-6">
            <div className="bg-orange-500 h-3 rounded-full w-[70%]"></div>
          </div>

          <div className="flex justify-between">
            <button className="bg-orange-500 px-4 py-2 rounded-xl">
              Continue
            </button>
            <button className="border border-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 transition">
              View Details
            </button>
          </div>
        </div>


        {/* Course 2 */}
        <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">

          <h2 className="text-xl font-bold mb-4">
            All India Mock Test Series
          </h2>

          <p className="text-gray-400 mb-4">
            Practice with real exam pattern mock tests.
          </p>

          <p className="mb-2 text-sm text-gray-400">Progress: 45%</p>
          <div className="w-full bg-gray-700 h-3 rounded-full mb-6">
            <div className="bg-orange-500 h-3 rounded-full w-[45%]"></div>
          </div>

          <div className="flex justify-between">
            <button className="bg-orange-500 px-4 py-2 rounded-xl">
              Continue
            </button>
            <button className="border border-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 transition">
              View Details
            </button>
          </div>
        </div>


        {/* Course 3 */}
        <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">

          <h2 className="text-xl font-bold mb-4">
            Revision Booster Module
          </h2>

          <p className="text-gray-400 mb-4">
            Rapid revision of important topics & formulas.
          </p>

          <p className="mb-2 text-sm text-gray-400">Progress: 30%</p>
          <div className="w-full bg-gray-700 h-3 rounded-full mb-6">
            <div className="bg-orange-500 h-3 rounded-full w-[30%]"></div>
          </div>

          <div className="flex justify-between">
            <button className="bg-orange-500 px-4 py-2 rounded-xl">
              Continue
            </button>
            <button className="border border-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 transition">
              View Details
            </button>
          </div>
        </div>

      </div>

      {/* ================= EMPTY STATE (Optional) ================= */}
      <div className="mt-20 bg-[#12263A] p-10 rounded-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">
          Want to Explore More Courses?
        </h2>
        <p className="text-gray-400 mb-6">
          Upgrade your preparation with additional modules and test series.
        </p>
        <button className="bg-orange-500 px-6 py-3 rounded-xl hover:scale-105 transition">
          Browse Courses
        </button>
      </div>

    </div>
  );
}
