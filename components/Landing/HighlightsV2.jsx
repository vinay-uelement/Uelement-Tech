import CompanyHighlightSlider from '../Slider/CompanyHighlightSlider';

export default function HighlightV2() {
  const sliderData = [
    {
      id: 1,
      image: '/images/company/high1.jpg',
      date: '10th to 15th May - 2026',
      title: 'Driving growth through strategic collaborations',
      desc: 'SI Partnerships (SI) represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success. Through these partnerships, businesses can unlock new opportunities, strengthen capabilities, and achieve shared goals.',
      link: '/',
    },
    // {
    //   id: 2,
    //   image: '/images/company/high1.jpg',
    //   date: '18th to 22nd June - 2026',
    //   title: 'Driving growth through strategic collaborations',
    //   desc: 'SI Partnerships represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success.',
    //   link: '/',
    // },
    // {
    //   id: 3,
    //   image: '/images/company/high1.jpg',
    //   date: '5th to 8th July - 2026',
    //   title: 'Driving growth through strategic collaborations',
    //   desc: 'SI Partnerships represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success.',
    //   link: '/',
    // },
    // {
    //   id: 4,
    //   image: '/images/company/high1.jpg',
    //   date: '20th to 25th August - 2026',
    //   title: 'Driving growth through strategic collaborations',
    //   desc: 'SI Partnerships represents strategic alliances that help organizations grow, innovate, and expand their reach. It focuses on collaboration with trusted partners to drive mutual value and long-term success.',
    //   link: '/',
    // },
  ];

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full container-padding z-10 py-10 md:py-14">
        <div className="light-glass rounded-[42px] p-4 md:p-8 lg:p-10  mb-10 shadow-[5px_8px_8.2px_0_rgba(0,0,0,0.1)]">
          <CompanyHighlightSlider data={sliderData} />
        </div>
      </div>
    </div>
  );
}