'use client';

import { ReactIcons } from '@/utils/ReactIcons';
import { useState } from 'react';

const bullet = [
  {
    id: 1,
    desc: "Uptime for cloud infrastructure",
    number: "99.9%",
  },
  {
    id: 2,
    desc: "Reduction in security incidents",
    number: "85%",
  },
  {
    id: 3,
    desc: "Enterprise Client Worldwide",
    number: "24/7",
  },
];

const EmpoweringInnovation = () => {
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
      <div className="container-padding w-full flex flex-col lg:flex-row gap-10 justify-between  mt-[var(--mobile-navbar-gap)] lg:my-0">
        {/* Left: Text Content */}
        <div className="text-white flex-1">
          <h3 className="title text-white leading-[1.4] !font-medium md:w-[80%] w-full">
            Empowering Innovation at the Intersection of Technology and Strategy
          </h3>
          <p className="font-light text-white md:w-[80%] w-full">
            At U-Element, we're dedicated to empowering organizations with
            intelligent, secure, and scalable digital solutions. Since our
            founding, we've combined expertise in AI, cybersecurity, cloud
            computing, and digital transformation to help businesses thrive in
            an ever-evolving technological landscape.
          </p>
          <div className="flex justify-center md:justify-start flex-wrap gap-4 xl:gap-8 mt-12">
              {bullet.map((point) => (
                <div
                  key={point.id}
                  className="w-[120px] xl:w-[140px] md:max-w-[160px] text-center border-[0.03px] border-[#d4d4d420] rounded-[4px] bg-[#D4D4D41A] backdrop-blur-2xl px-1 py-6 text-white"
                >
                  <p className="font-bold text-20 xl:text-30">{point.number}</p>
                  <p className="font-light text-12 xl:text-16">{point.desc}</p>
                </div>
              ))}
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

export default EmpoweringInnovation;
