import ContactUs from '../Landing/ContactUs';
import EnterpriseSolutions from '../services/EnterpriseSolutions';
import ServicesHero from '../services/ServicesHero';
import ServicesList from '../services/ServicesList';

const Services = () => {
  return (
    <div>
      <div className="bg-primary-blue">
        <ServicesHero />
      </div>
      <EnterpriseSolutions />
      <ServicesList />

      <ContactUs />
    </div>
  );
};

export default Services;
