// components/ui/itemCard/ServiceCard.tsx
import Image from "next/image";
import classNames from "classnames";
import ArrowRightLinkButton from "@/components/ui/button/ArroeRightLinkButton";

interface ServiceCardProps {
  id: number;
  subTitle: string;
  title: string;
  description: string;
  image: string; // 画像パスを受け取る
  href: string; // リンク先のURLを受け取る
  className?: string; // 任意のクラス名を受け取る
  imageContainerClass?: string; // 画像コンテナのクラスを受け取る
  showButton?: boolean; // ボタンの表示を制御するプロパティを追加
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  subTitle,
  description,
  image,
  href,
  className = "",
  imageContainerClass = "",
  showButton = true, // デフォルトでボタンを表示する設定
}) => {
  return (
    <div className={classNames("relative overflow-hidden", className)}>
      <div
        className={classNames(
          {
            "h-[250px] md:h-[400px] ": !className.includes("overlay"),
            "h-[250px] md:h-[500px]": className.includes("overlay"),
          },
          "w-full aspect-[580/500] relative rounded-[10px]",
          imageContainerClass
        )}
      >
        <Image
          fill
          src={image}
          alt={`solution ${id}`}
          objectFit="cover"
          className="block object-top rounded-[10px]"
          priority
        />
      </div>

      <div
        className={classNames("space-y-3 ", {
          "w-full md:h-[500px]  rounded-[10px] absolute inset-0 flex flex-col justify-center items-center text-white":
            className.includes("overlay"),
          "bg-black/20":
            className.includes("overlay") && title !== "coming soon...",
          "bg-[#bdbdbd]/80":
            className.includes("overlay") && title === "coming soon...",
          "relative text-black ": !className.includes("overlay"),
        })}
      >
        <div
          className={classNames(
            "font-bold text-[16px] font-poppins text-left text-accentColor ",
            {
              "text-white": className.includes("overlay"),
              "text-accentColor": !className.includes("overlay"),
            }
          )}
        >
          {subTitle}
        </div>
        <div
          className={classNames(
            "font-medium text-[22px] font-poppins text-left  ",
            {
              "text-white": className.includes("overlay"),
              "text-baseColor": !className.includes("overlay"),
            }
          )}
        >
          {title}
        </div>
        <div
          className={classNames("font-light whitespace-pre-line text-center", {
            "text-white  px-10 md:px-20": className.includes("overlay"),
            "text-baseColor": !className.includes("overlay"),
          })}
        >
          {description}
        </div>
        {showButton && ( // showButtonがtrueの場合のみ表示
          <div
            className={classNames({
              hidden: className.includes("overlay"),
              "text-black": !className.includes("overlay"),
            })}
          >
            <ArrowRightLinkButton href={href} label="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
