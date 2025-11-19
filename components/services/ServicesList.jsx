const ServicesList = () => {
  return (
    <section className="bg-primary-blue">
      {/* service one */}

      <div className="container-padding py-[var(--section-block-padding)]">
        <div className="flex flex-col md:flex-row gap-20 bg-[#D4D4D41A] border-[0.5px] border-[#D4D4D4]/50 rounded-[5px] p-6 md:p-12">
          <div className="flex-1">
            <img
              src="/images/service/service-one.jpg"
              alt="service"
              className="md:h-[400px] w-auto object-cover "
            />
          </div>
          <div className="flex-1 flex flex-col items-end">
            <div className="flex items-center">
              <div className="size-[60px] bg-[#F3E7D3] flex items-center justify-center font-bold text-20 rounded-full">
                02
              </div>
              <div className=" w-[60px] md:w-[120px] h-[4px] bg-white"></div>
              <div className="text-24 md:text-30 text-white font-semibold ml-1">
                Cloud Solutions
              </div>
            </div>
            <div className="text-white my-12 text-end">
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
            <button className="btn-primary !bg-white !text-black !rounded-[5px] ml-auto block">
              Contact us
            </button>
          </div>
        </div>
      </div>
      {/* service two */}

      <div className="container-padding bg-[#4B6382] py-[var(--section-block-padding)]">
        <div className="flex flex-col md:flex-row gap-20  ">
          <div className="flex-1 flex flex-col ">
            <div className="flex items-center">
              <div className="size-[60px] bg-primary-blue text-white flex items-center justify-center font-bold text-20 rounded-full">
                01
              </div>
              <div className="w-[60px] md:w-[120px] h-[4px] bg-white"></div>
              <div className="text-24  md:text-30 text-white font-semibold ml-1">
                Cloud Solutions
              </div>
            </div>
            <div className="text-white my-12 ">
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
            <button className="btn-primary !bg-white !text-black !rounded-[5px] ml-auto block">
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

      <div className="container-padding py-[var(--section-block-padding)]">
        <div className="flex flex-col md:flex-row gap-20 bg-[#D4D4D41A] border-[0.5px] border-[#D4D4D4]/50 rounded-[5px] p-6 md:p-12">
          <div className="flex-1">
            <img
              src="/images/service/service-three.jpg"
              alt="service"
              className="md:h-[400px] w-auto object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-end">
            <div className="flex flex-row-reverse items-center">
              <div className="size-[60px] bg-[#F3E7D3] flex items-center justify-center font-bold text-20 rounded-full">
                03
              </div>
              <div className="w-[60px] hidden md:block md:w-[120px] h-[4px] bg-white"></div>
              <div className="text-24 md:text-30 text-white font-semibold mr-1">
                Ai & Machine Learning
              </div>
            </div>
            <div className="text-white my-12 text-end">
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
