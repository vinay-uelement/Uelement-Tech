'use client';
import { ReactIcons } from '@/utils/ReactIcons';
import Link from 'next/link';
import Checkbox from '../formElements/Checkbox/Checkbox';
import InputField from '../formElements/InputField/InputField';

const Footer = () => {
  return (
    <div>
      <ContactUs />
      <FooterContent />
    </div>
  );
};

const ContactUs = () => {
  const contactFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative">
      {/* Split Background */}
      <div className="absolute inset-0 -z-10">
        {/* Top half - Light Gray */}
        <div className="h-[60%] bg-[#F3F3F3]"></div>
        {/* Bottom half - Navy Blue */}
        <div className="h-[40%] bg-primary-blue"></div>
      </div>

      {/* Content */}
      <div className="container-padding py-10 sm:py-12 lg:py-16">
        {/* Title Section - positioned in gray area */}
        <div className="title-div text-primary-blue text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-12 sm:text-14 font-light text-gray-600">
            /Contact Us
          </p>
          <h4 className="font-montserrat font-bold text-24 sm:text-32 lg:text-40 xl:text-45 mt-3 mb-3 leading-tight">
            Ready to Transform Your Enterprise Security?
          </h4>
          <p className="font-reddit-sans font-light max-w-[750px] mx-auto text-13 sm:text-14 lg:text-16 text-gray-700 leading-relaxed">
            Empower your enterprise with smarter, scalable security that adapts
            to new threats—keeping your business safe, agile, and resilient.
          </p>
        </div>

        {/* Form Card - sits at the intersection */}
        <div className="max-w-[1400px] mx-auto bg-white rounded-[5px] p-[8px] sm:p-[10px] grid grid-cols-1 lg:grid-cols-[40%_60%] shadow-[0px_4px_72.2px_0px_rgba(0,0,0,0.25)]">
          {/* Left Side - Contact Information */}
          <div className="bg-primary-blue rounded-[5px] p-6 sm:p-8 lg:p-10 xl:p-12 text-white flex flex-col justify-between gap-8 lg:gap-10 relative overflow-hidden">
            {/* Large 92 Background */}
            <div className="absolute bottom-0 right-4 text-[140px] sm:text-[160px] lg:text-[180px] xl:text-[200px] font-bold text-white/5 select-none pointer-events-none leading-none">
              92
            </div>

            <div className="relative z-10">
              <h5 className="text-20 sm:text-22 lg:text-24 xl:text-28 font-montserrat font-semibold">
                Contact Information
              </h5>
              <p className="text-[#C9C9C9] text-13 sm:text-14 lg:text-16 mt-2">
                Say something to start a live chat!
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:gap-6 xl:gap-7 text-14 lg:text-16 relative z-10">
              <div className="flex items-center justify-start font-reddit-sans gap-3 lg:gap-4">
                <span className="text-18 lg:text-20">{ReactIcons.phone}</span>
                <span>+1012 3456 789</span>
              </div>
              <div className="flex items-center justify-start font-reddit-sans gap-3 lg:gap-4">
                <span className="text-18 lg:text-20">{ReactIcons.email}</span>
                <span>demo@gmail.com</span>
              </div>
              <div className="flex items-start justify-start font-reddit-sans gap-3 lg:gap-4">
                <span className="text-18 lg:text-20 mt-1">
                  {ReactIcons.gps}
                </span>
                <span className="text-left leading-relaxed">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
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
              {/* Name & Contact Fields */}
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

              {/* Subject Checkboxes */}
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

              {/* Message Field */}
              <div>
                <label className="font-reddit-sans text-12 sm:text-13 font-medium text-black block mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message.."
                  rows="3"
                  className="w-full placeholder:text-gray-8080 border-b border-b-[#D7D7D7] font-reddit-sans text-14 py-2 resize-none focus:border-primary-blue transition-colors"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center sm:justify-end">
                <button
                  className="bg-[#9B7025] hover:bg-[#9B7025]/90 text-white font-poppins text-14 sm:text-16 px-8 sm:px-10 py-2.5 sm:py-3 rounded-[40px] transition-all duration-300 hover:scale-105 w-full sm:w-auto shadow-[0px_4px_5px_0px_rgba(0,0,0,0.20)]"
                  type="submit"
                >
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
    <footer className="bg-primary-blue pt-10 sm:pt-12 lg:pt-16 pb-6 container-padding">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_auto_auto_1fr] gap-8 sm:gap-10 lg:gap-12 xl:gap-16 pb-8 sm:pb-10 lg:pb-12">
          {/* Company Details */}
          <div className="company-details">
            <img
              src="/icons/global/UElement_Logo_White 3.svg"
              alt="UElement logo"
              className="h-[35px] sm:h-[40px] w-auto mb-4 sm:mb-5"
            />
            <p className="text-white/60 font-reddit-sans text-13 sm:text-14 mb-6 sm:mb-8 max-w-[280px]">
              Empowering Secure Digital Transformation
            </p>

            {/* Social Icons */}
            <div className="flex text-18 sm:text-20 items-center justify-start gap-2">
              <Link
                href="#"
                className="size-[36px] sm:size-[40px] rounded-full grid place-content-center hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <span>{ReactIcons.facebook}</span>
              </Link>
              <Link
                href="#"
                className="size-[36px] sm:size-[40px] rounded-full grid place-content-center hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <span>{ReactIcons.facebook}</span>
              </Link>
              <Link
                href="#"
                className="size-[36px] sm:size-[40px] rounded-full grid place-content-center hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <span>{ReactIcons.facebook}</span>
              </Link>
              <Link
                href="#"
                className="size-[36px] sm:size-[40px] rounded-full grid place-content-center hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <span>{ReactIcons.facebook}</span>
              </Link>
              <Link
                href="#"
                className="size-[36px] sm:size-[40px] rounded-full grid place-content-center hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <span>{ReactIcons.facebook}</span>
              </Link>
              <Link
                href="#"
                className="size-[36px] sm:size-[40px] rounded-full grid place-content-center hover:translate-y-[-3px] duration-300 ease-in-out transition-all hover:text-white/70"
              >
                <span>{ReactIcons.facebook}</span>
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="company-links">
            <h6 className="font-poppins font-semibold text-14 sm:text-16 text-white uppercase mb-4 sm:mb-5">
              COMPANY
            </h6>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link
                href="/about"
                className="font-reddit-sans text-white/70 text-13 sm:text-14 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="font-reddit-sans text-white/70 text-13 sm:text-14 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/partners"
                className="font-reddit-sans text-white/70 text-13 sm:text-14 hover:text-white transition-colors"
              >
                Partners
              </Link>
              <Link
                href="/career"
                className="font-reddit-sans text-white/70 text-13 sm:text-14 hover:text-white transition-colors"
              >
                Career
              </Link>
            </div>
          </div>

          {/* Resources Links */}
          <div className="resources-links">
            <h6 className="font-poppins font-semibold text-14 sm:text-16 text-white uppercase mb-4 sm:mb-5">
              RESOURCES
            </h6>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Link
                href="/resources/ebooks"
                className="font-reddit-sans text-white/70 text-13 sm:text-14 hover:text-white transition-colors"
              >
                Free eBooks
              </Link>
              <Link
                href="/resources/tutorial"
                className="font-reddit-sans text-white/70 text-13 sm:text-14 hover:text-white transition-colors"
              >
                Development Tutorial
              </Link>
              <Link
                href="/blog"
                className="font-reddit-sans text-white/70 text-13 sm:text-14 hover:text-white transition-colors"
              >
                How to - Blog
              </Link>
              <Link
                href="/resources/playlist"
                className="font-reddit-sans text-white/70 text-13 sm:text-14 hover:text-white transition-colors"
              >
                Youtube Playlist
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="newsletter">
            <h6 className="font-poppins font-semibold text-14 sm:text-16 text-white uppercase mb-4 sm:mb-5">
              NEWSLETTER
            </h6>
            <div className="max-w-[300px]">
              <div className="relative bg-white rounded-[40px] px-4 py-3 flex items-center gap-2 mb-3">
                <span className="text-gray-400 text-16">
                  {ReactIcons.email2}
                </span>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="font-reddit-sans text-13 sm:text-14 text-gray-700 w-full placeholder:text-gray-400"
                />
              </div>
              <button className="bg-[#9B7025] hover:bg-[#9B7025]/90 text-white font-poppins text-13 sm:text-14 rounded-[40px] w-full py-3 transition-all duration-300 hover:scale-105">
                Submit Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3 sm:gap-5 lg:gap-8 justify-center sm:justify-start text-center">
            <Link
              href="/about"
              className="font-reddit-sans text-white/60 text-11 sm:text-13 hover:text-white transition-colors"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="font-reddit-sans text-white/60 text-11 sm:text-13 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="font-reddit-sans text-white/60 text-11 sm:text-13 hover:text-white transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="/sitemap"
              className="font-reddit-sans text-white/60 text-11 sm:text-13 hover:text-white transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/terms"
              className="font-reddit-sans text-white/60 text-11 sm:text-13 hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
          <p className="font-reddit-sans text-white/60 text-11 sm:text-13">
            © 2025, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
