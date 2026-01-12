"use client"

import { useState } from "react"
import React from "react"
import { useRouter } from "next/navigation"
import SubmitButton from "@/components/ui/button/SubmitButton"

interface FormField {
  label: string
  name: string
  type: "text" | "email" | "tel" | "textarea" | "select"
  placeholder?: string
  required: boolean
  options?: { value: string; label: string }[]
}

const formFields: FormField[] = [
  {
    label: "会社名",
    name: "company",
    type: "text",
    placeholder: "合同会社TOMBO",
    required: true,
  },
  {
    label: "姓",
    name: "lastName",
    type: "text",
    placeholder: "田中",
    required: true,
  },
  {
    label: "名",
    name: "firstName",
    type: "text",
    placeholder: "太郎",
    required: true,
  },
  {
    label: "部署",
    name: "department",
    type: "text",
    placeholder: "営業部",
    required: false,
  },
  {
    label: "役職",
    name: "position",
    type: "text",
    placeholder: "課長",
    required: false,
  },
  {
    label: "メールアドレス",
    name: "email",
    type: "email",
    placeholder: "example@abc.co.jp",
    required: true,
  },
  {
    label: "お電話番号",
    name: "phone",
    type: "tel",
    placeholder: "03-0000-0000",
    required: true,
  },
  {
    label: "会社ウェブサイトURL",
    name: "website",
    type: "text",
    placeholder: "example.com",
    required: false,
  },
  {
    label: "お問い合わせ内容",
    name: "inquiryType",
    type: "select",
    options: [
      { value: "", label: "選択してください" },
      { value: "service01", label: "人事コンサルティングについて" },
      { value: "service02", label: "TOMBO Tech Scouterについて" },
      { value: "service03", label: "人事限定コミュニティの運営について" },
      { value: "other", label: "その他" },
    ],
    required: true,
  },
  {
    label: "本文",
    name: "message",
    type: "textarea",
    placeholder: "お問い合わせ内容を入力してください",
    required: true,
  },
]

const initialFormData: Record<string, string> = {}
formFields.forEach((field) => {
  initialFormData[field.name] = ""
})

const ContactCorporateForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleFileButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponseMessage("")

    try {
      // すぐにthanksページに遷移
      router.push("/contact/corporate/thanks")

      // バックグラウンドでメール送信（結果を待たない）
      fetch("/api/contact/corporate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((error) => {
        console.error("メール送信エラー:", error)
      })
    } catch (error) {
      setResponseMessage("エラーが発生しました。")
      setLoading(false)
    }
  }

  return (
    <article className="w-full md:max-w-[1240px] h-auto mx-auto px-5 md:px-5 pt-0 pb-20 md:pt-0 md:pb-[120px]">
      <div className="w-full">
        <section>
          <p className="text-lg font-semibold ![line-height:160%] tracking-[0.03em] whitespace-pre-line">
            <span className="text-accentColor">
              こちらのフォームは法人のお客様専用です。
            </span>
            <br />
            必須項目を全てご入力の上「送信ボタン」を押して、フォームを送信してください。
            <br />
            ※フォームマーケティング・セールスはお断りしております。
          </p>
        </section>

        <section className="text-sm md:text-lg mt-10 md:mt-20 mx-auto">
          {responseMessage && <p className="text-red-500">{responseMessage}</p>}
          <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <div key={field.name} className="mb-6 w-full">
                <label className="text-sm md:text-base block font-semibold mb-1 md:mb-2 ![line-height:200%]">
                  {field.label}{" "}
                  {field.required && (
                    <span className="text-red-500">(必須)</span>
                  )}
                </label>

                {field.type === "select" && field.options && (
                  <select
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 bg-bgLight [&>*]:bg-bgLight appearance-none bg-[length:16px_10px] md:bg-[length:22px_10px] bg-[right_1.5rem_center] bg-no-repeat text-base md:text-lg rounded-[10px] ${
                      !formData[field.name] || formData[field.name] === ""
                        ? "text-[#828282]"
                        : "text-black"
                    }`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L8 9L15 1' stroke='%23FF7C56' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    }}
                  >
                    {field.options.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className={
                          option.value === "" ? "text-[#828282]" : "text-black"
                        }
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}

                {field.type !== "select" && (
                  <>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        rows={1}
                        className="w-full px-6 py-4 bg-bgLight text-baseColor placeholder:text-[#828282] placeholder:text-base md:placeholder:text-lg rounded-[10px]"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-6 py-4 bg-bgLight text-baseColor placeholder:text-[#828282] placeholder:text-base md:placeholder:text-lg ![line-height:170%] rounded-[10px]"
                      />
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="flex justify-center mt-10 md:mt-16">
              <SubmitButton loading={loading} />
            </div>
            <p className="text-center ![line-height:160%] text-xs md:text-sm mt-6 md:mt-16 tracking-[0.05em] whitespace-pre-line">
              上記ボタンを押すことで、利用規約および、当社のサービス等に関する情報を提供する目的で、
              <br />
              合同会社TOMBOが送信された個人情報を保管・処理することに同意したものとみなされます。
              <br />
              お客様はこれらの情報提供をいつでも停止できます。
              <br />
              個人情報の開示や削除依頼等のお問い合わせ先、およびお客様の個人情報を尊重して保護するための弊社取り組みについては、
              <br />
              プライバシーポリシーをご覧ください。
            </p>
          </form>
        </section>
      </div>
    </article>
  )
}

export default ContactCorporateForm
