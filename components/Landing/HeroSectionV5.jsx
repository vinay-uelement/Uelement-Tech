'use client';
import { useState, useEffect } from 'react';
import { ReactIcons } from '@/utils/ReactIcons';
import { useRouter } from 'next/navigation';

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

  // Fix hydration error by only rendering after mount
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

  const handleContactus = () => {
    router.push('/contact-us');
  };

  // Pause handlers
  const handlePauseStart = () => setIsPaused(true);
  const handlePauseEnd = () => setIsPaused(false);

  // Swipe gesture handlers for mobile
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
    const minSwipeDistance = 50; // Minimum distance for a swipe

    if (distance > minSwipeDistance) {
      // Swiped left - go to next slide
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped right - go to previous slide
      prevSlide();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
    setIsPaused(false);
  };

  return (
    <section className="h-screen flex flex-col md:bg-primary-blue relative">
      <div className="h-[calc(100%-80px)] w-full relative text-white rounded-[4px] rounded-bl-[50px] rounded-br-none">
        <div className="h-full w-full flex flex-col md:flex-row">
          <div className="w-full h-[60%] md:h-full md:w-[40%] pl-[var(--container-small-padding)] flex flex-col justify-end md:justify-center ">
            <h1 className="fl-main italic tracking-wider leading-[1.2] mt-5">
              We Are <br /> Digital <br className=" md:block" /> Mavericks.
            </h1>
            <p className="mt-8 fl3 !text-[#ffffff] !text-[12px] md:!text-[20px] md:mb-20 mb-8 ">
              Engineering Quantum-Driven Digital Synapses at <br /> the
              intersection of Cybersecurity, Cloud & AI.
            </p>
            <button onClick={handleContactus} className="btn-yellow w-fit">
              Contact Us
            </button>
          </div>
          <div className="flex-1 h-[40%] md:h-full flex items-end justify-end ">
            {/* <div className="h-[85%] w-[80%]  md:w-full bg-[url(/images/landing/UElement-Mudra.png)] rounded-tr-4xl rounded-br-4xl bg-no-repeat bg-contain bg-right-bottom"></div> */}
          </div>
        </div>

        {/* Desktop slider with hover pause */}
        <div
          className="absolute left-1/2 hidden md:flex -translate-x-1/2 2xl:-bottom-[25px] md:-bottom-[20px] w-[90%] md:w-2/3 items-center bg-[#D4D4D41A] backdrop-blur-2xl rounded-[40px] px-1 py-1 shadow-lg z-50"
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
          <div className="flex-1 overflow-hidden w-full min-h-[30px] flex items-center ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
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

        {/* Mobile slider with swipe support */}
        <div
          className="absolute z-30 w-full h-[50px] overflow-hidden bottom-0 flex md:hidden items-center px-2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-[#D4D4D41A] backdrop-blur-2xl rounded-4xl flex items-center justify-center px-6 h-full w-full">
            <div className="relative flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {slides.map((text, i) => (
                  <div
                    key={i}
                    className="min-w-full flex items-center justify-center fl4 text-center text-white px-2"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop background */}
      <div className="hidden md:block h-full w-full md:w-[55%] absolute right-0 bottom-0 bg-[url(/images/landing/Mudra.svg)] rounded-tr-4xl rounded-br-[50px] h-[700px] bg-no-repeat bg-contain bg-right-bottom "></div>

      {/* Mobile background */}
      <div
        className="block md:hidden absolute inset-0 w-full h-full -z-10 overflow-hidden"
        style={{
          backgroundColor: '#0C142D',
          backgroundImage: "url('/images/landing/UElement-Mudra.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'calc(100% + 50px) bottom',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    </section>
  );
};

export default HeroSectionV5;
