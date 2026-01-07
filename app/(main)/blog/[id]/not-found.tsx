import MoreLinkButton from "@/components/ui/button/MoreButton"
import MoreButtonClick from "@/components/ui/button/MoreButtonClick"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">記事が見つかりません</h1>
        <p className="mb-8">
          お探しの記事は存在しないか、削除された可能性があります。
        </p>
        <MoreLinkButton href="/blog" >ブログ一覧に戻る</MoreLinkButton>
      </div>
    </div>
  )
}
