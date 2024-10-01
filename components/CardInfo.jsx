import SectionCard from './SectionCard';
import photo1 from '../verLogobg.png'

// Replace the image links with your actual images.
const CardInfo = () => {
  return (
    <div className="p-10 bg-white">
      <SectionCard
        number="01"
        title="Automotive"
        description="We contribute a sustainable environment by eco-friendly energy vehicle."
        imageSrc={photo1}
        reverse={false}
      />
      <SectionCard
        number="02"
        title="Intelligent Lifting System"
        description="We aim to achieve an integration of science and arts, as well as modern production technologies."
        imageSrc="path_to_lifting_system_image"
        reverse={true}
      />
      <SectionCard
        number="02"
        title="Intelligent Lifting System"
        description="We aim to achieve an integration of science and arts, as well as modern production technologies."
        imageSrc="path_to_lifting_system_image"
        reverse={false}
      />
    </div>
  );
};

export default CardInfo;
