import CompanyHighlightSlider from "../Slider/CompanyHighlightSlider";

export default function HighlightV2() {

  const sliderData = [
    {
      id: 1,
      image: "/images/company/high1.jpg",
      title: "Driving growth through strategic collaborations",
      desc:
        "SI Partnerships (SI) represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success. Through these partnerships, businesses can unlock new opportunities, strengthen capabilities, and achieve shared goals.",
      link: "/"
    },
    {
      id: 2,
      image: "/images/company/high1.jpg",
      title: "Driving growth through strategic collaborations",
      desc:
        "SI Partnerships  represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success. Through these partnerships, businesses can unlock new opportunities, strengthen capabilities, and achieve shared goals.",
      link: "/"
    }
    ,
    {
      id: 3,
      image: "/images/company/high1.jpg",
      title: "Driving growth through strategic collaborations",
      desc:
        "SI Partnerships  represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success. Through these partnerships, businesses can unlock new opportunities, strengthen capabilities, and achieve shared goals.",
      link: "/"
    }
    ,
    {
      id: 4,
      image: "/images/company/high1.jpg",
      title: "Driving growth through strategic collaborations",
      desc:
        "SI Partnerships  represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success. Through these partnerships, businesses can unlock new opportunities, strengthen capabilities, and achieve shared goals.",
      link: "/"
    }
  ];

  return (
      <div className="relative w-full flex flex-col items-center ">
        <p className="absolute font-cal-sans font-semibold text-[#36363633] text-[60px] sm:text-[70px] md:text-[100px] lg:text-[150px] leading-none ">
          HIGHLIGHTS</p>
      
  
    <div className=" w-full container-padding  pt-[50] sm:pt-[60px]  md:pt-[90px] lg:pt-[120px] px-4 z-10">
       
      <div className="light-glass rounded-[4px] p-4 md:p-8 lg:p-10  mb-20 ">
      
        <CompanyHighlightSlider data={sliderData} />
      </div>
    </div>
    </div>
  );
}
