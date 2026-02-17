export default function FacultyCard({
  name,
  subject,
  experience,
  description,
  image
}) {
  return (
    <div className="bg-[#12263A] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300 text-center">

      {/* Faculty Image */}
      <div className="flex justify-center mb-5">
        <img
          src={image}
          alt={name}
          className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover border-4 border-orange-500"
        />
      </div>

      {/* Name */}
      <h2 className="text-lg md:text-xl font-bold mb-1">
        {name}
      </h2>

      {/* Subject */}
      <p className="text-orange-500 text-sm mb-2">
        {subject}
      </p>

      {/* Experience */}
      <p className="text-gray-400 text-xs md:text-sm mb-3">
        {experience}
      </p>

      {/* Description */}
      <p className="text-gray-400 text-sm">
        {description}
      </p>

    </div>
  );
}
