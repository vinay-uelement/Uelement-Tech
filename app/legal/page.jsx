"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import LegalContent from "@/components/legal/LegalContent";
import SitemapContent from "@/components/legal/SitemapContent";
import LegalSidebar from "@/components/legal/LegalSidebar";
import { legalData } from "@/utils/LegalData";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function LegalPage() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page") || "privacy";
  const [active, setActive] = useState(pageParam);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActive(pageParam);
  }, [pageParam]);

  const current = legalData[active];

  const handleNavClick = (page) => {
    setActive(page);
    setMobileMenuOpen(false);
  };

  return (
    <section className="min-h-screen bg-primary-blue">
      <div className="container-small section-block-padding">
        <div className="my-16 sm:my-20 text-center mx-auto">
          <h1 className="fl-main mb-3 sm:mb-4">{current.title}</h1>
          <p className="fl3 !text-white text-sm sm:text-base">
            {current.subtitle}
          </p>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden my-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-between w-full px-4 py-3 bg-white/10 rounded border border-[#D9B24C]/30 hover:bg-white/20 transition"
          >
            <span className="text-white font-semibold capitalize">{active}</span>
            <MdKeyboardArrowDown 
              size={24} 
              className={`text-[#D9B24C] transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {mobileMenuOpen && (
            <div className="mt-2 space-y-2 bg-white/5 rounded p-3 border border-[#D9B24C]/20">
              <MobileNavItem 
                label="Privacy Policy" 
                page="privacy" 
                active={active}
                onClick={() => handleNavClick("privacy")}
              />
              <MobileNavItem 
                label="Terms of use" 
                page="terms" 
                active={active}
                onClick={() => handleNavClick("terms")}
              />
              <MobileNavItem 
                label="Sitemap" 
                page="sitemap" 
                active={active}
                onClick={() => handleNavClick("sitemap")}
              />
              {/* <MobileNavItem 
                label="About us" 
                page="about" 
                active={active}
                onClick={() => handleNavClick("about")}
              />
              <MobileNavItem 
                label="Contact" 
                page="contact" 
                active={active}
                onClick={() => handleNavClick("contact")}
              /> */}
            </div>
          )}
        </div>

        <div className="grid grid-cols-12 gap-6 sm:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block col-span-12 md:col-span-3">
            <LegalSidebar active={active} setActive={setActive} />
          </aside>

          {/* Main Content */}
          <main className="col-span-12 md:col-span-9 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D9B24C] hidden md:block" />

            <div className="md:pl-10">
              {active === "sitemap" ? (
                <SitemapContent />
              ) : (
                <LegalContent type={active} />
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

function MobileNavItem({ label, page, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-3 py-2 rounded transition ${
        active === page
          ? "text-white font-semibold bg-[#D9B24C]/20"
          : "text-white/70 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}