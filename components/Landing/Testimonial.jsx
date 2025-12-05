"use client"

import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 3000, // Large laptops
        settings: {
          centerMode: true,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1280, // Large laptops
        settings: {
          centerMode: true,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 1024, // Tablets landscape
        settings: {
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768, // Tablets portrait
        settings: {
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobiles
        settings: {
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#4b6382] pt-[var(--section-block-padding)] pb-[calc(var(--section-block-padding)*2)] overflow-hidden">
      {/* overflow-hidden prevents slider from overflowing horizontally */}
      <div className="title-div text-white text-center mb-10">
        <p className="text-14 font-light">/Testimonial</p>
        <h4 className="title mt-3">What Our Clients Say</h4>
        <p className="font-light max-w-[750px] mx-auto text-14 lg:text-16">
          Hear directly from the enterprises we've helped transform and secure.
        </p>
      </div>

      <div className="testimonial-slick px-0 sm:px-4 md:px-8">
        <Slider {...settings}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
