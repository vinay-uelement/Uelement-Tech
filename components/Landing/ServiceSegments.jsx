'use client';
import { ReactIcons } from '@/utils/ReactIcons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const services = [
  {
    id: 1,
    title: 'SI  Partnerships (SI)',
    desc: 'Designing, Deploying & Delivering Next-Gen Cybersecurity, Cloud & Al Solutions together with OEM partners',
  },
  {
    id: 2,
    title: 'Professional Services (PS)',
    desc: 'Designing, Deploying & Delivering Next-Gen Cybersecurity, Cloud & Al Solutions together with OEM partners',
  },
  {
    id: 3,
    title: 'Managed Service Provider ',
    desc: 'Designing, Deploying & Delivering Next-Gen Cybersecurity, Cloud & Al Solutions together with OEM partners',
  },
  {
    id: 4,
    title: 'Digital Transformation Solutions (DTS) ',
    desc: 'Designing, Deploying & Delivering Next-Gen Cybersecurity, Cloud & Al Solutions together with OEM partners',
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
    <div className="py-[var(--section-block-padding)] container-padding">
      <div className="text-center">
        <h1 className="title">Service Segments</h1>
        <p className="sub-title">
          Empowering your journey with innovative, user-centric digital
          solutions.
        </p>
        <div className="hidden md:grid md:grid-cols-4 gap-6 text-left">
          <div className="p-6 md:pb-30 pb-15 bg-primary-blue rounded-[10px] text-white relative">
            <h6 className="sub-title max-w-[80%] ">
              SI <br /> Partnerships <br /> (SI)
            </h6>
            <p className="text-14 font-light mt-6 font-reddit-sans">
              Designing, Deploying & Delivering Next-Gen Cybersecurity, Cloud &
              Al Solutions together with OEM partners
            </p>

            <div className="size-[60px] bg-secondary absolute -top-3 -right-3 flex items-center justify-center text-30">
              <span className="absolute top-0 right-0">
                {ReactIcons.arrowOutWard}
              </span>
            </div>
          </div>
          <div className="p-6 pb-20 bg-primary-blue rounded-[10px] text-white relative">
            <h6 className="sub-title max-w-[80%] ">
              Professional <br /> Services <br /> (PS)
            </h6>
            <p className="text-14 font-light mt-6 font-reddit-sans">
              Designing, Deploying & Delivering Next-Gen Cybersecurity, Cloud &
              Al Solutions together with OEM partners
            </p>

            <div className="size-[60px] bg-secondary absolute -top-3 -right-3 flex items-center justify-center text-30">
              <span className="absolute top-0 right-0">
                {ReactIcons.arrowOutWard}
              </span>
            </div>
          </div>
          <div className="p-6 pb-20 bg-primary-blue rounded-[10px] text-white relative">
            <h6 className="sub-title max-w-[80%] ">
              Managed <br /> Service <br /> Provider
            </h6>
            <p className="text-14 font-light mt-6 font-reddit-sans">
              Designing, Deploying & Delivering Next-Gen Cybersecurity, Cloud &
              Al Solutions together with OEM partners
            </p>

            <div className="size-[60px] bg-secondary absolute -top-3 -right-3 flex items-center justify-center text-30">
              <span className="absolute top-0 right-0">
                {ReactIcons.arrowOutWard}
              </span>
            </div>
          </div>
          <div className="p-6 pb-20 bg-primary-blue rounded-[10px] text-white relative">
            <h6 className="sub-title max-w-[80%] ">
              Digital <br /> Transformation <br />
              Solutions
            </h6>
            <p className="text-14 font-light mt-6 font-reddit-sans">
              Designing, Deploying & Delivering Next-Gen Cybersecurity, Cloud &
              Al Solutions together with OEM partners
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
