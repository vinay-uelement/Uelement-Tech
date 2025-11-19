const bullet = [
  {
    id: 1,
    desc: "Uptime for cloud infrastructure",
    number: "99.9%",
  },
  {
    id: 2,
    desc: "Reduction in security incidents",
    number: "85%",
  },
  {
    id: 3,
    desc: "Enterprise Client Worldwide",
    number: "24/7",
  },
  {
    id: 4,
    desc: "Average Cost Saving",
    number: "350+",
  },
];

const transformBullet = [
  {
    id: 1,
    title: "Assess & Strategize",
    icon: "/icons/landing/key.svg",
    desc: "Assess the current situation to identify needs and gaps. Strategize by setting clear goals and creating a focused action plan.",
  },
  {
    id: 2,
    title: "Implement & Integrate",
    icon: "/icons/landing/settings.svg",
    desc: "Assess the current situation to identify needs and gaps. Strategize by setting clear goals and creating a focused action plan.",
  },
  {
    id: 3,
    title: "Optimize & Solution",
    icon: "/icons/landing/ticked-light.svg",
    desc: "Assess the current situation to identify needs and gaps. Strategize by setting clear goals and creating a focused action plan.",
  },
  {
    id: 4,
    title: "Implement & Integrate",
    icon: "/icons/landing/ticked-light.svg",
    desc: "Assess the current situation to identify needs and gaps. Strategize by setting clear goals and creating a focused action plan.",
  },
];

export default function AboutSection() {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-1/4 h-[100px] md:h-auto bg-about-white flex justify-end items-end md:items-center">
          <img
            src="/icons/global/UElement_Logo_White-new.svg"
            alt="uelement"
            className="max-h-[90%] w-auto hidden md:block -mr-3"
          />
          <img
            src="/icons/global/UElement_Logo_White 3.svg"
            alt="uelement"
            className="opacity-10 w-full block md:hidden -mb-3"
          />
        </div>
        <div className="flex-1 bg-primary-blue pe-[var(--container-small-padding)] md:pe-0 ps-[var(--container-small-padding)] text-white py-[var(--section-block-padding)]">
          <div className="w-full">
            <p className="font-light text-14 font-roboto">/About us</p>
            <h2 className="title !font-normal mt-4 font-dm-serif ">
              Innovative Digital solutions to <br className="hidden md:block" />{" "}
              Accelerate our Business Growth
            </h2>
            <p className="mt-4 md:max-w-[80%] font-reddit-sans ">
              We craft future-ready digital solutions that empower businesses to
              scale rapidly, adapt intelligently, and achieve sustainable
              growth. By seamlessly integrating innovation with strategic
              insight, we transform challenges into opportunities, delivering
              measurable impact in today’s dynamic business landscape
            </p>

            <div className="flex justify-center md:justify-start flex-wrap gap-4 md:gap-8 mt-[75px]">
              {bullet.map((point) => (
                <div
                  key={point.id}
                  className="w-[140px] md:max-w-[160px] text-center border-[0.03px] border-[#aaaaaa]/30 rounded-[20px] bg-[#D4D4D41A] backdrop-blur-2xl px-1 py-6"
                >
                  <p className="font-bold text-30">{point.number}</p>
                  <p className="font-light font-roboto">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-muted-blue-300 text-white   py-[var(--section-block-padding)]">
        <div className="container-padding">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <p className="font-light text-14 font-roboto">/About us</p>
              <h2 className="title !font-normal mt-4 ">
                How We Transform Your Enterprise
              </h2>
              <p className="mt-4 text-white/50">
                Our proven 3-step approach delivers measurable results for
                enterprise clients across industries, combining deep domain
                expertise, innovative digital solutions, and data-driven
                strategies. By streamlining processes, enhancing customer
                experiences, and enabling smarter decision-making, we empower
                businesses to achieve sustainable growth and stay ahead in a
                rapidly evolving market.
              </p>

              <button className="text-16 xl:text-18 bg-white text-black rounded-full  py-2 px-9 mt-8 hidden md:block">
                Learn More
              </button>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 relative">
              <div className="hidden md:block absolute h-[80%] w-[1px] border-r-4 border-dotted top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2"></div>
              {transformBullet.map((data, i) => (
                <div
                  key={data.id}
                  className={`flex flex-col relative ${
                    i % 2 === 0 ? "items-end pe-8 " : "items-start ps-8"
                  } ${i === 2 || i === 3 ? " pt-6" : " pb-6"} md:items-start`}
                >
                  <div className="size-[50px] flex items-center justify-center bg-primary-blue rounded-full ">
                    <img src={data.icon} alt={data.title} />
                  </div>
                  <h6 className="mt-4  font-dm-serif">{data.title}</h6>
                  <p
                    className={`mt-2 text-12 text-white/50  md:w-full ${
                      i % 2 === 0 ? "text-right" : "text-left"
                    } md:text-left`}
                  >
                    {data.desc}
                  </p>
                  {(i === 2 || i === 3) && (
                    <div
                      className={`hidden md:block absolute w-[80%] h-[1px] border-t-4 border-dotted -top-[2px]   ${
                        i === 2 ? "right-[6px]" : "left-[6px]"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            <button className="text-16 xl:text-18 bg-white text-black rounded-full  py-2 px-9 mt-8  md:hidden">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
