// components/profile/Profile_01.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import ProfileCard from "@/components/ui/ItemCard/ProfileCard_01";
import SectionContent from "@/components/ui/frame/SectionContent";

const Profile_01 = () => {
  return (
    <div className="bg-white">
      <SectionContent className="bg-baseColor rounded-t-[40px]">
        <section className="md:max-w-[1200px] mx-auto">
          <ContentHeadline subTitle="会社概要" mainTitle="Profile" />
          <div className="mt-16 [&>dl:first-child>dt]:border-t md:[&>dl:first-child>dd]:border-t">
            <ProfileCard label="社名" value="合同会社TOMBO" />
            <ProfileCard label="創業" value="2020/04/01" />
            <ProfileCard label="設立" value="2024/01/16" />
            <ProfileCard
              label="本社所在地"
              value={`〒100-0004\n東京都千代田区大手町1-6-1 大手町ビル1F`}
            />
            <ProfileCard label="CEO" value="渡辺　哲平" />
            <ProfileCard label="従業員" value="50名(業務委託含む) " />
            <ProfileCard label="URL" value="example@aa.aaaa" />
            <ProfileCard
              label="事業内容"
              value={`・人事コンサルティング事業\n・人事限定コミュニティ｢人事総合ちゃんねる｣の運営`}
            />
          </div>
          <div className="mt-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.6178443367803!2d139.76228887549962!3d35.686410729689776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c07994f4c25%3A0x97815c2bf2a05c26!2z44CSMTAwLTAwMDQg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy65aSn5omL55S677yR5LiB55uu77yW4oiS77yRIOWkp-aJi-eUuuODk-ODq-ODguODs-OCsCAxZg!5e0!3m2!1sja!2sjp!4v1767763520111!5m2!1sja!2sjp"
              width="1200"
              height="400"
              style={{ border: "0" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full max-w-[600px] md:max-w-[1200px] rounded-[10px]"
            />
            <p className="mt-4 font-light">
              〒100-0004 <br />
              東京都千代田区大手町1-6-1 大手町ビル1F
            </p>
          </div>
        </section>
      </SectionContent>
    </div>
  );
};

export default Profile_01;
