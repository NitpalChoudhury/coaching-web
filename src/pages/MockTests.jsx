export default function MockTests() {
  return (
    <div className="bg-[#0B1C2D] text-white min-h-screen">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">

        {/* ================= PAGE HEADER ================= */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Mock Test Series 📝
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Practice with real exam pattern tests and improve your rank.
          </p>
        </div>

        {/* ================= AVAILABLE TESTS ================= */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Available Tests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Full Syllabus Mock Test 1",
                desc: "3 Hours | 300 Marks",
                status: "Upcoming"
              },
              {
                title: "Physics Chapter Test",
                desc: "Electrostatics | 90 Min | 100 Marks",
                status: "Available"
              },
              {
                title: "Chemistry Practice Test",
                desc: "Organic | 120 Min | 150 Marks",
                status: "Available"
              }
            ].map((test, index) => (
              <div
                key={index}
                className="bg-[#12263A] p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-bold mb-3">
                  {test.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {test.desc}
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <span className="text-orange-500 font-semibold text-sm">
                    {test.status}
                  </span>

                  <button className="bg-orange-500 px-4 py-2 rounded-xl text-sm">
                    Start Test
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ================= PREVIOUS ATTEMPTS ================= */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Previous Attempts
          </h2>

          <div className="space-y-4">

            {[
              {
                title: "Full Syllabus Mock Test",
                date: "10 Feb 2026",
                score: "182 / 300",
                extra: "AIR 342"
              },
              {
                title: "Physics Chapter Test",
                date: "05 Feb 2026",
                score: "76 / 100",
                extra: "76% Accuracy"
              }
            ].map((attempt, index) => (
              <div
                key={index}
                className="bg-[#12263A] p-6 rounded-2xl flex flex-col md:flex-row md:justify-between md:items-center gap-4"
              >
                <div>
                  <h3 className="font-bold text-sm md:text-base">
                    {attempt.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm">
                    Attempted on: {attempt.date}
                  </p>
                </div>

                <div className="md:text-right">
                  <p className="text-orange-500 font-bold text-lg">
                    {attempt.score}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {attempt.extra}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ================= PERFORMANCE SUMMARY ================= */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Performance Summary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              { label: "Average Score", value: "174" },
              { label: "Best Score", value: "212" },
              { label: "Tests Attempted", value: "12" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#12263A] p-6 rounded-2xl text-center"
              >
                <h3 className="text-gray-400 text-sm">
                  {item.label}
                </h3>
                <p className="text-xl md:text-2xl font-bold text-orange-500 mt-2">
                  {item.value}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
