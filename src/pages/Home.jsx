import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import TestimonialCard from "../components/TestimonialCard";
export default function Home() {
  return (
    <div className="bg-[#0B1C2D] text-white">

      {/* ================= HERO COMPONENT ================= */}
      <Hero />

      {/* ================= STATS SECTION ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-20 py-16">

        <div className="bg-[#12263A] p-8 rounded-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500">500+</h3>
          <p className="text-gray-400 mt-3">IIT Selections</p>
        </div>

        <div className="bg-[#12263A] p-8 rounded-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500">10,000+</h3>
          <p className="text-gray-400 mt-3">Students Enrolled</p>
        </div>

        <div className="bg-[#12263A] p-8 rounded-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500">95%</h3>
          <p className="text-gray-400 mt-3">Success Rate</p>
        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Our Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "Class 11 Foundation",
            "Class 12 Target Batch",
            "Dropper Intensive"
          ].map((course, index) => (
            <div
              key={index}
              className="bg-[#12263A] p-8 rounded-2xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-4">{course}</h3>
              <p className="text-gray-400 mb-6">
                Complete structured syllabus with regular testing & analytics.
              </p>
              <Link to="/courses">
                <button className="bg-orange-500 px-6 py-2 rounded-xl w-full">
                  Explore
                </button>
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="px-6 md:px-12 lg:px-20 py-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8">
          Our Top Results
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Consistent top AIR ranks in JEE Main & Advanced.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#12263A] p-8 rounded-2xl">AIR 27 - IIT Bombay</div>
          <div className="bg-[#12263A] p-8 rounded-2xl">AIR 112 - IIT Delhi</div>
          <div className="bg-[#12263A] p-8 rounded-2xl">AIR 340 - IIT Madras</div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
<section className="px-6 md:px-12 lg:px-20 py-16">
  <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
    What Students Say
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    <TestimonialCard
      name="Rahul Sharma"
      rank="AIR 27 - IIT Bombay"
      message="The structured mock tests helped me improve my rank drastically."
      image="https://randomuser.me/api/portraits/men/32.jpg"
    />

    <TestimonialCard
      name="Priya Verma"
      rank="AIR 112 - IIT Delhi"
      message="Faculty mentorship and doubt solving sessions were game-changing."
      image="https://randomuser.me/api/portraits/women/44.jpg"
    />

    <TestimonialCard
      name="Aman Gupta"
      rank="AIR 340 - IIT Madras"
      message="AI analytics helped me identify weak areas quickly."
      image="https://randomuser.me/api/portraits/men/65.jpg"
    />

  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="text-center py-16 bg-[#12263A] px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Start Your JEE Journey Today 🚀
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
