import ContactUs from '../Landing/ContactUs';
import PartnersHero from '../OurPartners/PartnersHero';
import PartnerSolution from '../OurPartners/PartnerSolution';

const OurPartners = () => {
  return (
    <div className="container-outer">
      <PartnersHero />
      <div className="container-outer">
        <PartnerSolution />
        <ContactUs />
      </div>
    </div>
  );
};

export default OurPartners;
