import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div className="bg-[#0B1C2D] text-white">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        {/* ================= PAGE TITLE ================= */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Our JEE Preparation Programs
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Structured courses for Class 11, 12 & Droppers with Live Classes,
            Recorded Lectures & All India Test Series.
          </p>
        </div>

        {/* ================= COURSE CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-[#12263A] p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-bold mb-4 text-orange-500">
              Class 11 Foundation
            </h2>

            <p className="text-gray-400 mb-6">
              Strong conceptual base building for PCM.
            </p>

            <ul className="text-gray-300 space-y-2 mb-6 text-sm">
              <li>✔ Complete Syllabus</li>
              <li>✔ Weekly Tests</li>
              <li>✔ Live + Recorded</li>
              <li>✔ Doubt Sessions</li>
            </ul>

            <p className="text-2xl font-bold mb-6">
              ₹799 <span className="text-sm text-gray-400">/ month</span>
            </p>

            <Link to="/register">
              <button className="bg-orange-500 px-6 py-3 rounded-xl w-full">
                Enroll Now
              </button>
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="bg-orange-500 text-black p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-bold mb-4">
              Class 12 Target
            </h2>

            <p className="mb-6">
              Advanced preparation with PYQs & Mock Tests.
            </p>

            <ul className="space-y-2 mb-6 text-sm">
              <li>✔ Advanced Problem Solving</li>
              <li>✔ Mock Series</li>
              <li>✔ AI Analytics</li>
              <li>✔ Rank Prediction</li>
            </ul>

            <p className="text-2xl font-bold mb-6">
              ₹999 <span className="text-sm">/ month</span>
            </p>

            <Link to="/register">
              <button className="bg-black text-white px-6 py-3 rounded-xl w-full">
                Enroll Now
              </button>
            </Link>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#12263A] p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-bold mb-4 text-orange-500">
              Dropper Intensive
            </h2>

            <p className="text-gray-400 mb-6">
              1-Year crash course for serious aspirants.
            </p>

            <ul className="text-gray-300 space-y-2 mb-6 text-sm">
              <li>✔ Full Revision</li>
              <li>✔ Daily Practice</li>
              <li>✔ Intensive Mock Tests</li>
              <li>✔ Mentorship</li>
            </ul>

            <p className="text-2xl font-bold mb-6">
              ₹1499 <span className="text-sm text-gray-400">/ month</span>
            </p>

            <Link to="/register">
              <button className="bg-orange-500 px-6 py-3 rounded-xl w-full">
                Enroll Now
              </button>
            </Link>
          </div>

        </div>

        {/* ================= FEATURES SECTION ================= */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-10">
            Why Our Courses Stand Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-[#12263A] p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4 text-orange-500">
                Live + Recorded
              </h3>
              <p className="text-gray-400">
                Attend live classes or watch recordings anytime.
              </p>
            </div>

            <div className="bg-[#12263A] p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4 text-orange-500">
                AI Analytics
              </h3>
              <p className="text-gray-400">
                Track subject-wise performance & improve weak areas.
              </p>
            </div>

            <div className="bg-[#12263A] p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4 text-orange-500">
                Doubt Support
              </h3>
              <p className="text-gray-400">
                Dedicated mentor support.
              </p>
            </div>

          </div>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="text-center mt-20">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to Start Your IIT Journey?
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
