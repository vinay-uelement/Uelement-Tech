'use client';

import CompanyHighlightSlider from "../Slider/CompanyHighlightSlider";

export default function Highlight() {

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
    <div className="container-padding">
       
      <div className="bg-[#F3F3F3] rounded-2xl p-4 md:p-8 lg:p-10 mt-6 mb-20">
       
       {/* Ribbon */}
        {/* <div className="flex justify-end mb-4">
          <div className="bg-[#C5932C] text-white  py-1  text-sm font-medium">
            New
          </div>
        </div> */}

        {/* Heading */}
        <h3 className=" flex items-baseline gap-1 mb-6 px-2">
          <span className="text-[34px] font-reddit-sans font-bold">U</span>
          <sup className="text-[19px] font-reddit-sans font-bold">92</sup>
          <span className="fl-main">Highlights</span>
        </h3>

        <CompanyHighlightSlider data={sliderData} />
      </div>
    </div>
  );
}
