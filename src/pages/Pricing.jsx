import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="bg-[#0B1C2D] text-white">

      {/* CONTAINER WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Flexible Pricing Plans
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your JEE preparation journey.
          </p>
        </div>

        {/* ================= PRICING CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

          {/* FOUNDATION */}
          <div className="bg-[#12263A] p-8 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-orange-500">
              Foundation
            </h2>

            <p className="text-gray-400 mb-6">
              Perfect for Class 11 students.
            </p>

            <p className="text-3xl font-bold mb-6">
              ₹799 <span className="text-base text-gray-400">/ month</span>
            </p>

            <ul className="space-y-3 text-gray-300 mb-8 text-sm">
              <li>✔ Class 11 Syllabus</li>
              <li>✔ Weekly Tests</li>
              <li>✔ Live + Recorded Classes</li>
              <li>✔ Doubt Sessions</li>
            </ul>

            <Link to="/register">
              <button className="bg-orange-500 px-6 py-3 rounded-xl w-full">
                Choose Plan
              </button>
            </Link>
          </div>

          {/* TARGET */}
          <div className="bg-orange-500 text-black p-8 rounded-2xl shadow-2xl">
            <h2 className="text-xl font-bold mb-4">
              Target
            </h2>

            <p className="mb-6">
              Best for Class 12 aspirants.
            </p>

            <p className="text-3xl font-bold mb-6">
              ₹999 <span className="text-base">/ month</span>
            </p>

            <ul className="space-y-3 mb-8 text-sm">
              <li>✔ Full Syllabus</li>
              <li>✔ Advanced Mock Tests</li>
              <li>✔ Analytics</li>
              <li>✔ Rank Prediction</li>
            </ul>

            <Link to="/register">
              <button className="bg-black text-white px-6 py-3 rounded-xl w-full">
                Most Popular
              </button>
            </Link>
          </div>

          {/* ELITE */}
          <div className="bg-[#12263A] p-8 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-orange-500">
              Elite
            </h2>

            <p className="text-gray-400 mb-6">
              Complete access for droppers.
            </p>

            <p className="text-3xl font-bold mb-6">
              ₹1499 <span className="text-base text-gray-400">/ month</span>
            </p>

            <ul className="space-y-3 text-gray-300 mb-8 text-sm">
              <li>✔ Full 11 + 12</li>
              <li>✔ Intensive Mock Series</li>
              <li>✔ Mentorship</li>
              <li>✔ 24/7 Support</li>
            </ul>

            <Link to="/register">
              <button className="bg-orange-500 px-6 py-3 rounded-xl w-full">
                Choose Plan
              </button>
            </Link>
          </div>

        </div>

        {/* ================= COMPARISON TABLE ================= */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
            Plan Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-700">
              <thead className="bg-[#12263A]">
                <tr>
                  <th className="p-3 border">Features</th>
                  <th className="p-3 border">Foundation</th>
                  <th className="p-3 border">Target</th>
                  <th className="p-3 border">Elite</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-3 border">Live Classes</td>
                  <td className="p-3 border">✔</td>
                  <td className="p-3 border">✔</td>
                  <td className="p-3 border">✔</td>
                </tr>

                <tr>
                  <td className="p-3 border">Mentorship</td>
                  <td className="p-3 border">❌</td>
                  <td className="p-3 border">❌</td>
                  <td className="p-3 border">✔</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Start Your IIT Journey 🚀
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
