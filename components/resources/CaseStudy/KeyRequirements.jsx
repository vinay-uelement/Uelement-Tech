"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function KeyRequirements({ caseStudy }) {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,

    beforeChange: (_, next) => setActive(next),

    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center items-center gap-2">
          {dots}
        </ul>
      </div>
    ),

    customPaging: (i) => {
      const size = getDotSize(i);

      return (
        <div
          className="flex items-center justify-center"
          style={{ width: 20, height: 20 }}
        >
          <div
            style={{
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: i === active ? "#0C142D" : "#D9D9D9",
              transition: "all 0.3s ease",
            }}
          />
        </div>
      );
    },
  };

  return (
    <div className="md:bg-[#F2F2F2] md:p-8 mb-6 md:mb-0">
      <h2 className="fl2 !mb-4 md:!mb-8">Key requirements included</h2>

      <div className="relative md:grid grid-cols-1 sm:grid-cols-2 hidden">
        {/* Vertical Divider (Desktop only) */}
        <div className="block absolute top-0 bottom-0 left-1/2 border-l border-dotted border-black/30" />

        {/* Horizontal Divider (Desktop only) */}
        <div className="hidden sm:block absolute left-0 right-0 top-1/2 border-t border-dotted border-black/30" />

        {caseStudy.keyRequirements.map((req) => (
          <div
            key={req.id}
            className="p-4 md:p-6 flex items-center justify-center text-center min-h-[120px]"
          >
            <p className="fl3 leading-[1.6] max-w-[260px]">
              {req.title}
            </p>
          </div>
        ))}
      </div>

       <div className="block md:hidden">
          <Slider ref={sliderRef} {...settings}>
            {caseStudy.keyRequirements.map((req) => (
              <div key={req.id} className="px-2">
                <div className="bg-[#F0F0F0] rounded-[4px] p-5 text-center flex items-center justify-center min-h-[160px] mb-4">
                  <p className="fl3 w-[90%]">{req.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
    </div>
  );
}

export default KeyRequirements;
