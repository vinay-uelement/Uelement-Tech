'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const services = [
  {
    id: 1,
    title: 'Digital Safety',
    desc: "Securing the future with quantum-resistant and zero-trust architecture. Resilient defenses against today's threats and quantum attacks.",
  },
  {
    id: 2,
    title: 'Cloud Mastery',
    desc: 'Architecting, optimizing and managing seamless multi-cloud environments. Scalable, secure infra with Zero Trust and FinOps.',
  },
  {
    id: 3,
    title: 'Accelerated AI',
    desc: 'Accelerating intelligence with responsible AI and advanced analytics. Ethical AI for precise insights and analytics.',
  },
  {
    id: 4,
    title: 'Future Tech',
    desc: 'Pioneering transformation with Quantum, Web3 and digital modernization. Quantum-ready, decentralized innovation.',
  },
];

const OUTER_MARGIN = '16rem'; // matches your pl-42 / pr-42
const CARD_GAP = '1rem'; // gap between the two text cards per row

const TextCard = ({ title, desc }) => (
  <div className="bg-[#F0F0F0] rounded-[38px] p-6 xl:p-8 flex flex-col items-center text-center gap-4 h-full">
    <div className="w-[48px] h-[48px] rounded-full bg-[#D4D4D4] flex-shrink-0" />
    <h6 className="font-noto-sans font-bold text-16 xl:text-18 text-[#232223]">
      {title}
    </h6>
    <div className="w-full border-t border-dashed border-[#C0C0C0]" />
    <p className="fl3 !text-[#1c1c1c] leading-relaxed">{desc}</p>
  </div>
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

      {/* Desktop — 2 flex rows
          Row 1: [←margin] Card1 [gap] Card2 [flush] Image→
          Row 2: ←Image [flush] Card3 [gap] Card4 [margin→]
          All 4 cards = (viewport - margin - gap) / 3  →  equal width ✓
          Images also = same 1/3 share, bleed to viewport edge ✓          */}
      <div className="hidden xl:flex flex-col gap-8">
        {/* Row 1 */}
        <div className="flex items-stretch h-[300px]">
          <div
            style={{ flex: 0.95, marginLeft: OUTER_MARGIN, marginRight: CARD_GAP }}
          >
            <TextCard title={services[0].title} desc={services[0].desc} />
          </div>
          {/* marginRight: 0 → flush against image */}
          <div style={{ flex: 0.95 }}>
            <TextCard title={services[1].title} desc={services[1].desc} />
          </div>
          <div
            style={{ flex: 1.5 }}
            className="overflow-hidden rounded-l-[38px] ml-[1rem]"
          >
            <img
              src="/images/landing/domain-1.webp"
              alt="Domain visual 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-stretch h-[300px]">
          <div
            style={{ flex: 1.5 }}
            className="overflow-hidden rounded-r-[38px] mr-[1rem]"
          >
            <img
              src="/images/landing/domain-2.webp"
              alt="Domain visual 2"
              className="w-full h-full object-cover"
            />
          </div>
          {/* marginLeft: 0 → flush against image */}
          <div style={{ flex: 0.95, marginRight: CARD_GAP }}>
            <TextCard title={services[2].title} desc={services[2].desc} />
          </div>
          <div style={{ flex: 0.95, marginRight: OUTER_MARGIN }}>
            <TextCard title={services[3].title} desc={services[3].desc} />
          </div>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="xl:hidden container-padding testimonial-slick pb-[var(--section-block-padding)]">
        <Slider {...sliderSettings}>
          {services.map((s) => (
            <div key={s.id} className="px-2">
              <TextCard title={s.title} desc={s.desc} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceSegments;
