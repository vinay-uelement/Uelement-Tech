import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-secondary-200 rounded-[5px] px-4 sm:px-10 py-5 flex flex-col-reverse sm:flex-col gap-3 sm:gap-5 lg:gap-10">
      <div className="flex gap-3 sm:gap-5 items-start flex-col sm:flex-row">
        <img
          src="/icons/landing/quote.svg"
          alt="quote"
          className="w-[40px] md:w-[60px] mx-auto sm:mx-[unset]"
        />
        <p className="font-lato text-14 md:text-16 text-black text-center sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
          felis id augue sit cursus pellentesque enim arcu.{" "}
        </p>
      </div>
      <div className="flex gap-3 items-center flex-col sm:flex-row">
        <img
          src="/images/landing/user1.svg"
          alt="user"
          className="size-[75px] md:size-[100px] xl:size-[140px] rounded-full mx-auto sm:mx-[unset]"
        />
        <div className="text-center sm:text-left">
          <h6 className="text-14 md:text-16 text-balck">8 Sept 2024</h6>
          <h5 className="font-lato font-bold text-black text-16 md:text-18 my-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
          <p className="text-[#1D1D1D] font-lato text-12">CTO Lorem</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
