'use client';
import { useState } from 'react';
import { ReactIcons } from '@/utils/ReactIcons';

const HeroSectionV5 = () => {

  const slides = [
    'Architecting and Optimizing perfect Cloud Solutions.',
    'Empowering Security with Next-Gen Cyber Intelligence.',
    'Scaling AI-driven Innovation for Smarter Enterprises.',
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const handleContactus = () => {
    const contactSection = document.getElementById('contactus');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="h-screen mt-[var(--outer-padding)] flex flex-col relative rounded-br-[5px]">
      <div className="h-[calc(100%-80px)] md:bg-primary-blue w-full relative text-white rounded-[5px] rounded-bl-[50px] rounded-br-none ">
        <div className="h-full w-full flex flex-col md:flex-row">
          <div className="w-full h-[60%] md:h-full md:w-[40%] pl-[var(--container-small-padding)] flex flex-col justify-end md:justify-center ">
            <h1 className="text-white text-30 md:text-[60px] font-noto-sans italic tracking-widest leading-[1.2] mt-5">
              We Are <br /> Digital <br className="hidden md:block" />{' '}
              Mavericks.
            </h1>
            <p className="mt-8 text-16 md:text-20 font-dm-serif font-normal italic ">
              Engineering Quantum-Driven Digital Synapses at the intersection of
              Cybersecurity, Cloud & AI.
            </p>
            <button
              onClick={handleContactus}
              className="btn-glass  w-fit px-9 mt-8"
            >
              Contact Us
            </button>
          </div>
          <div className="flex-1 h-[40%]  md:h-full flex items-end justify-end ">
            {/* <div className="h-[85%] w-[80%]  md:w-full bg-[url(/images/landing/UElement-Mudra.png)] rounded-tr-4xl rounded-br-4xl bg-no-repeat bg-contain bg-right-bottom"></div> */}
          </div>
        </div>

        {/* slider for mobile */}
        <div className="absolute z-30 w-full  h-[60px] overflow-hidden  bottom-28 md:bottom-2 left-1 md:-left-[30px]  flex md:hidden items-center gap-2 px-1 sm:px-2 md:px-0 ">
          <button
            disabled={index === 0}
            onClick={prevSlide}
            className="size-11  md:hidden bg-white rounded-full text-black text-20 flex items-center justify-center hover:bg-gray-200 disabled:bg-white/50 transition"
          >
            {ReactIcons.leftChev}
          </button>{' '}
          <div className="bg-[#D4D4D41A] backdrop-blur-2xl rounded-4xl flex items-center justify-between ps-6 pe-3 h-full w-[calc(100%-115px)]">
            <div className="relative flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {slides.map((text, i) => (
                  <div
                    key={i}
                    className="min-w-full flex items-center font-noto-sans italic text-12  md:text-20 text-white"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            disabled={index === slides.length - 1}
            onClick={nextSlide}
            className="size-11  md:hidden bg-white rounded-full text-black text-20 flex items-center justify-center hover:bg-gray-200 disabled:bg-white/50 transition"
          >
            {ReactIcons.rightChev}
          </button>
        </div>
      </div>
      {/* background */}
      <div className="hidden md:block h-full md:h-full w-full md:w-1/2 absolute right-0 bg-[url(/images/landing/UElement-Mudra.png)] rounded-tr-4xl rounded-br-[50px] bg-no-repeat bg-contain bg-right-bottom "></div>
      {/* mobile bg */}
      <div
        className="block md:hidden absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundColor: '#0C142D',
          backgroundImage: "url('/images/landing/UElement-Mudra.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          WebkitMask:
            "url('/icons/landing/mobile-bg.svg') no-repeat center / cover",
          mask: "url('/icons/landing/mobile-bg.svg') no-repeat center / cover",
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      ></div>
    </section>
  );
};

export default HeroSectionV5;
