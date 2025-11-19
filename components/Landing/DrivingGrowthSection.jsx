'use client'
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { ReactIcons } from '@/utils/ReactIcons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    number: "01",
    title: "SI Partnerships (SI)",
    desc: "Designing, Deploying & Delivering Next-Gen Cybersecurity, Cloud & AI Solutions together with OEM partners",
    img: "/images/landing/si-partnership.jpg",
  },
  {
    id: 2,
    number: "02",
    title: "Professional Services (PS)",
    desc: "Accelerating digital transformation with expert consulting and seamless implementations.",
    img: "/images/landing/professional-services.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Cloud Solutions",
    desc: "Optimizing IT infrastructure with scalable, secure and cost-effective cloud solutions.",
    img: "/images/landing/managed-ser2.jpg",
  },
  {
    id: 4,
    number: "04",
    title: "Managed Services",
    desc: "Ensuring business continuity with 24/7 proactive monitoring and management.",
    img: "/images/landing/manage-service.jpg",
  },
  {
    id: 5,
    number: "05",
    title: "Cloud Modernization",
    desc: "Modernizing workloads and enabling cloud-native scalability for enterprises.",
    img: "/images/landing/cloud-solution.jpg",
  },
];

const DrivingGrowthSection = () => {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);

  // React Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    beforeChange: (oldIndex, newIndex) => setActive(newIndex),
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  // Left side numbers ordered rotation
  const orderedNumbers = [
    ...slides.slice(active, active + 1),
    ...slides.slice(active + 1),
    ...slides.slice(0, active),
  ];

  return (
    <section className="container-small">
      <div className="flex lg:items-center flex-col lg:flex-row gap-7 lg:pb-8 xl:pb-10 2xl:pb-12">
        {/* Left Side Numbers */}
        <div className="flex-1">
          <span className="font-light text-black text-14 block mb-5 xl:mb-2 lg:hidden">
            /Service Segment
          </span>

          <div className="mb-7 xl:mb-10 flex items-center">
            <div className="circle size-[50px] min-w-[50px] xl:size-[70px] rounded-full bg-white grid place-content-center shadow-down font-bold italic text-20 xl:text-24 transition-all duration-500">
              {slides[active].number}
            </div>
            <img
              src="/icons/landing/horizontal-line.svg"
              alt="icon"
              className="w-[120px] sm:w-[250px] md:w-[auto]"
            />
            <div className="font-bold italic text-18 xl:text-24 text-[#1C1C1C80] flex items-center gap-2 md:gap-4 transition-all">
              {orderedNumbers.slice(1).map((s) => (
                <span key={s.id}>{s.number}</span>
              ))}
            </div>
          </div>

          <span className="font-light text-black text-14 mb-1 xl:mb-2 hidden lg:block">
            /Service Segment
          </span>
          <h3 className="title-small mb-1 xl:mb-2">
            Driving growth through strategic collaborations
          </h3>
          <p className="font-light hidden lg:block">
            SI Partnerships (SI) represents strategic alliances that help
            organizations grow, innovate, and expand their reach. It focuses on
            collaboration with trusted partners to drive mutual value and
            long-term success. Through these partnerships, businesses can unlock
            new opportunities, strengthen capabilities, and achieve shared
            goals.
          </p>
          <button className="btn-1 mt-4 xl:mt-5 hidden lg:block">
            Learn More
          </button>
        </div>

        {/* Right Side Slider (React Slick) */}
        <div className="relative lg:w-[450px] xl:w-[550px] 2xl:w-[700px] flex gap-2 driving-slider">
          <Slider ref={sliderRef} {...settings} className="w-full">
            {slides.map((item) => (
              <div key={item.id}>
                <div
                  className="relative flex-1 h-[300px] xl:h-[370px] 2xl:h-[70vh] max-h-[450px] rounded-[5px] sm:rounded-[10px] lg:rounded-[20px] overflow-hidden"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="box-inner bg-black/70 h-full rounded-[5px] sm:rounded-[10px] lg:rounded-[20px] p-3 relative z-10">
                    <h5 className="text-18 xl:text-20 text-white mb-2 font-dm-serif">
                      {item.title}
                    </h5>
                    <p className="text-14 2xl:text-16 text-white font-light">
                      {item.desc}
                    </p>
                    <button className="text-16 2xl:text-18 text-white bg-[#D4D4D470] btn-glass px-6 absolute bottom-5 left-3">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 absolute -bottom-14 lg:-bottom-12 2xl:-bottom-16 right-0 w-full lg:w-[230px] xl:w-[270px] 2xl:w-[350px] justify-between lg:justify-[unset] lg:right-0 z-20">
            <div
              onClick={prevSlide}
              className="size-[44px] text-20 lg:text-24 xl:size-[60px] rounded-full bg-primary-blue lg:bg-white shadow-down grid place-content-center cursor-pointer transition text-white lg:text-primary-blue"
            >
              <span>{ReactIcons.leftChev}</span>
            </div>
            <div
              onClick={nextSlide}
              className="size-[44px] text-20 lg:text-24 xl:size-[60px] rounded-full bg-primary-blue lg:bg-white shadow-down grid place-content-center cursor-pointer transition text-white lg:text-primary-blue"
            >
              <span>{ReactIcons.rightChev}</span>
            </div>
          </div>
        </div>

        {/* Mobile Text Section */}
        <p className="font-light block lg:hidden pt-12">
          SI Partnerships (SI) represents strategic alliances that help
          organizations grow, innovate, and expand their reach. It focuses on
          collaboration with trusted partners to drive mutual value and
          long-term success. Through these partnerships, businesses can unlock
          new opportunities, strengthen capabilities, and achieve shared goals.
        </p>
        <button className="btn-1 mt-0 xl:mt-5 block mx-auto w-[150px] lg:w-auto lg:hidden">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default DrivingGrowthSection;
