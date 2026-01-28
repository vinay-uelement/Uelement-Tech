import Link from 'next/link';

export default function SitemapContent() {
  return (
    <div className="space-y-10 !text-[#232223]">
      {/* Main Navigation Pages */}
      <div className="space-y-6">
        <h2 className="font-montserrat font-semibold text-14 md:text-18 xl:text-[22px] mb-2 md:mb-4 3xl:mb-6 ">Home</h2>
        <div className="space-y-3 pl-2">
          <SitemapLink href="/">Landing Page</SitemapLink>
          <SitemapLink href="/">Resources</SitemapLink>
          <SitemapLink href="/our-partners">Partnership</SitemapLink>
          <SitemapLink href="/company">Company</SitemapLink>
        </div>
      </div>

      {/* <div className="h-px bg-gradient-to-r from-[#D9B24C] to-transparent" /> */}
       <div className="h-px bg-white/10" />

      {/* Solutions */}
      <div className="space-y-6">
        <h2 className="font-montserrat font-semibold text-14 md:text-18 xl:text-[22px] mb-2 md:mb-4 3xl:mb-6 ">Solutions</h2>
        <div className="space-y-3 pl-2">
          <SitemapLink href="/ai-ml">AI / ML</SitemapLink>
          <SitemapLink href="/cybersecurity">
            Cybersecurity
          </SitemapLink>
          <SitemapLink href="/cloud-solutions">
            Cloud Computing
          </SitemapLink>
          <SitemapLink href="/future-tech">
            Future Tech
          </SitemapLink>
        </div>
      </div>

      {/* <div className="h-px bg-gradient-to-r from-[#D9B24C] to-transparent" /> */}
       <div className="h-px bg-white/10" />

      {/* Supports & Legal */}
      <div className="space-y-6">
        <h2 className="font-montserrat font-semibold text-14 md:text-18 xl:text-[22px] mb-2 md:mb-4 3xl:mb-6 ">Supports & Legal</h2>
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
      className="flex items-center !text-[#232223] hover:text-white transition group"
    >
      <span className="inline-block w-2 h-2 rounded-full bg-[#000000] mr-3 group-hover:scale-125 transition-transform" />
      {children}
    </Link>
  );
}
