'use client';
import { useState, useEffect } from 'react';
import { ReactIcons } from '@/utils/ReactIcons';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const HeroSectionV5 = () => {
  const slides = [
    'Architecting and Optimizing perfect Cloud Solutions.',
    'Empowering Security with Next-Gen Cyber Intelligence.',
    'Scaling AI-driven Innovation for Smarter Enterprises.',
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isPaused || !isMounted) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length, isPaused, isMounted]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handleContactus = () => router.push('/contact-us');
  const handlePauseStart = () => setIsPaused(true);
  const handlePauseEnd = () => setIsPaused(false);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
    setIsPaused(false);
  };

  return (
    <section className="h-screen flex flex-col relative">
      {/* Desktop background */}
      <Image
        src="/images/landing/hero_bg1.webp"
        alt="hero_bg"
        className="absolute -z-10 object-fill h-full w-full hidden md:block p-2"
        height={1000}
        width={1000}
      />

      {/* Mobile background */}
      <div className="absolute inset-0 -z-10 block md:hidden p-2">
        <div className="bg-hero-gradient w-full h-full rounded-[28px] relative overflow-hidden">
          <Image
            src="/images/landing/UElement-Mudra.png"
            alt="Rudra"
            width={320}
            height={320}
            className="absolute bottom-15 right-0 object-contain opacity-80"
          />
        </div>
      </div>

      <div className="h-[calc(100%-80px)] w-full relative text-white rounded-[4px] rounded-bl-none md:rounded-bl-[50px] rounded-br-none">
        <div className="h-full w-full flex flex-col md:flex-row">
          <div className="w-full h-[60%] md:h-full md:w-[40%] pl-[var(--container-small-padding)] flex flex-col justify-end md:justify-center">
            <h1 className="fl-main tracking-wider leading-[1.2] mt-5 xl:mt-5 md:mt-15">
              We Are <br /> Digital <br className="md:block" /> Mavericks.
            </h1>
            <p className="mt-8 fl3 !text-[#ffffff] !text-[12px] md:!text-[20px] md:mb-10 xl:mb-20 mb-8">
              Engineering Quantum-Driven Digital Synapses at the intersection of
              Cybersecurity, Cloud & AI.
            </p>
            <button
              onClick={handleContactus}
              className="btn-yellow w-fit md:hidden"
            >
              Contact Us
            </button>
          </div>
          <div className="flex-1 h-[40%] md:h-full flex items-end justify-end" />
        </div>
        {/* Desktop bottom bar */}
        <div className="absolute right-8 top-[78vh] w-full flex justify-between">
          <button
            onClick={handleContactus}
            className="btn-yellow w-fit translate-x-4/5 hidden md:block"
          >
            Contact Us
          </button>
          <div
            className="w-[65vw] hidden md:flex items-center bg-[#D4D4D41A] backdrop-blur-2xl rounded-[40px] px-1 py-1 shadow-lg z-50"
            onMouseEnter={handlePauseStart}
            onMouseLeave={handlePauseEnd}
          >
            <button
              onClick={prevSlide}
              className="size-10 bg-white rounded-full text-black text-2xl flex items-center justify-center hover:bg-gray-200 transition"
              aria-label="Previous slide"
            >
              {ReactIcons.leftChev}
            </button>
            <div className="flex-1 overflow-hidden min-h-10 flex items-center justify-center">
              <div
                className="flex transition-transform duration-500 ease-in-out w-full"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {slides.map((text, i) => (
                  <div
                    key={i}
                    className="min-w-full flex items-center justify-center"
                  >
                    <span className="fl4 text-center text-white">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="size-10 bg-white rounded-full text-black text-2xl flex items-center justify-center hover:bg-gray-200 transition"
              aria-label="Next slide"
            >
              {ReactIcons.rightChev}
            </button>
          </div>
        </div>
        {/* Mobile bottom bar */}
        <div
          className="absolute z-30 bottom-4 left-4 right-4 flex md:hidden items-center bg-[#D4D4D41A] backdrop-blur-2xl rounded-[40px] px-1 py-1 shadow-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={prevSlide}
            className="size-9 bg-white rounded-full text-black text-xl flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition"
            aria-label="Previous slide"
          >
            {ReactIcons.leftChev}
          </button>
          <div className="flex-1 overflow-hidden min-h-9 flex items-center justify-center mx-1">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((text, i) => (
                <div
                  key={i}
                  className="min-w-full flex items-center justify-center"
                >
                  <span className="fl4 text-center text-white text-[11px] leading-tight px-1">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="size-9 bg-white rounded-full text-black text-xl flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition"
            aria-label="Next slide"
          >
            {ReactIcons.rightChev}
          </button>
        </div>
      </div>

      {/* Notch — bottom-right, mobile only */}
      <svg
        className="md:hidden absolute pointer-events-none z-10"
        style={{ bottom: '8px', right: '8px' }}
        width="400"
        height="60"
        viewBox="0 0 312 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49.73 0.5H400.5V59.5H0.34C7.72 58.02 12.68 54.97 16.12 50.95C21.03 45.21 22.75 37.58 24.11 30.09C25.47 22.54 26.47 15.16 29.84 9.64C31.51 6.89 33.76 4.62 36.94 3.03C40.12 1.43 44.26 0.5 49.73 0.5Z"
          fill="white"
          stroke="white"
        />
      </svg>
    </section>
  );
};

export default HeroSectionV5;
