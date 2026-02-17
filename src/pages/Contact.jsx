export default function Contact() {
  return (
    <div className="px-20 py-20">
      <h1 className="text-4xl mb-6">Contact Us</h1>
      <input className="w-full p-3 mb-4 bg-[#12263A]" placeholder="Your Name" />
      <input className="w-full p-3 mb-4 bg-[#12263A]" placeholder="Email" />
      <textarea className="w-full p-3 mb-4 bg-[#12263A]" placeholder="Message" />
      <button className="bg-orange-500 px-6 py-2 rounded">
        Send
      </button>
    </div>
  );
}
