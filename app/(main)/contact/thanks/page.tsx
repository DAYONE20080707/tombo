import Thanks_01 from "@/components/contact/thanks/Thanks_01";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import PageHeadline from "@/components/ui/frame/PageHeadline";
import Breadcrumb from "@/components/ui/module/Breadcrumb";

// お問い合わせ完了
const ThanksPage = () => {
  return (
    <div className="">
      <div className=" md:max-w-[1240px] mx-auto pt-[100px] md:pt-[150px] px-5">
        <Breadcrumb mainTitle="個人のお客様 ー お問い合わせ" />
        <div className="mt-10 md:mt-[120px]">
          <PageHeadline enTitle="個人のお客様 ー お問い合わせ" mainTitle="Contact" />
        </div>
      </div>
      <Thanks_01 />
    </div>
  );
};

export default ThanksPage;
