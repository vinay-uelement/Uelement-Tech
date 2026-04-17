'use client';

import Image from 'next/image';
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
    <div className="lg:min-h-screen h-auto relative flex flex-col items-center pb-6 lg:pb-10">
      {/* Desktop background */}
      <Image
        src="/images/global/hero-bg.webp"
        alt="partners background"
        className="absolute -z-10 object-fill h-full w-full hidden md:block p-2"
        height={1000}
        width={1000}
        priority
      />

      {/* Mobile background */}
      <div className="absolute inset-0 -z-10 block md:hidden p-2">
        <div className="bg-hero-gradient w-full h-full rounded-[28px] relative overflow-hidden" />
      </div>

      {/* Main content row */}
      <div className="container-padding w-full flex flex-col lg:flex-row gap-10 justify-between mt-[var(--mobile-navbar-gap)] lg:mt-[var(--navbar-height,_100px)] flex-1">
        {/* Left: Text Content */}
        <div className="text-white flex-1 flex flex-col">
          <div>
            <div className="fl3 !text-[#ffffff] md:!text-[24px]">
              <span className="text-[#9B7025] pr-2 font-bold">/</span>Global
              Partners
            </div>
            <div className="mb-12 fl3 !text-[#9E9E9E]">
              Comprehensive Services Designed
            </div>
          </div>
          <div>
            <div className="fl1 !text-[#ffffff] !font-medium md:w-[90%] w-full">
              Strategic Relationships with 15+ World-Class Technology Leaders.
            </div>
            <div className="fl3 !text-[#ffffff] mt-4 md:w-[90%] w-full">
              Our extensive partner ecosystem is fundamental to UElement's
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
          <div className="overflow-hidden shadow-lg w-full">
            <img
              src="/images/our-partners/partner-hero3.png"
              alt="Team meeting"
              className="w-full rounded-[4px] h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Carousel/Slider Bar - bottom absolute */}
      <div className="mt-0 mb-16 flex items-center w-[90%] md:w-2/3 bg-[#D4D4D41A] backdrop-blur-2xl px-1 rounded-[40px] py-1 shadow-lg z-50">
        <button
          onClick={prevSlide}
          className="size-11 bg-white rounded-full text-black text-2xl flex items-center justify-center hover:bg-gray-200 transition flex-shrink-0"
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
          className="size-11 bg-white rounded-full text-black text-2xl flex items-center justify-center hover:bg-gray-200 transition flex-shrink-0"
          aria-label="Next slide"
        >
          {ReactIcons.rightChev}
        </button>
      </div>

      {/* Notch — bottom-right, mobile only */}
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

export default PartnersHero;
