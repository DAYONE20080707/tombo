import React from "react";
import MoreButton from "@/components/ui/button/MoreButton";
import Image from "next/image";

interface AboutSection_04Props {
  title: string; // 見出しテキスト
  description: string; // 本文
  buttonHref?: string; // ボタンリンク先（任意）
  imageUrl?: string; // 画像URL（任意）
  position?: string; // 役職（任意）
  name?: string; // 氏名（任意）
}

const AboutSection_04 = ({
  title,
  description,
  buttonHref,
  imageUrl,
  position,
  name,
}: AboutSection_04Props) => {
  // 文字列内の\nを<br />に変換する関数
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className=" md:mt-16 flex flex-col md:flex-row gap-10 md:gap-20">
      <div className="md:w-[36vw] md:max-w-[520px] h-[300px] md:h-auto relative">
        <Image
          src={imageUrl || "/about/message.jpg"}
          alt={name || "message"}
          fill
          className="object-cover rounded-[20px]"
        />
      </div>
      <div className="md:max-w-[600px] ">
        <h3 className="text-3xl md:text-[40px] font-light leading-[160%] mt-10 md:mt-0 tracking-[0.03em]">
          {convertNewLines(title)}
        </h3>
        <p className="mt-10 !leading-[250%] md:text-lg whitespace-pre-line tracking-[0.03em]">
          {description}
        </p>
        {(position || name) && (
          <p className="mt-10 text-lg !leading-[250%]">
            {position}　{name}
          </p>
        )}
        {/* {buttonHref && (
          <MoreButton
            href={buttonHref}
            className="mt-10"
            variant="accent"
          />
        )} */}
      </div>
    </div>
  );
};

export default AboutSection_04;
