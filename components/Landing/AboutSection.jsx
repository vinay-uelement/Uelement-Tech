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
    desc: 'Accelerated Product Launch',
    number: '30%',
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
    title: 'Architect & Design ',
    icon: '/icons/landing/settings.svg',
    desc: 'Re-architect cloud environments, design secure infrastructure (Iaac), and develop product MVPs with clear roadmaps.',
  },
  {
    id: 3,
    title: 'Implement & Integrate',
    icon: '/icons/landing/manage.png',
    desc: 'Execute full-stack development, platform integration, cloud migration, and deploy Zero Trust/Quantum Security solutions.',
  },
  {
    id: 4,
    title: 'Manage & Optimize',
    icon: '/icons/landing/ticked-light.svg',
    desc: 'Provide ongoing Managed Cloud Infra, SecOps, FinOps, and continuous performance optimization.',
  },
];

export default function AboutSection() {
  const router = useRouter();
  return (
    <div>
      <div className="p-10 bg-primary-blue rounded-[4px] mx-4 md:mx-8">
        <div className="flex flex-col-reverse xl:flex-row">
          {/* LEFT WHITE BOX */}
          <div className="xl:w-1/2 bg-[#FFF8F0] rounded-[4px] overflow-hidden py-5 xl:py-10 px-6 xl:px-10">
            <div className="grid grid-cols-2 grid-rows-2">
              {bullet.map((point, index) => (
                <div
                  key={point.id}
                  className={`
          flex flex-col items-center justify-center
          text-center px-6 py-6 xl:py-12
          ${index < 2 ? 'border-b-2 border-dashed border-[#00000019]' : ''}
          ${index % 2 === 0 ? 'border-r-2 border-dashed border-[#00000019]' : ''}
        `}
                >
                  <p className="text-20 xl:text-[42px] font-extrabold text-[#A67620] leading-none">
                    {point.number}
                  </p>

                  <p className="mt-3 text-12 xl:text-[18px] text-[#4A4A4A] max-w-[180px]">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BLUE BOX */}
          <div className="flex-1 bg-primary-blue xl:pe-[var(--container-small-padding)] xl:pe-0 xl:ps-[var(--container-small-padding)] text-white xl:py-[var(--section-block-padding)]">
            <div className="w-full">
              <p className="fl-slash text-center xl:text-left">/About us</p>
              <h2 className="fl1 !text-[#FFF9FF] text-center xl:text-left">
                Precision, Trust. Your Full-Stack{' '}
                <br className="hidden xl:block" />
                Partner for Secure Future
              </h2>
              <p className="mt-4 xl:max-w-[80%] w-full fl3 md:!text-[16px] !text-[#FFF9FF] text-center xl:text-left mb-8 xl:mb-0">
                Founded by innovators and architects in 2024, UElement
                Technologies helps organizations solve complex challenges across
                Cybersecurity, Cloud, and AI with precision and confidence. By
                unifying strategy, technology, and execution into a seamless
                service portfolio, we eliminate the need for multiple vendors
                and simplify digital transformation. Driven by a future-forward
                mindset, including pioneering work in Quantum Computing, we
                enable sustainable growth and help enterprises thrive in a
                secure digital world.
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
                Our strategic focus on Cybersecurity, AI, and Enterprise Cloud
                empowers organizations to navigate complex digital environments
                confidently and resiliently. We blend deep technical expertise
                with curiosity and collaboration to deliver transformative,
                future-ready solutions, while advancing Quantum Computing to
                redefine industry standards and fortify the digital landscape.​'
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
