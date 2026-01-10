// components/message/About_01.tsx

"use client"

import MoreLinkButton from "@/components/ui/button/MoreButton"
import ContentHeadline from "@/components/ui/frame/ContentHeadline"
import PageContent from "@/components/ui/frame/PageContent"
import Image from "next/image"
import AboutSection from "@/components/ui/module/AboutSection_01"
import SectionContent from "@/components/ui/frame/SectionContent"

// メッセージ
const About_01 = () => {
  return (
    <>
      <SectionContent id="about" className="!pb-0 !px-0">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="w-full md:max-w-[1240px] mx-auto px-5">
          <ContentHeadline
            subTitle="私たちについて"
            mainTitle="Who we are"
            subTitleClassName=""
            titleClassName=""
          />
        </section>
        <AboutSection
          title="｢人(ヒト) ｣に…\n
          ｢事(コト) ｣に…\n
          徹底的に向き合う。"
          description={`メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
メッセージはいります。メッセージはいります。
メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。メッセージはいります。
メッセージはいります。メッセージはいります。`}
          buttonHref="/about"
          // 以下は任意
          // imageUrl="/path/to/image.jpg"
          // position="代表取締役"
          // name="山田太郎"
        />
      </SectionContent>
    </>
  )
}

export default About_01
