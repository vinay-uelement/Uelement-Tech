import { ReactIcons } from '@/utils/ReactIcons';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer
      id="footer"
      className="border-t border-t-[#eee] bg-[url(/images/global/92-icon-grey.svg)] bg-no-repeat bg-top-right bg-cover pt-10 sm:pt-[var(--section-block-padding)] container-padding "
    >
      <div className="lg:border-b border-b-[#E4E4E7] pb-4 lg:pb-7 xl:pb-10 grid grid-cols-[1fr_1fr] lg:grid-cols-[35%_repeat(3,1fr)] lg:grid-rows-1 gap-7 lg:gap-3 justify-center">
        <div className="company-details col-span-2 lg:col-span-1 order-4 lg:order-1">
          <img src="/icons/global/logo-black.svg" alt="logo" />
          <p className="text-gray-8080 font-poppins text-14  mt-5 xl:mt-[25px] mb-[15px]">
            Empowering Secure Digital Transformation
          </p>
          <div className="flex text-20 items-center justify-start">
            <Link href="/" className="size-[40px] rounded-full grid place-content-center hover:translate-y-[-5px] hover:scale-120 duration-300 ease-in-out transition-all hover:text-[#1DA1F2]">
              <span>{ReactIcons.twitter}</span>
            </Link>
            <Link href="/" className="size-[40px] rounded-full grid place-content-center hover:translate-y-[-5px] hover:scale-120 duration-300 ease-in-out transition-all hover:text-[#1877F2]">
              <span>{ReactIcons.facebook}</span>
            </Link>
            <Link href="/" className="size-[40px] rounded-full grid place-content-center hover:translate-y-[-5px] hover:scale-120 duration-300 ease-in-out transition-all hover:text-[#FF0069]">
              <span>{ReactIcons.instagram2}</span>
            </Link>
            <Link href="/" className="size-[40px] rounded-full grid place-content-center hover:translate-y-[-5px] hover:scale-120 duration-300 ease-in-out transition-all">
              <span>{ReactIcons.github}</span>
            </Link>
          </div>
        </div>
        <div className="company-links order-1 lg:order-2">
          <h6 className="font-poppins font-semibold text-16 text-black uppercase mb-5">
            company
          </h6>
          <div className="flex flex-col gap-4 lg:gap-3">
            <Link href="/" className="font-poppins text-gray-8080 text-14 hover:text-black">
              About
            </Link>
            <Link href="/" className="font-poppins text-gray-8080 text-14 hover:text-black">
              Services
            </Link>
            <Link href="/" className="font-poppins text-gray-8080 text-14 hover:text-black">
              Partners
            </Link>
            <Link href="/" className="font-poppins text-gray-8080 text-14 hover:text-black">
              Career
            </Link>
          </div>
        </div>
        <div className="resources-links order-2 lg:order-3">
          <h6 className="font-poppins font-semibold text-16 text-black uppercase mb-5">
            Services
          </h6>
          <div className="flex flex-col gap-4 lg:gap-3">
            <Link href="/" className="font-poppins text-gray-8080 text-14 hover:text-black">
              AI & ML
            </Link>
            <Link href="/" className="font-poppins text-gray-8080 text-14 hover:text-black">
              Cybersecurity
            </Link>
            <Link href="/" className="font-poppins text-gray-8080 text-14 hover:text-black">
              Cloud Solutions
            </Link>
          </div>
        </div>
        <div className="newsletter col-span-2 lg:col-span-1 order-3 lg:order-4">
          <h6 className="font-poppins font-semibold text-16 text-black uppercase mb-5">
            NEWSLETTER
          </h6>
          <div className="lg:max-w-[350px]">
            <div className="relative border border-[#E4E4E7] rounded-[10px] lg:rounded-[40px] p-3 flex items-center gap-2 shadow-[0_-4px_4px_0_rgba(0,0,0,0.20)_inset]">
              <span className="text-[#A1A1AA]">{ReactIcons.email2}</span>
              <input
                type="text"
                placeholder="Email Address"
                className="font-poppins text-14 text-black w-full"
              />
            </div>
            <button className="btn-1 !bg-secondary-100 !rounded-[10px] lg:!rounded-[40px] w-full mt-3">
              Subscribe Now
            </button>
          </div>

          {/* <div className="lg:max-w-[400px]">
            <div className="newsletter-inner bg-white border border-b-transparent border-[#e4e4e4]  rounded-t-[10px] lg:rounded-t-[20px] p-5 pb-6 flex items-center gap-2">
              <span className="text-[#A1A1AA]">{ReactIcons.email2}</span>
              <input
                type="text"
                placeholder="Enter your email address"
                className="font-poppins text-14 text-black w-full"
              />
            </div>
            <button className="btn-1 !bg-secondary-100 !rounded-[10px] lg:!rounded-[40px] hover:!scale-100 w-full -mt-8">
              Subscribe Now
            </button>
          </div> */}
        </div>
      </div>

      <div className="py-5 flex lg:items-center lg:justify-between gap-3 flex-col lg:flex-row">
        <div className="flex gap-3 lg:gap-5 xl:gap-10 flex-row text-left">
          <Link href="/" className="font-poppins text-gray-8080 text-10 sm:text-14 hover:text-black">
            About us
          </Link>
          <Link href="/" className="font-poppins text-gray-8080 text-10 sm:text-14 hover:text-black">
            Contact
          </Link>
          <Link href="/" className="font-poppins text-gray-8080 text-10 sm:text-14 hover:text-black">
            Privacy policy
          </Link>
          <Link href="/" className="font-poppins text-gray-8080 text-10 sm:text-14 hover:text-black">
            Sitemap
          </Link>
          <Link href="/" className="font-poppins text-gray-8080 text-10 sm:text-14 hover:text-black">
            Terms of Use
          </Link>
        </div>
        <p className="font-poppins text-gray-8080 text-14">
          &copy; 2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
