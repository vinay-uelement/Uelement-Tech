const points = [
  {
    id: 1,
    icon: "../icons/resources/exepertise.svg",
    title: "Expertise",
    desc: "At UElement, our expertise lies in designing and delivering next-generation solutions across AI, Cloud, and Cybersecurity. We combine deep technical proficiency with strategic insight to help organizations innovate securely, scale efficiently, and stay ahead in an ever-evolving digital landscape. ",
  },
  {
    id: 2,
    icon: "../icons/resources/technology.svg",
    title: "Technology",
    desc: "Our technology foundation is built on AI-driven intelligence, cloud-native architecture, and advanced cybersecurity frameworks. We leverage cutting-edge innovations to design scalable, secure, and adaptive solutions that accelerate digital transformation and drive real-world impact across industries.",
  },
  {
    id: 3,
    icon: "../icons/resources/solution.svg",
    title: "Solutions",
    desc: "We deliver end-to-end solutions that empower businesses to innovate, scale, and operate securely. From AI-driven insights and cloud infrastructure optimization to advanced cybersecurity measures, our solutions are designed to address complex challenges and drive measurable business outcomes.",
  },
];

const ResourcesPointSection = () => {
  return (
    <div className="container-padding py-[var(--section-block-padding)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-6">
        {points.map((data) => (
          <div key={data.id} className="text-white">
            <div>
              <img src={data.icon} alt={data.title} />
            </div>
            <div className="mt-6">
              <h6 className="text-20 font-reddit-sans !text-white">{data.title}</h6>
              <p className="fl3 mt-6 !text-white">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPointSection;