export default function TestimonialCard({
  name,
  rank,
  message,
  image,
  rating = 5
}) {
  return (
    <div className="bg-[#12263A] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">

      {/* Rating Stars */}
      <div className="flex mb-4 text-orange-500 text-sm">
        {"★".repeat(rating)}
      </div>

      {/* Message */}
      <p className="text-gray-300 text-sm md:text-base mb-6">
        "{message}"
      </p>

      {/* Student Info */}
      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-orange-500"
        />

        <div>
          <h3 className="text-sm md:text-base font-bold">
            {name}
          </h3>
          <p className="text-orange-500 text-xs md:text-sm">
            {rank}
          </p>
        </div>

      </div>

    </div>
  );
}
