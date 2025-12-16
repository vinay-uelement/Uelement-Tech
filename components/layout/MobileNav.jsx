'use client';

import Link from 'next/link';
import { ReactIcons } from '../../utils/ReactIcons';

const MobileNav = ({
  navbarList,
  showMobileNav,
  expandedMobileMenu,
  setExpandedMobileMenu,
  closeMobileNav,
  isScrolled,
  mobileNavRef,
  NO_TOP_LEVEL_NAV,
  NO_DROPDOWN_LINKS,
  MOBILE_DROPDOWN_HEIGHT,
}) => {
  return (
    <div
      ref={mobileNavRef}
      className={`md:hidden bg-[#0c142d]/35 w-[90vw] rounded-b-[12px]
        backdrop-blur-2xl fixed left-1/2 -translate-x-1/2 z-[70]
        overflow-hidden transition-all duration-300 ease-in-out
        ${isScrolled ? 'top-[38px]' : 'top-[60px]'}
        ${
          showMobileNav
            ? expandedMobileMenu
              ? 'max-h-[600px]'
              : 'max-h-[300px]'
            : 'max-h-0'
        }`}
    >
      <div className="flex flex-col gap-3 px-3 py-6">
        {navbarList.map((navItem) => {
          const canExpand =
            navItem.children?.length &&
            !NO_DROPDOWN_LINKS.includes(navItem.id);

          return (
            <div key={navItem.id}>
              {/* TOP LEVEL */}
              <div
                onClick={() => {
                  if (!canExpand) return;

                  setExpandedMobileMenu((prev) =>
                    prev === navItem.id ? null : navItem.id
                  );
                }}
                className={`flex justify-between items-center border-b-[0.5px]
                  border-primary-blue/20 text-white font-semibold pb-1
                  ${canExpand ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {/* LABEL */}
                {NO_TOP_LEVEL_NAV.includes(navItem.id) ? (
                  <span className="h-10 flex items-end">
                    {navItem.label}
                  </span>
                ) : (
                  <Link
                    href={navItem.link}
                    onClick={closeMobileNav}
                    className="h-10 flex items-end"
                  >
                    {navItem.label}
                  </Link>
                )}

                {canExpand && ReactIcons.chevDown}
              </div>

              {/* DROPDOWN */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
                  ${
                    expandedMobileMenu === navItem.id
                      ? MOBILE_DROPDOWN_HEIGHT[navItem.id] ?? 'h-0'
                      : 'h-0'
                  }`}
              >
                {navItem.children?.map((child) =>
                  NO_DROPDOWN_LINKS.includes(navItem.id) ? (
                    <div
                      key={child.id}
                      className="block py-2 border-b-[0.5px]
                        last:border-none border-primary-blue
                        max-w-[90%] pointer-events-none opacity-75"
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
                      href={child.link}
                      onClick={closeMobileNav}
                      className="block py-2 border-b-[0.5px]
                        last:border-none border-primary-blue
                        hover:text-primary-blue max-w-[90%]"
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
          );
        })}

        {/* CTA */}
        <div className="flex items-center justify-end">
          <Link
            href="/contact-us"
            onClick={closeMobileNav}
            className="bg-white text-primary-blue rounded-[40px]
              font-reddit-sans text-16 px-8 py-2 h-fit hover:shadow-hover"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
