import "./globals.css"
import type { Metadata, Viewport } from "next"
import ToastProvider from "@/components/providers/ToastProvider"
import { Noto_Sans_JP, Lato } from "next/font/google"
import { GoogleTagManager } from "@/components/ui/module/GoogleTagManager"

// Noto Sans JP フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["200", "300", "400", "500", "600", "700", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

// 英字 フォントの設定
const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-en",
})

export const metadata: Metadata = {
  title: {
    template: "%s | チョイスWeb制作",
    default: "チョイスのWeb制作は",
  },
  description: "チョイスは、",
  icons: {
    icon: "/common/favicon.png",
  },
}

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body className={`bg-baseColor font-notoSansJP text-white ${lato.variable}`}>
        <GoogleTagManager gtmId="GTM-XYZ" />
        <ToastProvider />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
