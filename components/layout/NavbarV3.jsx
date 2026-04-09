'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ReactIcons } from '../../utils/ReactIcons';
import Link from 'next/link';
import MobileNav from './MobileNav';

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
        label: 'Quantum & Web3',
        desc: 'Quantum-ready and next-generation technologies designed to future-proof enterprise infrastructure.',
        link: '/future-tech',
      },
    ],
  },
  {
    id: 6,
    label: 'Solutions',
    link: '/solutions',
    children: [
      {
        id: 1,
        label: 'SaaS',
        desc: 'Web Platform Management',
        link: '/solutions',
      },
      {
        id: 2,
        label: 'Observability',
        desc: 'SecOps, CloudOps, AIOps & FinOps',
        link: '/solutions',
      },
      {
        id: 3,
        label: 'IoET',
        desc: 'Enhanced Digital Twin',
        link: '/solutions',
      },
      {
        id: 4,
        label: 'Quantum',
        desc: 'Application Devlopment & PQC',
        link: '/solutions',
      },
    ],
  },
  // {
  //   id: 2,
  //   label: 'Resources',
  //   link: '/resources',
  //   children: [
  //     {
  //       id: 1,
  //       link: '/resources',
  //       label: 'Blogs',
  //       desc: 'Thoughts, insights, and reflections from my creative journey.',
  //     },
  //     {
  //       id: 2,
  //       link: '/resources',
  //       label: 'Case Study',
  //       desc: 'A deep dive into my projects, process, and problem-solving approach.',
  //     },
  //     {
  //       id: 3,
  //       link: '/resources',
  //       label: 'Research',
  //       desc: 'Exploring data, user behavior, and design trends to uncover insights.',
  //     },
  //   ],
  // },
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
  { id: 5, label: 'Blogs', link: '/resources' },
];

const NO_DROPDOWN_LINKS = [];

const MOBILE_DROPDOWN_HEIGHT = {
  1: 'h-[300px]', // Services
  2: 'h-[260px]', // Resources
  3: 'h-[200px]', // Partnership
};

const DESKTOP_DROPDOWN_HEIGHT = {
  1: 'h-[425px]', // Services
  2: 'h-[350px]', // Resources
  3: 'h-[350px]', // Partnership
};

const NavbarV3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled100vh, setIsScrolled100vh] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // click-open for desktop
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  const location = usePathname();
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileNavRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setIsScrolled100vh(window.scrollY > window.innerHeight - 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // click outside: close desktop dropdown + mobile panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        dropdownRef.current &&
        !navRef.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenMenu(null);
      }

      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowMobileNav(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // reset on route change
  useEffect(() => {
    setShowMobileNav(false);
    setOpenMenu(null);
    setExpandedMobileMenu(null);
  }, [location]);

  const closeMobileNav = () => {
    setShowMobileNav(false);
    setExpandedMobileMenu(null);
  };

  const toggleDesktopMenu = (navItem) => {
    setOpenMenu((prev) => (prev?.id === navItem.id ? null : navItem));
  };

  return (
    <>
      <nav
        className={`w-[90vw] md:w-full md:px-[10px] md:max-w-[1920px] md:mx-auto shadow-none md:bg-transparent rounded-[40px] md:rounded-none h-13 md:h-15 flex justify-between fixed z-[80] left-1/2 -translate-x-1/2
      ${isScrolled ? 'top-2' : 'top-6'} transition-all duration-700 ease-in-out`}
      >
        <div className="w-full md:px-[30px] lg:px-10 rounded-[40px] ">
          <div className="flex justify-between h-full w-full relative rounded-[40px]">
            {/* Logo */}
            <Link
              href="/"
              className={`${isScrolled100vh || location === '/contact-us' ? 'bg-primary-blue' : ' backdrop-blur-lg'} rounded-l-[22px] rounded-tl-[4px] md:w-[220px] 2xl:w-[290px] w-[180px] h-full ps-4 pe-12 md:pe-0 flex items-center relative z-40 transition-all duration-300`}
            >
              <img
                src="/icons/global/UElement_Logo_White 3.svg"
                alt="uelement"
                className="2xl:w-auto md:w-[140px] h-auto"
              />
            </Link>

            <div className="flex-1 relative ">
              <div className="w-[calc(100%+30px)] md:w-[calc(100%+40px)] h-full bg-[#32323259] backdrop-blur-lg rounded-[40px] -ml-[30px] md:-ml-10 px-3 flex items-center relative z-50">
                {/* 92 badge */}
                <div className="size-8 md:size-10 bg-[#9B7025] rounded-full flex-shrink-0 relative">
                  <span className="absolute -translate-x-1/2 left-3 md:left-[18px] -translate-y-1/2 top-3 font-bold text-18 md:text-22 font-reddit-sans text-[#ffffff50]">
                    92
                  </span>
                </div>

                {/* Desktop menu (all click-based) */}
                <div
                  ref={navRef}
                  className="flex-1 hidden lg:flex justify-center gap-3 min-h-full"
                >
                  {navbarList.map((navItem) => {
                    const isOpen = openMenu?.id === navItem.id;
                    const hasDropdown = !!navItem.children?.length;

                    return (
                      <div
                        key={navItem.id}
                        className="group min-h-full flex items-stretch"
                      >
                        {hasDropdown ? (
                          <button
                            type="button"
                            onClick={() => toggleDesktopMenu(navItem)}
                            className="flex items-center font-reddit-sans font-semibold md:text-14 xl:text-18 text-[#fff] px-3 uppercase relative h-full cursor-pointer"
                          >
                            <span
                              className={`transition-all duration-500 ${
                                isOpen ? 'rotate-0' : 'rotate-45'
                              }`}
                            >
                              {ReactIcons.slash}
                            </span>
                            {navItem.label}
                          </button>
                        ) : (
                          <Link
                            href={navItem.link}
                            className="flex items-center font-reddit-sans font-semibold md:text-14 xl:text-18 text-[#fff] px-3 uppercase relative h-full cursor-pointer"
                          >
                            {navItem.label}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Mobile hamburger */}
                <button
                  ref={buttonRef}
                  onClick={() => {
                    setExpandedMobileMenu(null);
                    setShowMobileNav((prev) => !prev);
                  }}
                  className="lg:hidden ml-auto text-white !bg-transparent text-20"
                >
                  {ReactIcons.hamburgerMenu}
                </button>

                {/* Desktop contact button */}
                <Link
                  href="/contact-us"
                  className="hidden lg:block bg-white rounded-[40px] font-reddit-sans text-14 xl:text-18 px-8 md:px-4 xl:px-8 py-2 h-fit hover:shadow-hover"
                >
                  Contact us
                </Link>
              </div>

              {/* Desktop dropdown */}
              <div
                ref={dropdownRef}
                className={`w-[calc(100%+40px)] absolute -left-10 bg-[#00000050] backdrop-blur-2xl backdrop-saturate-150
    shadow-xl text-[#fff] z-[30] top-9 hidden lg:flex rounded-b-[22px] overflow-hidden transition-all duration-300 ease-in-out ${
      openMenu && openMenu.children
        ? (DESKTOP_DROPDOWN_HEIGHT[openMenu.id] ?? 'h-[400px]')
        : 'h-0'
    }`}
              >
                {openMenu && openMenu.children && (
                  <div className="pt-9 pb-3 px-4 flex w-full">
                    <div className="flex-[2]">
                      <div className="flex items-center gap-4 border-b-[0.5px] border-[#ebebeb] pb-2">
                        <div className="md:text-18 xl:text-22 text-white font-reddit-sans font-semibold">
                          {openMenu.label}
                        </div>

                        {/* right view links */}
                        {openMenu.id === 2 && (
                          <Link
                            href="/resources"
                            className="md:text-16 xl:text-20 text-white font-reddit-sans font-semibold flex items-center gap-2 border-l border-[#ffffff70] pl-4"
                          >
                            View Resources {ReactIcons.arrowright}
                          </Link>
                        )}
                        {openMenu.id === 3 && (
                          <Link
                            href="/our-partners"
                            className="md:text-16 xl:text-20 text-white font-reddit-sans font-semibold flex items-center gap-2 border-l border-[#ffffff70] pl-4"
                          >
                            View Partner Ecosystem {ReactIcons.arrowright}
                          </Link>
                        )}
                      </div>

                      {openMenu.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.link}
                          className="block py-4 last:border-none border-primary-blue hover:text-primary-blue max-w-[100%]"
                        >
                          <div className="font-semibold text-18 text-[#fff] font-reddit-sans capitalize">
                            {child.label}
                          </div>
                          <div className="text-16 font-light text-[#fff] font-reddit-sans">
                            {child.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu (unchanged behaviour) */}
      <MobileNav
        navbarList={navbarList}
        showMobileNav={showMobileNav}
        expandedMobileMenu={expandedMobileMenu}
        setExpandedMobileMenu={setExpandedMobileMenu}
        closeMobileNav={closeMobileNav}
        isScrolled={isScrolled}
        mobileNavRef={mobileNavRef}
        NO_TOP_LEVEL_NAV={[]}
        NO_DROPDOWN_LINKS={NO_DROPDOWN_LINKS}
        MOBILE_DROPDOWN_HEIGHT={MOBILE_DROPDOWN_HEIGHT}
      />
    </>
  );
};

export default NavbarV3;
