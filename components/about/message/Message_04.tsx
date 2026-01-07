// components/message/Message_04.tsx

"use client";

import MoreLinkButton from "@/components/ui/button/MoreButton";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import SectionContent from "@/components/ui/frame/SectionContent";
import Image from "next/image";
import AboutSection from "@/components/ui/module/AboutSection_04";

// メッセージ
const Message_04 = () => {
  return (
    <>
      <SectionContent className="bg-white text-baseColor">
        {/* widthがフルサイズでない場合は指定する */}
        <section className=" md:max-w-[1200px] mx-auto ">
          <ContentHeadline
            subTitle="代表挨拶"
            mainTitle="Message"
          />
                <AboutSection
        title="人(ヒト) に…\n事(コト) に…\n徹底的に向き合う。"
        description={`全ての企業は｢人(ヒト) ｣の集合体ですが
          集まると必ず何か｢事(コト) ｣が起こります。
          
          当社は人事の名に恥じぬ
｢人(ヒト) ｣と｢事(コト) ｣に
蜻蛉の不退転の精神で徹底的に向き合い続け、
全ての企業の人的経営課題を解決致します。`}
        position="CEO"
        name="渡辺　哲平"
        // 以下は任意
        // buttonHref="/about"
        // imageUrl="/path/to/image.jpg"
      />
        </section>
      </SectionContent>
    </>
  );
};

export default Message_04;
