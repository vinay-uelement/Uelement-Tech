'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { ReactIcons } from '@/utils/ReactIcons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation';

const slides = [
  {
    id: 1,
    number: '01',
    title: 'SI Partnerships (SI)',
    headline: 'Accelerating growth through strategic partnerships',
    desc: 'Strategic integration and managed services leveraging 15+ global technology partners.',
    desc1:
      'We partner across the cloud ecosystem to deliver seamless integrations, managed services, and compliant cybersecurity advisory, driving measurable outcomes through global alliances and faster go-to-market solutions.Together, we turn innovation into scalable, real-world business value.',
    img: '/images/landing/si-partnership.jpg',
  },
  {
    id: 2,
    number: '02',
    title: 'Professional Services',
    headline: 'Driving digital transformation with expert consulting',
    desc: 'End-to-end professional services across cloud, cybersecurity, and AI.',
    desc1:
      'We deliver comprehensive professional services spanning strategy and architecture through implementation and optimization. Our specialist teams enable measurable results via technology roadmaps, change management, and seamless integration of new capabilities.',
    img: '/images/landing/professional-services.jpg',
  },
  {
    id: 3,
    number: '03',
    title: 'Product Engineering',
    headline: 'Building scalable digital products from concept to market',
    desc: 'Design and build full-stack, multi-tenant SaaS and AI-native platforms.',
    desc1: `We engineer full-stack, multi-tenant SaaS/PaaS solutions with cloud-native architectures, AI/ML integration, and robust backend infrastructure.
From MVP development and microservices to analytics dashboards and LLM integration, we deliver extensible platforms optimized for enterprise scale`,
    img: '/images/landing/managed-ser2.jpg',
  },
  {
    id: 4,
    number: '04',
    title: 'Digital Transformation',
    headline: 'Reimagining enterprises through technology-led change',
    desc: 'Comprehensive strategy-to-execution digital transformation programs.',
    desc1:
      'We orchestrate digital transformation initiatives spanning modernization, cloud migration, agile delivery, and emerging technology adoption. From legacy system refactoring to AI integration and customer experience enhancement, we create measurable and lasting business impact.',
    img: '/images/landing/cloud-solution.jpg',
  },
];

const DrivingGrowthSection = () => {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);
  const router = useRouter();

  const getDotSize = (dotIndex) => {
    const distance = Math.abs(active - dotIndex);

    if (distance === 0) return 16;
    if (distance === 1) return 12;
    if (distance === 2) return 8;
    return 5;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 5000,

    beforeChange: (_, next) => setActive(next),

    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center items-center">{dots}</ul>
      </div>
    ),

    customPaging: (i) => {
      const size = getDotSize(i);

      return (
        <div
          className="flex items-center justify-center mt-5"
          style={{ width: '20px', height: '20px' }}
        >
          <div
            style={{
              width: size,
              height: size,
              borderRadius: '50%',
              background: i === active ? '#0C142D' : '#D9D9D9',
              transition: 'all 0.3s ease',
            }}
          ></div>
        </div>
      );
    },
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  // Left side numbers ordered rotation
  const orderedNumbers = [
    ...slides.slice(active, active + 1),
    ...slides.slice(active + 1),
    ...slides.slice(0, active),
  ];

  return (
    <section className="container-padding">
      {/* ↓ added `relative` to support the absolutely positioned number block */}
      <div className="flex md:items-center flex-col lg:flex-row gap-10 md:gap-20 lg:pb-8 xl:pb-10 2xl:pb-12 ">
        {/* Left Side Numbers */}
        <div className="flex-1 lg:mr-[30px] md:w-[60%] w-full">
          <span className="fl-slash block">/Service Segment</span>

          {/* ↓ Single absolutely positioned number block from second code */}
          <div className="mb-6 md:mb-8 3xl:mb-10 left-0 flex items-center z-20">
            <div className="circle size-[50px] min-w-[50px] xl:size-[60px] rounded-full bg-white grid place-content-center shadow-down font-bold italic text-20 xl:text-24 transition-all duration-500">
              {slides[active].number}
            </div>
            <img
              src="/icons/landing/horizontal-line.svg"
              alt="icon"
              className="w-[120px] sm:w-[250px] md:w-[auto]"
            />
            <div className="font-bold italic text-18 xl:text-24 text-[#1C1C1C80] flex items-center gap-2 md:gap-4 transition-all">
              {orderedNumbers.slice(1).map((s) => (
                <span key={s.id}>{s.number}</span>
              ))}
            </div>
          </div>

          {/* <span className="fl-slash hidden lg:block">/Service Segment</span> */}
          <div className="min-h-[200px] lg:min-h-[250px]">
            <h3 className="fl1">{slides[active].headline}</h3>
            <p className="fl3 lg:block md:w-[90%] w-full text-left">
              {slides[active].desc1}
            </p>
          </div>
          <button
            className="btn-arrow mt-4 !hidden lg:!block"
            onClick={() => router.push('/ai-ml')}
          >
            <span
              className="btn-arrow-circle bg-hero-gradient"
              aria-hidden="true"
            >
              <span className="btn-arrow-icon" />
            </span>
            <span className="btn-arrow-text">Learn More</span>
          </button>
        </div>

        <div className="relative overflow-visible md:!w-[50%] w-full driving-slider">
          <div className="absolute inset-y-0 -left-2 md:-left-15 flex items-center z-20">
            <div
              onClick={prevSlide}
              className="size-[26px] xl:size-[40px] text-20 lg:text-26 rounded-full bg-[#DEDEDE73] shadow-down grid place-content-center cursor-pointer transition text-black lg:text-primary-blue"
            >
              <span>{ReactIcons.leftChev}</span>
            </div>
          </div>

          {/* Right Side Slider (React Slick) */}
          <Slider ref={sliderRef} {...settings}>
            {slides.map((item, index) => {
              const total = slides.length;

              const leftIndex = active % total;
              const centerIndex = (active + 1) % total;
              const rightIndex = (active + 2) % total;

              let posClass = '';
              let zIndex = 1;
              let textOpacity = 0;

              if (index === leftIndex) {
                posClass = 'dg-left-big';
                zIndex = 30;
                textOpacity = 1;
              } else if (index === centerIndex) {
                posClass = 'dg-center-medium';
                zIndex = 20;
                textOpacity = 0.4;
              } else if (index === rightIndex) {
                posClass = 'dg-right-small';
                zIndex = 10;
                textOpacity = 0.3;
              } else {
                posClass = 'dg-hidden-small';
                zIndex = 0;
                textOpacity = 0;
              }

              return (
                <div key={item.id}>
                  <div
                    className={`dg-card-wrapper ml-6 md:ml-0 bg ${posClass}`}
                    style={{ zIndex, position: 'relative' }}
                  >
                    <div
                      className="relative w-[240px] h-[180px] md:w-[320px] md:h-[230px] xl:w-[360px] xl:h-[260px] 2xl:w-[520px] 2xl:h-[320px] rounded-[18px] overflow-hidden"
                      style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                      <div
                        style={{ opacity: textOpacity }}
                        className="absolute inset-0 z-20 transition-opacity duration-700 flex flex-col justify-end text-left px-4 py-4 md:px-5 md:py-5"
                      >
                        <h5 className="text-14 xl:text-20 font-noto-sans font-semibold text-white mb-1 leading-tight">
                          {item.title}
                        </h5>
                        <p className="fl3 !text-white/80 text-12 md:text-13 line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>

          <div className="absolute inset-y-0 -right-1 md:-right-18 xl:-right-14 flex items-center z-20">
            <div
              onClick={nextSlide}
              className="size-[26px] xl:size-[40px] text-20 lg:text-26 rounded-full bg-[#DEDEDE73] shadow-down grid place-content-center cursor-pointer transition text-black lg:text-primary-blue"
            >
              <span>{ReactIcons.rightChev}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn-blue mt-10 lg:hidden w-fit ">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DrivingGrowthSection;
