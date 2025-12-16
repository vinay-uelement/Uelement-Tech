'use client';
import { useState, useEffect } from 'react';

const ServicesSection = () => {
  const tabs = [
    {
      id: 1,
      title: 'Cloud Security',
      desc: 'Expertise in Multi/Hybrid-cloud, Private Cloud and Government Cloud (GCC) environments. We ensure peak efficiency via DevOps, FinOps, IaaC (Infrastructure as Code) and robust orchestration.',
      slides: [
        'Expert Multi/Hybrid-cloud management, migration, and modernization. We ensure peak efficiency via DevOps, FinOps, and Infrastructure as Code (IaaC).',
        'Secure multi/hybrid-cloud environments with Zero Trust architecture, continuous threat detection, and automated compliance across private, public, and GCC clouds.',
        'Embed security into DevOps pipelines with IaaC, FinOps governance, and orchestration to ensure efficiency without compromising protection.',
      ],
    },
    {
      id: 2,
      title: 'AI & ML',
      desc: 'Expertise in enterprise-grade AI/ML solutions across cloud, edge and hybrid environments. We deliver intelligent automation, predictive analytics, and scalable MLOps with robust security and governance.',
      slides: [
        'Comprehensive AI/ML services from model development to production deployment, including EdgeAI applications, LLM integration, and real-time decision intelligence.',
        'Specialize in industry-specific models, multimodal AI, and MLOps frameworks that drive operational efficiency, hyper-personalization, and predictive insights at enterprise scale.',
        'Accelerate AI adoption with custom model training, federated learning, and ethical AI frameworks that ensure compliance, bias mitigation, and measurable business impact.',
      ],
    },
    {
      id: 3,
      title: 'Cyber Security',
      desc: 'Expertise in enterprise-grade cybersecurity across multi/hybrid-cloud, private cloud, and government cloud (GCC) environments. Deliver Zero Trust protection, threat intelligence, and automated SecOps with continuous compliance and resilience.',
      slides: [
        'Expert multi/hybrid-cloud security management, migration, and modernization ensure peak efficiency via DevOps, FinOps, and Infrastructure as Code (IaaC).',
        'Implement advanced threat detection, AI-powered anomaly monitoring, and post-quantum cryptography readiness to protect against evolving attack surfaces.',
        'Embed security governance through identity threat detection, micro-segmentation, and continuous vulnerability management across the enterprise stack.',
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [selectedTab.id]);

  const slides = selectedTab.slides;

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-[#0c142d] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 rounded mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <p className="text-xs sm:text-sm text-white mb-3">/Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our Enterprise Solutions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white max-w-[600px]">
            Comprehensive services designed to protect, optimize, and transform
            your business operations.
          </p>
        </div>

        {/* Tabs Container */}
        <div className="relative">
          {/* Tabs */}
          <div className="flex justify-start gap-0 mb-0 pl-[37px] overflow-x-auto">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab)}
                className={`relative px-6 py-3 text-sm sm:text-base font-semibold uppercase transition-all duration-250 flex-shrink-0 ${
                  tab.id === selectedTab.id
                    ? 'text-[#232223] z-30'
                    : 'text-gray-400 z-20 hover:text-gray-300'
                }`}
                style={{
                  marginRight: idx < tabs.length - 1 ? '46px' : '0',
                }}
              >
                {/* Tab Background - Base */}
                <span
                  className={`absolute inset-0 transition-all duration-250 ${
                    tab.id === selectedTab.id ? 'bg-[#FFF4E4]' : 'bg-[#FCFCFC]'
                  }`}
                  style={{
                    boxShadow:
                      tab.id === selectedTab.id
                        ? 'rgba(0,0,0,0.1) 0 2px 5px'
                        : 'rgba(0,0,0,0.1) 0 2px 5px',
                  }}
                />

                {/* Right Skew */}
                <span
                  className={`absolute top-0 h-full w-11 transition-all duration-250 ${
                    tab.id === selectedTab.id ? 'bg-[#FFF4E4]' : 'bg-[#FCFCFC] '
                  }`}
                  style={{
                    right: '-24px',
                    transform: 'skew(30deg, 0deg)',
                    boxShadow:
                      'rgba(0,0,0,0.1) 3px 2px 5px, inset rgba(255,255,255,0.09) -1px 0',
                    borderTopRightRadius: '6px',
                  }}
                />

                {/* Left Skew */}
                <span
                  className={`absolute top-0 h-full w-11 transition-all duration-250 ${
                    tab.id === selectedTab.id ? 'bg-[#FFF4E4]' : 'bg-[#FCFCFC]'
                  }`}
                  style={{
                    left: '-24px',
                    transform: 'skew(-30deg, 0deg)',
                    boxShadow:
                      'rgba(0,0,0,0.1) -3px 2px 5px, inset rgba(255,255,255,0.09) 1px 0',
                    borderTopLeftRadius: '6px',
                  }}
                />

                {/* Tab Text */}
                <span className="relative z-10">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Bottom Border */}
          {/* <div className="w-full h-1 bg-[#FFF4E4]" /> */}

          {/* Tab Content */}
          <div className="bg-[#FFF4E4] text-gray-800 p-6 sm:p-8 lg:p-10 xl:p-12 transition-all duration-300 ease-in-out rounded-[4px] -mt-1">
            <div className="animate-fade-in">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                {selectedTab.title}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-16 lg:mb-20 md:w-[90%] w-full">
                {selectedTab.desc}
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div>
                  <button
                    className="btn-yellow hover:scale-101"
                    onClick={() => router.push('/services')}
                  >
                    Learn More
                  </button>
                </div>

                <div className="w-full md:w-auto relative flex items-center gap-2 sm:gap-4 md:ml-auto">
                  <button
                    disabled={index === 0}
                    onClick={prevSlide}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#0c142d] rounded-full text-white flex items-center justify-center disabled:opacity-0 disabled:cursor-not-allowed transition-all duration-300 flex-shrink-0"
                  >
                    <span className="text-sm sm:text-base md:text-lg">←</span>
                  </button>

                  <div className="bg-[#0c142d] rounded p-4 sm:p-5 md:p-6 flex-1 md:max-w-[500px] min-w-0">
                    <div className="relative overflow-hidden">
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                      >
                        {slides.map((text, i) => (
                          <div
                            key={i}
                            className="min-w-full text-white text-xs sm:text-sm font-light"
                          >
                            {text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    disabled={index === slides.length - 1}
                    onClick={nextSlide}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#0c142d] rounded-full text-white flex items-center justify-center disabled:opacity-0 disabled:cursor-not-allowed transition-all duration-300 flex-shrink-0"
                  >
                    <span className="text-sm sm:text-base md:text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
