'use client';
import { ReactIcons } from '@/utils/ReactIcons';
import Link from 'next/link';
import Checkbox from '../formElements/Checkbox/Checkbox';
import InputField from '../formElements/InputField/InputField';
import Icon from '../resources/Icon';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  if (pathname === '/contact-us') return null;
  
  return (
    <div>
      <ContactUs />
      <FooterContent />
      <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary-blue container-padding py-8 lg:py-12">
        <div className="flex flex-wrap gap-3 sm:gap-5 lg:gap-8 justify-center sm:justify-start text-center">
          <Link
            href="/about"
            className="font-reddit-sans text-[#808080] text-13 sm:text-16 hover:text-white transition-colors"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="font-reddit-sans text-[#808080] text-13 sm:text-16 hover:text-white transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="font-reddit-sans text-[#808080] text-13 sm:text-16 hover:text-white transition-colors"
          >
            Privacy policy
          </Link>
          <Link
            href="/sitemap"
            className="font-reddit-sans text-[#808080] text-13 sm:text-16 hover:text-white transition-colors"
          >
            Sitemap
          </Link>
          <Link
            href="/terms"
            className="font-reddit-sans text-[#808080] text-13 sm:text-16 hover:text-white transition-colors"
          >
            Terms of Use
          </Link>
        </div>
        <p className="font-reddit-sans text-[#808080] text-13 sm:text-16">
          © 2025, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const contactFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <div className="h-[60%] bg-[#F3F3F3] mx-2"></div>
        <div className="h-[40%] bg-primary-blue"></div>
      </div>

      <div className="container-padding py-10 sm:py-12 lg:py-16">
        <div className="title-div text-primary-blue text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="fl-slash">/Contact Us</p>
          <h4 className="fl1 leading-tight mb-10 md:mb-14">
            Ready to Transform Your Enterprise Security?
          </h4>
          <p className="fl3 md:max-w-1/2 mx-auto leading-relaxed">
            Empower your enterprise with smarter, scalable security that adapts
            to new threats—keeping your business safe, agile, and resilient.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto bg-white rounded-[4px] p-[8px] sm:p-[10px] grid grid-cols-1 lg:grid-cols-[40%_60%] shadow-[0px_4px_72.2px_0px_rgba(0,0,0,0.25)]">
          <div className="bg-primary-blue rounded-[4px] p-6 sm:p-8 lg:p-10 xl:p-12 text-white flex flex-col justify-start gap-8 lg:gap-16 relative overflow-hidden min-h-[350px]">
            <div className="absolute -bottom-8 -right-3 text-[160px] sm:text-[180px] lg:text-[200px] xl:text-[250px] font-bold text-[#111f3f] select-none pointer-events-none leading-none">
              92
            </div>

            <div className="relative z-10">
              <h5 className="fl1 !text-white">Contact Information</h5>
              <p className="text-[#C9C9C9] font-reddit-sans font-medium md:text-[18px] text-14 mt-2">
                Say something to start a live chat!
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:gap-6 xl:gap-9 text-14 lg:text-16 relative z-10">
              <div className="flex items-center justify-start font-reddit-sans gap-3 lg:gap-4">
                <Icon name="phone" />
                <span>+91 762 069 0561</span>
              </div>
              <div className="flex items-center justify-start font-reddit-sans gap-3 lg:gap-4">
                <Icon name="email" />
                <span>contact@uelement.in</span>
              </div>
              <div className="flex items-start justify-start font-reddit-sans gap-3 lg:gap-4">
                <Icon name="location" />
                <span className="text-left leading-relaxed">
                  UElement Technologies Pvt. Ltd. 9th Floor, Pride Gateway, Sr.
                  No. 112, Baner, Pune,
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
            <form
              autoComplete="off"
              className="flex flex-col gap-5 lg:gap-7"
              onSubmit={contactFormHandler}
            >
              <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
                <div>
                  <InputField
                    label="First Name"
                    placeholder="John"
                    name="firstName"
                  />
                </div>
                <div>
                  <InputField
                    label="Last Name"
                    placeholder="Doe"
                    name="lastName"
                  />
                </div>
                <div>
                  <InputField label="Email" placeholder="" name="email" />
                </div>
                <div>
                  <InputField
                    label="Phone Number"
                    placeholder="+1 012 3456 789"
                    name="phone"
                  />
                </div>
              </div>

              <div>
                <h6 className="font-reddit-sans font-semibold text-13 sm:text-14 text-black mb-3">
                  Select Subject?
                </h6>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Checkbox label="Cyber security" id="cyberSecurity" />
                  <Checkbox label="Enterprise Cloud" id="enterpriseCloud" />
                  <Checkbox
                    label="Artificial Intelligence"
                    id="artificialIntelligence"
                  />
                  <Checkbox
                    label="Digital Transformation"
                    id="digitalTransformation"
                  />
                </div>
              </div>

              <div>
                <label className="font-reddit-sans text-12 sm:text-13 font-medium text-black block mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message.."
                  rows="1"
                  className="w-full placeholder:text-gray-8080 border-b border-b-[#D7D7D7] font-reddit-sans text-14 py-2 resize-none focus:border-primary-blue transition-colors"
                ></textarea>
              </div>

              <div className="flex justify-center sm:justify-end">
                <button className="btn-yellow hover:scale-101" type="submit">
                  Request a meeting
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FooterContent = () => {
  return (
    <footer className="bg-primary-blue pt-2 lg:pt-4 pb-6 container-padding">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 pb-8 sm:pb-10 lg:pb-12">
          {/* Company Details */}
          <div className="company-details">
            <img
              src="/icons/global/UElement_Logo_White 3.svg"
              alt="UElement logo"
              className="h-[35px] sm:h-[48px] w-auto mb-4 mb-20"
            />
            <p className="text-[#808080] font-reddit-sans text-[14px] mb-6 sm:mb-8 ">
              Empowering Secure Digital Transformation
            </p>

            <div className="flex items-center justify-start gap-6">
              <Link
                href="#"
                className=" hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <Icon name="linkedin" size={35} />
              </Link>
              <Link
                href="#"
                className="  hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <Icon name="facebook" size={35} />
              </Link>
              <Link
                href="#"
                className="  hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <Icon name="instagram" size={35} />
              </Link>
              <Link
                href="#"
                className="  hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <Icon name="twitter" size={35} />
              </Link>
              <Link
                href="#"
                className="  hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <Icon name="youtube" size={35} />
              </Link>
              <Link
                href="#"
                className="  hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <Icon name="github" size={35} />
              </Link>
            </div>
          </div>

          <div className="flex flex-row md-flex-col justify-center gap-32 md:gap-20 my-6 md:my-0">
            {/* Company Links */}
            <div className="company-links">
              <h6 className=" font-semibold text-14 sm:text-22 font-reddit-sans text-white uppercase mb-4 sm:mb-5">
                COMPANY
              </h6>
              <div className="flex flex-col gap-3 sm:gap-4 font-reddit-sans font-light">
                <Link
                  href="/company"
                  className="fl3 !text-[#e2e2e2] text-13 sm:text-16 hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="fl3 !text-[#e2e2e2] text-13 sm:text-16 hover:text-white transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/our-partners"
                  className="fl3 !text-[#e2e2e2] text-13 sm:text-16 hover:text-white transition-colors"
                >
                  Partners
                </Link>
                {/* <Link
                  href="/career"
                  className="fl3 !text-[#e2e2e2] text-13 sm:text-16 hover:text-white transition-colors"
                >
                  Career
                </Link> */}
              </div>
            </div>

            {/* Resources Links */}
            <div className="resources-links">
              <h6 className=" font-semibold text-14 sm:text-22 font-reddit-sans text-white uppercase mb-4 sm:mb-5">
                RESOURCES
              </h6>
              <div className="flex flex-col gap-3 sm:gap-4 font-reddit-sans font-light">
                <Link
                  href="/resources"
                  className="fl3 !text-[#e2e2e2] text-13 sm:text-16 hover:text-white transition-colors"
                >
                  Free eBooks
                </Link>
                <Link
                  href="/resources"
                  className="fl3 !text-[#e2e2e2] text-13 sm:text-16 hover:text-white transition-colors"
                >
                  Development Tutorial
                </Link>
                <Link
                  href="/resources"
                  className="fl3 !text-[#e2e2e2] text-13 sm:text-16 hover:text-white transition-colors"
                >
                  How to - Blog
                </Link>
                <Link
                  href="/resources"
                  className="fl3 !text-[#e2e2e2] text-13 sm:text-16 hover:text-white transition-colors"
                >
                  Youtube Playlist
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="newsletter ml-10">
            <h6 className=" font-semibold text-14 sm:text-22 font-reddit-sans text-white uppercase mb-4 sm:mb-5">
              NEWSLETTER
            </h6>
            <div className="max-w-[300px]">
              <div className="relative bg-white rounded-[4px] px-4 py-3 flex items-center gap-2 mb-3">
                <span className="text-gray-400 text-16">
                  {ReactIcons.email}
                </span>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="font-reddit-sans text-13 sm:text-14 text-gray-700 w-full placeholder:text-gray-400"
                />
              </div>
              <button className="btn-yellow w-full hover:scale-101">
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
