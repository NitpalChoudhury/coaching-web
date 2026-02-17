import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home() {
  return (
    
    <div className="bg-[#0B1C2D] text-white">
        <Hero />
      {/* ================= HERO SECTION ================= */}
      <section className="text-center py-28 px-6">
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Crack JEE 2026 with <span className="text-orange-500">Expert Mentors</span>
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Structured preparation for Class 11, 12 & Droppers. 
          Live Classes, Recorded Lectures, All India Test Series.
        </p>

        <div className="space-x-6">
          <Link to="/register">
            <button className="bg-orange-500 px-8 py-3 rounded-2xl text-lg hover:scale-105 transition">
              Enroll Now
            </button>
          </Link>

          <Link to="/courses">
            <button className="border border-orange-500 px-8 py-3 rounded-2xl text-lg hover:bg-orange-500 transition">
              View Courses
            </button>
          </Link>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="grid grid-cols-3 gap-10 px-20 py-20">
        <div className="bg-[#12263A] p-10 rounded-2xl text-center">
          <h3 className="text-4xl font-bold text-orange-500">500+</h3>
          <p className="text-gray-400 mt-3">IIT Selections</p>
        </div>

        <div className="bg-[#12263A] p-10 rounded-2xl text-center">
          <h3 className="text-4xl font-bold text-orange-500">10,000+</h3>
          <p className="text-gray-400 mt-3">Students Enrolled</p>
        </div>

        <div className="bg-[#12263A] p-10 rounded-2xl text-center">
          <h3 className="text-4xl font-bold text-orange-500">95%</h3>
          <p className="text-gray-400 mt-3">Success Rate</p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-3 gap-10">
          <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">Expert IIT Faculty</h3>
            <p className="text-gray-400">
              Learn from experienced IIT/NIT alumni with 10+ years teaching expertise.
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">All India Test Series</h3>
            <p className="text-gray-400">
              Regular mock tests with AI-based performance analytics.
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-4">24/7 Doubt Support</h3>
            <p className="text-gray-400">
              Dedicated doubt solving sessions and instant mentor assistance.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COURSES PREVIEW ================= */}
      <section className="px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Programs
        </h2>

        <div className="grid grid-cols-3 gap-10">

          <div className="bg-[#12263A] p-10 rounded-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">Class 11 Foundation</h3>
            <p className="text-gray-400 mb-6">
              Complete syllabus coverage with concept clarity & weekly tests.
            </p>
            <Link to="/courses">
              <button className="bg-orange-500 px-6 py-2 rounded-xl">
                Explore
              </button>
            </Link>
          </div>

          <div className="bg-[#12263A] p-10 rounded-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">Class 12 Target Batch</h3>
            <p className="text-gray-400 mb-6">
              Advanced problem solving & previous year question analysis.
            </p>
            <Link to="/courses">
              <button className="bg-orange-500 px-6 py-2 rounded-xl">
                Explore
              </button>
            </Link>
          </div>

          <div className="bg-[#12263A] p-10 rounded-2xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4">Dropper Intensive</h3>
            <p className="text-gray-400 mb-6">
              1-Year focused crash course with daily practice & tests.
            </p>
            <Link to="/courses">
              <button className="bg-orange-500 px-6 py-2 rounded-xl">
                Explore
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= RESULTS SECTION ================= */}
      <section className="px-20 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Our Top Results
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-10">
          Our students have consistently secured top AIR ranks and IIT admissions.
        </p>

        <div className="grid grid-cols-3 gap-10">
          <div className="bg-[#12263A] p-10 rounded-2xl">
            AIR 27 - IIT Bombay
          </div>
          <div className="bg-[#12263A] p-10 rounded-2xl">
            AIR 112 - IIT Delhi
          </div>
          <div className="bg-[#12263A] p-10 rounded-2xl">
            AIR 340 - IIT Madras
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Students Say
        </h2>

        <div className="grid grid-cols-3 gap-10">
          <div className="bg-[#12263A] p-8 rounded-2xl">
            <p className="text-gray-400">
              "Best platform for JEE preparation. Faculty support is amazing!"
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl">
            <p className="text-gray-400">
              "Mock tests helped me improve my rank drastically."
            </p>
          </div>

          <div className="bg-[#12263A] p-8 rounded-2xl">
            <p className="text-gray-400">
              "Structured content and analytics are very helpful."
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="text-center py-20 bg-[#12263A]">
        <h2 className="text-4xl font-bold mb-6">
          Start Your JEE Journey Today
        </h2>
        <Link to="/register">
          <button className="bg-orange-500 px-8 py-3 rounded-2xl text-lg hover:scale-105 transition">
            Join Now
          </button>
        </Link>
      </section>

    </div>
  );
}
