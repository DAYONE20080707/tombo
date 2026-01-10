import Link from "next/link"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const ContactButton = ({
  className = "",
  children = "Contact us", // デフォルトのテキスト
}: {
  className?: string
  children?: React.ReactNode
}) => {
  // テキストが英語の場合はfont-en、日本語の場合はfont-enを使わない
  const isEnglish = children === "Contact us"

  return (
    <Link
      href="/contact"
      className={`bg-accentColor text-white cursor-pointer flex items-center justify-center w-full px-5 py-4 rounded-full min-w-[200px] ${
        isEnglish ? "font-en text-lg tracking-[0.03em]" : " text-base tracking-[0.05em]"
      } ${className}`}
    >
      <EnvelopeIcon className="w-4 h-4 mr-1" />
      {children}
    </Link>
  )
}

export default ContactButton
