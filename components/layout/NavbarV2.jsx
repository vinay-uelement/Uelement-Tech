import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ReactIcons } from "../../utils/ReactIcons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const navbarList = [
  {
    id: 1,
    label: "Services",
    link: "/services",
    children: [
      {
        id: 1,
        label: "AI & ML",
        desc: "AI-powered solutions that boost efficiency and drive smarter decisions for global enterprises.",
      },
      {
        id: 2,
        label: "Cybersecurity",
        desc: "We provide enterprise security solutions that protect assets, ensure compliance, and reduce risks",
      },
      {
        id: 3,
        label: "Cloud Solutions",
        desc: "We deliver scalable, secure, and efficient cloud solutions tailored for global businesses.",
      },
    ],
    images: [
      {
        id: 1,
        title: "Complete Enterprise Security.",
        image: "/images/global/security.png",
      },
      {
        id: 2,
        title: "Complete Enterprise Security.",
        image: "/images/global/ai.jpg",
      },
    ],
  },
  {
    id: 2,
    label: "Resources",
    link: "/resources",
    children: [
      {
        id: 1,
        label: "Blogs",
        desc: "Thoughts, insights, and reflections from my creative journey.",
      },
      {
        id: 2,
        label: "Case Study",
        desc: "A deep dive into my projects, process, and problem-solving approach.",
      },
      {
        id: 3,
        label: "Research",
        desc: "Exploring data, user behavior, and design trends to uncover insights.",
      },
    ],
    images: [
      {
        id: 1,
        title: "High-Quality Content Writing.",
        image: "/images/resources/blog-1.jpg",
      },
      {
        id: 2,
        title: "Complete Enterprise Security.",
        image: "/images/global/security.png",
      },
    ],
  },
  {
    id: 3,
    label: "Partnership",
    link: "/our-partners",
    children: [
      {
        id: 1,
        label: "AI & ML",
        desc: "WIZ | PALOALTO | REDHAT | AWS",
      },
      {
        id: 2,
        label: "Cybersecurity",
        desc: "WIZ | PALOALTO | REDHAT | AWS",
      },
      {
        id: 3,
        label: "Cloud Solutions",
        desc: "WIZ | PALOALTO | REDHAT | AWS",
      },
    ],
    images: [
      {
        id: 1,
        title: "Complete Enterprise Security.",
        image: "/images/global/security.png",
      },
      {
        id: 2,
        title: "Complete Enterprise Security.",
        image: "/images/global/ai.jpg",
      },
    ],
  },
  { id: 4, label: "Company", link: "/company" },
];

const NavbarV2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

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
    // autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  const handleContactus = () => {
    const contactSection = document.getElementById("contactus");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // handle scroll for top spacing
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If clicked outside both menu and button → close it
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
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <nav
        className={`w-[90vw]  md:w-full  container-outer shadow-down md:shadow-none bg-primary-blue rounded-[12px] md:rounded-none pe-4 md:pe-0 md:bg-transparent  h-15 flex justify-between fixed z-[80] left-1/2 -translate-x-1/2 
      ${
        isScrolled ? "top-3" : "top-9"
      } transition-all duration-700 ease-in-out`}
      >
        <div className="w-full container-padding ">
          <div className=" flex justify-between  h-full w-full relative">
            <Link
              to={"/"}
              className="bg-primary-blue rounded-l-[22px] rounded-tl-[5px] md:w-[290px] h-full ps-4 flex items-center"
            >
              <img
                src="/icons/global/UElement_Logo_White 3.svg"
                alt="uelement"
              />
            </Link>

            {/* hamburger */}
            <button
              ref={buttonRef}
              onClick={() => setShowMobileNav((prev) => !prev)}
              className="block md:hidden text-white !bg-transparent text-20"
            >
              {ReactIcons.hamburgerMenu}
            </button>

            {/* desktop */}
            <div className="flex-1 relative  hidden md:block">
              <div className="w-[calc(100%+40px)] h-full bg-[#32323259] backdrop-blur-lg rounded-[40px] -ml-10 px-3 hidden md:flex items-center relative z-50">
                <div className="size-10 bg-white rounded-full relative">
                  <img
                    src="/icons/global/92_small.svg"
                    alt="92"
                    className="absolute bottom-1 left-1"
                  />
                </div>
                <div
                  ref={navRef}
                  className="flex-1 flex justify-center gap-3 min-h-full "
                >
                  {navbarList.map((navItem) => (
                    <div
                      key={navItem.id}
                      className=" group   min-h-full"
                      onMouseEnter={() => setHoveredMenu(navItem)}
                      // onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <Link
                        to={navItem.link}
                        className="flex items-center text-[#ebebeb] px-3  relative h-full"
                      >
                        {navItem.children && (
                          <span
                            className={` transition-all duration-500 ${
                              hoveredMenu?.id === navItem?.id
                                ? "rotate-0"
                                : "rotate-45"
                            }`}
                          >
                            {ReactIcons.slash}
                          </span>
                        )}
                        {navItem.label}
                      </Link>
                    </div>
                  ))}
                </div>
                <Link
                  to={"/contact"}
                  className="bg-white rounded-[40px] font-roboto text-16 xl:text-18 px-8 py-2 h-fit hover:shadow-hover"
                >
                  Contact us
                </Link>
              </div>

              {/* desktop dropdown */}
              <div
                ref={dropdownRef}
                className={`w-[700px]  absolute  left-1/2 -translate-x-1/2  bg-[#D4D4D366] backdrop-blur-2xl text-primary-blue   top-15 flex rounded-b-[20px] overflow-hidden transition-all duration-300 ease-in-out  ${
                  hoveredMenu && hoveredMenu?.children ? "h-[300px]" : "h-0 "
                }`}
              >
                <div className="pt-9 pb-3 px-4 flex w-full  ">
                  <div
                    className={`flex-[2]   ${
                      hoveredMenu &&
                      hoveredMenu?.children &&
                      "border-r border-primary-blue"
                    }`}
                  >
                    <div className="text-20 text-white font-poppins">
                      {hoveredMenu?.label}
                    </div>
                    {hoveredMenu?.children?.map((child) => (
                      <Link
                        key={child.id}
                        to={"#"}
                        className="block py-2 border-b-[0.5px] last:border-none border-primary-blue hover:text-primary-blue max-w-[90%]"
                      >
                        <div className="font-semibold text-14 text-[#E8E8E8]">
                          {child.label}
                        </div>
                        <div className="text-12 font-light text-[#E8E8E8]">
                          {child.desc}
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="flex-1 w-full flex items-center justify-center min-h-full relative pl-4 -mt-4">
                    {hoveredMenu && (
                      <Slider
                        {...settings}
                        className="w-full max-w-[300px] [&_.slick-dots]:!bottom-[-30px] 
      [&_.slick-dots_li]:!m-0 
      [&_.slick-dots_li_button:before]:!text-12
      [&_.slick-dots_li.slick-active_button:before]:!text-black 
      [&_.slick-dots_li_button:before]:!text-white  [&_.slick-dots]:!gap-0"
                      >
                        {hoveredMenu?.images?.map((image) => (
                          <div key={image.id} className="relative group">
                            <div
                              className="h-[170px] w-[300px] bg-cover bg-center rounded-[12px] flex items-end justify-between p-3 transition-all duration-500 ease-in-out group-hover:scale-[1.03] relative "
                              style={{ backgroundImage: `url(${image.image})` }}
                            >
                              <div className="font-semibold text-16 text-white max-w-[80%]">
                                {image.title}
                              </div>
                              <button className="size-[30px] bg-white hover:shadow-hover hover:scale-105 transition-all duration-500 ease-in-out rounded-full flex items-center justify-center p-2">
                                {ReactIcons.arrowOutWard}
                              </button>
                              <div className="inset-0 absolute bg-primary-blue/50 z-50"></div>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile dropdwon */}
      <div
        ref={mobileNavRef}
        className={`md:hidden bg-[#D4D4D344] w-[90vw] rounded-b-[20px] backdrop-blur-2xl fixed left-1/2 -translate-x-1/2  z-40  overflow-hidden transition-all duration-300 ease-in-out  ${
          showMobileNav ? "h-[300px]" : "h-0"
        } ${isScrolled ? "top-[65px]" : "top-[90px]"} ${
          expandedMobileMenu && "h-auto"
        } `}
      >
        <div className="flex flex-col gap-3 px-3 py-6 h-full">
          {navbarList.map((navItem) => (
            <div key={navItem.id} className=" ">
              <div
                onClick={() =>
                  setExpandedMobileMenu((prev) =>
                    prev === navItem.id ? null : navItem.id
                  )
                }
                className="flex justify-between items-center border-b-[0.5px] border-primary-blue text-white font-semibold pb-1"
              >
                <Link
                  to={navItem.link}
                  onClick={() => setShowMobileNav(false)}
                  className="h-10 flex items-end "
                >
                  {navItem.label}
                </Link>
                {navItem.children && ReactIcons.chevDown}
              </div>
              {/* {expandedMobileMenu === navItem.id && ( */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedMobileMenu === navItem.id ? "h-[220px]" : "h-0"
                }`}
              >
                {navItem.children?.map((child) => (
                  <Link
                    key={child.id}
                    to={"#"}
                    className="block py-2 border-b-[0.5px] last:border-none border-primary-blue hover:text-primary-blue max-w-[90%]"
                  >
                    <div className="font-semibold text-14 text-[#E8E8E8]">
                      {child.label}
                    </div>
                    <div className="text-12 font-light text-[#E8E8E8]">
                      {child.desc}
                    </div>
                  </Link>
                ))}
              </div>
              {/* )} */}
            </div>
          ))}
          <div className="flex-1 flex items-center justify-end">
            <Link
              to={"/contact"}
              className="bg-primary-blue text-white rounded-[40px] font-roboto text-16 xl:text-18 px-8 py-2 h-fit hover:shadow-hover"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarV2;
