'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { media } from '@/utils/media';

const services = [
  {
    id: 1,
    title: 'Digital Safety',
    logo: media('/images/landing/digital_safety.svg'),
    desc: "Securing the future with quantum-resistant and zero-trust architecture. Resilient defenses against today's threats and quantum attacks.",
  },
  {
    id: 2,
    title: 'Cloud Mastery',
    logo: media('/images/landing/cloud_mastery.svg'),
    desc: 'Architecting, optimizing and managing seamless multi-cloud environments. Scalable, secure infra with Zero Trust and FinOps.',
  },
  {
    id: 3,
    title: 'Accelerated AI',
    logo: media('/images/landing/accelarated_ai.svg'),
    desc: 'Accelerating intelligence with responsible AI and advanced analytics. Ethical AI for precise insights and analytics.',
  },
  {
    id: 4,
    title: 'Quantum & Web3',
    logo: media('/images/landing/future_tech.svg'),
    desc: 'Pioneering transformation with Quantum, Web3 and digital modernization. Quantum-ready, decentralized innovation.',
  },
];

const OUTER_MARGIN = '16rem';
const CARD_GAP = '1rem';

const TextCard = ({ title, desc, logo }) => (
  <div className="bg-[#F0F0F0] rounded-[18px] p-6 xl:p-8 flex flex-col items-center text-center gap-4 h-full">
    <div className="flex flex-row justify-between items-center gap-4">
      <div className="w-[48px] h-[48px] rounded-full bg-[#D4D4D4] flex items-center justify-center flex-shrink-0">
        <img
          src={logo}
          alt={title}
          className="w-[24px] h-[24px] object-contain"
        />
      </div>

      <h6 className="font-noto-sans font-bold text-16 xl:text-18 text-[#232223]">
        {title}
      </h6>
    </div>

    <div className="w-full border-t border-dashed border-[#C0C0C0]" />

    <p className="fl3 !text-[#1c1c1c] leading-relaxed">{desc}</p>
  </div>
);

const FillerCard = () => (
  <div className="h-full w-full rounded-[18px] border-[7px] border-[#F0F0F0] bg-transparent" />
);

const ServiceSegments = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };

  return (
    <div className="pb-[var(--section-block-padding)] pt-[20px]">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14 container-padding">
        <h1 className="fl1-sep mb-2 md:mb-3">Our Domains</h1>

        <p className="fl3 text-[#808080]">
          Deep expertise across four critical technology domains, from Zero
          Trust to Quantum Readiness.
        </p>
      </div>

      {/* Desktop */}
      <div className="hidden md:block overflow-hidden">
        <div className="flex flex-col gap-8">
          {/* Row 1 */}
          <div className="flex items-stretch h-[300px] gap-4">
            <div
              className="flex-1 overflow-hidden"
              style={{ marginLeft: '-80px' }}
            >
              <FillerCard />
            </div>

            <div className="flex-shrink-0 w-[260px] xl:w-[300px]">
              <TextCard {...services[0]} />
            </div>

            <div className="flex-shrink-0 w-[260px] xl:w-[300px]">
              <TextCard {...services[1]} />
            </div>

            <div className="flex-1 overflow-hidden rounded-l-[18px]">
              <img
                src={media('/images/landing/domain-1.webp')}
                alt="Domain visual 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-stretch h-[300px] gap-4">
            <div className="flex-1 overflow-hidden rounded-r-[18px]">
              <img
                src={media('/images/landing/domain-2.webp')}
                alt="Domain visual 2"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-shrink-0 w-[260px] xl:w-[300px]">
              <TextCard {...services[2]} />
            </div>

            <div className="flex-shrink-0 w-[260px] xl:w-[300px]">
              <TextCard {...services[3]} />
            </div>

            <div
              className="flex-1 overflow-hidden"
              style={{ marginRight: '-80px' }}
            >
              <FillerCard />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden container-padding pb-[var(--section-block-padding)]">
        <div className="grid grid-cols-1 gap-3">
          <div className="rounded-[18px] overflow-hidden min-h-[200px] hidden md:block">
            <img
              src={media('/images/landing/domain-1.webp')}
              alt="Domain visual 1"
              className="w-full h-full object-cover"
            />
          </div>

          <TextCard
            title={services[0].title}
            desc={services[0].desc}
            logo={services[0].logo}
          />

          <TextCard
            title={services[1].title}
            desc={services[1].desc}
            logo={services[1].logo}
          />

          <TextCard
            title={services[2].title}
            desc={services[2].desc}
            logo={services[2].logo}
          />

          <TextCard
            title={services[3].title}
            desc={services[3].desc}
            logo={services[3].logo}
          />

          <div className="rounded-[18px] overflow-hidden min-h-[200px] hidden md:block">
            <img
              src={media('/images/landing/domain-2.webp')}
              alt="Domain visual 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSegments;