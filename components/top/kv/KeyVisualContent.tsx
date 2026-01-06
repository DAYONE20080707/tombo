// components/ui/frame/KeyVisualContent.tsx
"use client";

import classNames from "classnames";
import Image from "next/image";

interface KeyVisualContentProps {
  className?: string;
}

const KeyVisualContent: React.FC<KeyVisualContentProps> = ({ className }) => {
  return (
    <div className={classNames("relative w-full", className)}>
      <Image
        src="/top/kv/kv.jpg"
        alt="KV Image 1"
        priority
        fill
        className="object-cover"
      />
      {/* 黒20%のグラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20"></div>
    </div>
  );
};

export default KeyVisualContent;
