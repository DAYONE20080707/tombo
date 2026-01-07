import MoreButton from "@/components/ui/button/MoreButton";
import Image from "next/image";

interface ServiceSection_02Props {
  enTitle: string; // タイトル（英語）
  jaTitle: string; // タイトル（日本語）
  headingText: string; // 見出しテキスト
  description: string; // 本文
  buttonHref?: string; // ボタンリンク先（任意）
  imageUrl?: string; // 画像URL（任意）
}

const ServiceSection_02 = ({
  enTitle,
  jaTitle,
  headingText,
  description,
  buttonHref,
  imageUrl,
}: ServiceSection_02Props) => {
  const convertNewLines = (text: string) => {
    return text.split("\\n").map((line, i) => (
      <span key={i}>
        {line}
        {i !== text.split("\\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="flex flex-col md:flex-row justify-start gap-10 md:gap-20">
      <div className="md:w-1/2">
        <p className="text-accentColor text-lg font-en font-extrabold tracking-[0.03em]">
          {enTitle}
        </p>
        <h2 className="text-accentColor text-[28px] font-bold leading-[150%] tracking-[0.05em] mt-2 pb-6 border-b border-accentColor">
          {jaTitle}
        </h2>
        <h3 className="text-[22px] font-medium leading-[160%] tracking-[0.03em] mt-6">
          {convertNewLines(headingText)}
        </h3>
        <p className="mt-4 text-base font-normal leading-[160%] tracking-[0.02em] whitespace-pre-line">
          {description}
        </p>
        {buttonHref && (
          <MoreButton
            href={buttonHref}
            className="mt-6 text-accentColor border-accentColor"
          />
        )}
      </div>
      <div className="md:w-1/2 relative min-h-[300px]">
        <Image
          src={imageUrl || "/service/service2.jpg"}
          alt={jaTitle || "message"}
          className="object-cover w-full h-full rounded-[15px]"
        />
      </div>
    </div>
  );
};

export default ServiceSection_02;
