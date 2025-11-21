const ServicesList = () => {
  return (
    <section className="bg-white mb-[75px]">
      {/* service one */}

      <div className="container-padding">
        <div className="flex flex-col md:flex-row gap-20 bg-[#F3F3F3] border-[0.5px] border-[#D4D4D4]/50 rounded-[5px] p-6 md:p-12">
          <div className="flex-1">
            <img
              src="/images/service/service-one.jpg"
              alt="service"
              className="md:h-[400px] w-auto object-cover "
            />
          </div>
          <div className="flex-1 flex flex-col items-start">
            <div className="flex items-center">
              <div className="size-[60px] bg-[#D7D7D7] flex items-center justify-center font-bold text-20 rounded-full">
                01
              </div>
              <div className=" w-[60px] md:w-[120px] h-[4px] bg-[#D2D2D2]"></div>
              <div className="text-24 md:text-30 text-black font-semibold ml-3">
                Cybersecurity
              </div>
            </div>
            <div className="text-black my-12 text-start">
              <h6 className="font-semibold text-20">
                Architecting and Optimizing perfect Cloud Solutions.
              </h6>
              <p className="mt-6 text-14 font-light">
                Our Enterprise Cloud Solutions empower global businesses with an
                optimized, scalable, and secure cloud infrastructure tailored to
                their unique needs. Designed to enhance efficiency and
                adaptability, our solutions enable organizations to manage
                growing demands, streamline operations, and maintain the highest
                levels of data security.
              </p>
            </div>
            <button className="btn-primary !bg-white !text-black !rounded-[5px] mr-auto block">
              Contact us
            </button>
          </div>
        </div>
      </div>
      {/* service two */}

      <div className="container-padding">
        <div className="flex flex-col bg-[#E0E0E0] md:flex-row gap-20 p-6 md:p-12">
          <div className="flex-1 flex flex-col ">
            <div className="flex items-center">
              <div className="size-[60px] bg-[#9C9C9C] text-black flex items-center justify-center font-bold text-20 rounded-full">
                02
              </div>
              <div className="w-[60px] md:w-[120px] h-[4px] bg-[#9c9c9c]"></div>
              <div className="text-24  md:text-30 text-black font-semibold ml-3">
                Cloud Solutions
              </div>
            </div>
            <div className="text-black my-12 ">
              <h6 className="font-semibold text-20">
                Architecting and Optimizing perfect Cloud Solutions.
              </h6>
              <p className="mt-6 text-14 font-light">
                Our Enterprise Cloud Solutions empower global businesses with an
                optimized, scalable, and secure cloud infrastructure tailored to
                their unique needs. Designed to enhance efficiency and
                adaptability, our solutions enable organizations to manage
                growing demands, streamline operations, and maintain the highest
                levels of data security.
              </p>
            </div>
            <button className="btn-primary !bg-white !text-black !rounded-[5px] mr-auto block">
              Get a Demo
            </button>
          </div>
          <div className="flex-1">
            <img
              src="/images/service/service-two.jpg"
              alt="service"
              className="md:h-[400px] w-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* service three */}

      <div className="container-padding">
        <div className="flex flex-col md:flex-row gap-20 bg-[#F3F3F3] border-[0.5px] border-[#D4D4D4]/50 rounded-[5px] p-6 md:p-12">
          <div className="flex-1">
            <img
              src="/images/service/service-three.jpg"
              alt="service"
              className="md:h-[400px] w-auto object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-start">
            <div className="flex flex-row items-center">
              <div className="size-[60px] bg-[#D7D7D7] flex items-center justify-center font-bold text-20 rounded-full">
                03
              </div>
              <div className="w-[60px] hidden md:block md:w-[120px] h-[4px] bg-[#D2D2D2]"></div>
              <div className="text-24 md:text-30 text-black font-semibold ml-3">
                Ai & Machine Learning
              </div>
            </div>
            <div className="text-black my-12">
              <h6 className="font-semibold text-20">
                Complete Enterprise Security.
              </h6>
              <p className="mt-6 text-14 font-light">
                Our Enterprise Cloud Solutions empower global businesses with an
                optimized, scalable, and secure cloud infrastructure tailored to
                their unique needs. Designed to enhance efficiency and
                adaptability, our solutions enable organizations to manage
                growing demands, streamline operations, and maintain the highest
                levels of data security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
