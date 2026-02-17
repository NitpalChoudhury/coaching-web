export default function Footer() {
  return (
    <footer className="bg-[#081421] text-gray-400 px-10 py-10 mt-20">
      <div className="grid grid-cols-3 gap-10">
        <div>
          <h2 className="text-white mb-4">JEE Ignite</h2>
          <p>India’s Leading JEE Coaching Platform.</p>
        </div>
        <div>
          <p>Home</p>
          <p>Courses</p>
          <p>Pricing</p>
        </div>
        <div>
          <p>Email: support@jeeignite.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">
        © 2026 JEE Ignite
      </div>
    </footer>
  );
}
