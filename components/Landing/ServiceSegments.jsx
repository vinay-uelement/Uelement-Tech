'use client';
import { ReactIcons } from '@/utils/ReactIcons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const services = [
  {
    id: 1,
    title: 'Digital Safety',
    desc: 'Securing the Future with Quantum-Resistant and Zero Trust Architecture.',
  },
  {
    id: 2,
    title: 'Cloud Mastery',
    desc: 'Architecting, Optimizing, and Managing Seamless Multi-Cloud Environments.',
  },
  {
    id: 3,
    title: 'Accelerated AI',
    desc: 'Accelerating Intelligence with Responsible AI and Advanced Analytics.',
  },
  {
    id: 4,
    title: 'Future Tech',
    desc: 'Pioneering Transformation with Quantum, Web3, and Digital Modernization.',
  },
];

const ServiceSegments = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    speed: 500,
  };
  return (
    <div className=" container-padding">
      <div className="text-center">
        <h1 className="fl1-sep">Our Domains</h1>
        <p className="fl3 mb-10 md:mb-14">
          Deep expertise across four critical technology domains, from Zero Trust to Quantum Readiness.
        </p>
        <div className="hidden md:grid md:grid-cols-4 gap-6 text-left">
          <div className="p-6 md:pb-30 pb-15 bg-primary-blue rounded-[4px] text-white relative">
            <h6 className="font-noto-sans font-medium text-18 md:text-24  mb-10 md:mb-14 max-w-[80%] ">
               Digital <br /> Safety <br /> 
            </h6>
            <p className="fl3 !text-[#ffffff] mt-6 ">
              Securing the Future with Quantum-Resistant and Zero Trust Architecture.
            </p>

            <div className="size-[60px] bg-secondary absolute -top-3 -right-3 flex items-center justify-center text-30">
              <span className="absolute top-0 right-0">
                {ReactIcons.arrowOutWard}
              </span>
            </div>
          </div>
          <div className="p-6 pb-20 bg-primary-blue rounded-[4px] text-white relative">
            <h6 className="font-noto-sans font-medium text-18 md:text-24  mb-10 md:mb-14max-w-[80%] ">
              Cloud<br /> Mastery <br /> 
            </h6>
            <p className="fl3 !text-[#ffffff] mt-6">
              Architecting, Optimizing, and Managing Seamless Multi-Cloud Environments.
            </p>

            <div className="size-[60px] bg-secondary absolute -top-3 -right-3 flex items-center justify-center text-30">
              <span className="absolute top-0 right-0">
                {ReactIcons.arrowOutWard}
              </span>
            </div>
          </div>
          <div className="p-6 pb-20 bg-primary-blue rounded-[4px] text-white relative">
            <h6 className="font-noto-sans font-medium text-18 md:text-24  mb-10 md:mb-14 max-w-[80%] ">
              Accelerated <br />AI <br />
            </h6>
            <p className="fl3 !text-[#ffffff] mt-6">
              Accelerating Intelligence with Responsible AI and Advanced Analytics.
            </p>

            <div className="size-[60px] bg-secondary absolute -top-3 -right-3 flex items-center justify-center text-30">
              <span className="absolute top-0 right-0">
                {ReactIcons.arrowOutWard}
              </span>
            </div>
          </div>
          <div className="p-6 pb-20 bg-primary-blue rounded-[4px] text-white relative">
            <h6 className="font-noto-sans font-medium text-18 md:text-24  mb-10 md:mb-14 max-w-[80%] ">
              Future <br /> Tech <br />
              
            </h6>
            <p className="fl3 !text-[#ffffff] mt-6">
              Pioneering Transformation with Quantum, Web3, and Digital Modernization.
            </p>

            <div className="size-[60px] bg-secondary absolute -top-3 -right-3 flex items-center justify-center text-30">
              <span className="absolute top-0 right-0">
                {ReactIcons.arrowOutWard}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12   md:hidden text-left testimonial-slick pb-[var(--section-block-padding)]">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.id} className="p-4">
                <div className="w-full p-6 bg-primary-blue text-white relative  h-[280px] shadow-left-down">
                  <h6 className="font-poppins font-semibold text-24 max-w-[80%]">
                    {service.title}
                  </h6>
                  <p className="text-14 font-light mt-6">{service.desc}</p>
                  <div className="w-[60px] h-[60px] bg-secondary shadow-left-down absolute -top-3 -right-3 flex items-center justify-center text-30">
                    {ReactIcons.arrowOutWard}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServiceSegments;
