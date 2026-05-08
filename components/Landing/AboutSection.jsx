'use client';
import { useRouter } from 'next/navigation';

const transformBullet = [
  {
    id: 1,
    title: 'Assess & Strategize',
    icon: '../icons/landing/key.svg',
    desc: 'Assess the current situation to identify needs and gaps. Strategize by setting clear goals and creating a focused action plan.',
  },
  {
    id: 2,
    title: 'Architect & Design',
    icon: '../icons/landing/settings.svg',
    desc: 'Re-architect cloud environments, design secure infrastructure (Iaac), and develop product MVPs with clear roadmaps.',
  },
  {
    id: 3,
    title: 'Implement & Integrate',
    icon: '../icons/landing/manage.svg',
    desc: 'Execute full-stack development, platform integration, cloud migration, and deploy Zero Trust/Quantum Security solutions.',
  },
  {
    id: 4,
    title: 'Manage & Optimize',
    icon: '../icons/landing/ticked-light.svg',
    desc: 'Provide ongoing Managed Cloud Infra, SecOps, FinOps, and continuous performance optimization.',
  },
];

export default function AboutSection() {
  const router = useRouter();

  return (
    <section className="w-full bg-white text-black py-[var(--section-block-padding)]">
      <div className="container-padding">
        <p className="fl-slash">/About us</p>

        <div className="flex flex-col md:flex-row md:items-stretch gap-16">
          {/* ── Left: blue card ── */}
          <div className="flex-1 bg-hero-gradient rounded-[18px] p-6 xl:p-8 flex flex-col justify-between ">
            <div>
              <h2 className="fl1 w-full md:w-[100%] !text-white">
                Established by Innovators to Define Tomorrow's Digital
                Landscape.
              </h2>
              <p className="fl3 mt-4 w-full md:w-[100%] !text-white ">
                Our strategic focus on Cybersecurity, AI, and Enterprise Cloud
                empowers organizations to navigate complex digital environments
                confidently and resiliently. We blend deep technical expertise
                with curiosity and collaboration to deliver transformative,
                future-ready solutions, while advancing Quantum Computing to
                redefine industry standards and fortify the digital landscape.
              </p>
            </div>

            <button
              className="btn-arrow mt-14 btn-arrow-yellow !hidden lg:!flex"
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

          {/* ── Right: 2×2 grid with centered dividers ── */}
          <div className="relative flex-[2]">
            {/* Dividers — perfectly centered because the grid is h-full */}
            <div className="absolute hidden md:block left-1/2 top-0 bottom-0 -translate-x-px border-l border-dashed border-[#C0BFBF]" />
            <div className="absolute hidden md:block top-1/2 left-0 right-0 -translate-y-px border-t border-dashed border-[#C0BFBF]" />

            {/* Desktop grid — h-full stretches to match the blue card exactly */}
            <div className="hidden md:grid grid-cols-2 h-full relative z-10">
              {transformBullet.map((data) => (
                <div
                  key={data.id}
                  className="flex flex-col items-start p-6 xl:p-10"
                >
                  <div className="size-[50px] flex items-center justify-center bg-[#F3F3F3] rounded-full flex-shrink-0">
                    <img src={data.icon} alt={data.title} className="w-auto" />
                  </div>
                  <h3 className="text-20 mt-4 font-reddit-sans tracking-wider font-semibold">
                    {data.title}
                  </h3>
                  <p className="mt-2 fl3">{data.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile — single column, alternating alignment */}
            <div className="md:hidden grid grid-cols-1 gap-10">
              {transformBullet.map((data) => (
                <div
                  key={data.id}
                  className={`flex flex-col ${data.id % 2 !== 0 ? 'items-start text-left' : 'items-end text-right'}`}
                >
                  <div className="size-[50px] flex items-center justify-center bg-[#F3F3F3] rounded-full flex-shrink-0">
                    <img src={data.icon} alt={data.title} className="w-auto" />
                  </div>
                  <h3 className="text-20 mt-4 font-reddit-sans tracking-wider font-semibold">
                    {data.title}
                  </h3>
                  <p className="mt-2 fl3 font-medium">{data.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile CTA — visible as a 3rd flex item on mobile (flex-col) */}
          <button
            className="btn-blue w-fit mx-auto md:hidden"
            onClick={() => router.push('/company')}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}