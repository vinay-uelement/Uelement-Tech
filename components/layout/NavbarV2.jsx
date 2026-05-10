'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ReactIcons } from '../../utils/ReactIcons';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { imgUrl } from '@/lib/imageUrl';

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
        link: '/ai-ml',
      },
      {
        id: 2,
        label: 'Cybersecurity',
        desc: 'We provide enterprise security solutions that protect assets, ensure compliance, and reduce risks',
        link: '/cybersecurity',
      },
      {
        id: 3,
        label: 'Cloud Solutions',
        desc: 'We deliver scalable, secure, and efficient cloud solutions tailored for global businesses.',
        link: '/cloud-solutions',
      },
      {
        id: 4,
        label: 'Future Tech',
        desc: 'Quantum-ready and next-generation technologies designed to future-proof enterprise infrastructure.',
        link: '/future-tech',
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
        link: '/our-partners?tab=ai-ml#partners',
      },
      {
        id: 2,
        label: 'Cybersecurity',
        desc: 'Zero-Trust Protection',
        link: '/our-partners?tab=cybersecurity#partners',
      },
      {
        id: 3,
        label: 'Cloud Solutions',
        desc: 'Cloud-Native Platforms',
        link: '/our-partners?tab=cloud#partners',
      },
    ],
  },
  { id: 4, label: 'Company', link: '/company' },
];

const NO_TOP_LEVEL_NAV = [1, 2];
const NO_DROPDOWN_LINKS = [2];
const MOBILE_DROPDOWN_HEIGHT = {
  1: 'h-[300px]',
  3: 'h-[160px]',
};

const NavbarV2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const [isSite92Active, setIsSite92Active] = useState(false); // false = original, true = pink theme
  const [isAnimating, setIsAnimating] = useState(false);

  const closeMobileNav = () => {
    setShowMobileNav(false);
    setExpandedMobileMenu(null);
  };

  const location = usePathname();
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileNavRef = useRef(null);
  const buttonRef = useRef(null);
  const badgeRef = useRef(null);

  const handleSiteSwitch = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsSite92Active(prev => !prev);
    setTimeout(() => setIsAnimating(false), 800);
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
  }, [location]);

  return (
    <>
      <nav
        className={`w-[90vw] md:w-full md:px-[10px] md:max-w-[1920px] md:mx-auto shadow-none md:bg-transparent rounded-[40px] md:rounded-none h-13 md:h-15 flex justify-between fixed z-[80] left-1/2 -translate-x-1/2
      ${
        isScrolled ? 'top-2' : 'top-6'
      } transition-all duration-700 ease-in-out `}
      >
        <div className="w-full md:px-20 rounded-[40px] ">
          <div className="flex justify-between h-full w-full relative rounded-[40px]">
            {/* Logo - Original styling + pink theme */}
            <Link
              href={'/'}
              className={`rounded-l-[22px] rounded-tl-[4px] md:w-[290px] w-[180px] h-full ps-4 pe-12 md:pe-0 flex items-center relative z-40 transition-all duration-500 ${
                isSite92Active 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600' 
                  : 'bg-primary-blue'
              }`}
            >
              <img
                src={imgUrl('/icons/global/UElement_Logo_White 3.svg')}
                alt="uelement"
                className="w-auto h-auto"
              />
            </Link>

            {/* Unified Navigation Container - Original styling + pink theme */}
            <div className="flex-1 relative ">
              <div className={`w-[calc(100%+30px)] md:w-[calc(100%+40px)] h-full backdrop-blur-lg rounded-[40px] -ml-[30px] md:-ml-10 px-3 flex items-center relative z-50 transition-all duration-700 ${
                isSite92Active 
                  ? 'bg-gradient-to-r from-pink-900/60 to-purple-900/60 shadow-[0_0_20px_rgba(236,72,153,0.2)]' 
                  : 'bg-[#32323259]'
              }`}>
                
                {/* 92 Badge - Clickable with animation */}
                <div 
                  ref={badgeRef}
                  className={`
                    size-8 md:size-10 rounded-full flex-shrink-0 relative cursor-pointer group
                    transition-all duration-500 ease-out hover:scale-110 active:scale-95 shadow-2xl
                    ${isSite92Active 
                      ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600' 
                      : 'bg-[#9B7025]'
                    }
                    ${isAnimating ? 'animate-ping' : ''}
                  `}
                  onClick={handleSiteSwitch}
                >
                  <span className="absolute z-50 -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 font-bold text-18 md:text-22 font-reddit-sans text-[#ffffff90] group-hover:text-white transition-all duration-300">
                    92
                  </span>
                  
                  {/* Glow ring animation */}
                  <div className={`
                    absolute inset-0 rounded-full blur-xl opacity-60
                    ${isSite92Active ? 'bg-pink-400/70' : 'bg-yellow-400/70'}
                    ${isAnimating ? 'animate-ping scale-125' : 'animate-ping-slow'}
                  `} />
                </div>

                {/* Desktop: Menu Items - Original styling */}
                <div
                  ref={navRef}
                  className="flex-1 hidden md:flex justify-center gap-3 min-h-full"
                >
                  {navbarList.map((navItem) => (
                    <div
                      key={navItem.id}
                      className="group min-h-full"
                      onMouseEnter={() => {
                        setHoveredMenu(navItem);
                      }}
                    >
                      {NO_TOP_LEVEL_NAV.includes(navItem.id) ? (
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

                {/* Mobile: Hamburger Button - Original styling */}
                <button
                  ref={buttonRef}
                  onClick={() => {
                    setExpandedMobileMenu(null);
                    setShowMobileNav((prev) => !prev);
                  }}
                  className="md:hidden ml-auto text-white !bg-transparent text-20"
                >
                  {ReactIcons.hamburgerMenu}
                </button>

                {/* Desktop: Contact Button - Original styling + pink theme */}
                <Link
                  href={'/contact-us'}
                  className={`hidden md:block rounded-[40px] font-reddit-sans text-16 xl:text-18 px-8 py-2 h-fit hover:shadow-hover transition-all duration-300 ${
                    isSite92Active 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]' 
                      : 'bg-white'
                  }`}
                >
                  Contact us
                </Link>
              </div>

              {/* Desktop Dropdown - Original styling */}
              <div
                ref={dropdownRef}
                className={`w-[calc(100%+40px)] absolute -left-10 bg-[#00000050] backdrop-blur-2xl backdrop-saturate-150
    shadow-xl text-[#fff] z-[30] top-9 hidden md:flex rounded-b-[22px] overflow-hidden transition-all duration-300 ease-in-out ${
      hoveredMenu && hoveredMenu?.children ? 'h-[350px]' : 'h-0'
    }`}
              >
                <div className="pt-9 pb-3 px-4 flex w-full">
                  <div className="flex-[2]">
                    <div className="md:text-18 xl:text-22 text-white font-reddit-sans font-semibold border-b-[0.5px] border-[#ebebeb] pb-2">
                      {hoveredMenu?.label}
                    </div>
                    {hoveredMenu?.children?.map((child) =>
                      NO_DROPDOWN_LINKS.includes(hoveredMenu.id) ? (
                        <div
                          key={child.id}
                          className="block py-4 last:border-none border-primary-blue max-w-[100%] pointer-events-none opacity-100"
                        >
                          <div className="font-semibold md:text-16 xl:text-18 text-[#fff] font-reddit-sans capitalize">
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
                          <div className="font-semibold text-18 text-[#fff] font-reddit-sans capitalize">
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

      <MobileNav
        navbarList={navbarList}
        showMobileNav={showMobileNav}
        expandedMobileMenu={expandedMobileMenu}
        setExpandedMobileMenu={setExpandedMobileMenu}
        closeMobileNav={closeMobileNav}
        isScrolled={isScrolled}
        mobileNavRef={mobileNavRef}
        NO_TOP_LEVEL_NAV={NO_TOP_LEVEL_NAV}
        NO_DROPDOWN_LINKS={NO_DROPDOWN_LINKS}
        MOBILE_DROPDOWN_HEIGHT={MOBILE_DROPDOWN_HEIGHT}
      />
    </>
  );
};

export default NavbarV2;
