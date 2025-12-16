import ContactUs from '../Landing/ContactUs';
import PartnersHero from '../OurPartners/PartnersHero';
import PartnerSolution from '../OurPartners/PartnerSolution';

const OurPartners = () => {
  return (
    <div>
      <PartnersHero />
      <div className="container-outer">
        <PartnerSolution />
      </div>
    </div>
  );
};

export default OurPartners;
