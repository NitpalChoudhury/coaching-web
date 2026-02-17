export default function MockTests() {
  return (
    <div className="bg-[#0B1C2D] text-white min-h-screen px-10 py-10">

      {/* ================= PAGE HEADER ================= */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">
          Mock Test Series 📝
        </h1>
        <p className="text-gray-400">
          Practice with real exam pattern tests and improve your rank.
        </p>
      </div>

      {/* ================= AVAILABLE TESTS ================= */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Available Tests
        </h2>

        <div className="grid grid-cols-3 gap-8">

          {/* Test 1 */}
          <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-xl font-bold mb-3">
              Full Syllabus Mock Test 1
            </h3>

            <p className="text-gray-400 mb-4">
              Duration: 3 Hours | Total Marks: 300
            </p>

            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-semibold">
                Upcoming
              </span>
              <button className="bg-orange-500 px-4 py-2 rounded-xl">
                Start Test
              </button>
            </div>
          </div>

          {/* Test 2 */}
          <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-xl font-bold mb-3">
              Physics Chapter Test
            </h3>

            <p className="text-gray-400 mb-4">
              Electrostatics | 90 Minutes | 100 Marks
            </p>

            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-semibold">
                Available
              </span>
              <button className="bg-orange-500 px-4 py-2 rounded-xl">
                Start Test
              </button>
            </div>
          </div>

          {/* Test 3 */}
          <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-xl font-bold mb-3">
              Chemistry Practice Test
            </h3>

            <p className="text-gray-400 mb-4">
              Organic Chemistry | 120 Minutes | 150 Marks
            </p>

            <div className="flex justify-between items-center">
              <span className="text-orange-500 font-semibold">
                Available
              </span>
              <button className="bg-orange-500 px-4 py-2 rounded-xl">
                Start Test
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ================= PREVIOUS ATTEMPTS ================= */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Previous Attempts
        </h2>

        <div className="space-y-6">

          <div className="bg-[#12263A] p-6 rounded-2xl flex justify-between items-center">
            <div>
              <h3 className="font-bold">
                Full Syllabus Mock Test
              </h3>
              <p className="text-gray-400">
                Attempted on: 10 Feb 2026
              </p>
            </div>

            <div className="text-right">
              <p className="text-orange-500 font-bold text-xl">
                182 / 300
              </p>
              <p className="text-gray-400 text-sm">
                AIR 342
              </p>
            </div>
          </div>

          <div className="bg-[#12263A] p-6 rounded-2xl flex justify-between items-center">
            <div>
              <h3 className="font-bold">
                Physics Chapter Test
              </h3>
              <p className="text-gray-400">
                Attempted on: 05 Feb 2026
              </p>
            </div>

            <div className="text-right">
              <p className="text-orange-500 font-bold text-xl">
                76 / 100
              </p>
              <p className="text-gray-400 text-sm">
                76% Accuracy
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= PERFORMANCE SUMMARY ================= */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Performance Summary
        </h2>

        <div className="grid grid-cols-3 gap-8">

          <div className="bg-[#12263A] p-8 rounded-2xl text-center">
            <h3 className="text-gray-400">Average Score</h3>
            <p className="text-3xl font-bold text-orange-500 mt-2">
              174
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl text-center">
            <h3 className="text-gray-400">Best Score</h3>
            <p className="text-3xl font-bold text-orange-500 mt-2">
              212
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl text-center">
            <h3 className="text-gray-400">Tests Attempted</h3>
            <p className="text-3xl font-bold text-orange-500 mt-2">
              12
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
