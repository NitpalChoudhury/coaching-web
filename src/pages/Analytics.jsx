export default function Analytics() {
  return (
    <div className="bg-[#0B1C2D] text-white min-h-screen px-10 py-10">

      {/* ================= PAGE HEADER ================= */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">
          Performance Analytics 📊
        </h1>
        <p className="text-gray-400">
          Track your subject-wise performance and improve weak areas.
        </p>
      </div>

      {/* ================= OVERALL PERFORMANCE ================= */}
      <div className="grid grid-cols-4 gap-8 mb-16">

        <div className="bg-[#12263A] p-6 rounded-2xl text-center">
          <h3 className="text-gray-400">Average Score</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">
            174
          </p>
        </div>

        <div className="bg-[#12263A] p-6 rounded-2xl text-center">
          <h3 className="text-gray-400">Best Score</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">
            212
          </p>
        </div>

        <div className="bg-[#12263A] p-6 rounded-2xl text-center">
          <h3 className="text-gray-400">Current Rank</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">
            AIR 342
          </p>
        </div>

        <div className="bg-[#12263A] p-6 rounded-2xl text-center">
          <h3 className="text-gray-400">Accuracy</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">
            78%
          </p>
        </div>

      </div>

      {/* ================= SUBJECT WISE PERFORMANCE ================= */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Subject-wise Accuracy
        </h2>

        <div className="space-y-6">

          {/* Physics */}
          <div className="bg-[#12263A] p-6 rounded-2xl">
            <div className="flex justify-between mb-2">
              <span>Physics</span>
              <span className="text-orange-500">82%</span>
            </div>
            <div className="w-full bg-gray-700 h-3 rounded-full">
              <div className="bg-orange-500 h-3 rounded-full w-[82%]"></div>
            </div>
          </div>

          {/* Chemistry */}
          <div className="bg-[#12263A] p-6 rounded-2xl">
            <div className="flex justify-between mb-2">
              <span>Chemistry</span>
              <span className="text-orange-500">75%</span>
            </div>
            <div className="w-full bg-gray-700 h-3 rounded-full">
              <div className="bg-orange-500 h-3 rounded-full w-[75%]"></div>
            </div>
          </div>

          {/* Maths */}
          <div className="bg-[#12263A] p-6 rounded-2xl">
            <div className="flex justify-between mb-2">
              <span>Mathematics</span>
              <span className="text-orange-500">68%</span>
            </div>
            <div className="w-full bg-gray-700 h-3 rounded-full">
              <div className="bg-orange-500 h-3 rounded-full w-[68%]"></div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= RANK TREND ================= */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Rank Improvement Trend
        </h2>

        <div className="bg-[#12263A] p-10 rounded-2xl text-center">
          <p className="text-gray-400 mb-4">
            AIR Progress (Last 5 Tests)
          </p>

          <div className="flex justify-around text-orange-500 font-bold">
            <span>620</span>
            <span>540</span>
            <span>480</span>
            <span>410</span>
            <span>342</span>
          </div>

          <p className="text-green-400 mt-6">
            Improvement: ↑ 278 ranks
          </p>
        </div>
      </div>

      {/* ================= WEAK TOPICS ================= */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Weak Topics
        </h2>

        <div className="grid grid-cols-3 gap-8">

          <div className="bg-[#12263A] p-6 rounded-2xl text-center">
            <h3 className="text-orange-500 font-bold">
              Organic Chemistry
            </h3>
            <p className="text-gray-400 mt-2">
              Needs improvement in reaction mechanisms.
            </p>
          </div>

          <div className="bg-[#12263A] p-6 rounded-2xl text-center">
            <h3 className="text-orange-500 font-bold">
              Coordinate Geometry
            </h3>
            <p className="text-gray-400 mt-2">
              Practice more previous year questions.
            </p>
          </div>

          <div className="bg-[#12263A] p-6 rounded-2xl text-center">
            <h3 className="text-orange-500 font-bold">
              Modern Physics
            </h3>
            <p className="text-gray-400 mt-2">
              Focus on formula application.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
