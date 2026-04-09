'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalSlider from '@/components/Slider/GlobalSlider';
import Image from 'next/image';

const FutureTech = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const keyFeatures = [
    {
      id: 1,
      title: 'Co-Creation Workshops',
      description:
        'Collaborative sessions with SI partners to design customized cybersecurity, cloud, and AI solutions aligned with enterprise roadmaps',
    },
    {
      id: 2,
      title: 'Accelerated GTM Strategie',
      description:
        'Joint go-to-market plans that reduce time-to-value through shared resources and pre-integrated OEM technologies',
    },
    {
      id: 3,
      title: 'Mutual Growth Analytics',
      description:
        'Performance dashboards tracking partnership ROI, uptime (99.9%), and cost savings (350+ average)',
    },
    {
      id: 4,
      title: 'Scalable Infrastructure Sharing',
      description:
        'Access to pooled Zero Trust and quantum-ready platforms for rapid deployment across global clients.',
    },
  ];

  const otherServices = [
    {
      id: 1,
      image: '/images/service/enterprise.png',
      icon: '/icons/global/cloud-icon.svg',
      label: 'Cloud Solution',
      link: '/cloud-solutions',
      title:
        'Accelerated Intelligence: Responsible AI from Edge to Enterprise.',
      description:
        'Powering outcomes with Edge AI, Generative AI (LLMs), and Conversational AI. Solutions are built and scaled efficiently using AIOps/MLOps frameworks',
    },
    {
      id: 2,
      image: '/images/service/cybersec.png',
      icon: '/icons/global/enterprise-icon.svg',
      label: 'Cyber Security',
      link: '/cybersecurity',
      title: 'Digital Safety: Next-Gen Security from App to Cloud',
      description:
        'Comprehensive digital safety including Zero Trust, SASE, and Cloud/App Security. We prepare you for the future with Quantum-Resistant Security (QKD).',
    },
    {
      id: 3,
      image: '/images/service/ai.png',
      icon: '/icons/global/machinelearning-icon.svg',
      label: 'Ai & Machine Learning',
      link: '/ai-ml',
      title: 'Enterprise Cloud: Migration, Modernization, and Optimization.',
      description:
        'Expert Multi/Hybrid-cloud management, migration, and modernization. We ensure peak efficiency via DevOps, FinOps, and Infrastructure as Code (IaaC).',
    },
  ];

  const getDotSize = (dotIndex) => {
    const distance = Math.abs(activeIndex - dotIndex);
    if (distance === 0) return 16;
    if (distance === 1) return 12;
    if (distance === 2) return 8;
    return 5;
  };

  const handlePause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
      setIsPaused(true);
    }
  };

  const handlePlay = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
      setIsPaused(false);
    }
  };

  const handleTouchStart = () => handlePause();
  const handleTouchEnd = () => setTimeout(() => handlePlay(), 300);

  const keyFeaturesSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    beforeChange: (_, next) => setActiveIndex(next),
    appendDots: (dots) => (
      <div className="mt-8">
        <ul className="flex justify-center items-center gap-1">{dots}</ul>
      </div>
    ),
    customPaging: (i) => {
      const size = getDotSize(i);
      return (
        <div className="flex items-center justify-center w-5 h-5">
          <div
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              background: i === activeIndex ? '#0C142D' : '#D9D9D9',
              transition: 'all 0.3s ease',
            }}
          />
        </div>
      );
    },
  };

  return (
    <div className="mb-0 md:mb-0">
      {/* Hero Section */}
      <section className="min-h-screen relative flex lg:flex-row flex-col items-center overflow-hidden section-block-padding">
        {/* Desktop background — no p-2 since section has section-block-padding */}
        <Image
          src="/images/global/hero-bg.webp"
          alt="Future Tech background"
          className="absolute -z-10 object-fill h-full w-full hidden md:block p-2"
          height={1000}
          width={1000}
          priority
        />

        {/* Mobile background */}
        <div className="absolute inset-0 -z-10 block md:hidden p-2">
          <div className="bg-hero-gradient w-full h-full rounded-[28px] relative overflow-hidden"></div>
        </div>

        <div className="container-padding w-full flex flex-col lg:flex-row gap-2 lg:gap-12 justify-between mt-[var(--mobile-navbar-gap)] lg:my-0 lg:py-0">
          {/* Left: Content - 40% */}
          <div className="text-white w-full lg:w-[40%] flex flex-col justify-center order-1">
            {/* Icon + Label */}
            <div className="flex items-center mb-10 md:mb-16">
              <div className="size-[40px] md:size-[60px] bg-[#60606059] backdrop-blur-lg flex-shrink-0 rounded-full flex items-center justify-center">
                <img
                  src="/icons/global/futuretech-icon.svg"
                  alt="cybersecurity"
                  className="size-6 sm:size-8"
                />
              </div>
              <div className="w-[60px] md:w-[120px] h-[4px] bg-[#D2D2D2]" />
              <span className="text-white font-noto-sans text-16 sm:text-20 md:text-24 font-semibold">
                Quantum & Web3
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="fl1-sep !text-white mb-6">
              Quantum Computing Readiness
            </h1>

            {/* Description */}
            <p className="fl3 !text-white leading-relaxed">
              UElement Technologies pioneers quantum-driven digital synapses,
              preparing enterprises for post-quantum threats with
              forward-compatible infrastructure that integrates Zero Trust and
              AI defenses. Our solutions ensure seamless evolution to
              quantum-secure environments, protecting cloud and cybersecurity
              assets against emerging computational risks while driving
              sustainable innovation.
            </p>
          </div>

          {/* Right: Image - 60% */}
          <div className="w-full lg:w-[60%] order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
              <img
                src="/images/service/future-tech/futureTechHero.png"
                alt="Digital Security Lock"
                className="w-full h-full object-contain rounded-[4px]"
              />
            </div>
          </div>
        </div>

        {/* Notch — bottom-right, mobile only */}
        <svg
          className="md:hidden absolute pointer-events-none z-10"
          style={{ bottom: '8px', right: '8px' }}
          width="310"
          height="60"
          viewBox="0 0 302 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.73 0.5H310.5V59.5H0.34C7.72 58.02 12.68 54.97 16.12 50.95C21.03 45.21 22.75 37.58 24.11 30.09C25.47 22.54 26.47 15.16 29.84 9.64C31.51 6.89 33.76 4.62 36.94 3.03C40.12 1.43 44.26 0.5 49.73 0.5Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </section>

      {/* SI Partnerships Section */}
      <section className="bg-[#fcfcfc] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <div className="bg-[#f3f3f3] rounded-[4px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="w-full h-[150px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-6 sm:mb-8">
              <img
                src="/images/service/future-tech/futureTechContent.png"
                alt="VPN Security"
                className="w-full h-full object-cover rounded-[4px]"
              />
            </div>
            <div>
              <h2 className="fl1 !mb-4 sm:!mb-6">SI Partnerships Excellence</h2>
              <p className="fl3 leading-relaxed">
                UElement Technologies builds strategic alliances with leading
                system integrators and OEM partners to co-create innovative
                cybersecurity, cloud, and AI solutions that accelerate
                go-to-market strategies. These collaborations leverage
                complementary strengths for mutual growth, delivering scalable
                infrastructure with 99.9% uptime and operational efficiency
                tailored for enterprises worldwide. Through joint assessments
                and customized roadmaps, we unlock new opportunities while
                strengthening capabilities across Zero Trust deployments and
                quantum-ready architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-[#fcfcfc] pb-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 sm:!mb-6">Key Features</h2>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#f3f3f3] p-6 transition-shadow duration-300"
              >
                <h3 className="font-noto-sans font-semibold text-16 lg:text-18 text-black mb-3">
                  {feature.title}
                </h3>
                <p className="fl3 !text-[#232223] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div
            className="md:hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Slider ref={sliderRef} {...keyFeaturesSettings}>
              {keyFeatures.map((feature) => (
                <div key={feature.id}>
                  <div className="light-glass rounded-[4px] p-6 min-h-[200px] mb-4">
                    <h3 className="font-noto-sans font-semibold text-16 text-black mb-3">
                      {feature.title}
                    </h3>
                    <p className="fl3 !text-[#5F6D7E] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="bg-[#fcfcfc] pb-[var(--section-block-padding)] pt-[20px] md:pt-0">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 sm:!mb-6">Other Services</h2>
          <GlobalSlider data={otherServices} />
        </div>
      </section>
    </div>
  );
};

export default FutureTech;
