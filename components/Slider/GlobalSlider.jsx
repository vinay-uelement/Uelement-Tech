'use client';

import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GlobalSlider.css';

const GlobalSlider = ({ data }) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const getDotSize = (dotIndex) => {
    const distance = Math.abs(activeIndex - dotIndex);
    if (distance === 0) return 16;
    if (distance === 1) return 12;
    if (distance === 2) return 8;
    return 5;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,

    beforeChange: (_, next) => setActiveIndex(next),

    appendDots: (dots) => (
      <div className="mt-10">
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

  useEffect(() => {
    const timer = setTimeout(() => {
      sliderRef.current?.slickGoTo(0, true);
      window.dispatchEvent(new Event('resize'));
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (!data || data.length === 0) return null;

  return (
    <div className="relative px-4 sm:px-6 md:px-8 lg:px-12">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-2 sm:p-3 md:p-4">
            <div className="p-4 sm:p-6 bg-white rounded-[4px] min-h-[425px] sm:min-h-[500px] md:min-h-[550px] flex flex-col shadow-lg">
              {/* IMAGE */}
              <div className="h-[150px] sm:h-[180px] md:h-[220px] 2xl:h-[280px] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover rounded-[4px]"
                />
                <div className="bg-white shadow-md size-10 sm:size-12 rounded-full absolute right-3 -bottom-5 sm:-bottom-6 flex items-center justify-center">
                  <img
                    src={item.icon || '/icons/global/enterprise-icon.svg'}
                    alt="icon"
                    className="size-6 sm:size-8"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-5 sm:pt-6 flex flex-col flex-1">
                <div className="bg-[#E1E1E1] px-2 sm:px-3 py-1 w-fit font-semibold text-xs sm:text-sm">
                  {item.label}
                </div>

                <h6 className="mt-3 sm:mt-4">
                  {item.title.split('\n').map((line, i) => (
                    <span key={i} className='font-noto-sans md:text-16 text-14 font-semibold'>
                      {line}
                      <br />
                    </span>
                  ))}
                </h6>

                <p className="mt-2 sm:mt-3 text-[#5F6D7E] flex-1 font-reddit-sans font-light md:text-14 text-12">
                  {item.desc || item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GlobalSlider;