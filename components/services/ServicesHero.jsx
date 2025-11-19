const ServicesHero = () => {
  return (
    <div className="partners-hero bg-[url(/images/service/service_hero.svg)] bg-cover bg-bottom-right bg-no-repeat h-screen max-h-[600px] md:max-h-[800px]  relative">
      <h1 className="page-title absolute bottom-3 right-3 z-10 text-white">
        Our <span className="text-secondary-100">S</span>ervices
      </h1>

      <div className="hidden md:flex absolute bottom-12 left-[6%] z-10  gap-3">
        <div className=" font-roboto font-semibold text-20 text-white/50 bottom-9 left-[8%] -mb-1">
          Services
        </div>
        <img src="/images/service/horizontal-line.svg" alt="icon" />
      </div>
    </div>
  );
};

export default ServicesHero;
