import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalSlider from '@/components/Slider/GlobalSlider';

const solutions = [
  {
    id: 1,
    image: '/images/service/cybersec.png',
    icon: '/icons/global/enterprise-icon.svg',
    label: 'Cyber Security',
    title: 'Digital Safety: Next-Gen Security from App to Cloud',
    description:
      'Comprehensive digital safety including Zero Trust, SASE, and Cloud/App Security. We prepare you for the future with Quantum-Resistant Security (QKD).',
  },
  {
    id: 2,
    image: '/images/service/ai.png',
    icon: '/icons/global/machinelearning-icon.svg',
    label: 'Ai & Machine Learning',
    title: 'Enterprise Cloud: Migration, Modernization, and Optimization.',
    description:
      'Expert Multi/Hybrid-cloud management, migration, and modernization. We ensure peak efficiency via DevOps, FinOps, and Infrastructure as Code (IaaC).',
  },
  {
    id: 3,
    image: '/images/service/enterprise.png',
    icon: '/icons/global/cloud-icon.svg',
    label: 'Cloud Solution',
    title: 'Accelerated Intelligence: Responsible AI from Edge to Enterprise.',
    description:
      'Powering outcomes with Edge AI, Generative AI (LLMs), and Conversational AI. Solutions are built and scaled efficiently using AIOps/MLOps frameworks',
  },
  {
    id: 4,
    image: '/images/global/security.png',
    icon: '/icons/global/enterprise-icon.svg',
    label: 'Cyber Security',
    title: 'Pioneering Transformation with Quantum Readiness.',
    description:
      'Driving next-wave technology in Quantum Computing (QKD) and Web3. We execute critical App Modernization, Sassification, and Mainframe-to-Cloud migration.',
  },
];

const EnterpriseSolutions = () => {
  return (
    <section className="py-[var(--section-block-padding)] container-padding bg-white text-black">
      <div className="text-center flex flex-col md:items-center">
        <h1 className="fl1">Define. Build. Run.</h1>
        <p className=" fl3 mb-4 md:max-w-1/2 w-full">
          Our four service pillars cover the full lifecycle of technology adoption,
          modernization, and ongoing optimization.
        </p>
      </div>
  
      <GlobalSlider data={solutions} />
    </section>
  );
};

export default EnterpriseSolutions;
