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
      {/* SP用画像 */}
      <Image
        src="/top/kv/kv_sp.jpg"
        alt="KV Image 1"
        priority
        fill
        className="object-cover block md:hidden"
      />
      {/* PC用画像 */}
      <Image
        src="/top/kv/kv.jpg"
        alt="KV Image 1"
        priority
        fill
        className="object-cover hidden md:block"
      />
      {/* 黒20%のグラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20"></div>
    </div>
  );
};

export default KeyVisualContent;
