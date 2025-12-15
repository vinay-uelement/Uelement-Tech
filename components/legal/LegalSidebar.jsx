import Link from "next/link";

export default function LegalSidebar({ active, setActive }) {
  const base = "cursor-pointer text-16 md:text-18 transition";
  const activeCls = "text-white font-semibold";
  const inactiveCls = "text-white/50 hover:text-white";

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D9B24C]" />

      <div className="pl-6 space-y-4">
        <div
          onClick={() => setActive("privacy")}
          className={`${base} ${
            active === "privacy" ? activeCls : inactiveCls
          }`}
        >
          Privacy Policy
        </div>

        <div
          onClick={() => setActive("terms")}
          className={`${base} ${
            active === "terms" ? activeCls : inactiveCls
          }`}
        >
          Terms of use
        </div>

        <div
          onClick={() => setActive("sitemap")}
          className={`${base} ${
            active === "sitemap" ? activeCls : inactiveCls
          }`}
        >
          Sitemap
        </div>

        <Link
          href="/company"
          className={`${base} ${inactiveCls} block`}
        >
          About us
        </Link>

        <Link
          href="/contact-us"
          className={`${base} ${inactiveCls} block`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}