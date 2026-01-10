"use client";

import Image from "next/image";
import ContentHeadline from "../ui/frame/ContentHeadline";
import PageHeadline from "../ui/frame/PageHeadline";

interface Lowerkv_04Props {
  enTitle?: string;
  mainTitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  enTitleClassName?: string;
  titleClassName?: string;
}

// 私たちについて
const Lowerkv_04 = ({
  enTitle = "News",
  mainTitle = "お知らせ",
  imageSrc = "/common/lowerkv_news.jpg",
  imageAlt = "キービジュアル",
  imageWidth = 1440,
  imageHeight = 550,
  enTitleClassName = "",
  titleClassName = "",
}: Lowerkv_04Props) => {
  return (
    <div className="md:max-h-[900px] mx-auto relative overflow-hidden">
      <div className="md:max-w-[1240px] mx-auto space-y-10 px-5">
        <PageHeadline
          enTitle={enTitle}
          mainTitle={mainTitle}
          enTitleClassName={enTitleClassName}
          titleClassName={titleClassName}
        />
      </div>

      <div className="mt-6 md:mt-[80px] ">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-full object-cover aspect-[1920/550] rounded-t-[20px] md:rounded-t-[40px]"
        />
      </div>
    </div>
  );
};

export default Lowerkv_04;
