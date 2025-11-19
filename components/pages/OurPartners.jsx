import ContactUs from '../Landing/ContactUs';
import PartnersHero from '../OurPartners/PartnersHero';
import PartnerSolution from '../OurPartners/PartnerSolution';

const OurPartners = () => {
  return (
    <div className="bg-primary-blue">
      <PartnersHero />
      <div className="container-outer">
        <PartnerSolution />
        <ContactUs />
      </div>
    </div>
  );
};

export default OurPartners;
