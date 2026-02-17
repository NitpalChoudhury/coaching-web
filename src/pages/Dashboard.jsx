export default function Dashboard() {
  return (
    <div className="bg-[#0B1C2D] text-white min-h-screen">

      {/* ================= PAGE HEADER ================= */}
      <div className="px-10 pt-10">
        <h1 className="text-4xl font-bold mb-2">
          Welcome Back, Student 👋
        </h1>
        <p className="text-gray-400">
          Here’s your preparation overview and progress.
        </p>
      </div>

      {/* ================= STATS CARDS ================= */}
      <div className="grid grid-cols-4 gap-8 px-10 py-10">

        <div className="bg-[#12263A] p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-gray-400">Enrolled Courses</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">3</p>
        </div>

        <div className="bg-[#12263A] p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-gray-400">Mock Tests Attempted</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">12</p>
        </div>

        <div className="bg-[#12263A] p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-gray-400">Current Rank</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">AIR 342</p>
        </div>

        <div className="bg-[#12263A] p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-gray-400">Subscription</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">Elite</p>
        </div>

      </div>

      {/* ================= ENROLLED COURSES ================= */}
      <div className="px-10 mb-16">
        <h2 className="text-2xl font-bold mb-6">My Courses</h2>

        <div className="grid grid-cols-3 gap-8">

          <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">Class 12 Target Batch</h3>
            <p className="text-gray-400 mb-4">
              Progress: 70%
            </p>
            <div className="w-full bg-gray-700 h-3 rounded-full">
              <div className="bg-orange-500 h-3 rounded-full w-[70%]"></div>
            </div>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">Mock Test Series</h3>
            <p className="text-gray-400 mb-4">
              Progress: 45%
            </p>
            <div className="w-full bg-gray-700 h-3 rounded-full">
              <div className="bg-orange-500 h-3 rounded-full w-[45%]"></div>
            </div>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">Revision Module</h3>
            <p className="text-gray-400 mb-4">
              Progress: 30%
            </p>
            <div className="w-full bg-gray-700 h-3 rounded-full">
              <div className="bg-orange-500 h-3 rounded-full w-[30%]"></div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= UPCOMING TESTS ================= */}
      <div className="px-10 mb-16">
        <h2 className="text-2xl font-bold mb-6">Upcoming Tests</h2>

        <div className="bg-[#12263A] p-8 rounded-2xl">
          <div className="flex justify-between items-center">

            <div>
              <h3 className="text-xl font-bold">
                JEE Full Syllabus Mock Test
              </h3>
              <p className="text-gray-400">
                Date: 25 Feb 2026 | Duration: 3 Hours
              </p>
            </div>

            <button className="bg-orange-500 px-6 py-2 rounded-xl hover:scale-105 transition">
              Start Test
            </button>

          </div>
        </div>
      </div>

      {/* ================= RECENT ACTIVITY ================= */}
      <div className="px-10 pb-20">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>

        <div className="space-y-4">

          <div className="bg-[#12263A] p-6 rounded-xl">
            Completed Mock Test - Score: 182/300
          </div>

          <div className="bg-[#12263A] p-6 rounded-xl">
            Watched Physics Lecture - Electrostatics
          </div>

          <div className="bg-[#12263A] p-6 rounded-xl">
            Downloaded Chemistry Notes - Organic Reactions
          </div>

        </div>
      </div>

    </div>
  );
}
