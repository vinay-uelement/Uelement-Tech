'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ReactIcons } from '../../utils/ReactIcons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

const navbarList = [
  {
    id: 1,
    label: 'Services',
    link: '/services',
    children: [
      {
        id: 1,
        label: 'AI & ML',
        desc: 'AI-powered solutions that boost efficiency and drive smarter decisions for global enterprises.',
        link: '/services/#03',
      },
      {
        id: 2,
        label: 'Cybersecurity',
        desc: 'We provide enterprise security solutions that protect assets, ensure compliance, and reduce risks',
        link: '/services/#01',
      },
      {
        id: 3,
        label: 'Cloud Solutions',
        desc: 'We deliver scalable, secure, and efficient cloud solutions tailored for global businesses.',
        link: '/services/#02',
      },
    ],
    images: [
      {
        id: 1,
        title: 'Complete Enterprise Security.',
        image: '/images/global/security.png',
      },
      {
        id: 2,
        title: 'Complete Enterprise Security.',
        image: '/images/global/ai.jpg',
      },
    ],
  },
  {
    id: 2,
    label: 'Resources',
    link: '/resources',
    children: [
      {
        id: 1,
        label: 'Blogs',
        desc: 'Thoughts, insights, and reflections from my creative journey.',
      },
      {
        id: 2,
        label: 'Case Study',
        desc: 'A deep dive into my projects, process, and problem-solving approach.',
      },
      {
        id: 3,
        label: 'Research',
        desc: 'Exploring data, user behavior, and design trends to uncover insights.',
      },
    ],
    images: [
      {
        id: 1,
        title: 'High-Quality Content Writing.',
        image: '/images/resources/blog-1.jpg',
      },
      {
        id: 2,
        title: 'Complete Enterprise Security.',
        image: '/images/global/security.png',
      },
    ],
  },
  {
    id: 3,
    label: 'Partnership',
    link: '/our-partners',
    children: [
      {
        id: 1,
        label: 'AI & ML',
        desc: 'Intelligent Automation',
      },
      {
        id: 2,
        label: 'Cybersecurity',
        desc: 'Zero-Trust Protection',
      },
      {
        id: 3,
        label: 'Cloud Solutions',
        desc: 'Cloud-Native Platforms',
      },
    ],
    images: [
      {
        id: 1,
        title: 'Complete Enterprise Security.',
        image: '/images/global/security.png',
      },
      {
        id: 2,
        title: 'Complete Enterprise Security.',
        image: '/images/global/ai.jpg',
      },
    ],
  },
  { id: 4, label: 'Company', link: '/company' },
];

const NON_CLICKABLE_MENUS = [2]; // Resources (id: 2)

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  const location = usePathname();
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileNavRef = useRef(null);
  const buttonRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowMobileNav(false);
      }
    };

    if (showMobileNav) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMobileNav]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const insideNav = navRef.current?.contains(e.target);
      const insideDropdown = dropdownRef.current?.contains(e.target);
      if (!insideNav && !insideDropdown) {
        setHoveredMenu(null);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setShowMobileNav(false);
    setHoveredMenu(null);
    setExpandedMobileMenu(null);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`w-[90vw] md:w-full md:px-[10px] md:max-w-[1920px] md:mx-auto shadow-down md:shadow-none bg-primary-blue rounded-[12px] md:rounded-none pe-2 md:pe-0 md:bg-transparent h-15 flex justify-between fixed z-[80] left-1/2 -translate-x-1/2 
      ${
        isScrolled ? 'top-2' : 'top-6'
      } transition-all duration-700 ease-in-out`}
      >
        <div className="w-full px-2 sm:px-10 md:px-20">
          <div className="flex justify-between h-full w-full relative">
            <Link
              href={'/'}
              className="bg-primary-blue rounded-l-[22px] rounded-tl-[4px] md:w-[290px] w-[150px] h-full ps-4 flex items-center"
            >
              <img
                src="/icons/global/UElement_Logo_White 3.svg"
                alt="uelement"
              />
            </Link>

            {/* hamburger */}
            <button
              ref={buttonRef}
              onClick={() => {
                setExpandedMobileMenu(null);
                setShowMobileNav((prev) => !prev);
              }}
              className="block md:hidden text-white !bg-transparent text-20"
            >
              {ReactIcons.hamburgerMenu}
            </button>

            {/* desktop */}
            <div className="flex-1 relative hidden md:block">
              <div className="w-[calc(100%+40px)] h-full bg-[#32323259] backdrop-blur-lg rounded-[40px] -ml-10 px-3 hidden md:flex items-center relative z-50">
                <div className="size-10 bg-[#9B7025] rounded-full flex-shrink-0 relative">
                  <span className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 font-bold text-22 font-reddit-sans text-[#ffffff90]">
                    92
                  </span>
                </div>
                <div
                  ref={navRef}
                  className="flex-1 flex justify-center gap-3 min-h-full"
                >
                  {navbarList.map((navItem) => (
                    <div
                      key={navItem.id}
                      className="group min-h-full"
                      onMouseEnter={() => {
                        setHoveredMenu(navItem);
                      }}
                    >
                      {NON_CLICKABLE_MENUS.includes(navItem.id) ? (
                        <div className="flex items-center font-reddit-sans font-semibold md:text-16 xl:text-18 text-[#fff] px-3 uppercase relative h-full opacity-100">
                          {navItem.children && (
                            <span
                              className={`transition-all duration-500 ${
                                hoveredMenu?.id === navItem?.id
                                  ? 'rotate-0'
                                  : 'rotate-45'
                              }`}
                            >
                              {ReactIcons.slash}
                            </span>
                          )}
                          {navItem.label}
                        </div>
                      ) : (
                        <Link
                          href={navItem.link}
                          className="flex items-center font-reddit-sans font-semibold md:text-16 xl:text-18 text-[#fff] px-3 uppercase relative h-full cursor-pointer"
                        >
                          {navItem.children && (
                            <span
                              className={`transition-all duration-500 ${
                                hoveredMenu?.id === navItem?.id
                                  ? 'rotate-0'
                                  : 'rotate-45'
                              }`}
                            >
                              {ReactIcons.slash}
                            </span>
                          )}
                          {navItem.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <Link
                  href={'/contact-us'}
                  className="bg-white rounded-[40px] font-reddit-sans text-16 xl:text-18 px-8 py-2 h-fit hover:shadow-hover"
                >
                  Contact us
                </Link>
              </div>

              {/* desktop dropdown */}
              <div
                ref={dropdownRef}
                className={`w-[calc(100%+40px)] absolute -left-10 bg-[#00000050] backdrop-blur-2xl backdrop-saturate-150
    shadow-xl text-[#fff] z-[30] top-9 flex rounded-b-[22px] overflow-hidden transition-all duration-300 ease-in-out ${
      hoveredMenu && hoveredMenu?.children ? 'h-[350px]' : 'h-0'
    }`}
              >
                <div className="pt-9 pb-3 px-4 flex w-full">
                  <div className="flex-[2]">
                    <div className="md:text-18 xl:text-22 text-white font-reddit-sans font-semibold border-b-[0.5px] border-[#ebebeb] pb-2">
                      {hoveredMenu?.label}
                    </div>
                    {hoveredMenu?.children?.map((child) =>
                      NON_CLICKABLE_MENUS.includes(hoveredMenu.id) ? (
                        <div
                          key={child.id}
                          className="block py-4 last:border-none border-primary-blue max-w-[100%] pointer-events-none opacity-100"
                        >
                          <div
                            className="font-semibold md:text-16 xl:text-18 text-[#fff] font-reddit-sans capitalize"
                          >
                            {child.label}
                          </div>
                          <div className="md:text-14 xl:text-16 font-light text-[#fff] font-reddit-sans">
                            {child.desc}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={child.id}
                          href={`${child.link}`}
                          className="block py-4 last:border-none border-primary-blue hover:text-primary-blue max-w-[100%]"
                        >
                          <div className="font-semibold text-18 text-[#fff] font-reddit-sans captalize"
                          // onClick={() => router.push(`${child.link}`)}
                          >
                            {child.label}
                          </div>
                          <div className="text-16 font-light text-[#fff] font-reddit-sans">
                            {child.desc}
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile dropdown */}
      <div
        ref={mobileNavRef}
        className={`md:hidden bg-[#D4D4D344] w-[90vw] rounded-b-[20px] backdrop-blur-2xl fixed left-1/2 -translate-x-1/2 z-[900] overflow-hidden transition-all duration-300 ease-in-out ${
          showMobileNav ? 'h-[300px]' : 'h-0'
        } ${isScrolled ? 'top-[65px]' : 'top-[90px]'} ${
          expandedMobileMenu && 'h-auto'
        }`}
      >
        <div className="flex flex-col gap-3 px-3 py-6 h-full">
          {navbarList.map((navItem) => (
            <div key={navItem.id} className="">
              <div
                onClick={() => {
                  if (!NON_CLICKABLE_MENUS.includes(navItem.id)) {
                    setExpandedMobileMenu((prev) =>
                      prev === navItem.id ? null : navItem.id
                    );
                  }
                }}
                className={`flex justify-between items-center border-b-[0.5px] border-primary-blue text-white font-semibold pb-1 ${
                  NON_CLICKABLE_MENUS.includes(navItem.id)
                    ? 'cursor-not-allowed opacity-75'
                    : 'cursor-pointer'
                }`}
              >
                {NON_CLICKABLE_MENUS.includes(navItem.id) ? (
                  <span className="h-10 flex items-end">{navItem.label}</span>
                ) : (
                  <Link
                    href={navItem.link}
                    onClick={(e) => {
                      setShowMobileNav(false);
                    }}
                    className="h-10 flex items-end"
                  >
                    {navItem.label}
                  </Link>
                )}
                {navItem.children && ReactIcons.chevDown}
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedMobileMenu === navItem.id ? 'h-[220px]' : 'h-0'
                }`}
              >
                {navItem.children?.map((child) =>
                  NON_CLICKABLE_MENUS.includes(navItem.id) ? (
                    <div
                      key={child.id}
                      className="block py-2 border-b-[0.5px] last:border-none border-primary-blue max-w-[90%] pointer-events-none opacity-75"
                    >
                      <div className="font-semibold text-14 text-[#E8E8E8]">
                        {child.label}
                      </div>
                      <div className="text-12 font-light text-[#E8E8E8]">
                        {child.desc}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={child.id}
                      href={'#'}
                      className="block py-2 border-b-[0.5px] last:border-none border-primary-blue hover:text-primary-blue max-w-[90%]"
                    >
                      <div className="font-semibold text-14 text-[#E8E8E8]">
                        {child.label}
                      </div>
                      <div className="text-12 font-light text-[#E8E8E8]">
                        {child.desc}
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
          <div className="flex-1 flex items-center justify-end">
            <Link
              href={'/contact-us'}
              className="bg-primary-blue text-white rounded-[40px] font-reddit-sans text-16 xl:text-18 px-8 py-2 h-fit hover:shadow-hover"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
