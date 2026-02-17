import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#0B1C2D] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center px-20 py-20">

        <div className="grid grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <h1 className="text-6xl font-bold leading-tight mb-6">
              Crack <span className="text-orange-500">JEE 2026</span> with
              Expert Mentorship
            </h1>

            <p className="text-gray-400 text-lg mb-8">
              Structured preparation for Class 11, 12 & Droppers.
              Live classes, recorded lectures, mock tests & AI analytics.
            </p>

            <div className="flex gap-6">

              <Link to="/register">
                <button className="bg-orange-500 px-8 py-3 rounded-2xl text-lg hover:scale-105 transition duration-300">
                  Enroll Now
                </button>
              </Link>

              <Link to="/courses">
                <button className="border border-orange-500 px-8 py-3 rounded-2xl text-lg hover:bg-orange-500 hover:text-black transition duration-300">
                  Explore Courses
                </button>
              </Link>

            </div>

            {/* Extra Trust Line */}
            <p className="text-sm text-gray-500 mt-6">
              Trusted by 10,000+ Students Across India
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1600195077909-46e573870d99"
              alt="Students preparing for JEE"
              className="rounded-3xl shadow-2xl"
            />

            {/* Overlay Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1C2D]/60 to-transparent rounded-3xl"></div>

          </div>

        </div>

      </section>

    </div>
  );
}
