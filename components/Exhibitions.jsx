import ExhibitionCard from './ExhibitionCard';
import News1 from '../Images/News/News1.jpg'
import News2 from '../Images/News/News2.jpg'
import News3 from '../Images/News/News3.jpg'
import News4 from '../Images/News/News4.jpg'
const Exhibitions = () => {
  const exhibitions = [
    {
      imgSrc: `${News1}`,
      title: 'INNOTRANS 2024',
      description: 'CCIG will have ART produced by CRRC',
      dates: '24-27 September 2024, Berlin',
    },
    {
      imgSrc: `${News2}`,
      title: 'CANTONFAIR',
      description: '10.15-10.19 New Energy and Smart Mobility',
      dates: '10.15-10.19',
    },
    {
      imgSrc: `${News3}`,
      title: 'IAA TRANSPORTATION',
      description: 'Transportation fair',
      dates: '9.17-9.23',
    },
    {
      imgSrc: `${News4}`,
      title: 'THE ELEVATOR SHOW DUBAI',
      description: 'Partnership with CNIM',
      dates: '9.16-9.18',
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-5xl font-bold text-center mb-10 text-[#059547]">Exhibitions</h1>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6">
        {exhibitions.map((exhibition, index) => (
          <ExhibitionCard
          key={index}
          imgSrc = {exhibition.imgSrc}
          title={exhibition.title}
          description={exhibition.description}
          dates={exhibition.dates}
          />
        ))}
      </div>
    </div>
  );
};

export default Exhibitions;
