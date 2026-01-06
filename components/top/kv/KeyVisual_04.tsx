// components/kv/KeyVisual_04.tsx
"use client";

import FirstViewContent from "@/components/top/kv/FirstViewContent";
import TopPageHeadline from "@/components/ui/frame/TopPageHeadline_02";
import KeyVisualContent from "@/components/top/kv/KeyVisualContent";
import ScrollButton from "@/components/ui/button/ScrollButton";

// キービジュアル
const KeyVisual_04 = () => {
  const scrollToNextSection = () => {
    const kvElement = document.getElementById("kv-section");
    if (kvElement && kvElement.nextElementSibling) {
      kvElement.nextElementSibling.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <FirstViewContent className="relative">
        {/* widthがフルサイズでない場合は指定する */}
        <section className="mx-auto">
          {/* KeyVisualContentに高さを指定 */}
          <KeyVisualContent className="h-screen md:h-[980px]" />
        </section>
        <TopPageHeadline
          mainTitle={
            <>
              ｢人(ヒト) ｣に…
              <br />
              ｢事(コト) ｣に…
              <br />
              徹底的に向き合う。
            </>
          }
          className="w-fit text-white absolute left-1/2  transform -translate-x-1/2 top-1/2 -translate-y-1/2 px-5"
        />
        <div className="absolute left-1/2  transform -translate-x-1/2 bottom-4 md:bottom-20">
          <ScrollButton onClick={scrollToNextSection} color="white" />
        </div>
      </FirstViewContent>
    </>
  );
};

export default KeyVisual_04;
