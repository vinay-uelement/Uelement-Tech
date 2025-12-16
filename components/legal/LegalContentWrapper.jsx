'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { legalData } from '@/utils/LegalData';
import LegalContent from '@/components/legal/LegalContent';
import TermsContent from '@/components/legal/TermsContent';
import SitemapContent from '@/components/legal/SitemapContent';
import LegalSidebar from '@/components/legal/LegalSidebar';

export default function LegalContentWrapper() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page') || 'privacy';
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
    <>
      <div className="my-16 sm:my-20 text-center mx-auto">
        <h1 className="fl1 !text-white md:!mb-4 !mb-2">{current.title}</h1>
        <p className="fl3 !text-white">{current.subtitle}</p>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mb-6">
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
            <MobileNavItem label="Privacy Policy" page="privacy" active={active} onClick={() => handleNavClick("privacy")} />
            <MobileNavItem label="Terms of use" page="terms" active={active} onClick={() => handleNavClick("terms")} />
            <MobileNavItem label="Sitemap" page="sitemap" active={active} onClick={() => handleNavClick("sitemap")} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-12 gap-6 sm:gap-12">
        <aside className="hidden md:block col-span-12 md:col-span-3">
          <LegalSidebar active={active} setActive={setActive} />
        </aside>

        <main className="col-span-12 md:col-span-9 relative">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D9B24C] hidden md:block" />
          <div className="md:pl-10">
            {active === 'sitemap' ? (
              <SitemapContent />
            ) : active === 'terms' ? (
              <TermsContent />
            ) : (
              <LegalContent type={active} />
            )}
          </div>
        </main>
      </div>
    </>
  );
}

function MobileNavItem({ label, page, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-3 py-2 rounded transition ${
        active === page ? "text-white font-semibold bg-[#D9B24C]/20" : "text-white/70 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}