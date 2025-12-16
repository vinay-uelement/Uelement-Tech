import Link from 'next/link';

export default function SitemapContent() {
  return (
    <div className="space-y-10">
      {/* Main Navigation Pages */}
      <div className="space-y-6">
        <h2 className="fl2 !text-white">Home</h2>
        <div className="space-y-3 pl-2">
          <SitemapLink href="/">Landing Page</SitemapLink>
          <SitemapLink href="/services">Services</SitemapLink>
          <SitemapLink href="/">Resources</SitemapLink>
          <SitemapLink href="/our-partners">Partnership</SitemapLink>
          <SitemapLink href="/company">Company</SitemapLink>
        </div>
      </div>

      {/* <div className="h-px bg-gradient-to-r from-[#D9B24C] to-transparent" /> */}
       <div className="h-px bg-white/50" />

      {/* Solutions */}
      <div className="space-y-6">
        <h2 className="fl2 !text-white">Solutions</h2>
        <div className="space-y-3 pl-2">
          <SitemapLink href="/services">AI / ML</SitemapLink>
          <SitemapLink href="/services">
            Cybersecurity
          </SitemapLink>
          <SitemapLink href="/services">
            Cloud Computing
          </SitemapLink>
        </div>
      </div>

      {/* <div className="h-px bg-gradient-to-r from-[#D9B24C] to-transparent" /> */}
       <div className="h-px bg-white/50" />

      {/* Supports & Legal */}
      <div className="space-y-6">
        <h2 className="fl2 !text-white">Supports & Legal</h2>
        <div className="space-y-3 pl-2">
          <SitemapLink href="/legal?page=privacy">Privacy Policy</SitemapLink>
          <SitemapLink href="/legal?page=terms">Terms of Use</SitemapLink>
          {/* <SitemapLink href="/legal/">Legal</SitemapLink> */}
        </div>
      </div>
    </div>
  );
}

function SitemapLink({ href, children }) {
  return (
    <Link
      href={href}
      className="flex items-center text-white/70 hover:text-white transition group"
    >
      <span className="inline-block w-2 h-2 rounded-full bg-[#D9B24C] mr-3 group-hover:scale-125 transition-transform" />
      {children}
    </Link>
  );
}
