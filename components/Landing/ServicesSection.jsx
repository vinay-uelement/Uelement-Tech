'use client';
import { useState, useEffect } from 'react';
import { ReactIcons } from '@/utils/ReactIcons';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Select = dynamic(() => import('react-select'), {
  ssr: false,
});

const ServicesSection = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  // Reset slide index when tab changes
  useEffect(() => {
    setIndex(0);
  }, [selectedTab.id]);

  const slides = selectedTab.slides;

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // React Select options
  const options = tabs.map((tab) => ({
    value: tab.id,
    label: tab.title,
  }));

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',
      padding: '0.5rem 0.75rem',
      fontWeight: '500',
      borderRadius: '10px 10px 0 0',
      outline: 'none',
      boxShadow: 'none',
      cursor: 'pointer',
      position: 'relative',
      zIndex: 10,
      '&:hover': {
        border: 'none',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#000',
      fontWeight: '500',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#0c142d' : '#fff',
      color: state.isSelected ? '#fff' : '#000',
      cursor: 'pointer',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#000',
      padding: '0 4px',
      margin: '0 16px 0 0',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '4px',
      overflow: 'hidden',
      marginTop: '0px',
      zIndex: 9999,
    }),
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  };

  return (
    <section className="bg-primary-blue py-10 sm:py-12 lg:py-16 container-padding rounded-[4px] mb-10">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <p className="text-12 sm:text-14 !text-white mb-3">/Services</p>
          <h2 className="fl1 !text-white mb-3 sm:mb-4">
            Our Enterprise Solutions
          </h2>
          <p className="font-reddit-sans text-14 sm:text-16 lg:text-18 text-white max-w-[600px]">
            Comprehensive services designed to protect, optimize, and transform
            your business operations.
          </p>
        </div>

        {/* Tabs & Content */}
        <div className="relative">
          {/* Desktop Tabs */}
          <div className="hidden md:flex gap-0 mb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab)}
                className={`relative px-20 w-[330px] py-2 text-18 md:text-24 rounded-tl-[4px] transition-all duration-300 ease-in-out overflow-hidden ${
                  tab.id === selectedTab.id
                    ? 'bg-secondary-muted text-black shadow-[0px_4px_5px_0px_rgba(0,0,0,0.0)] font-noto-sans font-semibold '
                    : 'bg-[#FCFCFC] text-[#505050] hover:bg-gray-100 border border-[#E0E0E0] font-noto-sans '
                }`}
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 30px) 0, 100% 101%, 0 101%)',
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden mb-0 relative z-50">
            <div className="relative inline-block w-full max-w-[200px]">
              <div
                className="absolute inset-0 bg-secondary-muted pointer-events-none rounded-tl-[10px]"
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)',
                }}
              />
              <Select
                value={{ value: selectedTab.id, label: selectedTab.title }}
                onChange={(option) =>
                  setSelectedTab(tabs.find((tab) => tab.id === option.value))
                }
                options={options}
                styles={customStyles}
                isSearchable={false}
                menuPortalTarget={isMounted ? document.body : null}
                menuPosition="fixed"
              />
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-secondary-muted text-white p-6 sm:p-8 lg:p-10 xl:p-12 rounded-[4px] rounded-tl-none transition-all duration-300 ease-in-out shadow-[3.71px_0px_3.71px_0px_rgba(0,0,0,0.25)]">
            <div className="animate-fade-in">
              <h3 className="fl1 mb-4 sm:mb-6">
                {selectedTab.title}
              </h3>
              <p className="fl3 leading-relaxed mb-8 sm:mb-16 lg:mb-20 md:w-[90%] w-full">
                {selectedTab.desc}
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div>
                  <button className="btn-yellow hover:scale-101" onClick={() => router.push('/services')}>
                    Learn More
                  </button>
                </div>

                <div className="w-full md:w-auto relative flex items-center gap-2 sm:gap-4 md:ml-auto">
                  <button
                    disabled={index === 0}
                    onClick={prevSlide}
                    className="size-8 sm:size-9 md:size-10 bg-primary-blue rounded-full text-white flex items-center justify-center disabled:opacity-0 disabled:cursor-not-allowed transition-all duration-300 flex-shrink-0"
                  >
                    <span className="text-14 sm:text-16 md:text-18">
                      {ReactIcons.leftChev}
                    </span>
                  </button>

                  <div className="bg-primary-blue rounded-[4px] p-4 sm:p-5 md:p-6 flex-1 md:max-w-[500px] min-w-0">
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
                    className="size-8 sm:size-9 md:size-10 bg-primary-blue rounded-full text-white flex items-center justify-center disabled:opacity-0 disabled:cursor-not-allowed transition-all duration-300 flex-shrink-0"
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