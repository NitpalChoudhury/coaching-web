import { Link } from "react-router-dom";

export default function Faculty() {
  return (
    <div className="bg-[#0B1C2D] text-white px-20 py-20">

      {/* ================= PAGE HEADER ================= */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Meet Our Expert Faculty 👨‍🏫
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Learn from experienced IIT/NIT alumni and top educators with years of
          proven results in JEE preparation.
        </p>
      </div>

      {/* ================= FACULTY CARDS ================= */}
      <div className="grid grid-cols-3 gap-12 mb-32">

        {/* Physics Faculty */}
        <div className="bg-[#12263A] p-10 rounded-2xl text-center hover:scale-105 transition shadow-xl">

          <div className="h-28 w-28 bg-gray-600 rounded-full mx-auto mb-6"></div>

          <h2 className="text-xl font-bold">Dr. Rajesh Sharma</h2>
          <p className="text-orange-500 mb-4">Physics Faculty</p>

          <p className="text-gray-400 mb-4">
            IIT Delhi | 12+ Years Experience
          </p>

          <p className="text-gray-400">
            Produced 200+ IIT selections with strong focus on concept clarity.
          </p>
        </div>


        {/* Chemistry Faculty */}
        <div className="bg-[#12263A] p-10 rounded-2xl text-center hover:scale-105 transition shadow-xl">

          <div className="h-28 w-28 bg-gray-600 rounded-full mx-auto mb-6"></div>

          <h2 className="text-xl font-bold">Ms. Priya Mehta</h2>
          <p className="text-orange-500 mb-4">Chemistry Faculty</p>

          <p className="text-gray-400 mb-4">
            IIT Bombay | 10+ Years Experience
          </p>

          <p className="text-gray-400">
            Expert in Organic & Physical Chemistry with top rank results.
          </p>
        </div>


        {/* Maths Faculty */}
        <div className="bg-[#12263A] p-10 rounded-2xl text-center hover:scale-105 transition shadow-xl">

          <div className="h-28 w-28 bg-gray-600 rounded-full mx-auto mb-6"></div>

          <h2 className="text-xl font-bold">Mr. Aman Verma</h2>
          <p className="text-orange-500 mb-4">Mathematics Faculty</p>

          <p className="text-gray-400 mb-4">
            IIT Kanpur | 15+ Years Experience
          </p>

          <p className="text-gray-400">
            Specializes in advanced problem-solving and speed techniques.
          </p>
        </div>

      </div>

      {/* ================= EXPERIENCE HIGHLIGHTS ================= */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Teaching Strength
        </h2>

        <div className="grid grid-cols-4 gap-8">

          <div className="bg-[#12263A] p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-orange-500">35+</h3>
            <p className="text-gray-400 mt-2">Years Combined Experience</p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-orange-500">500+</h3>
            <p className="text-gray-400 mt-2">IIT Selections</p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-orange-500">10,000+</h3>
            <p className="text-gray-400 mt-2">Students Mentored</p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-orange-500">95%</h3>
            <p className="text-gray-400 mt-2">Success Rate</p>
          </div>

        </div>
      </div>

      {/* ================= TEACHING APPROACH ================= */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Teaching Approach
        </h2>

        <div className="grid grid-cols-3 gap-12">

          <div className="bg-[#12263A] p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Concept First
            </h3>
            <p className="text-gray-400">
              Strong focus on building fundamentals before advanced problems.
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Practice Driven
            </h3>
            <p className="text-gray-400">
              Daily practice sheets & weekly test analysis.
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Personal Mentorship
            </h3>
            <p className="text-gray-400">
              Individual guidance for consistent improvement.
            </p>
          </div>

        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">
          Learn from the Best, Achieve the Best 🚀
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
