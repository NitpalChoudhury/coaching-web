export default function Dashboard() {
  return (
    <div className="bg-[#0B1C2D] text-white min-h-screen">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">

        {/* ================= PAGE HEADER ================= */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Welcome Back, Student 👋
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Here’s your preparation overview and progress.
          </p>
        </div>

        {/* ================= STATS CARDS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          {[
            { label: "Enrolled Courses", value: "3" },
            { label: "Mock Tests Attempted", value: "12" },
            { label: "Current Rank", value: "AIR 342" },
            { label: "Subscription", value: "Elite" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#12263A] p-6 rounded-2xl"
            >
              <h3 className="text-gray-400 text-sm">{item.label}</h3>
              <p className="text-xl md:text-2xl font-bold text-orange-500 mt-2">
                {item.value}
              </p>
            </div>
          ))}

        </div>

        {/* ================= ENROLLED COURSES ================= */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            My Courses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              { name: "Class 12 Target", progress: 70 },
              { name: "Mock Test Series", progress: 45 },
              { name: "Revision Module", progress: 30 }
            ].map((course, index) => (
              <div
                key={index}
                className="bg-[#12263A] p-6 rounded-2xl"
              >
                <h3 className="text-lg font-bold mb-4">{course.name}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  Progress: {course.progress}%
                </p>

                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ================= UPCOMING TEST ================= */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Upcoming Test
          </h2>

          <div className="bg-[#12263A] p-6 rounded-2xl flex flex-col md:flex-row md:justify-between md:items-center gap-4">

            <div>
              <h3 className="text-lg font-bold">
                JEE Full Syllabus Mock Test
              </h3>
              <p className="text-gray-400 text-sm">
                25 Feb 2026 | Duration: 3 Hours
              </p>
            </div>

            <button className="bg-orange-500 px-6 py-2 rounded-xl">
              Start Test
            </button>

          </div>
        </div>

        {/* ================= RECENT ACTIVITY ================= */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            {[
              "Completed Mock Test - Score: 182/300",
              "Watched Physics Lecture - Electrostatics",
              "Downloaded Chemistry Notes - Organic Reactions"
            ].map((activity, index) => (
              <div
                key={index}
                className="bg-[#12263A] p-4 rounded-xl text-sm"
              >
                {activity}
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
