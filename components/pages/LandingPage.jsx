import HeroSection from '../Landing/HeroSectionV5';
import ServicesSectionV3 from '../Landing/ServicesSectionV3';
import IndustriesSection from '../Landing/IndustriesSection';
import StatsSection from '../Landing/StatsSection';
import TestimonialSection from '../Landing/TestimonialSection';
import VerticalsSection from '../Landing/VerticalsSection';
import LandingFooter from '../Landing/LandingFooter';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSectionV3 />
      <IndustriesSection />
      <StatsSection />
      <TestimonialSection />
      <VerticalsSection />
    </div>
  );
};

export default LandingPage;
