import { Link } from "react-router-dom";

export default function Results() {
  return (
    <div className="bg-[#0B1C2D] text-white">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Our Outstanding Results
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Consistently producing top JEE ranks across India.
          </p>
        </div>

        {/* ================= STATS SECTION ================= */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

          {[
            { value: "500+", label: "IIT Selections" },
            { value: "1200+", label: "NIT Selections" },
            { value: "95%", label: "Success Rate" },
            { value: "AIR 27", label: "Best Rank" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#12263A] p-6 rounded-2xl text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-orange-500">
                {stat.value}
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

        {/* ================= TOP RANKERS ================= */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Top Rank Holders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { name: "Rahul Sharma", rank: "AIR 27", college: "IIT Bombay - CSE" },
              { name: "Priya Verma", rank: "AIR 112", college: "IIT Delhi - Electrical" },
              { name: "Aman Gupta", rank: "AIR 340", college: "IIT Madras - Mechanical" }
            ].map((student, index) => (
              <div
                key={index}
                className="bg-[#12263A] p-8 rounded-2xl text-center hover:scale-105 transition"
              >
                <div className="h-20 w-20 bg-gray-600 rounded-full mx-auto mb-6"></div>

                <h3 className="text-lg font-bold">{student.name}</h3>
                <p className="text-orange-500 mt-2">{student.rank}</p>
                <p className="text-gray-400 text-sm mt-2">{student.college}</p>
              </div>
            ))}

          </div>
        </div>

        {/* ================= YEAR WISE PERFORMANCE ================= */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Year-wise Performance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              { year: "2024", data: "120 IIT | 300+ NIT" },
              { year: "2023", data: "150 IIT | 400+ NIT" },
              { year: "2022", data: "230 IIT | 500+ NIT" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#12263A] p-6 rounded-2xl text-center"
              >
                <h3 className="text-xl font-bold text-orange-500 mb-3">
                  {item.year}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.data}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* ================= SUCCESS STORIES ================= */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-[#12263A] p-6 rounded-2xl">
              <p className="text-gray-400 mb-4 text-sm">
                "Mock tests improved my rank from AIR 1200 to AIR 112."
              </p>
              <p className="text-orange-500 font-bold">- Priya Verma</p>
            </div>

            <div className="bg-[#12263A] p-6 rounded-2xl">
              <p className="text-gray-400 mb-4 text-sm">
                "Mentorship & doubt sessions were key to my success."
              </p>
              <p className="text-orange-500 font-bold">- Rahul Sharma</p>
            </div>

          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Be Our Next Success Story 🚀
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
