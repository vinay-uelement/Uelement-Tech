import Link from "next/link";

export default function LegalSidebar({ active, setActive }) {
  const base = "cursor-pointer text-16 md:text-18 transition";
  const activeCls = "!text-[#232223] font-semibold font-noto-sans";
  const inactiveCls = "!text-[#23222350] hover:text-white font-noto-sans";

  return (
    <div className="relative">
      {/* <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D9B24C]" /> */}

      <div className="pl-6 space-y-4">
        <div
          onClick={() => setActive("privacy")}
          className={`relative ${base} ${
            active === "privacy" ? activeCls : inactiveCls
          }`}
        >
          {active === "privacy" && (
            <div className="absolute -left-6 top-0 bottom-0 w-[3px] bg-[#D9B24C]" />
          )}
          Privacy Policy
        </div>

        <div
          onClick={() => setActive("terms")}
          className={`relative ${base} ${
            active === "terms" ? activeCls : inactiveCls
          }`}
        >
          {active === "terms" && (
            <div className="absolute -left-6 top-0 bottom-0 w-[3px] bg-[#D9B24C]" />
          )}
          Terms of use
        </div>

        <div
          onClick={() => setActive("sitemap")}
          className={`relative ${base} ${
            active === "sitemap" ? activeCls : inactiveCls
          }`}
        >
          {active === "sitemap" && (
            <div className="absolute -left-6 top-0 bottom-0 w-[3px] bg-[#D9B24C]" />
          )}
          Sitemap
        </div>

        <Link
          href="/company"
          className={`relative ${base} ${inactiveCls} block`}
        >
          About us
        </Link>

        <Link
          href="/contact-us"
          className={`relative ${base} ${inactiveCls} block`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}