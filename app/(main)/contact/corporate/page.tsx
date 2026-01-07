import ContactCorporate_01 from "@/components/contact/contact/ContactCorporate_01";
import PageHeadline from "@/components/ui/frame/PageHeadline";
import Breadcrumb from "@/components/ui/module/Breadcrumb";

// 法人のお客様 ー お問い合わせ
const CorporateContactPage = () => {
  return (
    <div>
      <div className=" md:max-w-[1240px] mx-auto pt-[100px] md:pt-[150px] px-5">
        <Breadcrumb mainTitle="法人のお客様 ー お問い合わせ" />
        <div className="mt-10 md:mt-[120px]">
          <PageHeadline
            enTitle="法人のお客様 ー お問い合わせ"
            mainTitle="Contact"
          />
        </div>
      </div>
      <ContactCorporate_01 />
    </div>
  );
};

export default CorporateContactPage;


