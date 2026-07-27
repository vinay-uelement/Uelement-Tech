'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navItems, type NavItem, type DropdownGroup } from '@/lib/navigation';

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

function NavDropdown({ item }: { item: NavItem }) {
  const megaClass = item.megaVariant === 'prod'
    ? 'dropdown mega prod'
    : item.megaVariant === 'comp'
      ? 'dropdown mega comp'
      : 'dropdown mega';

  return (
    <div>
      <span className="navlink">
        {item.label} <i className="plus">+</i>
      </span>
      <div className={megaClass}>
        <DropdownContent groups={item.groups!} megaVariant={item.megaVariant} />
      </div>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link href="/" className="logo">
          UElement<em>.</em>
        </Link>

        <nav className={`navlinks${menuOpen ? ' open' : ''}`} id="navlinks">
          {navItems.map((item, i) =>
            item.groups ? (
              <NavDropdown item={item} key={i} />
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
          Request a briefing
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
