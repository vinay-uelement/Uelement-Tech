'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navItems, type NavItem, type DropdownGroup } from '@/lib/navigation';
import { ReactIcons } from '../../utils/ReactIcons';

function DropdownContent({ groups, megaVariant }: { groups: DropdownGroup[]; megaVariant?: string }) {
  return (
    <>
      {groups.map((group, gi) => (
        <div className="dgroup" key={gi}>
          {group.heading && (
            <Link href={group.headingHref || '#'} className="dhead">
              {group.heading}
            </Link>
          )}
          {group.items.map((item, ii) => (
            <Link href={item.href} className="ditem" key={ii}>
              <b>{item.label}</b>
              <span>{item.description}</span>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}

function NavDropdown({ item, isOpen, onClick }: { item: NavItem, isOpen: boolean, onClick: () => void }) {
  const baseDropdown = 'dropdown backdrop-blur-lg bg-[#32323259]';
  const megaClass = item.megaVariant === 'prod'
    ? `${baseDropdown} mega prod`
    : item.megaVariant === 'comp'
      ? `${baseDropdown} mega comp`
      : `${baseDropdown} mega`;

  return (
    <div className={isOpen ? 'open' : ''}>
      <span className="navlink" onClick={onClick}>
        <span className={`transition-all duration-500 ${isOpen ? 'rotate-0' : 'rotate-45'}`}>
          {ReactIcons.slash}
        </span>
        {item.label}
      </span>
      <div className={megaClass}>
        <DropdownContent groups={item.groups!} megaVariant={item.megaVariant} />
      </div>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpenDropdownId(null);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="site-header">
      <div className="absolute inset-0 bg-[#32323259] backdrop-blur-[16px] -z-10"></div>
      <div className="wrap nav" ref={navRef}>
        <Link href="/" className="logo">
          UElement<em>.</em>
        </Link>

        <nav className={`navlinks${menuOpen ? ' open' : ''}`} id="navlinks">
          {navItems.map((item, i) =>
            item.groups ? (
              <NavDropdown 
                item={item} 
                key={i} 
                isOpen={openDropdownId === item.label}
                onClick={() => setOpenDropdownId(prev => prev === item.label ? null : item.label)}
              />
            ) : (
              <div key={i}>
                <Link href={item.href || '#'} className="navlink">
                  {item.label}
                </Link>
              </div>
            ),
          )}
        </nav>

        <Link href="/contact" className="nav-cta nav-cta-desktop">
          Contact Us
        </Link>

        <button
          className="burger"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
