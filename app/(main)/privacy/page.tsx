import Privacy1 from "@/components/privacy/Privacy_01"
import PageHeadline from "@/components/ui/frame/PageHeadline"
import Breadcrumb from "@/components/ui/module/Breadcrumb"
import Cta_03 from "@/components/ui/module/cta/Cta_03"

// 私たちについて
const PrivacyPage = () => {
  return (
    <div>
      <div className=" md:max-w-[1240px] mx-auto pt-[100px] md:pt-[150px] px-5">
        <Breadcrumb mainTitle="プライバシーポリシー" />
        <div className="mt-10 md:mt-[120px]">
          <PageHeadline enTitle="プライバシーポリシー" mainTitle="Privacy policy" />
        </div>
      </div>
      <Privacy1 />
      <Cta_03/>
    </div>
  )
}

export default PrivacyPage
