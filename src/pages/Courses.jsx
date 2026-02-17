import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div className="bg-[#0B1C2D] text-white px-20 py-20">

      {/* ================= PAGE TITLE ================= */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          Our JEE Preparation Programs
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Structured courses for Class 11, 12 & Droppers with Live Classes,
          Recorded Lectures, Doubt Support & All India Test Series.
        </p>
      </div>

      {/* ================= COURSE CARDS ================= */}
      <div className="grid grid-cols-3 gap-12">

        {/* Class 11 */}
        <div className="bg-[#12263A] p-10 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">

          <h2 className="text-2xl font-bold mb-4 text-orange-500">
            Class 11 Foundation
          </h2>

          <p className="text-gray-400 mb-6">
            Strong conceptual base building for Physics, Chemistry & Maths.
          </p>

          <ul className="text-gray-300 space-y-3 mb-8">
            <li>✔ Complete Class 11 Syllabus</li>
            <li>✔ Weekly Chapter Tests</li>
            <li>✔ Recorded + Live Classes</li>
            <li>✔ Doubt Clearing Sessions</li>
            <li>✔ PDF Notes & Assignments</li>
          </ul>

          <p className="text-3xl font-bold text-white mb-6">
            ₹799 <span className="text-lg text-gray-400">/ month</span>
          </p>

          <Link to="/register">
            <button className="bg-orange-500 px-6 py-3 rounded-xl w-full">
              Enroll Now
            </button>
          </Link>
        </div>


        {/* Class 12 */}
        <div className="bg-orange-500 text-black p-10 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">

          <h2 className="text-2xl font-bold mb-4">
            Class 12 Target Batch
          </h2>

          <p className="mb-6">
            Advanced preparation with Previous Year Questions & Mock Tests.
          </p>

          <ul className="space-y-3 mb-8">
            <li>✔ Complete Class 12 Syllabus</li>
            <li>✔ Advanced Problem Solving</li>
            <li>✔ All India Mock Tests</li>
            <li>✔ Performance Analytics</li>
            <li>✔ Rank Prediction System</li>
          </ul>

          <p className="text-3xl font-bold mb-6">
            ₹999 <span className="text-lg">/ month</span>
          </p>

          <Link to="/register">
            <button className="bg-black text-white px-6 py-3 rounded-xl w-full">
              Enroll Now
            </button>
          </Link>
        </div>


        {/* Dropper Batch */}
        <div className="bg-[#12263A] p-10 rounded-2xl hover:scale-105 transition duration-300 shadow-lg">

          <h2 className="text-2xl font-bold mb-4 text-orange-500">
            Dropper Intensive
          </h2>

          <p className="text-gray-400 mb-6">
            1-Year crash course for serious aspirants targeting top IIT ranks.
          </p>

          <ul className="text-gray-300 space-y-3 mb-8">
            <li>✔ Full Syllabus Revision</li>
            <li>✔ Daily Practice Sheets</li>
            <li>✔ Intensive Mock Tests</li>
            <li>✔ Personalized Mentorship</li>
            <li>✔ Doubt Support 24/7</li>
          </ul>

          <p className="text-3xl font-bold text-white mb-6">
            ₹1499 <span className="text-lg text-gray-400">/ month</span>
          </p>

          <Link to="/register">
            <button className="bg-orange-500 px-6 py-3 rounded-xl w-full">
              Enroll Now
            </button>
          </Link>
        </div>

      </div>

      {/* ================= COMPARISON SECTION ================= */}
      <div className="mt-32 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Why Our Courses Stand Out
        </h2>

        <div className="grid grid-cols-3 gap-10">

          <div className="bg-[#12263A] p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Live + Recorded
            </h3>
            <p className="text-gray-400">
              Attend live classes or watch recordings anytime.
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              AI Analytics
            </h3>
            <p className="text-gray-400">
              Track subject-wise performance & improve weak areas.
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Doubt Support
            </h3>
            <p className="text-gray-400">
              Dedicated doubt solving sessions with expert mentors.
            </p>
          </div>

        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="text-center mt-32">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your IIT Journey?
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
    