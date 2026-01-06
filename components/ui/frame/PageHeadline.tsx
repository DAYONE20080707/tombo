// components/ui/frame/PageHeadline.tsx
import React from "react"
import classNames from "classnames"
import { PageHeadlineProps } from "@/types"
import Image from "next/image"

const PageHeadline: React.FC<PageHeadlineProps> = ({
  mainTitle,
  subTitle,
  enTitle,
  className = "",
  titleClassName = "",
  enTitleClassName = "",
  ImageSrc,
  ImageWidth,
  ImageHeight,
  id,
}) => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <span key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </span>
    ))
  }
  return (
    <section
      id={id}
      className={classNames(
        "w-full md:max-w-[1200px] md:mb-16 tracking-wide",
        className
      )}
    >
      {ImageSrc && (
        <Image
          src={ImageSrc}
          width={ImageWidth}
          height={ImageHeight}
          alt={String(mainTitle)}
          className="mb-4"
        />
      )}
      <p
        className={classNames(
          "text-sm md:text-lg font-semibold tracking-[0.03em] text-accentColor",
          enTitleClassName
        )}
      >
        {enTitle}
      </p>
      <h1
        className={classNames(
          "text-2xl md:text-[64px] leading-[150%] tracking-[0.05em] text-white font-extrabold font-en",
          titleClassName
        )}
      >
        {typeof mainTitle === "string" ? convertNewLines(mainTitle) : mainTitle}
      </h1>

      {subTitle && <h2>{subTitle}</h2>}
    </section>
  )
}

export default PageHeadline
