import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="bg-[#0B1C2D] text-white px-20 py-20">

      {/* ================= PAGE HEADER ================= */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Flexible Pricing Plans
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Choose the perfect plan for your JEE preparation journey.
          All plans include live classes, recorded lectures, and test series.
        </p>
      </div>

      {/* ================= PRICING CARDS ================= */}
      <div className="grid grid-cols-3 gap-12 mb-32">

        {/* FOUNDATION */}
        <div className="bg-[#12263A] p-10 rounded-2xl hover:scale-105 transition duration-300 shadow-xl">

          <h2 className="text-2xl font-bold mb-4 text-orange-500">
            Foundation
          </h2>

          <p className="text-gray-400 mb-6">
            Perfect for Class 11 students starting their JEE journey.
          </p>

          <p className="text-4xl font-bold mb-6">
            ₹799 <span className="text-lg text-gray-400">/ month</span>
          </p>

          <ul className="space-y-3 text-gray-300 mb-8">
            <li>✔ Class 11 Full Syllabus</li>
            <li>✔ Weekly Chapter Tests</li>
            <li>✔ Live + Recorded Classes</li>
            <li>✔ Doubt Clearing Sessions</li>
            <li>✔ PDF Notes</li>
          </ul>

          <Link to="/register">
            <button className="bg-orange-500 px-6 py-3 rounded-xl w-full">
              Choose Plan
            </button>
          </Link>
        </div>


        {/* TARGET (Highlighted) */}
        <div className="bg-orange-500 text-black p-10 rounded-2xl hover:scale-105 transition duration-300 shadow-2xl">

          <h2 className="text-2xl font-bold mb-4">
            Target
          </h2>

          <p className="mb-6">
            Ideal for Class 12 students aiming for top IIT ranks.
          </p>

          <p className="text-4xl font-bold mb-6">
            ₹999 <span className="text-lg">/ month</span>
          </p>

          <ul className="space-y-3 mb-8">
            <li>✔ Class 12 Full Syllabus</li>
            <li>✔ Advanced Problem Solving</li>
            <li>✔ All India Mock Tests</li>
            <li>✔ AI Performance Analytics</li>
            <li>✔ Rank Prediction</li>
          </ul>

          <Link to="/register">
            <button className="bg-black text-white px-6 py-3 rounded-xl w-full">
              Most Popular
            </button>
          </Link>
        </div>


        {/* ELITE */}
        <div className="bg-[#12263A] p-10 rounded-2xl hover:scale-105 transition duration-300 shadow-xl">

          <h2 className="text-2xl font-bold mb-4 text-orange-500">
            Elite
          </h2>

          <p className="text-gray-400 mb-6">
            Complete access for serious aspirants & droppers.
          </p>

          <p className="text-4xl font-bold mb-6">
            ₹1499 <span className="text-lg text-gray-400">/ month</span>
          </p>

          <ul className="space-y-3 text-gray-300 mb-8">
            <li>✔ Full Syllabus (11 + 12)</li>
            <li>✔ Intensive Mock Series</li>
            <li>✔ 1-on-1 Mentorship</li>
            <li>✔ Daily Practice Sheets</li>
            <li>✔ 24/7 Doubt Support</li>
          </ul>

          <Link to="/register">
            <button className="bg-orange-500 px-6 py-3 rounded-xl w-full">
              Choose Plan
            </button>
          </Link>
        </div>

      </div>

      {/* ================= COMPARISON TABLE ================= */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold text-center mb-12">
          Plan Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-700">
            <thead>
              <tr className="bg-[#12263A]">
                <th className="p-4 border border-gray-700">Features</th>
                <th className="p-4 border border-gray-700">Foundation</th>
                <th className="p-4 border border-gray-700">Target</th>
                <th className="p-4 border border-gray-700">Elite</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-4 border border-gray-700">Live Classes</td>
                <td className="p-4 border border-gray-700">✔</td>
                <td className="p-4 border border-gray-700">✔</td>
                <td className="p-4 border border-gray-700">✔</td>
              </tr>

              <tr>
                <td className="p-4 border border-gray-700">Mock Tests</td>
                <td className="p-4 border border-gray-700">Basic</td>
                <td className="p-4 border border-gray-700">Advanced</td>
                <td className="p-4 border border-gray-700">Intensive</td>
              </tr>

              <tr>
                <td className="p-4 border border-gray-700">Analytics</td>
                <td className="p-4 border border-gray-700">❌</td>
                <td className="p-4 border border-gray-700">✔</td>
                <td className="p-4 border border-gray-700">✔</td>
              </tr>

              <tr>
                <td className="p-4 border border-gray-700">1-on-1 Mentorship</td>
                <td className="p-4 border border-gray-700">❌</td>
                <td className="p-4 border border-gray-700">❌</td>
                <td className="p-4 border border-gray-700">✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 max-w-4xl mx-auto">

          <div className="bg-[#12263A] p-6 rounded-2xl">
            <h3 className="font-bold mb-2">
              Can I switch plans later?
            </h3>
            <p className="text-gray-400">
              Yes, you can upgrade or downgrade your plan anytime.
            </p>
          </div>

          <div className="bg-[#12263A] p-6 rounded-2xl">
            <h3 className="font-bold mb-2">
              Do you provide refund?
            </h3>
            <p className="text-gray-400">
              Refund policy applies within 7 days of enrollment.
            </p>
          </div>

        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">
          Start Your IIT Journey Today 🚀
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
