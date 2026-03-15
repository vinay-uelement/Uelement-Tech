'use client';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GlobalSlider from '@/components/Slider/GlobalSlider';

const Cloud = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const keyFeatures = [
    {
      id: 1,
      title: 'Scalable IaC Deployment',
      description:
        'Infrastructure as Code automates secure cloud architecture design, enabling rapid re-architecture and MVP development with 99.9% uptime.',
    },
    {
      id: 2,
      title: 'FinOps Optimization',
      description:
        'Intelligent cost management reduces expenses by 350+ on average through automated resource scaling and usage analytics.',
    },
    {
      id: 3,
      title: 'Zero Trust Integration',
      description:
        'Embeds continuous verification and microsegmentation natively in cloud environments for seamless security.',
    },
    {
      id: 4,
      title: 'Managed SecOps',
      description:
        '24/7 monitoring, automated threat response, and compliance reporting cut security incidents by 85%.',
    },
  ];

  const otherServices = [
    {
      id: 1,
      image: '/images/service/ai.png',
      icon: '/icons/global/machinelearning-icon.svg',
      label: 'AI & Machine Learning',
      link: '/ai-ml',
      title: 'Enterprise Cloud: Migration, Modernization, and Optimization.',
      description:
        'Expert Multi/Hybrid-cloud management, migration, and modernization. We ensure peak efficiency via DevOps, FinOps, and Infrastructure as Code (IaC).',
    },
    {
      id: 2,
      image: '/images/service/cybersec.png',
      icon: '/icons/global/enterprise-icon.svg',
      label: 'Cyber Security',
      link: '/cybersecurity',
      title: 'Digital Safety: Next-Gen Security from App to Cloud',
      description:
        'Comprehensive digital safety including Zero Trust, SASE, and Cloud/App Security. Prepare your organization for the future with Quantum-Resistant Security (QKD).',
    },
    {
      id: 3,
      image: '/images/global/pioneer.png',
      icon: '/icons/global/futuretech-icon.svg',
      label: 'Future Tech',
      link: '/future-tech',
      title: 'Pioneering Transformation with Quantum Readiness.',
      description:
        'Driving next-wave technology in Quantum Computing (QKD) and Web3. Executing critical App Modernization, Sassification, and Mainframe-to-Cloud migration.',
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
            {/* Icon + Label */}
            <div className="flex items-center mb-10 md:mb-16">
              <div className="size-[40px] md:size-[60px] bg-[#60606059] backdrop-blur-lg flex-shrink-0 rounded-full flex items-center justify-center">
                <img
                  src="/icons/global/cloud-icon.svg"
                  alt="Cloud Solutions"
                  className="size-6 sm:size-8"
                />
              </div>
              <div className="w-[60px] md:w-[120px] h-[4px] bg-[#D2D2D2]"></div>
              <span className="text-white font-reddit-sans text-14 sm:text-16 md:text-20 font-semibold ml-3">
                Cloud Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="fl1-sep !text-white mb-6">
              Optimize Performance, Lower Cloud Spend (FinOps).
            </h1>

            {/* Description */}
            <p className="fl3 !text-white leading-relaxed">
              Accelerate cloud migration and modernization across Multi-Cloud,
              Hybrid-Cloud, Private Cloud, and Government Cloud (GCC). Achieve
              unparalleled efficiency through automated DevOps practices, FinOps
              cost governance, and infrastructure built as Infrastructure as
              Code (IaC).
            </p>
          </div>

          {/* Right: Image - 60% */}
          <div className="w-full lg:w-[60%] order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
              <img
                src="/images/service/cloud/cloudhero.png"
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
          <div className="bg-[#f3f3f3] rounded-[4px] shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Image */}
            <div className="w-full h-[150px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-6 sm:mb-8">
              <img
                src="/images/service/cloud/cloud2.png"
                alt="VPN Security"
                className="w-full h-full object-cover rounded-[4px]"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="fl1 mb-4 sm:mb-6">Secure Cloud Computing</h2>

              <p className="fl3 leading-relaxed">
                UElement Technologies optimizes cloud infrastructure with
                scalable, secure solutions tailored for enterprises and
                startups, delivering 99.9% uptime and 350+ average cost savings
                through FinOps and IaC deployments. Our services include cloud
                migration, re-architecture, and managed infrastructure that
                integrate seamlessly with Zero Trust and quantum-resistant
                security. This enables agile digital transformation while
                reducing security incidents by 85% via automated SecOps and
                continuous optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-[#fcfcfc] pb-[var(--section-block-padding)]">
        <div className="container-padding">
          <h2 className="fl1 text-left !mb-4 sm:!mb-6">
            Key Features
          </h2>

          {/* Desktop Grid - 4 columns */}
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
                <div key={feature.id} className="">
                  <div className="rounded-[4px] light-glass p-6 min-h-[200px] mb-4">
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
          <h2 className="fl1 text-left !mb-4 sm:!mb-6">
            Other Services
          </h2>

          <GlobalSlider data={otherServices} />
        </div>
      </section>
    </div>
  );
};

export default Cloud;
