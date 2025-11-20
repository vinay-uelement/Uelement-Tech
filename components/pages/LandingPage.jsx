import ContactUs from '../Landing/ContactUs';
import DrivingGrowthSection from '../Landing/DrivingGrowthSection';
import AboutSection from '../Landing/AboutSection';
import ServiceSegments from '../Landing/ServiceSegments';
import ServicesSection from '../Landing/ServicesSection';
import HeroSection from '../Landing/HeroSectionV5';

const LandingPage = () => {
  return (
    <div className="container-outer">
      <HeroSection />
      <div className="py-[75px]">
        <DrivingGrowthSection />
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
      {/* <ContactUs /> */}
    </div>
  );
};

export default LandingPage;
