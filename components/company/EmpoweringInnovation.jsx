'use client';

import Image from 'next/image';
import { ReactIcons } from '@/utils/ReactIcons';
import { useState } from 'react';

const bullet = [
  { id: 1, desc: 'Uptime for cloud infrastructure', number: '99.9%' },
  { id: 2, desc: 'Reduction in security incidents', number: '85%' },
  { id: 3, desc: 'Enterprise Client Worldwide', number: '24/7' },
];

const EmpoweringInnovation = () => {
  const slides = [
    'Engineering Quantum-Driven Digital Synapses.',
    'Digital Mavericks at Cloud, Cyber, and AI Intersections.',
    `Building Resilient Enterprises for Tomorrow's Challenges.`,
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
        alt="about background"
        className="absolute -z-10 object-fill h-full w-full hidden md:block p-2"
        height={1000}
        width={1000}
        priority
      />

      {/* Mobile background */}
      <div className="absolute inset-0 -z-10 block md:hidden p-2">
        <div className="bg-hero-gradient w-full h-full rounded-[28px] relative overflow-hidden" />
      </div>

      {/* Main content row — takes up all available space above the slider */}
      <div className="container-padding w-full flex flex-col lg:flex-row gap-10 justify-between mt-[var(--mobile-navbar-gap)] lg:mt-[var(--navbar-height,_120px)] flex-1">
        {/* Left: Text Content */}
        <div className="text-white flex-1 flex flex-col justify-between">
          <div>
            <div className="fl3 !text-[#ffffff] md:!text-[24px]">
              <span className="text-[#9B7025] pr-2 font-bold">/</span>About Us
            </div>
            <div className="mb-12 fl3 !text-[#9E9E9E]">
              Protecting what matters across every cloud.
            </div>
          </div>
          <h3 className="text-20 md:text-22 xl:text-[35px] mb-4 md:mb-6 3xl:mb-8 tracking-[0.03em] !text-white leading-[1.2] !font-medium xl:w-[80%] w-full">
            Empowering Innovation at the Intersection of Technology and Strategy
          </h3>
          <p className="fl3 !text-white xl:w-[80%] w-full">
            Founded in 2024, UElement is a trusted full-stack partner in
            Cybersecurity, Cloud, and AI. We deliver integrated solutions that
            simplify complexity and shape the future of Quantum Computing.
          </p>
          <div className="flex justify-center md:justify-start flex-wrap gap-2 xl:gap-8 mt-12">
            {bullet.map((point) => (
              <div
                key={point.id}
                className="w-[120px] xl:w-[140px] md:max-w-[160px] text-center border-[0.03px] border-[#d4d4d420] rounded-[4px] bg-[#D4D4D41A] backdrop-blur-2xl px-1 py-6 text-white"
              >
                <p className="font-reddit-sans font-bold text-16 xl:text-22">
                  {point.number}
                </p>
                <p className="font-light font-reddit-sans text-12 xl:text-16">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 my-auto">
          <div className="rounded-[4px] shadow-lg w-full">
            <img
              src="/images/service/company-hero2.png"
              alt="Team meeting"
              className="w-full h-auto object-cover rounded-[4px]"
            />
          </div>
        </div>
      </div>

      {/* Carousel/Slider Bar - bottom absolute */}
      <div className="mt-2 mb-14 flex items-center w-[90%] md:w-2/3 bg-[#D4D4D41A] backdrop-blur-2xl px-1 rounded-[40px] py-1 shadow-lg z-50">
        <button
          onClick={prevSlide}
          className="size-11 bg-white rounded-full text-black text-2xl flex items-center justify-center hover:bg-gray-200 transition flex-shrink-0"
          aria-label="Previous slide"
        >
          {ReactIcons.leftChev}
        </button>
        <div className="flex-1 flex items-center justify-center min-h-[30px] px-2">
          <span className="fl4 text-white text-center transition-all duration-500">
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

export default EmpoweringInnovation;
