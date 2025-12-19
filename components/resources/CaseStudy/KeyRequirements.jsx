"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function KeyRequirements({ caseStudy }) {
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
    <section className="bg-white">
      <div className="container-padding section-block-padding">
        <h2 className="fl2 !mb-6">Key requirements included</h2>

        {/* MOBILE – React Slick */}
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

        {/* TABLET & DESKTOP – Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {caseStudy.keyRequirements.map((req) => (
            <div
              key={req.id}
              className="bg-[#F0F0F0] rounded-[4px] p-5 md:p-6 text-center flex items-center justify-center min-h-[140px] md:min-h-[160px]"
            >
              <p className="fl3">{req.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
