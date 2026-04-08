'use client';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalSlider from '@/components/Slider/GlobalSlider';

const CyberSecurity = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const keyFeatures = [
    {
      id: 1,
      title: 'Zero Trust Implementation',
      description:
        'Continuous verification of users, devices, and data flows eliminates implicit trust, preventing lateral movement in breaches.',
    },
    {
      id: 2,
      title: 'Quantum-Resistant Security',
      description:
        'Post-quantum cryptography protects against future harvest-now-decrypt-later attacks on sensitive cloud and AI workloads.',
    },
    {
      id: 3,
      title: 'AI-Driven Threat Detection',
      description:
        'Real-time anomaly detection and automated response for cloud environments, minimizing mean time to detect (MTTD) and respond (MTTR).',
    },
    {
      id: 4,
      title: 'Continuous Verification:',
      description:
        'Every user, device, and access request receives real-time MFA and risk-based verification, eliminating implicit trust in cloud and hybrid environments.',
    },
  ];

  const otherServices = [
    {
      id: 1,
      image: '/images/service/ai.png',
      icon: '/icons/global/machinelearning-icon.svg',
      label: 'Ai & Machine Learning',
      link: '/ai-ml',
      title: 'Enterprise Cloud: Migration, Modernization, and Optimization.',
      description:
        'Expert Multi/Hybrid-cloud management, migration, and modernization. We ensure peak efficiency via DevOps, FinOps, and Infrastructure as Code (IaaC).',
    },
    {
      id: 2,
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
      id: 3,
      image: '/images/global/pioneer.png',
      icon: '/icons/global/futuretech-icon.svg',
      label: 'Quantum & Web3',
      link: '/future-tech',
      title: 'Pioneering Transformation with Quantum Readiness.',
      description:
        'Driving next-wave technology in Quantum Computing (QKD) and Web3. We execute critical App Modernization, Sassification, and Mainframe-to-Cloud migration.',
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

  const handleTouchStart = () => {
    handlePause();
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      handlePlay();
    }, 300);
  };

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
      <section className="h-auto relative flex lg:flex-row flex-col items-center bg-hero-gradient section-block-padding !pb-[20px] pb:!md-16 3xl:!pb-22 3xl:!pt-[175px] md:!pt-[125px]">
        <div className="container-padding w-full flex flex-col lg:flex-row gap-2 lg:gap-12 justify-between mt-[var(--mobile-navbar-gap)] lg:my-0 lg:py-0">
          {/* Left: Content - 40% */}
          <div className="text-white w-full lg:w-[40%] flex flex-col justify-center order-1">
            {/* Icon + Label */}
            <div className="flex items-center mb-10 md:mb-16">
              <div className="size-[40px] md:size-[60px] bg-[#60606059] backdrop-blur-lg flex-shrink-0 rounded-full flex items-center justify-center">
                <img
                  src="/icons/global/enterprise-icon.svg"
                  alt="cybersecurity"
                  className="size-6 sm:size-8"
                />
              </div>
              <div className="w-[60px] md:w-[120px] h-[4px] bg-[#D2D2D2]"></div>
              <span className="text-white font-noto-sans text-16 sm:text-20 md:text-24 font-semibold">
                Cybersecurity
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="fl1-sep !text-white mb-6">
              Secure Your Digital Perimeter and Supply Chain.
            </h1>

            {/* Description */}
            <p className="fl3 !text-white leading-relaxed">
              Establish an end-to-end defense across your enterprise, covering
              Application security, Network Security, and Cloud Security. We
              enforce Zero Trust principles, provide SASE and CNAPP solutions,
              and guarantee data protection against threats, including future
              Quantum-Resistant Security (QKD)
            </p>
          </div>

          {/* Right: Image - 60% */}
          <div className="w-full lg:w-[60%] order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
              <img
                src="/images/service/cybersecurity/cybersecurityHero.png"
                alt="Digital Security Lock"
                className="w-full h-full object-contain rounded-[4px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quantum-Resistant Security Section */}
      <section className="bg-[#fcfcfc] py-[var(--section-block-padding)]">
        <div className="container-padding">
          <div className="bg-[#F3F3F3] rounded-[4px] shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Image */}
            <div className="w-full h-[150px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-6 sm:mb-8">
              <img
                src="/images/service/cybersecurity/cybersecurityContent.png"
                alt="VPN Security"
                className="w-full h-full object-cover rounded-[4px]"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="fl1 mb-4 sm:mb-6">Quantum-Resistant Security</h2>

              <p className="fl3 leading-relaxed">
                UElement Technologies deploys quantum-resistant cryptography to
                protect against future "harvest now, decrypt later" attacks
                targeting sensitive data in cloud and AI systems. Our solutions
                integrate post-quantum algorithms with Zero Trust principles,
                securing full-stack deployments from assessment to ongoing
                SecOps management. Enterprises gain future-proof defenses that
                maintain compliance and achieve 350+ average cost savings
                through optimized, scalable infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-[#fcfcfc] pb-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 sm:!mb-6">Key Features</h2>

          {/* Desktop Grid - 4 columns */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#F3F3F3] p-6 transition-shadow duration-300"
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
                <div key={feature.id} className="">
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

export default CyberSecurity;
