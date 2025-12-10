'use client';

import { ReactIcons } from '@/utils/ReactIcons';
import { useState } from 'react';

const PartnersHero = () => {
  const slides = [
    'Architecting and Optimizing perfect Cloud Solutions.',
    'Empowering Security with Next-Gen Cyber Intelligence.',
    'Scaling AI-driven Innovation for Smarter Enterprises.',
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="lg:h-screen h-auto relative flex flex-col lg:flex-row items-center bg-primary-blue">
      <div className="container-padding w-full flex flex-col lg:flex-row gap-10 justify-between mt-[var(--mobile-navbar-gap)] lg:my-0">
        {/* Left: Text Content */}
        <div className="text-white flex-1 flex flex-col justify-between">
          <div>
            <div className="fl3 !text-[#ffffff] md:!text-[24px]">
              <span className="text-[#9B7025] pr-2 font-bold">/</span>Our
              Partners
            </div>{' '}
            <div className="mb-12 fl3 !text-[#9E9E9E] ">
              Comprehensive Services Designed
            </div>
          </div>
          <div>
            <div className="fl1 !text-[#ffffff] !font-medium md:w-[90%] w-full">
              Strategic Relationships with 15+ World-Class Technology Leaders.
            </div>
            <div className="fl3 !text-[#ffffff] mt-4 md:w-[90%] w-full">
              Our extensive partner ecosystem is fundamental to UElement’s
              promise of delivering integrated, best-in-class solutions. We
              cultivate strategic relationships with over 15+ global technology
              leaders across all four of our core domains: Cloud, Cybersecurity,
              AI, and Quantum Computing. This allows us to leverage certified
              expertise and cutting-edge platforms from partners like AWS,
              Google Cloud, Microsoft Azure, Palo Alto Networks, NVIDIA, and IBM
              Quantum. For our clients, this means access to fully integrated
              technologies, reduced vendor complexity, and a guarantee that your
              solutions are built on the most reliable and future-ready stacks
              available.
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1">
          <div className="rounded-xl overflow-hidden shadow-lg w-full">
            <img
              src="/images/service/service-hero.svg"
              alt="Team meeting"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Carousel/Slider Bar - bottom absolute */}
      <div className="my-10 lg:mt-0 lg:mb-0 flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-12 w-[90%] lg:w-2/3  bg-[#D4D4D41A] backdrop-blur-2xl rounded-[40px] px-1 py-1 shadow-lg z-50">
        <button
          onClick={prevSlide}
          className="size-11 bg-white rounded-full text-black text-2xl flex items-center justify-center hover:bg-gray-200 transition"
          aria-label="Previous slide"
        >
          {ReactIcons.leftChev}
        </button>
        <div className="flex-1 flex items-center justify-center min-h-[30px]">
          <span className="fl4 text-center transition-all duration-500">
            {slides[index]}
          </span>
        </div>
        <button
          onClick={nextSlide}
          className="size-11 bg-white rounded-full text-black text-2xl flex items-center justify-center hover:bg-gray-200 transition"
          aria-label="Next slide"
        >
          {ReactIcons.rightChev}
        </button>
      </div>
    </div>
  );
};

export default PartnersHero;
