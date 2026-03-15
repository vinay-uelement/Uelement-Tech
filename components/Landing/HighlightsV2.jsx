import CompanyHighlightSlider from '../Slider/CompanyHighlightSlider';

export default function HighlightV2() {
  const sliderData = [
    {
      id: 1,
      image: '/images/company/high1.jpg',
      title: 'Driving growth through strategic collaborations',
      desc: 'SI Partnerships (SI) represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success. Through these partnerships, businesses can unlock new opportunities, strengthen capabilities, and achieve shared goals.',
      link: '/',
    },
    // {
    //   id: 2,
    //   image: "/images/company/high1.jpg",
    //   title: "Driving growth through strategic collaborations",
    //   desc:
    //     "SI Partnerships  represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success. Through these partnerships, businesses can unlock new opportunities, strengthen capabilities, and achieve shared goals.",
    //   link: "/"
    // }
    // ,
    // {
    //   id: 3,
    //   image: "/images/company/high1.jpg",
    //   title: "Driving growth through strategic collaborations",
    //   desc:
    //     "SI Partnerships  represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success. Through these partnerships, businesses can unlock new opportunities, strengthen capabilities, and achieve shared goals.",
    //   link: "/"
    // }
    // ,
    // {
    //   id: 4,
    //   image: "/images/company/high1.jpg",
    //   title: "Driving growth through strategic collaborations",
    //   desc:
    //     "SI Partnerships  represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success. Through these partnerships, businesses can unlock new opportunities, strengthen capabilities, and achieve shared goals.",
    //   link: "/"
    // }
  ];

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      <p className="absolute top-2 md:top-[22px] font-semibold font-noto-sans text-[#3636361f] text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] leading-none z-0 select-none">
        HIGHLIGHTS
      </p>

      <div className="relative w-full container-padding px-4 z-10 mt-[60px] sm:mt-[80px] md:mt-[120px] lg:mt-[160px]">
        <div className="light-glass rounded-[4px] p-4 md:p-8 lg:p-10 lg:pb-4 mb-20">
          <CompanyHighlightSlider data={sliderData} />
        </div>
      </div>
    </div>
  );
}
