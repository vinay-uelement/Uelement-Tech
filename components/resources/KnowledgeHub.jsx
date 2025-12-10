'use client';

import { ReactIcons } from '@/utils/ReactIcons';
import Slider from 'react-slick';
import './KnowledgeHub.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'High- Quality Content Writing',
    desc: 'We deliver comprehensive Enterprise Security Solutions & Services that safeguard critical assets, ensure compliance, and mitigate risks.',
    label: 'services',
    image: 'images/resources/blog-1.jpg',
  },
  {
    id: 2,
    title: 'High- Quality Content Writing',
    desc: 'We deliver comprehensive Enterprise Security Solutions & Services that safeguard critical assets, ensure compliance, and mitigate risks.',
    label: 'training',
    image: 'images/resources/blog-2.jpg',
  },
  {
    id: 3,
    title: 'Personality Development.',
    desc: 'We deliver comprehensive Enterprise Security Solutions & Services that safeguard critical assets, ensure compliance, and mitigate risks.',
    label: 'personality',
    image: 'images/resources/blog-3.jpg',
  },
  {
    id: 4,
    title: 'High- Quality Content Writing',
    desc: 'We deliver comprehensive Enterprise Security Solutions & Services that safeguard critical assets, ensure compliance, and mitigate risks.',
    label: 'services',
    image: 'images/resources/blog-1.jpg',
  },
  {
    id: 5,
    title: 'High- Quality Content Writing',
    desc: 'We deliver comprehensive Enterprise Security Solutions & Services that safeguard critical assets, ensure compliance, and mitigate risks.',
    label: 'training',
    image: 'images/resources/blog-2.jpg',
  },
  {
    id: 6,
    title: 'Personality Development.',
    desc: 'We deliver comprehensive Enterprise Security Solutions & Services that safeguard critical assets, ensure compliance, and mitigate risks.',
    label: 'personality',
    image: 'images/resources/blog-3.jpg',
  },
];

const categories = [
  {
    id: 1,
    name: 'Blogs',
    icon: '/icons/resources/blogs-icon.svg',
  },
  {
    id: 2,
    name: 'Case Study',
    icon: '/icons/resources/case-study-icon.svg',
  },
  {
    id: 3,
    name: 'Research',
    icon: '/icons/resources/research-icon.svg',
  },
];

// Custom Previous Arrow
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full z-10 size-12 md:size-14 bg-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-110 transition-all duration-300 text-primary-blue text-18 md:text-20"
      aria-label="Previous"
    >
      {ReactIcons.leftChev}
    </button>
  );
};

// Custom Next Arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full z-10 size-12 md:size-14 bg-white rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-110 transition-all duration-300 text-primary-blue text-18 md:text-20"
      aria-label="Next"
    >
      {ReactIcons.rightChev}
    </button>
  );
};

const KnowledgeHub = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [currentSection, setCurrentSection] = useState(1);

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

  return (
    <div className="container-padding bg-white py-[var(--section-block-padding)]">
      <div className="flex flex-col items-center">
        <h6 className="title text-primary-blue">Explore Our Knowledge Hub</h6>
        <p className="mt-3 md:text-20 font-bold text-primary-blue md:max-w-[50%] text-center">
          Access insights, research, and expert guidance to help your business
          innovate, scale, and stay ahead in a rapidly evolving digital world.
        </p>
        <div className="w-full md:w-[600px] mt-12 relative">
          <input
            type="search"
            className="border border-primary-blue rounded-[4px] h-[50px] px-3 pe-11 w-full"
            placeholder="Search here"
          />
          <div className="h-[50px] w-10 flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2">
            {ReactIcons.search}
          </div>
        </div>
      </div>

      {/* Category Buttons Section */}
      <div className="flex items-center justify-center my-12">
        <div className="w-fit flex items-center justify-center gap-6 relative">
          {/* Active underline */}
          <div
            className="w-[110px] h-[3px] bg-primary-blue absolute -bottom-1 left-0 transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(${(currentSection - 1) * 138}px)`,
            }}
          ></div>

          {categories.map((cat) => (
            <button
              onClick={() => setCurrentSection(cat.id)}
              key={cat.id}
              className="w-[110px] flex flex-col items-center"
            >
              <div className="size-20 bg-primary-blue rounded-full flex items-center justify-center">
                <img src={cat.icon} alt={cat.name} />
              </div>
              <div className="mt-1">{cat.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Slider Section */}
      <div className="knowledge-slider-container relative px-8 md:px-12">
        <Slider ref={sliderRef} {...settings}>
          {blogs.map((blog) => (
            <div key={blog.id} className="p-3 md:p-4">
              <div className="p-6 bg-white rounded-[4px] h-[540px] 2xl:h-[590px] flex flex-col blog-card w-full shadow-lg">
                <div className="h-[200px] md:h-[220px] 2xl:h-[280px] relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover rounded-[4px]"
                  />
                  <div className="bg-primary-blue size-12 rounded-full absolute right-3 -bottom-6 flex items-center justify-center">
                    <img
                      src={'/icons/global/enterprise-icon.svg'}
                      alt={blog.label}
                    />
                  </div>
                </div>
                <div className="pt-6 flex flex-col flex-1">
                  <div className="bg-primary-blue rounded-[4px] text-white px-3 py-1 w-fit text-12">
                    {blog.label}
                  </div>
                  <h6 className="text-22 font-semibold mt-4 whitespace-pre-line">
                    {blog.title}
                  </h6>
                  <p className="font-light text-[#5F6D7E] mt-3 flex-1 text-14">
                    {blog.desc}
                  </p>
                  <Link
                    href="/"
                    className="font-semibold text-primary-blue mt-3 flex items-center gap-1 text-14 hover:gap-2 transition-all duration-300"
                  >
                    Learn more
                    {ReactIcons.arrowRight}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default KnowledgeHub;
