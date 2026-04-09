import ContactUs from '../Landing/ContactUs';
import KnowledgeHub from '../resources/KnowledgeHub';
import ResourcesHero from '../resources/ResourcesHero';
import ResourcesPointSection from '../resources/ResourcesPointSection';

const Resources = () => {
  return (
    <div className="p-2 md:p-3">
      <div className="bg-hero-gradient rounded-[38px]">
        <ResourcesHero />
        <ResourcesPointSection />
      </div>
      <KnowledgeHub />
    </div>
  );
};

export default Resources;
