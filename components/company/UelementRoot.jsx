const UelementRoot = () => {
  return (
    <div className="container-small py-12 xl:py-16">
          <img
            src="/icons/global/dark-logo.svg"
            alt="logo"
            className="w-[150px] md:w-[200px] 2xl:w-[250px] mb-5 md:mb-10 mx-auto"
          />
      <div className="flex flex-col md:flex-row gap-10 md:gap-[60px] 2xl:gap-[85px]">
        <div className="flex-1">
          <h4 className="text-18 xl:text-20 2xl:text-24 text-black mt-5 mb-4 font-montserrat">
            Behind every idea, there's a team driven to make a difference.
          </h4>
          <p className="font-light text-black text-14 xl:text-16 mb-3 md:w-[90%] w-full">
            Rooted in Pune, the land of valor and innovation, U-Element draws
            inspiration from the legacy of Chhatrapati Shivaji Maharaj and the
            resilience of Rajgad Fort. Just as these symbols represent strength,
            strategy, and vision, we bring the same spirit into the digital era.
            At U-Element, we empower organizations with intelligent, secure, and
            scalable digital solutions. With expertise in AI, cybersecurity,
            cloud computing, and digital transformation, we help businesses not
            only adapt but also lead in today’s ever-evolving technological
            landscape. Our foundation is Maratha in spirit — bold in vision,
            strategic in execution, and unwavering in commitment.
          </p>
          <h4 className="text-18 xl:text-20 2xl:text-24 text-black font-montserrat mb-4 mt-10">
            Behind every idea, there's a team driven to make a difference.
          </h4>
          <p className="font-light text-black text-14 xl:text-16 mb-3 md:w-[90%] w-full">
            We are a team driven by creativity, innovation, and purpose. Our
            journey is shaped by the belief that design and ideas have the power
            to solve real problems and create meaningful connections. With every
            project, we aim to deliver solutions that are not only visually
            appealing but also intuitive and impactful. Collaboration, passion,
            and excellence guide us as we continue to grow and make a
            difference.
          </p>
        </div>
        <div className="flex-1 bg-[#f3f3f3] p-6 rounded-[10px]">
          <img
            src="/images/company/behind-idea.jpg"
            alt="image"
            className="w-full behind-idea-image rounded-[10px]"
          />
      
          <button className="btn-blue mx-auto md:ml-auto block mt-6">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default UelementRoot;
