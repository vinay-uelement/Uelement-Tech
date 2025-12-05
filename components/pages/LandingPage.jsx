import ContactUs from '../Landing/ContactUs';
import DrivingGrowthSection from '../Landing/DrivingGrowthSection';
import AboutSection from '../Landing/AboutSection';
import ServiceSegments from '../Landing/ServiceSegments';
import Highlight from '../Landing/Highlights';
import ServicesSection from '../Landing/ServicesSection';
import HeroSection from '../Landing/HeroSectionV5';
import Testimonial from '../Landing/Testimonial';

const LandingPage = () => {
  return (
    <div className="container-outer">
      <HeroSection />
      <div className="py-[75px]">
        <DrivingGrowthSection />
      </div>
      <div>
        <Highlight />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <ServiceSegments />
      </div>
      <div>
        <ServicesSection />
      </div>
      {/* <Testimonial /> */}
    </div>
  );
};

export default LandingPage;
