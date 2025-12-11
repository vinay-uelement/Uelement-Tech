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
      <div className="container-small md:py-[var(--section-block-padding)]">
        <div className="w-full sm:w-[80%] mx-auto bg-white p-8 pb-12 ribbon-border rounded-[10px]">
          <div className="title-div text-center mb-10 text-primary-blue">
            <p className="fl-slash">/Partners</p>
            <h4 className="fl2 mt-3 mb-2">
              TFocus on Integration and Expertise
            </h4>
            <p className="mx-auto fl3 text-14">
              A network of $15+$ strategic alliances ensuring seamless technology synergy across Cloud, AI, and Security.
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
