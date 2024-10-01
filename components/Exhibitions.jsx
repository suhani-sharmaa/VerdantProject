import ExhibitionCard from './ExhibitionCard';

const Exhibitions = () => {
  const exhibitions = [
    {
      imgSrc: 'link_to_crrc_image',
      title: 'INNOTRANS 2024',
      description: 'CCIG will have ART produced by CRRC',
      dates: '24-27 September 2024, Berlin',
    },
    {
      imgSrc: 'link_to_cantonfair_image',
      title: 'CANTONFAIR',
      description: '10.15-10.19 New Energy and Smart Mobility',
      dates: '10.15-10.19',
    },
    {
      imgSrc: 'link_to_iaa_image',
      title: 'IAA TRANSPORTATION',
      description: 'Transportation fair',
      dates: '9.17-9.23',
    },
    {
      imgSrc: 'link_to_elevator_image',
      title: 'THE ELEVATOR SHOW DUBAI',
      description: 'Partnership with CNIM',
      dates: '9.16-9.18',
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-5xl font-bold text-center mb-10 text-[#059547]">Exhibitions</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6">
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
