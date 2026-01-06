"use client"

import Link from "next/link"
import Image from "next/image"
import Menu from "@/components/ui/navigation/Menu"
import Sns from "@/components/ui/button/SnsButton"
import FooterLinks from "@/components/ui/navigation/FooterLinks"
import CompanyInfo from "@/components/ui/navigation/CompanyInfo"
import ContactButton from "@/components/ui/button/ContactButton"
import ContactButtonCorporate from "../ui/button/ContactButtonCorporate"

// フッター
const Footer_01 = () => {
  const { companyName, companyNameText, companyPostalCode, companyAddress } =
    CompanyInfo[0]
  return (
    <footer className="py-10 md:py-24 px-4 md:px-0">
      <div className="md:max-w-[1240px] mx-auto md:px-5">
        <div className="md:flex justify-between items-center">
          <div className="">
            <h4 className="w-[168px]">
              {CompanyInfo[0].companyName("tertiary")}
            </h4>
            <p className="mt-10">{companyNameText}</p>
            <p className="mt-2">〒{companyPostalCode}　{companyAddress}</p>
          </div>
          <div className="flex flex-col md:items-end mt-5 md:mt-0">
            <ul className="md:flex items-center md:space-x-10 font-light space-y-5 md:space-y-0">
              {Menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <div>{item.nameJa}</div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex gap-2">
              <ContactButton className="">個人のお客様</ContactButton>
              <ContactButtonCorporate className="">法人のお客様</ContactButtonCorporate>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center !border-t border-white mt-4 pt-4 ">
          <ul className="flex items-center justify-start font-semibold ">
            {Sns.map((item, index) => (
              <li
                key={index}
                className="w-auto h-5 md:w-auto md:h-[60px] flex items-center justify-center px-3"
              >
                <Link href={item.href} className="">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={30}
                    height={30}
                    className="h-[30px] w-auto"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="md:flex items-center md:space-x-10 font-light mt-5 md:mt-0 space-y-5 md:space-y-0">
            {FooterLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <small className="mt-4 flex justify-end items-center md:text-base">
        &copy;TOMBO. ALL Rights Reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer_01
