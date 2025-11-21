'use client';

import { ReactIcons } from '@/utils/ReactIcons';
import { useState } from 'react';

const ServicesHero = () => {
  const slides = [
    'Architecting and Optimizing perfect Cloud Solutions.',
    'Empowering Security with Next-Gen Cyber Intelligence.',
    'Scaling AI-driven Innovation for Smarter Enterprises.',
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="mt-[var(--outer-padding)] rounded-[8px] lg:h-screen h-auto relative flex lg:flex-row flex-col items-center bg-[#0C142D]">
      <div className="container-padding w-full flex flex-col lg:flex-row gap-10 justify-between  mt-[var(--mobile-navbar-gap)] lg:my-0">
        {/* Left: Text Content */}
        <div className="text-white flex-1">
          <div className="font-noto-sans font-normal text-32 md:text-[45px]">/Our Services</div>
          <div className='mb-12 ml-4 font-light text-[#9e9e9e] font-reddit-sans'>Comprehensive Services Designed</div>
          <div className="title tracking-wider !font-medium md:w-[90%] w-full">
            The standard lorem ipsum passage has been a printer's
          </div>
          <div className="font-reddit-sans text-base font-light leading-relaxed md:w-[80%] w-full">
            At U-Element, we're dedicated to empowering organizations with
            intelligent, secure, and scalable digital solutions. Since our
            founding, we've combined expertise in AI, cybersecurity, cloud
            computing, and digital transformation to help businesses thrive in
            an ever-evolving technological landscape.
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
      <div className="mt-10 lg:mt-0 mb-[var(--mobile-navbar-gap)] lg:mb-0 flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-12 w-full lg:w-2/3  bg-[#D4D4D41A] backdrop-blur-2xl rounded-[40px] px-1 py-1 shadow-lg z-50">
        <button
          onClick={prevSlide}
          className="size-11 bg-white rounded-full text-black text-2xl flex items-center justify-center hover:bg-gray-200 transition"
          aria-label="Previous slide"
        >
          {ReactIcons.leftChev}
        </button>
        <div className="flex-1 flex items-center justify-center min-h-[30px]">
          <span className="font-noto-sans italic text-14 md:text-lg text-white text-center transition-all duration-500">
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

export default ServicesHero;
