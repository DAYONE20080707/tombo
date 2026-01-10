// components/ui/button/MoreLinkButton.tsx

import Link from "next/link";
import classNames from "classnames";

const MoreLinkButton = ({
  href = "/", // デフォルトの href を "/" に設定
  className = "",
  children = "View more", // デフォルトのテキスト
  variant = "white", // デフォルトは白バージョン
}: {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "white" | "accent" | "black" | "accentOutline";
}) => {
  // バリエーションに基づくスタイルを決定
  const getVariantStyles = () => {
    switch (variant) {
      case "accent":
        return "bg-accentColor text-white border-accentColor";
      case "black":
        return "bg-transparent text-baseColor border-baseColor";
      case "accentOutline":
        return "bg-transparent text-accentColor border-accentColor";
      default: // white
        return "bg-transparent text-white border-white";
    }
  };

  // 矢印の色を決定
  const getArrowColor = () => {
    switch (variant) {
      case "accent":
        return "white";
      case "accentOutline":
        return "#FF7C56";
      case "black":
        return "black";
      default: // white
        return "white";
    }
  };

  return (
    <Link
      href={href}
      className={classNames(
        "border font-en tracking-[0.03em] cursor-pointer flex items-center justify-between w-full md:w-[300px] px-6 py-4 relative group rounded-full",
        getVariantStyles(),
        className
      )}
    >
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M6.25 12H17.75" stroke={getArrowColor()} />
        <path d="M13.75 8L17.75 12L13.75 16" stroke={getArrowColor()} />
        <circle cx="12" cy="12" r="11.5" stroke={getArrowColor()} />
      </svg>
    </Link>
  );
};

export default MoreLinkButton;
