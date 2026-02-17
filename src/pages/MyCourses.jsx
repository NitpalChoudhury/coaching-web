export default function MyCourses() {
  return (
    <div className="bg-[#0B1C2D] text-white min-h-screen">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">

        {/* ================= PAGE HEADER ================= */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            My Enrolled Courses 📚
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Track your progress and continue your preparation.
          </p>
        </div>

        {/* ================= COURSE GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "Class 12 Target Batch",
              desc: "Complete advanced preparation for JEE 2026.",
              progress: 70
            },
            {
              title: "All India Mock Test Series",
              desc: "Practice with real exam pattern mock tests.",
              progress: 45
            },
            {
              title: "Revision Booster Module",
              desc: "Rapid revision of important topics & formulas.",
              progress: 30
            }
          ].map((course, index) => (
            <div
              key={index}
              className="bg-[#12263A] p-6 rounded-2xl shadow-lg"
            >
              <h2 className="text-lg font-bold mb-3">
                {course.title}
              </h2>

              <p className="text-gray-400 text-sm mb-4">
                {course.desc}
              </p>

              <p className="mb-2 text-xs text-gray-400">
                Progress: {course.progress}%
              </p>

              <div className="w-full bg-gray-700 h-2 rounded-full mb-6">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-orange-500 px-4 py-2 rounded-xl text-sm w-full sm:w-auto">
                  Continue
                </button>

                <button className="border border-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 transition text-sm w-full sm:w-auto">
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* ================= EMPTY STATE / CTA ================= */}
        <div className="mt-16 bg-[#12263A] p-6 md:p-10 rounded-2xl text-center">

          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Want to Explore More Courses?
          </h2>

          <p className="text-gray-400 text-sm md:text-base mb-6">
            Upgrade your preparation with additional modules and test series.
          </p>

          <button className="bg-orange-500 px-6 py-3 rounded-xl hover:scale-105 transition text-sm md:text-base">
            Browse Courses
          </button>

        </div>

      </div>
    </div>
  );
}
