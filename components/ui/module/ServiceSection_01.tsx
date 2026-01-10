import Image from "next/image";

interface ServiceSection_01Props {
  enTitle: string; // タイトル（英語）
  jaTitle: string; // タイトル（日本語）
  description: string; // 本文
  imageUrl: string; // 画像URL
}

const ServiceSection_01 = ({
  enTitle,
  jaTitle,
  description,
  imageUrl,
}: ServiceSection_01Props) => {
  const convertNewLines = (text: string) => {
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        {i !== text.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-[250px] md:h-[400px] mb-6">
        <Image
          src={imageUrl}
          alt={jaTitle || "service"}
          fill
          className="object-cover w-full h-full rounded-[20px]"
        />
      </div>
      <div>
        <p className="text-accentColor text-base font-en font-extrabold tracking-[0.03em]">
          {enTitle}
        </p>
        <h2 className="text-accentColor text-[22px] md:text-[22px] font-bold leading-[150%] tracking-[0.05em] mt-2 pb-4 border-b border-accentColor">
          {convertNewLines(jaTitle)}
        </h2>
        <p className="mt-4 text-white text-sm md:text-base font-normal leading-[160%] tracking-[0.02em] whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceSection_01;
