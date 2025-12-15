"use client";

import { legalData } from "@/utils/LegalData";
import { useState } from "react";
import LegalSidebar from "./LegalSidebar";
import LegalContent from "./LegalContent";

export default function SiteMap() {
  const [active, setActive] = useState("sitemap");
  const current = legalData[active];

  return (
    <section className="min-h-screen bg-primary-blue">
      <div className="container-small section-block-padding">
        <div className="my-20 text-center mx-auto">
          <h1 className="fl-main mb-4">{current.title}</h1>
          <p className="fl3 !text-white">
            {current.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-12 gap-12">
          <aside className="col-span-12 md:col-span-3">
            <LegalSidebar active={active} setActive={setActive} />
          </aside>

          <main className="col-span-12 md:col-span-9 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D9B24C]" />

            <div className="pl-10">
              <LegalContent type={active} />
            </div>
          </main>

        </div>
      </div>
    </section>
  );
}