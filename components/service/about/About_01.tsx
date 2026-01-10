// components/message/About_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSection_02";

// メッセージ
const About_01 = () => {
  return (
    <>
      <SectionContent className="bg-white text-baseColor">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1680px] mx-auto">
           <AboutSection
          title="それぞれの｢課題｣と\nそれぞれの｢答え｣が\n必ずある。"
          description={`多種多様な業種・業界、大小様々な企業規模のクライアントの人的経営課題に日夜チャレンジする当社ですが「全く同じ課題」も無ければ「全く同じ答え」も存在しません。
            
            課題も答えも必ず最後は個別最適になります。その答えを導き出す為にプロの知識 + 圧倒的な行動量 + 蜻蛉の不退転の精神を以って圧倒的な成果へと導きます。`}
          buttonHref="/about"
          // 以下は任意
          // imageUrl="/path/to/image.jpg"
          // position="代表取締役"
          // name="山田太郎"
        />
        </section>
       
      </SectionContent>
    </>
  );
};

export default About_01;
