'use client';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSearchParams } from 'next/navigation';

const PartnerSolution = () => {
  const tabs = [
    {
      id: 1,
      title: 'Cybersecurity',
      slug: 'cybersecurity',
      boxes: [
        {
          logo: '../icons/global/sentinel.png',
          tagline: 'Managed Endpoint Security Partner',
          boxTitle: 'Solution',
          desc: `We leverage SentinelOne's unified Singularity XDR platform for integrated prevention, detection, and response across endpoint, cloud, and identity. Our managed services ensure robust, AI-powered protection against advanced threats`,
          tags: ['Managed Endpoint Security & Cloud Security Services'],
        },
        {
          logo: '../icons/global/paloalto.svg',
          tagline: 'Certified Cloud Security Integrator',
          boxTitle: 'Solution',
          desc: 'As a certified partner, we implement and manage the full suite of Palo Alto Networks solutions, including Cloud Security (Prisma), Network Security, and Cortex XDR/XSOAR. We ensure unified threat management and compliance across your entire enterprise.',
          tags: ['Prisma Cloud Security Expert'],
        },
        {
          logo: '../icons/global/wiz.svg',
          tagline: 'Cloud Risk Visibility & Remediation Partner',
          boxTitle: 'Solution',
          desc: `We integrate and manage Wiz's agentless platform to provide deep visibility into your entire cloud-native environment. We ensure continuous security and compliance by identifying and remediating risks across VMs, containers, and serverless architectures.`,
          tags: ['Cloud-Native Security (CNAPP) Expert'],
        },
      ],
    },
    {
      id: 2,
      title: 'AI & ML',
      slug: 'ai-ml',
      boxes: [
        {
          logo: '../icons/global/ionq.png',
          tagline: 'Managed Quantum Computing Partner',
          boxTitle: 'Solution',
          desc: `We leverage IonQ's unified Quantum OS and Hybrid Services suite for accelerated quantum algorithm development, optimization, and deployment across cloud, edge, and on-prem environments. Our managed services ensure scalable, enterprise-grade quantum workloads with robust error mitigation and classical-quantum integration.`,
          tags: ['Managed  Hybrid Computing Services'],
        },
        {
          logo: '../icons/global/nvidia1.png',
          tagline: 'Managed AI/ML Acceleration Partner',
          boxTitle: 'Solution',
          desc: `We leverage NVIDIA's unified AI Enterprise platform for accelerated model training, inference, and deployment across edge, cloud, and data center. Our managed services ensure scalable, GPU-optimized AI/ML pipelines with robust performance and security.`,
          tags: ['Managed AI/ML & Edge Computing Services'],
        },
        {
          logo: '../icons/global/tsecond1.png',
          tagline: 'Managed Data & Edge AI Partner',
          boxTitle: 'Solution',
          desc: 'We leverage Tsecond’s hyper-scale data appliances and edge AI platforms to ingest, move, and process massive datasets securely across field, core, and cloud environments. Our managed services enable high-performance AI/ML pipelines at the edge and in the data center, ensuring fast access, governance, and analytics for mission-critical workloads.',
          tags: ['Managed Data & Edge AI Partner'],
        },
      ],
    },
    {
      id: 3,
      slug: 'cloud',
      title: 'Cloud Solution',
      boxes: [
        {
          logo: '../icons/global/oracle2.png',
          tagline: 'Managed Enterprise Cloud Partner',
          boxTitle: 'Solution',
          desc: `We leverage Oracle Cloud Infrastructure (OCI)'s unified platform for high-performance databases, autonomous operations, and hybrid cloud deployments across multitenant environments. Our managed services ensure mission-critical workloads with built-in security, extreme performance, and cost governance.`,
          tags: ['Managed Database & Hybrid Cloud Services'],
        },
        {
          logo: '../icons/global/aws2.png',
          tagline: 'Managed Cloud Infrastructure Partner',
          boxTitle: 'Solution',
          desc: `We leverage AWS's unified cloud platform for scalable infrastructure, serverless computing, and hybrid cloud orchestration across global regions. Our managed services ensure resilient, cost-optimized cloud environments with automated scaling and security.`,
          tags: ['Managed Multi/Hybrid Cloud Services'],
        },
        {
          logo: '../icons/global/gcs.png',
          tagline: 'Managed Cloud Native Partner',
          boxTitle: 'Solution',
          desc: `We leverage Google Cloud's unified platform for Kubernetes-native applications, Anthos hybrid management, and AI/ML acceleration across edge-to-cloud. Our managed services ensure developer velocity with FinOps, IaaC, and zero-trust security.`,
          tags: ['Managed Cloud Native & Hybrid Services'],
        },
      ],
    },
  ];

  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  useEffect(() => {
    if (!tabParam) return;

    const matchedTab = tabs.find((tab) => tab.slug === tabParam);
    if (matchedTab) {
      setSelectedTab(matchedTab);
    }
  }, [tabParam]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Get proper z-index value
  const getZIndex = (tabId, idx) => {
    if (tabId === selectedTab.id) {
      return 40; // Active tab always on top
    }
    // reverse order
    return 30 - idx * 10;
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
    <section id="partners">
      <div className="bg-white py-[var(--section-block-padding)]">
        <div className="title-div text-black text-center mb-8 sm:mb-10 lg:mb-14 ">
          <h4 className="fl1 mt-3 mb-2">Focus on Ecosystem and Trust</h4>
          <p className="fl3 max-w-[750px] mx-auto">
            Leveraging 15+ strategic alliances to deliver best-in-class, <br />
            fully certified solutions.
          </p>
        </div>

        {/* Tabs & Content */}
        <div className="bg-white w-full overflow-hidden md:px-10 px-5">
          {/* Desktop Tabs */}
          <div className="hidden lg:flex justify-start gap-0 mb-0 pl-[24px] overflow-x-auto ">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab)}
                className={`relative px-6 py-3 min-w-[200px] text-sm sm:text-base font-semibold uppercase transition-all duration-250 mb-1 flex-shrink-0 ${
                  tab.id === selectedTab.id
                    ? 'text-white'
                    : 'text-[#9E9E9E] hover:text-[#6b6b6b]'
                }`}
                style={{
                  marginRight: idx < tabs.length - 1 ? '56px' : '0',
                  zIndex: getZIndex(tab.id, idx),
                }}
              >
                {/* Tab Background - Base */}
                <span
                  className={`absolute inset-0 transition-all duration-250 border-[#000000]/22 border-t ${
                    tab.id === selectedTab.id
                      ? 'bg-primary-blue'
                      : 'bg-[#FCFCFC]'
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
                  className={`absolute top-0 h-full w-11 transition-all duration-250 z-10 border-[#000000]/22 border-t border-l ${
                    tab.id === selectedTab.id
                      ? 'bg-primary-blue'
                      : 'bg-[#FCFCFC]'
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
                  className={`absolute top-0 h-full w-11 transition-all duration-250 z-20 border-[#000000]/22 border-t border-r ${
                    tab.id === selectedTab.id
                      ? 'bg-primary-blue'
                      : 'bg-[#FCFCFC]'
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

          {/* Mobile Dropdown */}
          <div className="lg:hidden mb-0 relative pl-[24px]">
            <div className="relative inline-block">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative px-6 py-3 text-white font-semibold uppercase transition-all duration-250 flex items-center gap-3 w-[220px] sm:w-[220px]"
                style={{ zIndex: 40 }}
              >
                {/* Tab Background - Base */}
                <span className="absolute inset-0 bg-primary-blue border-[#000000]/22 border-t" />

                {/* Left Skew */}
                <span
                  className="absolute top-0 h-full w-7 bg-primary-blue z-10 border-[#000000]/22 border-t border-l"
                  style={{
                    left: '-24px',
                    borderTopLeftRadius: '6px',
                  }}
                />

                {/* Right Skew */}
                <span
                  className="absolute top-0 h-full w-8 bg-primary-blue z-20 border-[#000000]/22 border-t border-r"
                  style={{
                    right: '-18px',
                    transform: 'skew(30deg, 0deg)',
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
                          ? 'bg-primary-blue text-white'
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
          <div className="bg-primary-blue rounded-[4px] rounded-tl-none py-10 sm:py-10 lg:py-[var(--section-block-padding)] -mt-1">
            <div className="animate-fade-in ">
              {/* Title with underline */}
              <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
                <h6 className="fl1 border-b-3 border-b-[#D3AF37] !text-white w-fit px-6 sm:px-10 pb-2">
                  {selectedTab.title}
                </h6>
              </div>

              {/* Desktop: Flex wrap layout */}
              <div className="hidden md:flex flex-wrap justify-center gap-6 xl:gap-10 px-4 sm:px-10">
                {selectedTab.boxes?.map((item, ind) => (
                  <div
                    key={ind}
                    className="flex-1 min-w-[280px] max-w-[450px] white-ribbon-border bg-secondary-200 py-10 pl-14 pr-6 rounded-[10px] shadow-[3px_0px_3px_1px_rgba(0,0,0,0.25)]"
                  >
                    <img
                      src={item.logo}
                      className="mb-3 sm:h-6 2xl:h-8"
                      alt="logo"
                    />
                    <p className="fl3 my-4 sm:min-h-[45px] 3xl:min-h-[20px]">
                      {item.tagline}
                    </p>
                    <h6 className="fl1 md:!text-[18px] text-[#1C1C1C] mb-1">
                      {item.boxTitle}
                    </h6>
                    <p className="fl3 md:!text-12 text-[#1C1C1C] min-h-[125px] 2xl:min-h-[100px]">
                      {item.desc}
                    </p>
                    <div className="flex items-center divide-x divide-[#1C1C1C30] mt-6">
                      {item?.tags?.map((innerItem, innerInd) => (
                        <span
                          key={innerInd}
                          className="px-3 font-bold font-reddit-sans text-[12px] md:text-[14px] text-left text-secondary"
                        >
                          {innerItem}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: Slider */}
              <div className="md:hidden px-2 partner-boxes-slider">
                <Slider {...sliderSettings}>
                  {selectedTab.boxes?.map((item, ind) => (
                    <div key={ind} className="px-2">
                      <div className="ribbon-mobile md:white-ribbon-border  min-h-[435px] bg-secondary-200 py-8 pl-12 pr-6 rounded-[4px] shadow-[3px_0px_3px_1px_rgba(0,0,0,0.25)]">
                        <img src={item.logo} className="mb-3 h-10" alt="logo" />
                        <p className="font-light text-[#1C1C1C] mb-8 text-14">
                          {item.tagline}
                        </p>
                        <h6 className="font-bold text-[#1C1C1C] mb-1 text-16">
                          {item.boxTitle}
                        </h6>
                        <p className="font-reddit-sans font-light mb-10 text-14 text-[#1C1C1C] min-h-[175px]">
                          {item.desc}
                        </p>
                        <div className="flex items-start justify-start mt-4 text-13">
                          {item?.tags?.map((innerItem, innerInd) => (
                            <span
                              key={innerInd}
                              className={`relative px-3 first:pl-0 text-secondary font-medium text-left w-fit leading-tight`}
                            >
                              {innerItem}
                            </span>
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
    </section>
  );
};

export default PartnerSolution;