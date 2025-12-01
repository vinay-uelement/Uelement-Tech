const TrustedPartnerShip = () => {
  const row1 = [
    "/icons/global/hashicorp.svg",
    "/icons/global/redhat.svg",
    "/icons/global/paloalto.svg",
    "/icons/global/wiz.svg",
    "/icons/global/hashicorp.svg",
  ];
  const row2 = [
    "/icons/global/hashicorp.svg",
    "/icons/global/redhat.svg",
    "/icons/global/paloalto.svg",
    "/icons/global/wiz.svg",
  ];

  return (
    <div className="bg-primary-blue py-[var(--section-block-padding)]">
      <div className="container-small py-[var(--section-block-padding)]">
        <div className="w-full sm:w-[80%] mx-auto bg-white p-8 pb-12 ribbon-border">
          <div className="title-div text-center mb-10 text-primary-blue">
            <p className="text-14 font-light">/Partners</p>
            <h4 className="title mt-3 mb-2">
              Trusted Partnerships That Drive Success
            </h4>
            <p className="mx-auto text-14">
              At Uelement, we believe that great partnerships are built on
              trust, collaboration, and shared vision. Over the years, we've
              worked hand-in-hand with industry leaders and innovative brands to
              deliver meaningful solutions that drive mutual growth and success.
            </p>
          </div>
          <div className="partners">
            <div className="flex items-center justify-center flex-wrap gap-10 xl:gap-14 mb-10">
              {row1?.map((item, ind) => (
                <img key={ind} src={item} />
              ))}
            </div>
            <div className="flex items-center justify-center flex-wrap gap-10 xl:gap-14">
              {row2?.map((item, ind) => (
                <img key={ind} src={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartnerShip;
