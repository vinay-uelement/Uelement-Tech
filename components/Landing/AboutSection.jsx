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
    icon: '/icons/landing/manage.svg',
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
      <div className="w-full bg-white text-black py-[var(--section-block-padding)]">
        <div className="container-padding">
          <p className="fl-slash">/About us</p>
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1 bg-hero-gradient rounded-[18px] p-6 xl:p-8">
              <h2 className="fl1 md:w-[80%] w-full text-white!">
                Established by Innovators to Define Tomorrow's Digital
                Landscape.
              </h2>
              <p className="fl3 mt-4 text-black w-full md:w-[80%] text-white!">
                Our strategic focus on Cybersecurity, AI, and Enterprise Cloud
                empowers organizations to navigate complex digital environments
                confidently and resiliently. We blend deep technical expertise
                with curiosity and collaboration to deliver transformative,
                future-ready solutions, while advancing Quantum Computing to
                redefine industry standards and fortify the digital landscape.​'
              </p>

              <button
                className="btn-arrow mt-14 btn-arrow-yellow !hidden lg:!block"
                onClick={() => router.push('/company')}
              >
                <span
                  className="btn-arrow-circle bg-hero-gradient"
                  aria-hidden="true"
                >
                  <span className="btn-arrow-icon" />
                </span>
                <span className="btn-arrow-text">Learn More</span>
              </button>
            </div>
            <div className="relative  flex-2">
              {/* Vertical center line */}
              <div className="absolute left-1/2 md:block hidden top-0 bottom-0 border-l-1 border-dashed border-[#C0BFBFFF] transform -translate-x-1/2"></div>

              {/* Horizontal center line */}
              <div className="absolute top-1/2 md:block hidden left-0 right-0 border-t-1 border-dashed border-[#C0BFBFFF] transform -translate-y-1/2"></div>

              {/* 2x2 Grid Mobile */}
              <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto relative z-10 md:hidden">
                {transformBullet.map((data) => (
                  <div
                    key={data.id}
                    className={`flex flex-col ${data.id % 2 !== 0 ? 'items-start text-left' : 'items-end text-right'}`}
                  >
                    <div className="size-[50px] flex items-center justify-center bg-[#F3F3F3] rounded-full ">
                      <img
                        src={data.icon}
                        alt={data.title}
                        className="w-auto"
                      />
                    </div>
                    <h3 className="text-20 mt-4 font-reddit-sans tracking-wider font-semibold">
                      {data.title}
                    </h3>
                    <p className="mt-2 fl3 font-medium md:w-full">
                      {data.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Desktop  */}
              <div className="grid grid-cols-2 gap-20 max-w-5xl m7-auto relative z-10 hidden md:grid mt-18">
                {transformBullet.map((data) => (
                  <div key={data.id} className="flex flex-col items-start">
                    <div className="size-[50px] flex items-center justify-center bg-[#F3F3F3] rounded-full ">
                      <img
                        src={data.icon}
                        alt={data.title}
                        className="w-auto"
                      />
                    </div>
                    <h3 className="text-20 mt-4 font-reddit-sans tracking-wider font-semibold">
                      {data.title}
                    </h3>
                    <p className="mt-2 fl3 md:w-full">{data.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="btn-blue w-fit mx-auto md:hidden"
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
