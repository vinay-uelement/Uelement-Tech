'use client';
import { useRouter } from 'next/navigation';

const bullet = [
  {
    id: 1,
    desc: 'Uptime for cloud infrastructure',
    number: '99.9%',
  },
  {
    id: 2,
    desc: 'Reduction in security incidents',
    number: '85%',
  },
  {
    id: 3,
    desc: 'Enterprise Client Worldwide',
    number: '24/7',
  },
  {
    id: 4,
    desc: 'Average Cost Saving',
    number: '350+',
  },
];

const transformBullet = [
  {
    id: 1,
    title: 'Assess & Strategize',
    icon: '/icons/landing/key.svg',
    desc: 'Assess the current situation to identify needs and gaps. Strategize by setting clear goals and creating a focused action plan.',
  },
  {
    id: 2,
    title: 'Implement & Integrate',
    icon: '/icons/landing/settings.svg',
    desc: 'Re-architect cloud environments, design secure infrastructure (Iaac), and develop product MVPs with clear roadmaps',
  },
  {
    id: 3,
    title: 'Optimize & Solution',
    icon: '/icons/landing/ticked-light.svg',
    desc: 'Execute full-stack development, platform integration, cloud migration, and deploy Zero Trust/Quantum Security solutions.',
  },
  {
    id: 4,
    title: 'Implement & Integrate',
    icon: '/icons/landing/ticked-light.svg',
    desc: 'Provide ongoing Managed Cloud Infra, SecOps, FinOps, and continuous performance optimization.',
  },
];

export default function AboutSection() {
  const router = useRouter();
  return (
    <div>
      <div className="p-10 bg-primary-blue rounded-[4px]">
        <div className="flex flex-col-reverse xl:flex-row">
          {/* LEFT WHITE BOX */}
          <div className="xl:w-1/2 bg-[#FFF8F0] rounded-[4px] py-5 xl:py-15 px-6 xl:px-12 relative">
            {/* vertical dotted line */}
            <div className="absolute bottom-12 top-12 left-1/2 border-r-2 border-dashed border-[#00000019] xl:border-[#C5C5C5]"></div>

            {/* horizontal dotted line */}
            <div className="absolute left-12 right-12 top-1/2 border-t-2 border-dashed border-[#00000019] xl:border-[#C5C5C5]"></div>

            <div className="grid grid-cols-2 gap-y-15 xl:gap-y-30 gap-x-10 place-items-center">
              {bullet.map((point) => (
                <div
                  key={point.id}
                  className="text-center flex flex-col items-center"
                >
                  <p className="text-20 xl:text-[42px] font-extrabold font-reddit-sans text-[#A67620] leading-none">
                    {point.number}
                  </p>
                  <p className="!text-12 xl:!text-[18px] fl3 mt-3 text-[#4A4A4A] font-light max-w-[160px]">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BLUE BOX */}
          <div className="flex-1 bg-primary-blue pe-[var(--container-small-padding)] xl:pe-0 ps-[var(--container-small-padding)] text-white xl:py-[var(--section-block-padding)]">
            <div className="w-full">
              <p className="fl-slash text-center xl:text-left">/About us</p>
              <h2 className="fl1 !text-[#FFF9FF] text-center xl:text-left">
                Precision, Trust. Your Full-Stack{' '}
                <br className="hidden xl:block" />
                Partner for Secure Future
              </h2>
              <p className="mt-4 xl:max-w-[80%] fl3 !text-[16px] !text-[#FFF9FF] text-center xl:text-left mb-8 xl:mb-0">
                Established by innovators in 2024, UElement Technologies is
                dedicated to solving complex challenges across Cybersecurity,
                Cloud, and AI with unparalleled expertise. We eliminate the
                complexity of managing multiple vendors by delivering an
                integrated, seamless service portfolio. Our relentless
                commitment to excellence and future-forward vision, including
                pioneering work in Quantum Computing, is designed to ensure your
                organization achieves sustainable growth and thrives in a secure
                digital future.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white text-black py-[var(--section-block-padding)]">
        <div className="container-padding">
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="flex-1">
              <p className="fl-slash">/About us</p>
              <h2 className="fl1 xl:w-[80%] w-full">
                Established by Innovators to Define Tomorrow's Digital
                Landscape.
              </h2>
              <p className="fl3 mt-4 text-black w-full xl:w-[80%]">
                UElement Technologies was founded in 2024 by innovators
                committed to excellence and trust. Our foundation is built on
                unwavering honesty and ethical accountability. We strategically
                focus on Cybersecurity, AI, and Cloud to strengthen the digital
                landscape. We embrace curiosity and drive transformative
                solutions, channeling our ambition into the future of Quantum
                Computing.
              </p>

              <button
                className="btn-blue mt-14 hidden xl:block"
                onClick={() => router.push('/company')}
              >
                Learn More
              </button>
            </div>
            <div className="relative  flex-1">
              {/* Vertical center line */}
              <div className="absolute left-1/2 xl:block hidden top-0 bottom-0 border-l-2 border-dotted border-gray-300 transform -translate-x-1/2"></div>

              {/* Horizontal center line */}
              <div className="absolute top-1/2 xl:block hidden left-0 right-0 border-t-2 border-dotted border-gray-300 transform -translate-y-1/2"></div>

              {/* 2x2 Grid Mobile */}
              <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto relative z-10 xl:hidden">
                {transformBullet.map((data) => (
                  <div
                    key={data.id}
                    className={`flex flex-col ${data.id % 2 !== 0 ? 'items-start text-left' : 'items-end text-right'}`}
                  >
                    <div className="size-[50px] flex items-center justify-center bg-primary-blue rounded-full ">
                      <img
                        src={data.icon}
                        alt={data.title}
                        className="w-auto"
                      />
                    </div>
                    <h3 className="text-20 mt-4 font-reddit-sans tracking-wider font-semibold">
                      {data.title}
                    </h3>
                    <p className="mt-2 fl3 font-medium xl:w-full">
                      {data.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Desktop  */}
              <div className="grid grid-cols-2 gap-20 max-w-5xl mx-auto relative z-10 hidden xl:grid">
                {transformBullet.map((data) => (
                  <div key={data.id} className="flex flex-col items-start">
                    <div className="size-[50px] flex items-center justify-center bg-primary-blue rounded-full ">
                      <img
                        src={data.icon}
                        alt={data.title}
                        className="w-auto"
                      />
                    </div>
                    <h3 className="text-20 mt-4 font-reddit-sans tracking-wider font-semibold">
                      {data.title}
                    </h3>
                    <p className="mt-2 fl3 xl:w-full">{data.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="btn-blue w-fit mx-auto xl:hidden"
              onClick={() => router.push('/company')}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
