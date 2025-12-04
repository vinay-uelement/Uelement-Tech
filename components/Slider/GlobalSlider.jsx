
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { ReactIcons } from '@/utils/ReactIcons'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GlobalSlider.css'; 

const GlobalSlider = ({ data }) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

   const getDotSize = (dotIndex) => {
    const distance = Math.abs(activeIndex - dotIndex);

    if (distance === 0) return 16;
    if (distance === 1) return 12;
    if (distance === 2) return 8;
    return 5;
  };

 const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,   
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  arrows: false,

  beforeChange: (current, next) => {
    setActiveIndex(next);
  },

  appendDots: dots => (
    <div>
      <ul className="flex justify-center items-center gap-1 mt-10">{dots}</ul>
    </div>
  ),

  customPaging: (i) => {
    const size = getDotSize(i);
    return (
      <div
        className="flex items-center justify-center"
        style={{ width: "20px", height: "20px" }}
      >
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: i === activeIndex ? "#0C142D" : "#D9D9D9",
            transition: "all 0.3s ease",
          }}
        ></div>
      </div>
    );
  },

  responsive: [
    {
      breakpoint: 1024,   
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,   
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  if (!data || data.length === 0) return null;

  return (
    <div className="relative px-8 md:px-12">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-3 md:p-4">
            <div className="p-6 bg-white rounded-[10px] h-[540px] 2xl:h-[590px] flex flex-col w-full shadow-lg">
              <div className="h-[200px] md:h-[220px] 2xl:h-[280px] relative">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover rounded-[10px]" />
                <div className="bg-primary-blue size-12 rounded-full absolute right-3 -bottom-6 flex items-center justify-center">
                  
                  <img 
                    src={item.icon ? item.icon : '/icons/global/enterprise-icon.svg'} 
                    alt={item.label || 'icon'} 
                  />
                </div>
              </div>

              
              <div className="pt-6 flex flex-col flex-1">
                <div className="bg-[#E1E1E1] r5 text-black-1 px-3 py-1 w-fit font-reddit-sans font-semibold">
                  {item.label}
                </div>
                <h6 className="fl1-sep md:!text-20 mt-4 whitespace-pre-line">
                  {item.title}
                </h6>
                
                <p className="fl3 !text-[#5F6D7E] flex-1">
                  {item.desc || item.description}
                </p>
                {/* <Link
                  href={item.link || '/'}
                  className="font-semibold text-primary-blue mt-3 flex items-center gap-1 text-14 hover:gap-2 transition-all duration-300"
                >
                  Learn more {ReactIcons.arrowRight}
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GlobalSlider;