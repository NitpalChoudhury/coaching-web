import { Link } from "react-router-dom";

export default function Results() {
  return (
    <div className="bg-[#0B1C2D] text-white px-20 py-20">

      {/* ================= PAGE HEADER ================= */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Our Outstanding Results
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Our students have consistently secured top ranks in JEE Main & Advanced,
          earning admissions into IITs, NITs and top engineering institutes.
        </p>
      </div>

      {/* ================= STATS SECTION ================= */}
      <div className="grid grid-cols-4 gap-10 mb-32">

        <div className="bg-[#12263A] p-10 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-orange-500">500+</h2>
          <p className="text-gray-400 mt-3">IIT Selections</p>
        </div>

        <div className="bg-[#12263A] p-10 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-orange-500">1200+</h2>
          <p className="text-gray-400 mt-3">NIT Selections</p>
        </div>

        <div className="bg-[#12263A] p-10 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-orange-500">95%</h2>
          <p className="text-gray-400 mt-3">Success Rate</p>
        </div>

        <div className="bg-[#12263A] p-10 rounded-2xl text-center">
          <h2 className="text-4xl font-bold text-orange-500">AIR 27</h2>
          <p className="text-gray-400 mt-3">Best Rank Achieved</p>
        </div>

      </div>

      {/* ================= TOP RANKERS ================= */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold text-center mb-16">
          Top Rank Holders
        </h2>

        <div className="grid grid-cols-3 gap-12">

          <div className="bg-[#12263A] p-10 rounded-2xl text-center hover:scale-105 transition">
            <div className="h-24 w-24 bg-gray-600 rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold">Rahul Sharma</h3>
            <p className="text-orange-500 mt-2">AIR 27</p>
            <p className="text-gray-400 mt-2">IIT Bombay - CSE</p>
          </div>

          <div className="bg-[#12263A] p-10 rounded-2xl text-center hover:scale-105 transition">
            <div className="h-24 w-24 bg-gray-600 rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold">Priya Verma</h3>
            <p className="text-orange-500 mt-2">AIR 112</p>
            <p className="text-gray-400 mt-2">IIT Delhi - Electrical</p>
          </div>

          <div className="bg-[#12263A] p-10 rounded-2xl text-center hover:scale-105 transition">
            <div className="h-24 w-24 bg-gray-600 rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold">Aman Gupta</h3>
            <p className="text-orange-500 mt-2">AIR 340</p>
            <p className="text-gray-400 mt-2">IIT Madras - Mechanical</p>
          </div>

        </div>
      </div>

      {/* ================= YEAR WISE PERFORMANCE ================= */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold text-center mb-16">
          Year-wise Performance
        </h2>

        <div className="grid grid-cols-3 gap-12">

          <div className="bg-[#12263A] p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">2024</h3>
            <p className="text-gray-400">
              120 IIT Selections<br />
              300+ NIT Selections
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">2023</h3>
            <p className="text-gray-400">
              150 IIT Selections<br />
              400+ NIT Selections
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">2022</h3>
            <p className="text-gray-400">
              230 IIT Selections<br />
              500+ NIT Selections
            </p>
          </div>

        </div>
      </div>

      {/* ================= SUCCESS STORIES ================= */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold text-center mb-16">
          Success Stories
        </h2>

        <div className="grid grid-cols-2 gap-12">

          <div className="bg-[#12263A] p-10 rounded-2xl">
            <p className="text-gray-400 mb-4">
              "The structured mock tests and analytics helped me improve
              from AIR 1200 to AIR 112."
            </p>
            <p className="text-orange-500 font-bold">- Priya Verma</p>
          </div>

          <div className="bg-[#12263A] p-10 rounded-2xl">
            <p className="text-gray-400 mb-4">
              "Faculty mentorship and doubt solving sessions were the key
              to my success."
            </p>
            <p className="text-orange-500 font-bold">- Rahul Sharma</p>
          </div>

        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">
          Be Our Next Success Story 🚀
        </h2>

        <Link to="/register">
          <button className="bg-orange-500 px-10 py-4 rounded-2xl text-lg hover:scale-105 transition">
            Join Now
          </button>
        </Link>
      </div>

    </div>
  );
}
