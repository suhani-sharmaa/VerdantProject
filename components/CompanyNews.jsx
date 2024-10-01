
// NewsCard Component to handle individual news items
const NewsCard = ({date, title, imageSrc}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
      </div>
    </div>
  );
};

// CompanyNews Component to display the grid of news items
const CompanyNews = () => {
  const newsItems = [
    {
      key:1,
      date: 'September 18, 2024',
      title: 'ELIDZ / AIDC EASTERN CAPE / CCIG / SIGA PARTNERSHIP IN SOUTH AFRICA',
      imageSrc: '/path/to/image1.png', // Replace with the actual image path
    },
    {
      key:2,
      date: 'September 11, 2024',
      title: 'The Minister of Transport of Sarawak State of Malaysia gave a thumbs up!',
      imageSrc: '/path/to/image2.png', // Replace with the actual image path
    },
    {
      key:3,
      date: 'July 31, 2024',
      title: 'The Fenhu Starship Super Factory at the headquarters of CCIG was officially put into operation',
      imageSrc: '/path/to/image3.png', // Replace with the actual image path
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#057E47] text-center mb-12">
          Company News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((newsItem) => (
            <NewsCard
              key={newsItem.key}
              date={newsItem.date}
              title={newsItem.title}
              imageSrc={newsItem.imageSrc}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-[#057E47] text-white font-semibold hover:scale-110 duration-300 rounded-full ">
            MORE &gt;
          </button>
        </div>
      </div>
      {/* Padding at the bottom to prevent content overlap */}
      <div className="pb-28"></div>
    </div>
  );
};

export default CompanyNews;
