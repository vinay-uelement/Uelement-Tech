import { legalData } from "@/utils/LegalData";

export default function LegalContent({ type }) {
  const data = legalData[type];

  return (
    <div className="space-y-10">
      {data.sections.map((section, index) => (
        <div key={index} className="space-y-10">

          <h2 className="font-montserrat font-semibold text-14 md:text-18 xl:text-[22px] mb-2 md:mb-4 3xl:mb-6 !text-[#232223]">
            {section.heading}
          </h2>

          <p className="fl3 !text-[#232223] max-w-[900px]">
            {section.content}
          </p>

          {index !== data.sections.length - 1 && (
                  <div className="h-px bg-[#DFDFDF]" />
          )}
        </div>
      ))}
    </div>
  );
}
