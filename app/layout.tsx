import "./globals.css";
import type { Metadata, Viewport } from "next";
import ToastProvider from "@/components/providers/ToastProvider";
import { Noto_Sans_JP, Lato } from "next/font/google";
import { GoogleTagManager } from "@/components/ui/module/GoogleTagManager";

// Noto Sans JP フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["200", "300", "400", "500", "600", "700", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

// 英字 フォントの設定
const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-en",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 合同会社TOMBO",
    default: "合同会社TOMBO | 人事コンサルティング",
  },
  description:
    "合同会社TOMBOは、人事コンサルティング事業と人事限定コミュニティ「人事総合ちゃんねる」の運営を行っています。人(ヒト)と事(コト)に徹底的に向き合い、不退転の姿勢でお客様をサポートします。",
  keywords: [
    "人事コンサルティング",
    "人事総合ちゃんねる",
    "合同会社TOMBO",
    "人事",
    "コンサルティング",
    "採用",
    "組織開発",
  ],
  authors: [{ name: "合同会社TOMBO" }],
  creator: "合同会社TOMBO",
  publisher: "合同会社TOMBO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tombo.co.jp"
  ),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "合同会社TOMBO",
    title: "合同会社TOMBO | 人事コンサルティング",
    description:
      "合同会社TOMBOは、人事コンサルティング事業と人事限定コミュニティ「人事総合ちゃんねる」の運営を行っています。",
  },
  twitter: {
    card: "summary_large_image",
    title: "合同会社TOMBO | 人事コンサルティング",
    description:
      "合同会社TOMBOは、人事コンサルティング事業と人事限定コミュニティ「人事総合ちゃんねる」の運営を行っています。",
  },
  icons: {
    icon: "/common/favicon.png",
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="ja">
      <body
        className={`bg-baseColor font-notoSansJP text-white ${lato.variable}`}
      >
        <GoogleTagManager gtmId="GTM-XYZ" />
        <ToastProvider />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
