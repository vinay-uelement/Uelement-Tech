import ContactUs from '../Landing/ContactUs';
import DrivingGrowthSection from '../Landing/DrivingGrowthSection';
import AboutSection from '../Landing/AboutSection';
import ServiceSegments from '../Landing/ServiceSegments';
import Highlight from '../Landing/Highlights';
import ServicesSection from '../Landing/ServicesSection';
import HeroSection from '../Landing/HeroSectionV5';
import Testimonial from '../Landing/Testimonial';
import HighlightV2 from '../Landing/HighlightsV2';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="py-[75px]">
        <DrivingGrowthSection />
      </div>
      <div>
        <HighlightV2 />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <ServiceSegments />
      </div>
      <div className="container-outer">
        <ServicesSection />
      </div>
      {/* <Testimonial /> */}
    </div>
  );
};

export default LandingPage;
