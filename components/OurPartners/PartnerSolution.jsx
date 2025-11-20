'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), {
  ssr: false,
});

const PartnerSolution = () => {
  const tabs = [
    {
      id: 1,
      title: 'Cybersecurity',
      boxes: [
        {
          logo: '/icons/global/paloalto.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: 'We help businesses integrate Palo Alto’s advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.',
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/aws.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: 'We help businesses integrate Palo Alto’s advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.',
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/paloalto.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: 'We help businesses integrate Palo Alto’s advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.',
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
          desc: 'We help businesses integrate Palo Alto’s advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.',
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/aws.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: 'We help businesses integrate Palo Alto’s advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.',
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/paloalto.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: 'We help businesses integrate Palo Alto’s advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.',
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
          desc: 'We help businesses integrate Palo Alto’s advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.',
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/aws.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: 'We help businesses integrate Palo Alto’s advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.',
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
        {
          logo: '/icons/global/paloalto.svg',
          tagline: 'Value Added Reseller',
          boxTitle: 'Solution',
          desc: 'We help businesses integrate Palo Alto’s advanced firewalls into their infrastructure to enable intelligent traffic control, threat prevention, and deep packet inspection for robust network security.',
          tags: ['Red Hat AI', 'Red Hat enterprice linux'],
        },
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [index, setIndex] = useState(0);

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
    <div className="bg-white py-[var(--section-block-padding)]">
      <div className="title-div text-black text-center mb-14">
        <h4 className="title mt-3 mb-2">
          Solutions We Provide to Our Partners
        </h4>
        <p className="font-light max-w-[750px] mx-auto text-14 lg:text-16">
          Empowering growth through tailored strategies and innovative
          solutions.
        </p>
      </div>

      {/* Tabs & Content */}
      <div className="bg-white container-padding w-full overflow-hidden">
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
              <button className="px-4 py-2">{tab.title}</button>
              {/* <div
                className={`size-[16px] absolute  -right-[45px] -bottom-0 z-[40] rounded-full ${
                  i === tabs.length - 1 ? 'bg-red-600' : 'bg-green-600'
                } `}
              ></div>
              <div
                className={`h-[2px] w-[40px] absolute ${
                  tab.id === selectedTab.id ? 'bg-blue-600' : ' bg-violet-600'
                } -right-[39px] bottom-0 z-30 `}
              ></div> */}
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        <div className="md:hidden relative z-10 w-full max-w-[200px] pe-5 ">
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
          <span className="absolute -bottom-1 right-0 h-[calc(100%+4px)] w-9 bg-[#FCFCFC] skew-x-[30deg] rounded-tr-md pointer-events-none z-50"></span>
          <div className="size-7 absolute bg-primary-blue -right-8 -bottom-0 z-40 rounded-full "></div>
          <div className="h-3 w-9 absolute bg-white -right-4 bottom-0  z-30  "></div>
        </div>

        {/* Tab Content */}
        <div className="bg-primary-blue rounded-[10px] rounded-tl-none">
          <div className="flex justify-center">
            <h6 className="title border-b-3 border-b-[#D3AF37] text-white w-fit px-10 pb-2 mt-10">
              {selectedTab.title}
            </h6>
          </div>
          <div className="flex flex-wrap gap-6 xl:gap-10 p-8 mt-6">
            {selectedTab.boxes?.map((item, ind) => (
              <div
                key={ind}
                className="flex-1 min-w-[250px] white-ribbon-border bg-secondary-200 py-8 pl-14 pr-6 rounded-[18px] [box-shadow:3px_0px_3px_1px_rgba(0,0,0,0.25)]"
              >
                <img src={item.logo} className="mb-1" alt="logo" />
                <p className="font-light text-[#1C1C1C] mb-3">{item.tagline}</p>
                <h6 className="font-bold text-[#1C1C1C] mb-1">
                  {item.boxTitle}
                </h6>
                <p className="font-poppins font-light text-14 text-[#1C1C1C]">
                  {item.desc}
                </p>
                <div className="flex flex-wrap text-13 2xl:text-14 leading-[1.1] mt-4">
                  {item?.tags?.map((innderItem, InnerInd) => (
                    <h6
                      key={InnerInd}
                      className="font-medium text-secondary first:ml-0 last:border-r-0 border-r-2 border-r-[#1C1C1C] pr-2 ml-2"
                    >
                      {innderItem}
                    </h6>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSolution;
