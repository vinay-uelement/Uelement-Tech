const ServicesList = () => {
  return (
    <section className="bg-white mb-[75px]">
      {/* service one */}

      <div className="container-padding">
        <div className="flex flex-col md:flex-row gap-20 bg-[#F3F3F3] border-[0.5px] border-[#D4D4D4]/50 rounded-[15px] p-6 md:p-12">
          <div className="flex-1">
            <img
              src="/images/service/service-one.jpg"
              alt="service"
              className="md:h-[400px] w-auto object-cover "
            />
          </div>
          <div className="flex-1 flex flex-col items-start">
            <div className="flex items-center">
              <div className="size-[60px] bg-[#D7D7D7] flex items-center justify-center font-bold text-20 rounded-full">
                01
              </div>
              <div className=" w-[60px] md:w-[120px] h-[4px] bg-[#D2D2D2]"></div>
              <div className="font-reddit-sans font-semibold  text-20 text-[#020202] ml-3">
                Cybersecurity
              </div>
            </div>
            <div className="text-black my-12 text-start">
              <h6 className="fl1-sep !text-[26px]">
                Secure Your Digital Perimeter and Supply Chain.
              </h6>
              <p className="mt-6 fl3">
                Establish an end-to-end defense across your enterprise, covering Application Security, Network Security, and Cloud Security. We enforce Zero Trust principles, provide SASE and CNAPP solutions, and guarantee data protection against threats, including future Quantum-Resistant Security (QKD)
              </p>
            </div>
            <button className="btn-blue mr-auto block">
            Learn More
            </button>
          </div>
        </div>
      </div>
      {/* service two */}

      <div className="container-padding">
        <div className="flex flex-col bg-[#E0E0E0] md:flex-row gap-20 p-6 md:p-12 rounded-[15px]">
          <div className="flex-1 flex flex-col ">
            <div className="flex items-center">
              <div className="size-[60px] bg-[#9C9C9C] text-black flex items-center justify-center font-bold text-20 rounded-full">
                02
              </div>
              <div className="w-[60px] md:w-[120px] h-[4px] bg-[#9c9c9c]"></div>
              <div className="font-reddit-sans font-semibold  text-20 text-[#020202] ml-3">
                Cloud Solutions
              </div>
            </div>
            <div className="text-black my-12 ">
              <h6 className="fl1-sep !text-[26px]">
                Optimize Performance, Lower Cloud Spend (FinOps).
              </h6>
              <p className="mt-6 fl3">
                Accelerate cloud migration and modernization across Multi/Hybrid-cloud, Private Cloud, and Government Cloud (GCC). Achieve unparalleled efficiency through automated DevOps practices, FinOps cost governance, and infrastructure built as IaaC (Infrastructure as Code).
              </p>
            </div>
            <button className="btn-blue w-fit auto block">
              Learn More
            </button>
          </div>
          <div className="flex-1">
            <img
              src="/images/service/service-two.jpg"
              alt="service"
              className="md:h-[400px] w-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* service three */}

      <div className="container-padding">
        <div className="flex flex-col md:flex-row gap-20 bg-[#F3F3F3] border-[0.5px] border-[#D4D4D4]/50 rounded-[15px] p-6 md:p-12">
          <div className="flex-1">
            <img
              src="/images/service/service-three.jpg"
              alt="service"
              className="md:h-[400px] w-auto object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-start">
            <div className="flex flex-row items-center">
              <div className="size-[60px] bg-[#D7D7D7] flex items-center justify-center font-bold text-20 rounded-full">
                03
              </div>
              <div className="w-[60px] hidden md:block md:w-[120px] h-[4px] bg-[#D2D2D2]"></div>
              <div className="font-reddit-sans text-20 text-[#020202] font-semibold ml-3">
                Ai & Machine Learning
              </div>
            </div>
            <div className="text-black my-12">
              <h6 className="fl1-sep !text-[26px]">
                Operationalize AI for Real-Time Business Intelligence
              </h6>
              <p className="mt-6 fl3">
                Deploy specialized AI models (Edge AI, Computer Vision, Conversational AI) for everything from customer engagement to sophisticated Predictive Analysis. We use AIOps/MLOps frameworks to seamlessly build, train, and scale reliable production systems using the latest LLMs & NLP.
              </p>
            </div>
            <button className="btn-blue mr-auto block">
            Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
