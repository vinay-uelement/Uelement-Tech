import { useState } from "react";
import { ReactIcons } from "../../../utils/ReactIcons";

const HeroSection = () => {
  const socials = [
    {
      id: 1,
      icon: ReactIcons.instagram,
    },
    {
      id: 2,
      icon: ReactIcons.email,
    },
    {
      id: 3,
      icon: ReactIcons.linkedin,
    },
  ];

  const slides = [
    "Architecting and Optimizing perfect Cloud Solutions.",
    "Empowering Security with Next-Gen Cyber Intelligence.",
    "Scaling AI-driven Innovation for Smarter Enterprises.",
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  return (
    <section className="h-[calc(100vh-var(--outer-padding)*2)] mt-[var(--outer-padding)] bg-primary-blue w-full rounded-4xl relative text-white">
      <div className="h-full w-full flex flex-col md:flex-row">
        <div className="w-full h-[60%] md:h-full md:w-[40%] pl-[var(--container-small-padding)] flex flex-col justify-end md:justify-center">
          <h1 className="text-white text-30 md:text-5xl font-montserrat font-bold italic">
            We Are <br /> Digital <br className="hidden md:block" /> Mavericks.
          </h1>
          <p className="mt-8 text-16 md:text-20 italic ">
            Engineering Digital Synapses at the Intersection of Cybersecurity,
            Cloud & AI.
          </p>
          <button className="btn-glass  w-fit px-9 mt-8">Contact Us</button>
        </div>
        <div className="flex-1 h-[40%]  md:h-full flex items-end justify-end ">
          <div className="h-[85%] w-[80%]  md:w-full bg-[url(/images/landing/UElement-Mudra.png)] rounded-tr-4xl rounded-br-4xl bg-no-repeat bg-contain bg-right-bottom"></div>
        </div>
      </div>

      {/* social icons */}
      <div className="hero-social  h-20 w-[200px] md:w-[250px] absolute z-0 bottom-0 bg-white text-primary-blue rounded-tr-4xl">
        <div className="left-shape absolute "></div>
        <div className="right-shape absolute right-0 bottom-0 "></div>
        <div className="flex justify-between items-center h-full px-5 md:mt-2">
          {socials.map((social) => (
            <a
              href="#"
              key={social.id}
              className="size-10 md:size-14 flex items-center text-white justify-center shadow-down hover:shadow-hover bg-[var(--color-secondary-100)] relative z-40 text-22 transition-shadow duration-1000 ease-in-out"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* slider */}
      <div className="absolute w-full md:w-[calc(100%-300px)] h-[60px] overflow-hidden  bottom-28 md:bottom-2 z-10 left-0 md:left-[265px] flex items-center gap-2 px-2 md:px-0 ">
        <button
          disabled={index === 0}
          onClick={prevSlide}
          className="size-11  md:hidden bg-white rounded-full text-black text-20 flex items-center justify-center hover:bg-gray-200 disabled:bg-white/50 transition"
        >
          {ReactIcons.leftChev}
        </button>{" "}
        <div className="bg-[#D4D4D41A] backdrop-blur-2xl rounded-4xl flex items-center justify-between ps-6 pe-3 h-full">
          <div className="relative flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((text, i) => (
                <div
                  key={i}
                  className="min-w-full flex items-center text-12  md:text-20 text-white"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* controls */}
          <div className="hidden md:flex gap-2 ml-3">
            <button
              disabled={index === 0}
              onClick={prevSlide}
              className="size-11 bg-white rounded-full text-black text-20 flex items-center justify-center hover:bg-gray-200 disabled:bg-white/50 transition"
            >
              {ReactIcons.leftChev}
            </button>
            <button
              disabled={index === slides.length - 1}
              onClick={nextSlide}
              className="size-11 bg-white rounded-full text-black text-20 flex items-center justify-center hover:bg-gray-200 disabled:bg-white/50 transition"
            >
              {ReactIcons.rightChev}
            </button>
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
    </section>
  );
};

export default HeroSection;
