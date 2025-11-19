import ContactUs from '../Landing/ContactUs';
import KnowledgeHub from '../resources/KnowledgeHub';
import ResourcesHero from '../resources/ResourcesHero';
import ResourcesPointSection from '../resources/ResourcesPointSection';

const Resources = () => {
  return (
    <div className="bg-primary-blue">
      <ResourcesHero />
      <ResourcesPointSection />
      <KnowledgeHub />
      <ContactUs />
    </div>
  );
};

export default Resources;
