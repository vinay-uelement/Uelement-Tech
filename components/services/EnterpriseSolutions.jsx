import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalSlider from '@/components/Slider/GlobalSlider';

const solutions = [
  {
    id: 1,
    image: '/images/global/security.png',
    icon: '/icons/global/enterprise-icon.svg',
    label: 'Cyber Security',
    title: 'Complete Enterprise \n Security.',
    description:
      'We deliver comprehensive Enterprise Security Solutions & Services that safeguard critical assets, ensure compliance, and mitigate risks.',
  },
  {
    id: 2,
    image: '/images/global/ai.jpg',
    icon: '/icons/global/machinelearning-icon.svg',
    label: 'Ai & Machine Learning',
    title: 'Integrated Smart Enterprise Ai Modular Solutions.',
    description:
      'Our AI-Powered Innovations deliver Intelligent, Data-driven Solutions to Global Enterprises, enhancing operational efficiency and decision-making.',
  },
  {
    id: 3,
    image: '/images/global/cloud.jpg',
    icon: '/icons/global/cloud-icon.svg',
    label: 'Cloud Solution',
    title: 'Architecting and Optimizing perfect Cloud Solutions.',
    description:
      'Our Enterprise Cloud Solutions provide Global Businesses with optimized, scalable, secure, and efficient cloud infrastructure tailored to their needs.',
  },
  {
    id: 4,
    image: '/images/global/security.png',
    icon: '/icons/global/enterprise-icon.svg',
    label: 'Cyber Security',
    title: 'Complete Enterprise \n Security.',
    description:
      'We deliver comprehensive Enterprise Security Solutions & Services that safeguard critical assets, ensure compliance, and mitigate risks.',
  },
];

const EnterpriseSolutions = () => {
  return (
    <section className="py-[var(--section-block-padding)] container-padding bg-white text-black">
      <div className="text-center flex flex-col items-center">
        <h1 className="fl1 !text-[30px]">Define. Build. Run.</h1>
        <p className=" fl3 mb-4 md:max-w-1/2">
          Our four service pillars cover the full lifecycle of technology adoption,
          modernization, and ongoing optimization.
        </p>
      </div>
  
      <GlobalSlider data={solutions} />
    </section>
  );
};

export default EnterpriseSolutions;
