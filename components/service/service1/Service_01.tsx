// components/service/service1/Service_01.tsx

"use client";

import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import ServiceSection_01 from "@/components/ui/module/ServiceSection_01";
import { service1Data } from "@/components/data/service/Service1Data";

const Service_01 = () => {
  return (
    <>
      <SectionContent className="">
        <section className="w-full md:max-w-[1200px] mx-auto">
          <ContentHeadline subTitle="当社の強み" mainTitle="Strength" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {service1Data.map((item, index) => (
              <ServiceSection_01
                key={index}
                enTitle={item.enTitle}
                jaTitle={item.jaTitle}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Service_01;
