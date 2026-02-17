import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-black">

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">

        <div className="text-center">

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to Crack JEE 2026? 🚀
          </h2>

          {/* Subheading */}
          <p className="text-sm md:text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students preparing with expert mentors,
            live classes, mock tests & AI-powered analytics.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link to="/register">
              <button className="bg-black text-white px-6 py-3 rounded-xl text-sm md:text-base hover:scale-105 transition w-full sm:w-auto">
                Enroll Now
              </button>
            </Link>

            <Link to="/courses">
              <button className="border border-black px-6 py-3 rounded-xl text-sm md:text-base hover:bg-black hover:text-white transition w-full sm:w-auto">
                Explore Courses
              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}
