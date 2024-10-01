const SectionCard = (number, title, description, imageSrc, reverse) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 my-10 items-center ${
        reverse ? 'md:grid-cols-2-reverse' : ''
      }`}
    >
      {/* Text Section */}
      <div className="space-y-4">
        <p className="text-sm text-gray-500">{number}</p>
        <h2 className="text-3xl font-bold text-black">
          {title} <span className="text-red-600">|</span>
        </h2>
        <p className="text-gray-500 text-lg">{description}</p>
        <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700">
          MORE &gt;
        </button>
      </div>
      {/* Image Section */}
      <div className="flex justify-end">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-lg shadow-lg object-cover h-64 w-full md:w-auto md:h-auto"
        />
      </div>
    </div>
  );
};

export default SectionCard;
