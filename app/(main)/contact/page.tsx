import Contact_01 from "@/components/contact/contact/Contact_01";
import PageHeadline from "@/components/ui/frame/PageHeadline";
import Breadcrumb from "@/components/ui/module/Breadcrumb";

// お問い合わせ
const ContactPage = () => {
  return (
    <div>
      <div className=" md:max-w-[1240px] mx-auto pt-[100px] md:pt-[150px] px-5">
        <Breadcrumb mainTitle="お問い合わせ" />
        <div className="mt-10 md:mt-[120px]">
          <PageHeadline
            enTitle="お問い合わせ"
            mainTitle="Contact"
          />
        </div>
      </div>
      <Contact_01 />
    </div>
  );
};

export default ContactPage;
