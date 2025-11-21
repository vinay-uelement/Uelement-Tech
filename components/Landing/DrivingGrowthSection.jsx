'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { ReactIcons } from '@/utils/ReactIcons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    id: 1,
    number: '01',
    title: 'SI Partnerships (SI)',
    desc: 'Designing, Deploying & Delivering Next-Gen Cybersecurity, Cloud & AI Solutions together with OEM partners',
    img: '/images/landing/si-partnership.jpg',
  },
  {
    id: 2,
    number: '02',
    title: 'Professional Services (PS)',
    desc: 'Accelerating digital transformation with expert consulting and seamless implementations.',
    img: '/images/landing/professional-services.jpg',
  },
  {
    id: 3,
    number: '03',
    title: 'Cloud Solutions',
    desc: 'Optimizing IT infrastructure with scalable, secure and cost-effective cloud solutions.',
    img: '/images/landing/managed-ser2.jpg',
  },
  {
    id: 4,
    number: '04',
    title: 'Managed Services',
    desc: 'Ensuring business continuity with 24/7 proactive monitoring and management.',
    img: '/images/landing/manage-service.jpg',
  },
  {
    id: 5,
    number: '05',
    title: 'Cloud Modernization',
    desc: 'Modernizing workloads and enabling cloud-native scalability for enterprises.',
    img: '/images/landing/cloud-solution.jpg',
  },
];

const DrivingGrowthSection = () => {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    beforeChange: (oldIndex, newIndex) => setActive(newIndex),
    centerMode: false,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const orderedNumbers = [
    ...slides.slice(active, active + 1),
    ...slides.slice(active + 1),
    ...slides.slice(0, active),
  ];

  return (
    <section className="container-small">
      <div className="flex lg:items-center flex-col lg:flex-row gap-18 lg:pb-8 xl:pb-10 2xl:pb-12">
        {/* Left Side Numbers */}
        <div className="flex-1">
          <span className="slash block lg:hidden">/Service Segment</span>

          <div className="mb-7 xl:mb-10 flex items-center">
            <div className="circle size-[50px] min-w-[50px] xl:size-[70px] rounded-full bg-white grid place-content-center shadow-down font-bold italic text-20 xl:text-24 transition-all duration-500">
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

          <span className="slash hidden lg:block">/Service Segment</span>
          <h3 className="title">
            Driving growth through strategic collaborations
          </h3>
          <p className="font-light hidden lg:block">
            SI Partnerships (SI) represents strategic alliances that help
            organizations grow, innovate, and expand their reach. It focuses on
            collaboration with trusted partners to drive mutual value and
            long-term success. Through these partnerships, businesses can unlock
            new opportunities, strengthen capabilities, and achieve shared
            goals.
          </p>
          <button className="btn-1 mt-4 xl:mt-5 hidden lg:block">
            Learn More
          </button>
        </div>

        <div className="relative overflow-visible w-full md:w-1/2 driving-slider">
          {/* Left Navigation Button */}
          <div className="absolute inset-y-0 -left-4 md:-left-7 lg:-left-16 flex items-center z-20">
            <div
              onClick={prevSlide}
              className="size-[32px] md:size-[44px] xl:size-[60px] text-20 lg:text-24 rounded-full bg-[#DEDEDE] shadow-down grid place-content-center cursor-pointer transition text-white lg:text-primary-blue"
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
                textOpacity = 0.6;
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
                    className={`dg-card-wrapper ml-6 md:ml-0 ${posClass}`}
                    style={{ zIndex, position: 'relative' }}
                  >
                    <div
                      className="relative w-[200px] h-[280px] md:w-[320px] md:h-[320px] xl:w-[370px] xl:h-[370px] 2xl:w-[450px] 2xl:h-[450px] rounded-[15px] overflow-hidden"
                      style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="box-inner bg-black/65  h-full w-full rounded-[5px] sm:rounded-[10px] lg:rounded-[20px] p-3 relative z-10">
                        <div
                          style={{ opacity: textOpacity }}
                          className="transition-opacity duration-700 h-full flex flex-col gap-8 text-center px-2 md:px-10 py-4 "
                        >
                          <h5 className="text-20 xl:text-30 text-white mb-0 md:mb-2 font-dm-serif">
                            {item.title}
                          </h5>
                          <p className="text-12 2xl:text-20 text-white font-light mb-auto">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>

          {/* Right Navigation Button */}
          <div className="absolute inset-y-0 -right-4 md:-right-7 lg:-right-16 flex items-center z-20">
            <div
              onClick={nextSlide}
              className="size-[32px] md:size-[44px] xl:size-[60px] text-20 lg:text-24 rounded-full bg-[#DEDEDE] shadow-down grid place-content-center cursor-pointer transition text-white lg:text-primary-blue"
            >
              <span>{ReactIcons.rightChev}</span>
            </div>
          </div>
        </div>

        {/* Mobile Text Section */}
        <p className="font-light block lg:hidden pt-12">
          SI Partnerships (SI) represents strategic alliances that help
          organizations grow, innovate, and expand their reach. It focuses on
          collaboration with trusted partners to drive mutual value and
          long-term success. Through these partnerships, businesses can unlock
          new opportunities, strengthen capabilities, and achieve shared goals.
        </p>
        <button className="btn-1 mt-0 xl:mt-5 block mx-auto w-[150px] lg:w-auto lg:hidden">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default DrivingGrowthSection;
