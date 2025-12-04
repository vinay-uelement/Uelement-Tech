import React from "react";

const ResourcesHero = () => {
  return (
    <div className="container-padding pt-[75px]">
      <div className="py-[var(--section-block-padding)] mt-[var(--section-block-padding)] rounded-[4px] flex flex-col md:flex-row gap-y-6 bg-white">
        <div className="flex-1 flex flex-col justify-center pl-[var(--container-small-padding)]">
          <h1 className="title text-primary-blue">
            Discover Tools, Insights, <br /> and Success Stories
          </h1>
          <p className="text-24 text-primary-blue mt-6">
            Access whitepapers, case studies, and expert insights designed to
            help your business innovate and scale.
          </p>
          <button className="btn-blue mt-6 w-fit">Contact Us</button>
        </div>
        <div className="flex-1">
          <img
            src="/images/resources/resources_hero.jpg"
            alt="resources"
            className="max-w-[90%] mx-auto shadow-left-down"
          />
        </div>
      </div>
    </div>
  );
};

export default ResourcesHero;
