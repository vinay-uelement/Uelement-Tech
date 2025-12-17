"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-10 size-12 md:size-14 bg-[#E8E8E8] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 text-[#232223] text-18 md:text-20"
      aria-label="Previous"
    >
      ←
    </button>
  );
};

// Custom Next Arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-10 size-12 md:size-14 bg-[#E8E8E8] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 text-[#232223] text-18 md:text-20"
      aria-label="Next"
    >
      →
    </button>
  );
};

const CaseStudyDetail = ({ caseStudy, otherCaseStudies }) => {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const sliderRef = useRef();
    
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 768) {
            setSlidesToShow(1);
          } else {
            setSlidesToShow(3);
          }
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      const settings = {
    slidesToShow: slidesToShow,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  if (!caseStudy) {
    return (
      <div className="container-padding section-block-padding">
        <h1 className="fl1">Case Study Not Found</h1>
        <p className="fl3 text-[#5F6D7E] mt-4">
          Sorry, we couldn't find the case study you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white mb-10">
      {/* Header Section */}
      <section className="bg-[#0F1B2E] text-white pt-[75px]">
        <div className="container-padding section-block-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h1 className="fl1 !text-white">{caseStudy.title}</h1>
              
              <div className="mt-8 space-y-4">
                <p className="text-14 md:text-20 text-[#9E9E9E] leading-relaxed">
                  <span className="mr-1 font-reddit-sans text-white font-medium text-18 md:text-24">Industry:</span> {caseStudy.industry}
                </p>
                
                {/* <p className="text-14 md:text-20 text-[#9E9E9E] leading-relaxed">
                  <span className="mr-1 font-reddit-sans text-white font-medium text-18 md:text-24">Company Size:</span> {caseStudy.companySize}
                </p> */}
                
                <p className="text-14 md:text-20 text-[#9E9E9E] leading-relaxed">
                  <span className="mr-1 font-reddit-sans text-white font-medium text-18 md:text-24">Services Provided:</span> {caseStudy.servicesProvided.join(', ')}
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={caseStudy.headerImage}
                alt={caseStudy.title}
                className="w-full h-auto rounded-[4px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="container-padding-small mt-4 md:mt-8">
        <div className="p-4 md:p-10 bg-[#F5F5F5]">
          <h2 className="fl2">Challenge</h2>
          <p className="fl3 leading-[1.8]">
            {caseStudy.challenge}
          </p>
        </div>
      </section>

      {/* Key Requirements Section */}
      <section className="bg-white">
        <div className="container-padding section-block-padding">
          <h2 className="fl2">Key requirements included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {caseStudy.keyRequirements.map((req) => (
              <div
                key={req.id}
                className="bg-[#F0F0F0] rounded-[4px] p-5 md:p-6 text-center flex items-center justify-center min-h-[140px] md:min-h-[160px]"
              >
                <p className="fl3">
                  {req.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-[#F5F5F5]">
        <div className="container-padding section-block-padding">
          <h2 className="fl2 uppercase tracking-wider">Solution</h2>
          
          <p className="fl3 text-[#5F6D7E] leading-[1.8] mb-6">
            {caseStudy.solution.intro}
          </p>

          <ul className="space-y-4">
            {caseStudy.solution.items.map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="text-primary-blue font-bold text-18 flex-shrink-0">•</span>
                <span className="fl3  leading-[1.8]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="fl3 !font-medium leading-[1.8] mt-8">
            {caseStudy.solution.conclusion}
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white">
        <div className="container-padding section-block-padding">
          <h2 className="fl2 uppercase">Results</h2>
          
          <ul className="space-y-4 mb-8">
            {caseStudy.results.map((result, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="text-primary-blue font-bold text-18 flex-shrink-0">•</span>
                <span className="fl3 leading-[1.8]">{result}</span>
              </li>
            ))}
          </ul>

          <p className="fl3 leading-[1.8] !font-medium">
            {caseStudy.resultConclusion}
          </p>
        </div>
      </section>

      {/* Why UElement Section */}
      <section className="container-padding-small">
        <div className="p-4 md:p-10 bg-[#F5F5F5]">
          <h2 className="fl2">Why UElement?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {caseStudy.whyUElement.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[4px] p-3 md:p-4 border border-[#E0E0E0] flex items-center justify-center min-h-[140px] md:min-h-[160px]"
              >
                <p className="fl3 text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {otherCaseStudies && otherCaseStudies.length > 0 && (
        <section className="bg-white">
          <div className="container-padding section-block-padding">
            <h2 className="fl2 text-center">Other Case Studies</h2>
            
            <div className="knowledge-slider-container relative px-8 md:px-12">
              <Slider ref={sliderRef} {...settings}>
                {otherCaseStudies.map((item) => (
                  <Link
                    href={`/case-study/${item.id}`}
                    key={item.id}
                    className="p-3 md:p-4"
                  >
                    <div className="p-6 bg-white rounded-lg h-[540px] 2xl:h-[590px] flex flex-col blog-card w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="h-[200px] md:h-[220px] 2xl:h-[280px] relative">
                        <img
                          src={item.headerImage}
                          alt={item.title}
                          className="h-full w-full object-cover rounded-lg"
                        />
                        <div className="bg-white shadow-md size-12 rounded-full absolute right-3 -bottom-6 flex items-center justify-center">
                          <img
                            src={'/icons/global/enterprise-icon.svg'}
                            alt={item.label}
                          />
                        </div>
                      </div>
                      <div className="pt-6 flex flex-col flex-1">
                        <div className="bg-[#E1E1E1] rounded-lg capitalize text-[#232223] px-3 py-1 w-fit text-16">
                          {item.label}
                        </div>
                        <h6 className="text-22 font-semibold mt-4 whitespace-pre-line">
                          {item.title}
                        </h6>
                        <p className="font-light text-[#5F6D7E] mt-3 flex-1 text-14">
                          {item.desc}
                        </p>
                        <span className="font-semibold text-primary-blue mt-3 flex items-center gap-1 text-14 hover:gap-2 transition-all duration-300">
                          Learn more →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CaseStudyDetail;