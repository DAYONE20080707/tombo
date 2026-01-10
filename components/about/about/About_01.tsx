// components/message/About_01.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageContent from "@/components/ui/frame/PageContent";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSection_03";

// メッセージ
const About_01 = () => {
  return (
    <>
      <SectionContent className="pt-14 md:pt-24">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1200px] mx-auto">
          <ContentHeadline
            subTitle="社名・ロゴに込めた想い"
            mainTitle="Company name & Logo"
          />
          <AboutSection
            title="不退転の勝ち虫、\n蜻蛉。"
            description={`社名のTOMBOは皆さんお察しの通り、昆虫の｢蜻蛉｣から拝借しております。
拝借した理由は以下、3つになります。

①不退転　
蜻蛉は後ろ向きに飛べず、前進しか出来ない事から当社も｢人(ヒト) ｣｢事(コト) ｣に徹底的に向き合い決して引かない強いスタンスに肖りました。

②勝ち虫
不退転である事から装飾品に蜻蛉を誂える戦国武将も多く、縁起物として重宝されていた。

③3つの目
人事には3つの目という考え方があります。
それぞれ鳥の目・虫の目・魚の目なのですが蜻蛉は幼虫の時はヤゴとして水中で生活し、成虫になると虫として大空に飛び立ち、鳥の様に素早く正確に狩りをする食物連鎖の頂点です。`}
            imageUrl="/about/company-logo.jpg"

            // 以下は任意
            // position="代表取締役"
            // name="山田太郎"
          />
        </section>
      </SectionContent>
    </>
  );
};

export default About_01;
