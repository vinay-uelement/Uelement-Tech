import ContactUs from '../Landing/ContactUs';
import KnowledgeHub from '../resources/KnowledgeHub';
import ResourcesHero from '../resources/ResourcesHero';
import ResourcesPointSection from '../resources/ResourcesPointSection';

const Resources = () => {
  return (
    <div>
      <div className="bg-primary-blue">
        <ResourcesHero />
        <ResourcesPointSection />
      </div>
      <KnowledgeHub />
    </div>
  );
};

export default Resources;
