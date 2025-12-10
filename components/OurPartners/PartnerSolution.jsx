'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Select = dynamic(() => import('react-select'), {
  ssr: false,
});

const PartnerSolution = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const tabs = [
    {
      id: 1,
      title: 'Cybersecurity',
      boxes: [
        {
          logo: '/icons/global/paloalto.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: "We help businesses integrate Palo Alto's advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.",
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/aws.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: "We help businesses integrate Palo Alto's advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.",
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/paloalto.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: "We help businesses integrate Palo Alto's advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.",
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
      ],
    },
    {
      id: 2,
      title: 'AI & ML',
      boxes: [
        {
          logo: '/icons/global/paloalto.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: "We help businesses integrate Palo Alto's advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.",
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/aws.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: "We help businesses integrate Palo Alto's advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.",
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/paloalto.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: "We help businesses integrate Palo Alto's advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.",
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
      ],
    },
    {
      id: 3,
      title: 'Cloud Solution',
      boxes: [
        {
          logo: '/icons/global/paloalto.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: "We help businesses integrate Palo Alto's advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.",
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/aws.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: "We help businesses integrate Palo Alto's advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.",
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/paloalto.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: "We help businesses integrate Palo Alto's advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.",
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

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

  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-white py-[var(--section-block-padding)]">
      <div className="title-div text-black text-center mb-8 sm:mb-10 lg:mb-14 ">
        <h4 className="fl1 mt-3 mb-2">
           Focus on Ecosystem and Trust
        </h4>
        <p className="fl3 max-w-[750px] mx-auto">
          Leveraging 15+ strategic alliances to deliver best-in-class, fully certified solutions.
        </p>
      </div>

      {/* Tabs & Content */}
      <div className="bg-white w-full overflow-hidden ">
        {/* Desktop Tabs */}
        <div className="hidden md:flex gap-0 mb-0 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab)}
              className={`relative px-20 py-2 md:text-24 text-18 text-[#9E9E9E] rounded-tl-[10px] transition-all duration-300 ease-in-out overflow-hidden ${
                tab.id === selectedTab.id
                  ? 'bg-primary-blue font-noto-sans font-semibold text-white shadow-[0px_4px_5px_0px_rgba(0,0,0,0.0)] font-noto-sans font-semibold'
                  : 'bg-[#FCFCFC] hover:bg-gray-100 border border-[#E0E0E0] font-noto-sans'
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
              className="absolute inset-0 bg-primary-blue pointer-events-none rounded-tl-[4px]"
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
        <div className="bg-primary-blue rounded-[4px] rounded-tl-none py-10 sm:py-10 lg:py-[var(--section-block-padding)] ">
          <div className="animate-fade-in ">
            {/* Title with underline */}
            <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
              <h6 className="fl1 border-b-3 border-b-[#D3AF37] !text-white w-fit px-6 sm:px-10 pb-2">
                {selectedTab.title}
              </h6>
            </div>

            {/* Desktop: Flex wrap layout */}
            <div className="hidden md:flex flex-wrap justify-center gap-6 xl:gap-10 px-4 sm:px-8">
              {selectedTab.boxes?.map((item, ind) => (
                <div
                  key={ind}
                  className="flex-1 min-w-[280px] max-w-[400px] white-ribbon-border bg-secondary-200 py-8 pl-14 pr-6 rounded-[4px] shadow-[3px_0px_3px_1px_rgba(0,0,0,0.25)]"
                >
                  <img src={item.logo} className="mb-1 h-10" alt="logo" />
                  <p className="fl3 my-4">
                    {item.tagline}
                  </p>
                  <h6 className="fl1 md:!text-[18px] text-[#1C1C1C] mb-1">
                    {item.boxTitle}
                  </h6>
                  <p className="fl3 md:!text-12 text-[#1C1C1C]">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap text-13 2xl:text-14 leading-[1.1] mt-6">
                    {item?.tags?.map((innerItem, innerInd) => (
                      <h6
                        key={innerInd}
                        className="font-bold font-reddit-sans md:text-[14px] text-[12px] text-secondary first:ml-0 last:border-r-0 border-r-2 border-r-[#1C1C1C] pr-2 ml-2"
                      >
                        {innerItem}
                      </h6>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Slider */}
            <div className="md:hidden px-4 partner-boxes-slider">
              <Slider {...sliderSettings}>
                {selectedTab.boxes?.map((item, ind) => (
                  <div key={ind} className="px-2">
                    <div className="white-ribbon-border bg-secondary-200 py-8 pl-14 pr-6 rounded-[4px] shadow-[3px_0px_3px_1px_rgba(0,0,0,0.25)]">
                      <img src={item.logo} className="mb-1 h-10" alt="logo" />
                      <p className="font-light text-[#1C1C1C] mb-3 text-14">
                        {item.tagline}
                      </p>
                      <h6 className="font-bold text-[#1C1C1C] mb-1 text-16">
                        {item.boxTitle}
                      </h6>
                      <p className="font-reddit-sans font-light text-14 text-[#1C1C1C]">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap text-13 leading-[1.1] mt-4">
                        {item?.tags?.map((innerItem, innerInd) => (
                          <h6
                            key={innerInd}
                            className="font-medium text-secondary first:ml-0 last:border-r-0 border-r-2 border-r-[#1C1C1C] pr-2 ml-2"
                          >
                            {innerItem}
                          </h6>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSolution;
