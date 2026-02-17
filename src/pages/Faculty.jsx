import { Link } from "react-router-dom";

export default function Faculty() {
  return (
    <div className="bg-[#0B1C2D] text-white">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Meet Our Expert Faculty 👨‍🏫
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn from IIT/NIT alumni and experienced educators with proven results.
          </p>
        </div>

        {/* ================= FACULTY CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

          {[
            {
              name: "Dr. Rajesh Sharma",
              subject: "Physics Faculty",
              desc: "IIT Delhi | 12+ Years Experience"
            },
            {
              name: "Ms. Priya Mehta",
              subject: "Chemistry Faculty",
              desc: "IIT Bombay | 10+ Years Experience"
            },
            {
              name: "Mr. Aman Verma",
              subject: "Mathematics Faculty",
              desc: "IIT Kanpur | 15+ Years Experience"
            }
          ].map((faculty, index) => (
            <div
              key={index}
              className="bg-[#12263A] p-8 rounded-2xl text-center shadow-xl hover:scale-105 transition"
            >
              <div className="h-24 w-24 bg-gray-600 rounded-full mx-auto mb-6"></div>

              <h2 className="text-lg font-bold">{faculty.name}</h2>
              <p className="text-orange-500 mb-4">{faculty.subject}</p>

              <p className="text-gray-400 text-sm">
                {faculty.desc}
              </p>
            </div>
          ))}

        </div>

        {/* ================= EXPERIENCE ================= */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Our Teaching Strength
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "35+ Years Combined Experience",
              "500+ IIT Selections",
              "10,000+ Students Mentored",
              "95% Success Rate"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#12263A] p-6 rounded-2xl text-center"
              >
                <h3 className="text-xl md:text-2xl font-bold text-orange-500">
                  {item.split(" ")[0]}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {item.substring(item.indexOf(" ") + 1)}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ================= TEACHING APPROACH ================= */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Our Teaching Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-[#12263A] p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4 text-orange-500">
                Concept First
              </h3>
              <p className="text-gray-400 text-sm">
                Strong focus on building fundamentals before advanced problems.
              </p>
            </div>

            <div className="bg-[#12263A] p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4 text-orange-500">
                Practice Driven
              </h3>
              <p className="text-gray-400 text-sm">
                Daily practice sheets & weekly test analysis.
              </p>
            </div>

            <div className="bg-[#12263A] p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4 text-orange-500">
                Personal Mentorship
              </h3>
              <p className="text-gray-400 text-sm">
                Individual guidance for consistent improvement.
              </p>
            </div>

          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Learn from the Best 🚀
          </h2>

          <Link to="/register">
            <button className="bg-orange-500 px-8 py-3 rounded-2xl text-lg hover:scale-105 transition">
              Join Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
