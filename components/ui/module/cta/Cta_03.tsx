// components/module/cta/Cta_03.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import PageContent from "@/components/ui/frame/PageContent";
import FreeButtonWhite from "@/components/ui/button/FreeButtonWhite";
import SectionContent from "../../frame/SectionContent";
import MoreLinkButton from "../../button/MoreButton";

const Cta_03 = () => {
  return (
    <>
      <SectionContent className="!py-0 !px-0 ">
        <section className="mx-auto grid md:grid-cols-2 rounded-t-[40px] overflow-hidden">
          <div className="text-white text-center bg-accentColor py-10 md:py-16 px-5">
            <p className="md:text-lg font-semibold mb-1">お問い合わせ</p>
            <h4 className="text-3xl md:text-[40px] leading-[120%]">
              個人のお客様
            </h4>
            <p className="md:text-lg my-3 md:my-6 leading-[160%]">
              お仕事・副業・転職先をお探しの
              <br />
              個人のお客様はこちら
            </p>
            <div className="flex justify-center">
              <MoreLinkButton href="#service" className="md:!w-[350px]" />
            </div>
          </div>
          <div className="bg-white text-accentColor text-center py-10 md:py-16 px-5">
            <p className="md:text-lg font-semibold mb-1">お問い合わせ</p>
            <h4 className="text-3xl md:text-[40px] leading-[120%]">
              法人のお客様
            </h4>
            <p className="md:text-lg my-3 md:my-6 leading-[160%] text-baseColor">
              ご相談・お見積もりをご希望の
              <br />
              企業様はこちら
            </p>
            <div className="flex justify-center">
              <MoreLinkButton
                href="/contact"
                variant="accentOutline"
                className="md:!w-[350px]"
              />
            </div>
          </div>
        </section>
      </SectionContent>
    </>
  );
};

export default Cta_03;
