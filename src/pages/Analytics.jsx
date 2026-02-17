export default function Analytics() {
  return (
    <div className="bg-[#0B1C2D] text-white min-h-screen">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">

        {/* ================= PAGE HEADER ================= */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Performance Analytics 📊
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Track your subject-wise performance and improve weak areas.
          </p>
        </div>

        {/* ================= OVERALL PERFORMANCE ================= */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {[
            { label: "Average Score", value: "174" },
            { label: "Best Score", value: "212" },
            { label: "Current Rank", value: "AIR 342" },
            { label: "Accuracy", value: "78%" }
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

        {/* ================= SUBJECT WISE PERFORMANCE ================= */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Subject-wise Accuracy
          </h2>

          <div className="space-y-6">

            {[
              { subject: "Physics", percent: 82 },
              { subject: "Chemistry", percent: 75 },
              { subject: "Mathematics", percent: 68 }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#12263A] p-6 rounded-2xl"
              >
                <div className="flex justify-between mb-2 text-sm md:text-base">
                  <span>{item.subject}</span>
                  <span className="text-orange-500">
                    {item.percent}%
                  </span>
                </div>

                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ================= RANK TREND ================= */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Rank Improvement Trend
          </h2>

          <div className="bg-[#12263A] p-6 md:p-10 rounded-2xl text-center">

            <p className="text-gray-400 mb-6 text-sm">
              AIR Progress (Last 5 Tests)
            </p>

            <div className="flex justify-between md:justify-around text-orange-500 font-bold text-sm md:text-base">
              <span>620</span>
              <span>540</span>
              <span>480</span>
              <span>410</span>
              <span>342</span>
            </div>

            <p className="text-green-400 mt-6 text-sm md:text-base">
              Improvement: ↑ 278 ranks
            </p>

          </div>
        </div>

        {/* ================= WEAK TOPICS ================= */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Weak Topics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Organic Chemistry",
                desc: "Improve reaction mechanisms."
              },
              {
                title: "Coordinate Geometry",
                desc: "Practice more PYQs."
              },
              {
                title: "Modern Physics",
                desc: "Focus on formula application."
              }
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-[#12263A] p-6 rounded-2xl text-center"
              >
                <h3 className="text-orange-500 font-bold text-sm md:text-base">
                  {topic.title}
                </h3>
                <p className="text-gray-400 mt-2 text-xs md:text-sm">
                  {topic.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
