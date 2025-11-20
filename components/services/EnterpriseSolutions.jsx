import { ReactIcons } from '@/utils/ReactIcons';
import Link from 'next/link';

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
];

const EnterpriseSolutions = () => {
  return (
    <section className="py-[var(--section-block-padding)] container-padding bg-white text-black">
      <div className="text-center flex flex-col items-center">
        <h1 className="title">Our Enterprise Solutions</h1>
        <p className="text-20 md:max-w-1/2">
          Comprehensive services designed to protect, optimize, and transform
          your business operations.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-12">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="p-6 bg-[#F6F6F6] rounded-[10px] h-[540px] 2xl:h-[590px] flex flex-col"
          >
            <div className="h-[220px] 2xl:h-[280px] relative">
              <img
                src={solution.image}
                alt={solution.title}
                className="h-full w-full object-cover"
              />
              <div className="bg-primary-blue size-12 rounded-full absolute right-3 -bottom-6 flex items-center justify-center">
                <img src={solution.icon} alt={solution.label} />
              </div>
            </div>
            <div className="pt-6 flex flex-col flex-1">
              <div className="bg-primary-blue rounded-[5px] text-white px-3 py-1 w-fit">
                {solution.label}
              </div>
              <h6 className="text-22 font-semibold text-black mt-4 whitespace-pre-line">
                {solution.title}
              </h6>
              <p className="font-light text-[#5F6D7E] mt-3 flex-1 ">
                {solution.description}
              </p>
              <Link
                href="/"
                className="font-semibold text-primary-blue  mt-3 flex items-center gap-1 "
              >
                Learn more
                {ReactIcons.arrowRight}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
