'use client';
import { useState } from 'react';
import { ReactIcons } from '@/utils/ReactIcons';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), {
  ssr: false,
});

const ServicesSection = () => {
  const tabs = [
    {
      id: 1,
      title: 'Cloud Security',
      desc: 'At U-Element, we specialize in delivering scalable and secure cloud solutions tailored to meet the unique needs of startups. Our offerings enable businesses to reduce infrastructure costs, enhance operational efficiency, and scale seamlessly as they grow. By leveraging cutting-edge technologies and industry best practices, we empower startups to innovate and compete effectively in the digital landscape.',
    },
    {
      id: 2,
      title: 'AI & ML',
      desc: 'At U-Element, we deliver cutting-edge Cybersecurity, AI Integration, Enterprise Cloud, Custom Product Development and Quantum Computing Solutions tailored to our clients’ needs. By leveraging advanced technologies, strategic partnerships and a commitment to excellence, we enable businesses to solve complex challenges, achieve sustainable growth and thrive in a secure digital future.',
    },
    {
      id: 3,
      title: 'Cyber Security',
      desc: 'At U-Element, we deliver cutting-edge Cybersecurity, AI Integration, Enterprise Cloud, Custom Product Development and Quantum Computing Solutions tailored to our clients’ needs. By leveraging advanced technologies, strategic partnerships and a commitment to excellence, we enable businesses to solve complex challenges, achieve sustainable growth and thrive in a secure digital future.',
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
      backgroundColor: '#ffffff',
      border: 'none',
      padding: '0.25rem 0.5rem',
      fontWeight: 'bold',
      borderRadius: '10px 0 0 0',
      ouline: 'none',
      boxShadow: 'none',
      '&:hover': {
        border: 'none', // no border on hover
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#000',
      fontWeight: 'bold',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#0c142d' : '#fff',
      color: state.isSelected ? '#fff' : '#000',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#000',
    }),
    indicatorSeparator: () => ({
      display: 'none', // hides the line
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '10px',
      overflow: 'hidden',
      marginLeft: '16px',
    }),
  };

  return (
    <section>
      {/* Header */}
      <div className="bg-honey-gold-100 container-padding py-6">
        <p className="font-light text-14 font-roboto">/Services</p>
        <h2 className="title !font-normal mt-4 text-primary-blue">
          Our Enterprise Solutions
        </h2>
        <p className="mt-4 max-w-[80%] font-montserrat">
          Comprehensive services designed to protect, optimize, and transform{' '}
          <br />
          your business operations.
        </p>
      </div>

      {/* Tabs & Content */}
      <div className="bg-primary-blue  container-padding py-[var(--section-block-padding)] w-full overflow-hidden">
        {/* Desktop Tabs */}
        <ul id="tabs" className="hidden md:flex w-full">
          {tabs.map((tab, i) => (
            <li
              key={tab.id}
              style={{
                zIndex:
                  tab.id === selectedTab.id ? tabs.length + 1 : tabs.length - i,
              }}
              onClick={() => setSelectedTab(tab)}
              className={`${
                tab.id === selectedTab.id ? 'current' : ''
              } relative cursor-pointer`}
            >
              <button
                style={{
                  boxShadow:
                    tab.id !== selectedTab.id &&
                    'inset 0px -5px 5px -6px #00000040',
                }}
                className=" px-4 py-2 font-dm-serif !font-normal"
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        <div className="md:hidden relative z-10 w-full max-w-[200px] pe-5 font-dm-serif ">
          <Select
            value={{ value: selectedTab.id, label: selectedTab.title }}
            onChange={(option) =>
              setSelectedTab(tabs.find((tab) => tab.id === option.value))
            }
            options={options}
            styles={customStyles}
            isSearchable={false}
          />
          {/* Slanted end like ::after */}
          <span className="absolute -bottom-1 right-0 h-[calc(100%+4px)] w-9 bg-white skew-x-[30deg] rounded-tr-md pointer-events-none z-50"></span>
          <div className="size-7 absolute bg-primary-blue -right-8 -bottom-0 z-40 rounded-full "></div>
          <div className="h-3 w-9 absolute bg-white -right-4 bottom-0  z-30  "></div>
        </div>

        {/* Tab Content */}
        <div className="bg-white  p-5 md:p-10 rounded-[10px] rounded-tl-none">
          <h6 className=" text-30 font-dm-serif">{selectedTab.title}</h6>
          <p className=" text-18 italic mt-6 font-reddit-sans">
            {selectedTab.desc}
          </p>

          {/* Slides */}
          <div className="flex flex-col md:flex-row gap-y-5 md:items-center justify-between mt-3">
            <button className="btn-primary">Learn More</button>
            <div className="bg-honey-gold-100 shadow-down p-5 rounded-[10px] text-12 font-bold text-primary-blue max-w-[400px]">
              <div className="relative w-full overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out w-full"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {slides.map((text, i) => (
                    <div
                      key={i}
                      className="min-w-full flex items-center text-12 font-reddit-sans"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between  gap-2 mt-3 ">
                <button
                  disabled={index === 0}
                  onClick={prevSlide}
                  className="size-7 !p-0 bg-primary-blue rounded-full text-white  font-bold flex items-center justify-center hover:bg-primary-blue/90 disabled:bg-primary-blue/50 transition"
                >
                  {ReactIcons.leftChev}
                </button>
                <button
                  disabled={index === slides.length - 1}
                  onClick={nextSlide}
                  className="size-7 !p-0 bg-primary-blue rounded-full text-white  font-bold flex items-center justify-center hover:bg-primary-blue/90 disabled:bg-primary-blue/50 transition"
                >
                  {ReactIcons.rightChev}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
