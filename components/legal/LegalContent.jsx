import { legalData } from "@/utils/LegalData";

export default function LegalContent({ type }) {
  const data = legalData[type];

  return (
    <div className="space-y-10">
      {data.sections.map((section, index) => (
        <div key={index} className="space-y-10">

          <h2 className="fl1-sep !text-white">
            {section.heading}
          </h2>

          <p className="fl3 !text-white/70 max-w-[900px]">
            {section.content}
          </p>

          {index !== data.sections.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-[#D9B24C] to-transparent" />

          )}
        </div>
      ))}
    </div>
  );
}
