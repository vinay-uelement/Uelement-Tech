'use client';

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CompanyHighlightSlider = ({ data }) => {
  const sliderRef = useRef(null);

  // ⭐ Track the current active slide
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
    slidesToShow: 1,
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
          style={{
            width: "20px",
            height: "20px",
          }}
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
  };

  if (!data || data.length === 0) return null;

  return (
    <div className="px-2 md:px-4 pb-4">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <div key={item.id} className="">

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[420px] md:h-[500px] object-cover rounded-xl"
            />

            {/* CONTENT */}
            <div className="mt-6 px-1 md:px-2 mb-6">
              <h2 className="fl2 mb-4">
                {item.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6">
                <p className="fl3">
                  {item.desc}
                </p>

                <div className="flex md:justify-end items-center">
                  <Link href={item.link}>
                    <button className="btn-blue">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );

};

export default CompanyHighlightSlider;
