const bullet = [
  {
    id: 1,
    desc: "Uptime for cloud infrastructure",
    number: "99.9%",
  },
  {
    id: 2,
    desc: "Reduction in security incidents",
    number: "85%",
  },
  {
    id: 3,
    desc: "Enterprise Client Worldwide",
    number: "24/7",
  },
];

const EmpoweringInnovation = () => {
  return (
    <div className="bg-primary-blue pt-[150px] pb-[75px]">
      <div className="container-small">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex-1">
            <div className="lg:max-w-[500px] xl:max-w-[550px]">
              <h3 className="title text-white italic leading-[1.2] -mt-[6px]">
                Empowering Innovation at the Intersection of Technology and
                Strategy
              </h3>
              <p className="font-light text-white mt-6 mb-10">
                At U-Element, we're dedicated to empowering organizations with
                intelligent, secure, and scalable digital solutions. Since our
                founding, we've combined expertise in AI, cybersecurity, cloud
                computing, and digital transformation to help businesses thrive
                in an ever-evolving technological landscape.
              </p>
            </div>
            <button className="btn-glass px-9 !bg-white">Contact Us</button>
            <div className="flex justify-center md:justify-start flex-wrap gap-4 xl:gap-8 mt-12">
              {bullet.map((point) => (
                <div
                  key={point.id}
                  className="w-[120px] xl:w-[140px] md:max-w-[160px] text-center border-[0.03px] border-[#d4d4d420] rounded-[5px] bg-[#D4D4D41A] backdrop-blur-2xl px-1 py-6 text-white"
                >
                  <p className="font-bold text-20 xl:text-30">{point.number}</p>
                  <p className="font-light text-12 xl:text-16">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/images/company/empowering-innovation.svg"
              alt="image"
              className="ml-auto max-h-[517px] w-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpoweringInnovation;
