import ContactUs from '../Landing/ContactUs';
import EnterpriseSolutions from '../services/EnterpriseSolutions';
import ServicesHero from '../services/ServicesHero';
import ServicesList from '../services/ServicesList';

const Services = () => {
  return (
    <div>
      <div className="container-outer">
        <ServicesHero />
      </div>
      <EnterpriseSolutions />
      <ServicesList />
    </div>
  );
};

export default Services;
