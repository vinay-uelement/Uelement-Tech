'use client';
import { useState, useEffect } from 'react';
import { ReactIcons } from '@/utils/ReactIcons';
import dynamic from 'next/dynamic';

const Select = dynamic(() => import('react-select'), {
  ssr: false,
});

const ServicesSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const tabs = [
    {
      id: 1,
      title: 'Cloud Security',
      desc: 'At U-Element, we specialize in delivering scalable and secure cloud solutions tailored to meet the unique needs of startups. Our offerings enable businesses to reduce infrastructure costs, enhance operational efficiency, and scale seamlessly as they grow. By leveraging cutting-edge technologies and industry best practices, we empower startups to innovate and compete effectively in the digital landscape.',
    },
    {
      id: 2,
      title: 'AI & ML',
      desc: 'At U-Element, we deliver cutting-edge Cybersecurity, AI Integration, Enterprise Cloud, Custom Product Development and Quantum Computing Solutions tailored to our clients needs. By leveraging advanced technologies, strategic partnerships and a commitment to excellence, we enable businesses to solve complex challenges, achieve sustainable growth and thrive in a secure digital future.',
    },
    {
      id: 3,
      title: 'Cyber Security',
      desc: 'At U-Element, we deliver cutting-edge Cybersecurity, AI Integration, Enterprise Cloud, Custom Product Development and Quantum Computing Solutions tailored to our clients needs. By leveraging advanced technologies, strategic partnerships and a commitment to excellence, we enable businesses to solve complex challenges, achieve sustainable growth and thrive in a secure digital future.',
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const slides = [
    'At U-Element, we offer scalable and secure cloud solutions tailored for startups. Our services enable businesses to reduce infrastructure costs, enhance operational efficiency, and scale seamlessly as they grow.',
    'Empowering Security with Next-Gen Cyber Intelligence to proactively detect threats, safeguard critical data, and ensure uncompromised business continuity',
    'Scaling AI-Driven Innovation for Smarter Enterprises by integrating intelligent automation, predictive analytics, and real-time decision-making capabilities.',
  ];
  const [index, setIndex] = useState(0);

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
      color: '#fff',
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
      color: '#fff',
      padding: '0 4px',
      margin: '0 16px 0 0',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '10px',
      overflow: 'hidden',
      marginTop: '4px',
      zIndex: 9999,
    }),
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  };

  return (
    <section className="bg-secondary-muted py-10 sm:py-12 lg:py-16 container-padding rounded-t-[10px] mb-10">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <p className="text-12 sm:text-14 text-gray-600 mb-3">/Services</p>
          <h2 className="font-montserrat font-bold text-28 sm:text-36 lg:text-40 xl:text-45 text-primary-blue mb-3 sm:mb-4">
            Our Enterprise Solutions
          </h2>
          <p className="font-reddit-sans text-14 sm:text-16 lg:text-18 text-gray-700 max-w-[600px]">
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
                className={`relative px-20 py-3 font-montserrat font-medium text-14 lg:text-16 rounded-tl-[10px] transition-all duration-300 ease-in-out overflow-hidden ${
                  tab.id === selectedTab.id
                    ? 'bg-primary-blue text-white shadow-[0px_4px_5px_0px_rgba(0,0,0,0.20)]'
                    : 'bg-[#FCFCFC] text-[#9E9E9E] hover:bg-gray-100 border border-[#E0E0E0]'
                }`}
                style={{
                  clipPath:
                    'polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)',
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
                className="absolute inset-0 bg-primary-blue pointer-events-none rounded-tl-[10px]"
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
          <div className="bg-primary-blue text-white p-6 sm:p-8 lg:p-10 xl:p-12 rounded-[10px] rounded-tl-none transition-all duration-300 ease-in-out shadow-[3.71px_0px_3.71px_0px_rgba(0,0,0,0.25)]">
            <div className="animate-fade-in">
              <h3 className="font-montserrat font-semibold text-24 sm:text-28 lg:text-32 mb-4 sm:mb-6">
                {selectedTab.title}
              </h3>
              <p className="font-reddit-sans font-light text-14 sm:text-16 lg:text-18 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-[900px]">
                {selectedTab.desc}
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div>
                  <button className="bg-[#9B7025] hover:bg-[#9B7025]/90 text-white font-poppins text-14 sm:text-16 px-8 py-3 rounded-[40px] transition-all duration-300 hover:scale-105 w-fit">
                    Learn More
                  </button>
                </div>

                <div className="w-full md:w-auto relative flex items-center gap-2 sm:gap-4 md:ml-auto">
                  <button
                    disabled={index === 0}
                    onClick={prevSlide}
                    className="size-8 sm:size-9 md:size-10 bg-white rounded-full text-primary-blue flex items-center justify-center hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex-shrink-0"
                  >
                    <span className="text-14 sm:text-16 md:text-18">
                      {ReactIcons.leftChev}
                    </span>
                  </button>

                  <div className="bg-white rounded-[10px] p-4 sm:p-5 md:p-6 flex-1 md:max-w-[500px] min-w-0">
                    <div className="relative overflow-hidden">
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                      >
                        {slides.map((text, i) => (
                          <div
                            key={i}
                            className="min-w-full text-primary-blue font-reddit-sans text-12 sm:text-13 font-medium"
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
                    className="size-8 sm:size-9 md:size-10 bg-white rounded-full text-primary-blue flex items-center justify-center hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex-shrink-0"
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
