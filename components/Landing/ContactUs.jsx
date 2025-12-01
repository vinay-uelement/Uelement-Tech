'use client';
import { ReactIcons } from '@/utils/ReactIcons';
import Checkbox from '../formElements/Checkbox/Checkbox';
import InputField from '../formElements/InputField/InputField';

const ContactUs = () => {
  const contactFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section
      id="contactus"
      className="container-padding bg-primary-blue py-[var(--section-block-padding)]"
    >
      <div className="title-div text-white text-center mb-10">
        <p className="slash">/Contact Us</p>
        <h4 className="title mt-3">
          Ready to Transform Your Enterprise Security?
        </h4>
        <p className="font-light max-w-[750px] mx-auto text-14 lg:text-16">
          Empower your enterprise with smarter, scalable security that adapts to
          new threats—keeping your business safe, agile, and resilient.
        </p>
      </div>
      <div className=" bg-white rounded-[5px] p-[10px] grid grid-cols-1 lg:grid-cols-[40%_60%]">
        <div className="bg-primary-blue rounded-[5px] p-5 lg:p-10 text-white flex flex-col gap-10 md:gap-20 bg-[url(/images/landing/92-image-for-contact-us-section.svg)] bg-no-repeat bg-bottom-right">
          <div className="font-poppins text-left">
            <h5 className="2xl:text-28 xl:text-24 md:text-22 text-20 font-dm-serif">
              Contact Information
            </h5>
            <p className="text-[#C9C9C9] text-14 lg:text-16">
              Say something to start a live chat!
            </p>
          </div>
          <div className="flex flex-col gap-5 text-14 lg:text-16 lg:gap-7">
            <div className="flex items-center justify-start font-reddit-sans gap-3">
              <span className="text-20">{ReactIcons.phone}</span>
              <span>+1012 3456 789</span>
            </div>
            <div className="flex items-center justify-start font-reddit-sans gap-3">
              <span className="text-20">{ReactIcons.email}</span>
              <span>demo@gmail.com</span>
            </div>
            <div className="flex items-start justify-start font-reddit-sans gap-3">
              <span className="text-20">{ReactIcons.gps}</span>
              <span className="text-left">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </span>
            </div>
          </div>

          {/* <div className="flex text-16 items-center justify-start gap-3 lg:gap-5">
            <Link className="size-[25px] lg:size-[30px] bg-black rounded-full grid place-content-center hover:translate-y-[-5px] hover:scale-120 duration-300 ease-in-out transition-all hover:text-[#1DA1F2]">
              <span className="text-12 lg:text-16">{ReactIcons.twitter}</span>
            </Link>
            <Link className="size-[25px] lg:size-[30px] bg-black rounded-full grid place-content-center hover:translate-y-[-5px] hover:scale-120 duration-300 ease-in-out transition-all hover:text-[#FF0069]">
              <span className="text-12 lg:text-16">
                {ReactIcons.instagram2}
              </span>
            </Link>
            <Link className="size-[25px] lg:size-[30px] bg-black rounded-full grid place-content-center hover:translate-y-[-5px] hover:scale-120 duration-300 ease-in-out transition-all">
              <span className="text-12 lg:text-16">{ReactIcons.discord}</span>
            </Link>
          </div> */}
        </div>
        <div className="p-2 sm:p-5 lg:p-10">
          <form
            autoComplete="off"
            className="flex flex-col gap-5 md:gap-10"
            onSubmit={contactFormHandler}
          >
            <div className="grid md:grid-cols-2 gap-5">
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
                <InputField
                  label="Email"
                  placeholder="johndoe@gmail.com"
                  name="email"
                />
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
              <h6 className="font-reddit-sans font-semibold text-14 text-black mb-3">
                Select Subject?
              </h6>
              <div className="flex sm:items-center gap-3 flex-wrap flex-col sm:flex-row">
                <div>
                  <Checkbox label="Cyber security" id="cyberSecurity" />
                </div>
                <div>
                  <Checkbox label="Enterprise Cloud" id="enterpriseCloud" />
                </div>
                <div>
                  <Checkbox
                    label="Artificial Intelligence"
                    id="artificialIntelligence"
                  />
                </div>
                <div>
                  <Checkbox
                    label="Digital Transformation"
                    id="digitalTransformation"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label className="text-12 font-medium">Message</label>
                <textarea
                  placeholder="Write your message.."
                  className="placeholder:text-gray-8080 border-b border-b-gray-8080 font-medium text-14 p-2 resize-none"
                ></textarea>
              </div>
              <button
                className="btn-1 !bg-secondary ml-auto block mt-2 sm:mt-5 !font-reddit-sans"
                type="submit"
              >
                Request a meeting
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
