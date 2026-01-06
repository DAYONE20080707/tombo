//components/ui/navigation/CompanyInfo.tsx
import Image from "next/image"
export const CompanyInfo = [
  {
    companyName: (type: "primary" | "secondary" | "tertiary") => (
      <Image
        src={
          type === "primary"
            ? "/common/logo.png" // 1つ目のロゴパス（白色ロゴ）
            : type === "secondary"
            ? "/common/logo_square.png" // 2つ目のロゴパス（黒色ロゴ）
            : "/common/logo_black.png" // 3つ目のロゴパス（テキストなし）
        }
        alt="logo"
        width={200} // 適切な幅を指定
        height={40} // 適切な高さを指定
        className="w-full h-full object-contain"
      />
    ),
    companyNameText: "合同会社TOMBO",
    companyPostalCode: "100-0004",
    companyAddress: "東京都千代田区大手町1-6-1 大手町ビル1F",
    companyTel: "000-000-0000",
    companyTelHref: "tel:0000000000",
    companyEmail: "info@company.co.jp",
  },
]

export default CompanyInfo
