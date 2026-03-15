'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ReactIcons } from '@/utils/ReactIcons';

const ServicesSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  const tabs = [
    {
      id: 1,
      title: 'Cloud Computing',
      desc: 'Built to secure and scale multi cloud hybrid private and Government Cloud environments. We drive operational efficiency through DevOps FinOps Infrastructure as Code and intelligent orchestration. From automated workload migrations to continuous cost optimization and unified cloud governance our approach maximizes performance control and ROI across complex cloud landscapes.',
      slides: [
        'Expert Multi/Hybrid-cloud management, migration, and modernization. We ensure peak efficiency via DevOps, FinOps, and Infrastructure as Code (IaaC).',
        'Secure multi/hybrid-cloud environments with Zero Trust architecture, continuous threat detection, and automated compliance across private, public, and GCC clouds.',
        'Embed security into DevOps pipelines with IaaC, FinOps governance, and orchestration to ensure efficiency without compromising protection.',
      ],
    },
    {
      id: 2,
      title: 'AI & ML',
      desc: 'Designed to power enterprise AI across cloud edge and hybrid ecosystems. We enable intelligent automation predictive insights and scalable MLOps backed by strong security and governance. Our end to end capabilities cover model building fine tuning deployment and monitoring including EdgeAI optimization and LLM integration for real time decision making.',
      slides: [
        'Comprehensive AI/ML services from model development to production deployment, including EdgeAI applications, LLM integration, and real-time decision intelligence.',
        'Specialize in industry-specific models, multimodal AI, and MLOps frameworks that drive operational efficiency, hyper-personalization, and predictive insights at enterprise scale.',
        'Accelerate AI adoption with custom model training, federated learning, and ethical AI frameworks that ensure compliance, bias mitigation, and measurable business impact.',
      ],
    },
    {
      id: 3,
      title: 'Cyber Security',
      desc: 'Expertise in enterprise-grade cybersecurity across multi-cloud, hybrid, private, and Government Cloud (GCC) environments. We deliver Zero Trust protection, advanced threat intelligence, and automated SecOps to reduce risk and response time. Our solutions ensure continuous compliance, high availability, and resilience against evolving cyber threats while safeguarding mission-critical systems.',
      slides: [
        'Expert multi/hybrid-cloud security management, migration, and modernization ensure peak efficiency via DevOps, FinOps, and Infrastructure as Code (IaaC).',
        'Implement advanced threat detection, AI-powered anomaly monitoring, and post-quantum cryptography readiness to protect against evolving attack surfaces.',
        'Embed security governance through identity threat detection, micro-segmentation, and continuous vulnerability management across the enterprise stack.',
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [index, setIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setIndex(0);
  }, [selectedTab.id]);

  const slides = selectedTab.slides;

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Get proper z-index value
  const getZIndex = (tabId, idx) => {
    if (tabId === selectedTab.id) {
      return 40; // Active tab always on top
    }
    // reverse order
    return 30 - idx * 10;
  };

  return (
    <section className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 rounded mb-10 container-padding">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <p className="fl-slash">/Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Our Enterprise Solutions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-[600px]">
            Comprehensive services designed to protect, optimize, and transform
            your business operations.
          </p>
        </div>

        {/* Tabs Container */}
        <div className="relative">
          {/* Desktop Tabs */}
          <div className="hidden lg:flex justify-start gap-0 mb-0 pl-[24px] overflow-x-auto">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab)}
                className={`relative px-6 py-3 min-w-[200px] text-sm sm:text-base font-semibold uppercase transition-all duration-250 flex-shrink-0 ${
                  tab.id === selectedTab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                style={{
                  marginRight: idx < tabs.length - 1 ? '56px' : '0',
                  zIndex: getZIndex(tab.id, idx),
                }}
              >
                {/* Tab Background - Base */}
                <span
                  className={`absolute inset-0 transition-all duration-250  ${
                    tab.id === selectedTab.id ? 'bg-primary-blue' : 'bg-[#FCFCFC] border-t border-gray-300'
                  }`}
                  style={{
                    boxShadow:
                      tab.id === selectedTab.id
                        ? 'rgba(0,0,0,0.1) 0 2px 5px'
                        : 'rgba(0,0,0,0.1) 0 2px 5px',
                  }}
                />

                {/* Left Skew  */}
                <span
                  className={`absolute top-0 h-full w-11 transition-all duration-250 z-10 ${
                    tab.id === selectedTab.id ? 'bg-primary-blue' : 'bg-[#FCFCFC] border-t border-l border-gray-300'
                  }`}
                  style={{
                    left: '-24px',
                    boxShadow:
                      'rgba(0,0,0,0.1) -3px 2px 5px, inset rgba(255,255,255,0.09) 1px 0',
                    borderTopLeftRadius: '6px',
                  }}
                />

                {/* Right Skew */}
                <span
                  className={`absolute top-0 h-full w-11 transition-all duration-250 z-20 ${
                    tab.id === selectedTab.id ? 'bg-primary-blue' : 'bg-[#FCFCFC] border-t border-r border-gray-300'
                  }`}
                  style={{
                    right: '-24px',
                    transform: 'skew(30deg, 0deg)',
                    boxShadow:
                      'rgba(0,0,0,0.1) 3px 2px 5px, inset rgba(255,255,255,0.09) -1px 0',
                    borderTopRightRadius: '6px',
                  }}
                />

                {/* Tab Text */}
                <span className="relative z-30 text-16 md:text-20 font-noto-sans ">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Dropdown  */}
          <div className="lg:hidden mb-0 relative pl-[24px]">
            <div className="relative inline-block">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative px-6 py-3 text-white font-semibold uppercase transition-all duration-250 flex items-center gap-3 w-[220px] sm:w-[220px]"
                style={{ zIndex: 40 }}
              >
                {/* Tab Background - Base */}
                <span
                  className="absolute inset-0 bg-primary-blue"
                  style={
                    {
                      // boxShadow: 'rgba(0,0,0,0.1) 0 2px 5px',
                    }
                  }
                />

                {/* Left Skew */}
                <span
                  className="absolute top-0 h-full w-7 bg-primary-blue z-10"
                  style={{
                    left: '-24px',

                    // boxShadow:
                    //   'rgba(0,0,0,0.1) -3px 2px 5px, inset rgba(255,255,255,0.09) 1px 0',
                    borderTopLeftRadius: '6px',
                  }}
                />

                {/* Right Skew */}
                <span
                  className="absolute top-0 h-full w-8 bg-primary-blue z-20"
                  style={{
                    right: '-18px',
                    transform: 'skew(30deg, 0deg)',
                    // boxShadow:
                    //   'rgba(0,0,0,0.1) 3px 2px 5px, inset rgba(255,255,255,0.09) -1px 0',
                    borderTopRightRadius: '6px',
                  }}
                />

                {/* Tab Text */}
                <span className="relative z-30 text-14 sm:text-16 font-noto-sans flex-1 text-center">
                  {selectedTab.title}
                </span>

                {/* Dropdown Icon */}
                <svg
                  className={`relative z-30 w-4 h-4 sm:w-5 sm:h-5 transition-transform flex-shrink-0 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-[280px] sm:w-[320px] bg-white rounded shadow-lg overflow-hidden z-50">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setSelectedTab(tab);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-6 py-3 text-14 sm:text-16 transition-colors ${
                        tab.id === selectedTab.id
                          ? 'bg-[#0c142d] text-white'
                          : 'bg-white text-black hover:bg-gray-100'
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-hero-gradient text-white! p-6 sm:p-8 lg:p-10 xl:p-12 transition-all duration-300 ease-in-out rounded-[4px] -mt-1">
            <div className="animate-fade-in">
              <h3 className="fl1 text-white! mb-4 sm:mb-6">{selectedTab.title}</h3>
              <p className="fl3 text-white! leading-relaxed mb-8 sm:mb-16 lg:mb-20 md:w-[90%] w-full min-h-[220px] md:min-h-[100px]">
                {selectedTab.desc}
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <button
                  className="btn-yellow hover:scale-101"
                  onClick={() => router.push('/ai-ml')}
                >
                  Learn More
                </button>

                <div className="w-full md:w-auto relative flex items-center gap-2 sm:gap-4 md:ml-auto">
                  <button
                    disabled={index === 0}
                    onClick={prevSlide}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 dark-glass shadow-down rounded-full text-white flex items-center justify-center disabled:opacity-0 disabled:cursor-not-allowed transition-all duration-300 flex-shrink-0"
                  >
                    <span className="text-14 sm:text-16 md:text-18">
                      {ReactIcons.leftChev}
                    </span>
                  </button>

                  <div className="dark-glass shadow-down rounded p-4 sm:p-5 md:p-6 flex-1 md:max-w-[500px] min-w-0">
                    <div className="relative overflow-hidden">
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                      >
                        {slides.map((text, i) => (
                          <div
                            key={i}
                            className="min-w-full text-white font-reddit-sans text-12 sm:text-14 font-light"
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
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 dark-glass shadow-down rounded-full text-white flex items-center justify-center disabled:opacity-0 disabled:cursor-not-allowed transition-all duration-300 flex-shrink-0"
                  >
                    <span className="text-14 sm:text-16 md:text-18">
                      {ReactIcons.rightChev}
                    </span>
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
