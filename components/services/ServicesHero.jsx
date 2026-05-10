'use client';

import Image from 'next/image';
import { ReactIcons } from '@/utils/ReactIcons';
import { useState } from 'react';
import { imgUrl } from '@/lib/imageUrl';

const ServicesHero = () => {
  const slides = [
    'Architecting Enterprise AI/ML Excellence.',
    'Securing Hybrid Clouds with Zero Trust.',
    'Modernizing Platforms for Digital Agility.',
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="lg:h-screen h-auto relative flex lg:flex-row flex-col items-center overflow-hidden">
      {/* Desktop background */}
      <Image
        src={imgUrl('/images/global/hero-bg.webp')}
        alt="services background"
        className="absolute -z-10 object-fill h-full w-full hidden md:block p-2"
        height={1000}
        width={1000}
        priority
      />

      {/* Mobile background */}
      <div className="absolute inset-0 -z-10 block md:hidden p-2">
        <div className="bg-hero-gradient w-full h-full rounded-[28px] relative overflow-hidden"></div>
      </div>

      <div className="container-padding w-full flex flex-col lg:flex-row items-stretch gap-10 justify-between mt-[var(--mobile-navbar-gap)] lg:my-0">
        {/* Left: Text Content */}
        <div className="text-white flex-1 flex flex-col">
          <div>
            <div className="fl3 !text-[#ffffff] md:!text-[24px]">
              <span className="text-[#9B7025] pr-2 font-bold">/</span>Our
              Services
            </div>
            <div className="mb-12 fl3 !text-[#9E9E9E]">
              Service Delivery Models
            </div>
          </div>
          <div>
            <div className="fl1 !text-[#ffffff] !font-medium md:w-[90%] w-full">
              Four integrated frameworks that define, build, run, and secure
              your enterprise technology landscape.
            </div>
            <div className="fl3 !text-[#ffffff] mt-4 md:w-[90%] w-full">
              UElement Technologies acts as a full-stack partner, delivering
              integrated, end-to-end solutions designed to help your business
              achieve sustainable growth and thrive in a secure digital future.
              Our four core Service Delivery Models ensure we can engage with
              your organization at every level—from strategic advisory and
              full-stack development to managing infrastructure and compliance.
              This integrated approach ensures powerful synergies, eliminating
              complexity and accelerating time-to-market.
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1">
          <div className="overflow-hidden w-full">
            <img
              src={imgUrl('/images/service/services-hero2.png')}
              alt="Team meeting"
              className="w-full h-auto rounded-[4px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Carousel/Slider Bar - bottom absolute */}
      <div className="my-10 lg:mt-0 lg:mb-0 flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-12 w-[90%] lg:w-2/3 bg-[#D4D4D41A] backdrop-blur-2xl rounded-[40px] px-1 py-1 shadow-lg z-50">
        <button
          onClick={prevSlide}
          className="size-11 bg-white rounded-full text-black text-2xl flex items-center justify-center hover:bg-gray-200 transition"
          aria-label="Previous slide"
        >
          {ReactIcons.leftChev}
        </button>
        <div className="flex-1 flex items-center justify-center min-h-[30px] px-2">
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

      {/* Notch — bottom-right, mobile only  */}
      <svg
        className="md:hidden absolute pointer-events-none z-10"
        style={{ bottom: '8px', right: '8px' }}
        width="310"
        height="60"
        viewBox="0 0 302 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49.73 0.5H310.5V59.5H0.34C7.72 58.02 12.68 54.97 16.12 50.95C21.03 45.21 22.75 37.58 24.11 30.09C25.47 22.54 26.47 15.16 29.84 9.64C31.51 6.89 33.76 4.62 36.94 3.03C40.12 1.43 44.26 0.5 49.73 0.5Z"
          fill="white"
          stroke="white"
        />
      </svg>
    </div>
  );
};

export default ServicesHero;
