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
    desc: 'Assess the current situation to identify needs and gaps. Strategize by setting clear goals and creating a focused action plan.',
  },
  {
    id: 3,
    title: 'Optimize & Solution',
    icon: '/icons/landing/ticked-light.svg',
    desc: 'Assess the current situation to identify needs and gaps. Strategize by setting clear goals and creating a focused action plan.',
  },
  {
    id: 4,
    title: 'Implement & Integrate',
    icon: '/icons/landing/ticked-light.svg',
    desc: 'Assess the current situation to identify needs and gaps. Strategize by setting clear goals and creating a focused action plan.',
  },
];

export default function AboutSection() {
  return (
    <div>
      <div className="p-10 bg-primary-blue r15">
        <div className="flex flex-col-reverse md:flex-row">
          {/* LEFT WHITE BOX */}
          <div className="md:w-1/2 bg-[#FFF8F0] r15 py-12 px-6 md:px-12 relative">
            {/* vertical dotted line */}
            <div className="hidden md:block absolute top-12 bottom-12 left-1/2 border-r-2 border-dotted border-[#C5C5C5]"></div>

            {/* horizontal dotted line */}
            <div className="hidden md:block absolute left-12 right-12 top-1/2 border-t-2 border-dotted border-[#C5C5C5]"></div>

            <div className="grid grid-cols-2 gap-y-20 gap-x-10 place-items-center">
              {bullet.map((point) => (
                <div
                  key={point.id}
                  className="text-center flex flex-col items-center"
                >
                  <p className="text-[42px] font-bold text-[#A67620] leading-none">
                    {point.number}
                  </p>
                  <p className="text-[18px] mt-3 text-[#4A4A4A] font-light max-w-[160px]">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BLUE BOX */}
          <div className="flex-1 bg-primary-blue pe-[var(--container-small-padding)] md:pe-0 ps-[var(--container-small-padding)] text-white py-[var(--section-block-padding)]">
            <div className="w-full">
              <p className="slash">/About us</p>
              <h2 className="title">
                Innovative Digital solutions to{' '}
                <br className="hidden md:block" />
                Accelerate our Business Growth
              </h2>
              <p className="mt-4 md:max-w-[80%] font-reddit-sans ">
                We craft future-ready digital solutions that empower businesses
                to scale rapidly, adapt intelligently, and achieve sustainable
                growth. By seamlessly integrating innovation with strategic
                insight, we transform challenges into opportunities, delivering
                measurable impact in today’s dynamic business landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white text-black   py-[var(--section-block-padding)]">
        <div className="container-padding">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <p className="slash">/About us</p>
              <h2 className="title">
                How We Transform Your Enterprise
              </h2>
              <p className="mt-4 text-black w-full md:w-[80%]">
                Our proven 3-step approach delivers measurable results for
                enterprise clients across industries, combining deep domain
                expertise, innovative digital solutions, and data-driven
                strategies. By streamlining processes, enhancing customer
                experiences, and enabling smarter decision-making, we empower
                businesses to achieve sustainable growth and stay ahead in a
                rapidly evolving market.
              </p>

              <button className="text-16 xl:text-18 bg-black text-white rounded-full  py-2 px-9 mt-8 hidden md:block">
                Learn More
              </button>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 relative">
              <div className="hidden md:block absolute h-[80%] w-[1px] border-r-2 border-[#c5c5c5] border-dotted top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2"></div>
              {transformBullet.map((data, i) => (
                <div
                  key={data.id}
                  className={`flex flex-col relative ${
                    i % 2 === 0 ? 'items-end pe-8 ' : 'items-start ps-8'
                  } ${i === 2 || i === 3 ? ' pt-6' : ' pb-6'} md:items-start`}
                >
                  <div className="size-[50px] flex items-center justify-center bg-primary-blue rounded-full ">
                    <img src={data.icon} alt={data.title} />
                  </div>
                  <h6 className="text-16 mt-4 font-reddit-sans tracking-wider">{data.title}</h6>
                  <p
                    className={`mt-2 text-12 text-black font-medium md:w-full ${
                      i % 2 === 0 ? 'text-right' : 'text-left'
                    } md:text-left`}
                  >
                    {data.desc}
                  </p>
                  {(i === 2 || i === 3) && (
                    <div
                      className={`hidden md:block absolute w-[80%] h-[1px] border-t-2 border-[#c5c5c5] border-dotted -top-[2px]   ${
                        i === 2 ? 'right-[6px]' : 'left-[6px]'
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            <button className="text-16 xl:text-18 bg-black text-white rounded-full  py-2 px-9 mt-8  md:hidden">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
