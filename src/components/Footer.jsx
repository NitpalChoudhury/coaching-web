import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#081421] text-gray-400 mt-20">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">
              JEE Ignite
            </h2>
            <p className="text-sm">
              India’s Leading JEE Coaching Platform. Structured learning,
              expert mentorship and AI analytics.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-orange-500 transition">
                Home
              </Link>
              <Link to="/courses" className="block hover:text-orange-500 transition">
                Courses
              </Link>
              <Link to="/pricing" className="block hover:text-orange-500 transition">
                Pricing
              </Link>
              <Link to="/results" className="block hover:text-orange-500 transition">
                Results
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-2 text-sm">
              <p>Email: support@jeeignite.com</p>
              <p>Phone: +91 9876543210</p>
              <p>Mon - Sat | 9 AM - 8 PM</p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs md:text-sm">
          © 2026 JEE Ignite. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
