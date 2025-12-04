const servicesData = [
  {
    id: '01',
    title: 'Cybersecurity',
    img: '/images/service/service-one.jpg',
    heading: 'Secure Your Digital Perimeter and Supply Chain.',
    desc: 'Establish an end-to-end defense across your enterprise, covering Application Security, Network Security, and Cloud Security. We enforce Zero Trust principles, provide SASE and CNAPP solutions, and guarantee data protection against threats, including future Quantum-Resistant Security (QKD)',
    bg: 'md:bg-[#F3F3F3] bg-white',
    badgeBg: 'bg-[#D7D7D7]',
    lineBg: 'bg-[#D2D2D2]',
  },
  {
    id: '02',
    title: 'Cloud Solutions',
    img: '/images/service/service-two.jpg',
    heading: 'Optimize Performance, Lower Cloud Spend (FinOps).',
    desc: 'Accelerate cloud migration and modernization across Multi/Hybrid-cloud, Private Cloud, and Government Cloud (GCC). Achieve unparalleled efficiency through automated DevOps practices, FinOps cost governance, and infrastructure built as IaaC (Infrastructure as Code).',
    bg: 'bg-[#E0E0E0]',
    badgeBg: 'bg-[#9C9C9C]',
    lineBg: 'bg-[#9C9C9C]',
  },
  {
    id: '03',
    title: 'AI & Machine Learning',
    img: '/images/service/service-three.jpg',
    heading: 'Operationalize AI for Real-Time Business Intelligence',
    desc: 'Deploy specialized AI models (Edge AI, Computer Vision, Conversational AI) for everything from customer engagement to sophisticated Predictive Analysis. We use AIOps/MLOps frameworks to seamlessly build, train, and scale reliable production systems using the latest LLMs & NLP.',
    bg: 'md:bg-[#F3F3F3] bg-white',
    badgeBg: 'bg-[#D7D7D7]',
    lineBg: 'bg-[#D2D2D2]',
  },
];

const ServicesList = () => {
  return (
    <section className="bg-white mb-[75px]">
      {servicesData.map((service, index) => {
        const isReversed = index % 2 !== 0;
        const isFirst = index === 0;
        const isLast = index === servicesData.length - 1;

        return (
          <div key={service.id} className="container-padding">
            <div
              className={`flex ${
                isReversed
                  ? 'flex-col md:flex-row-reverse'
                  : 'flex-col md:flex-row'
              } gap-10 md:gap-20 ${service.bg} p-6 md:p-12  ${
                isFirst
                  ? 'rounded-t-[15px]'
                  : isLast
                    ? 'rounded-b-[15px]'
                    : 'rounded-[2px]'
              }`}
            >
              <div className="flex-1">
                <img
                  src={service.img}
                  alt={service.title}
                  className="md:h-[400px] w-full object-cover rounded-[8px]"
                />
              </div>

              <div className="flex-1 flex flex-col items-start justify-around">
                <div className="flex items-center">
                  <div
                    className={`size-[60px] ${service.badgeBg} flex items-center justify-center italic font-reddit-sans font-bold text-20 rounded-full`}
                  >
                    {service.id}
                  </div>
                  <div
                    className={`w-[60px] md:w-[120px] h-[4px] ${service.lineBg}`}
                  ></div>
                  <div className="font-reddit-sans font-semibold text-20 text-[#020202] ml-3">
                    {service.title}
                  </div>
                </div>

                <div className="text-black my-6 md:my-12 text-start">
                  <h6 className="fl1-sep md:!text-[26px]">{service.heading}</h6>
                  <p className="mt-6 fl3">{service.desc}</p>
                </div>

                <button className="btn-blue md:self-start self-center my-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesList;
