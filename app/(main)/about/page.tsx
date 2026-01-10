import About_01 from "@/components/about/about/About_01";
import Message_04 from "@/components/about/message/Message_04";
import Profile_01 from "@/components/about/profile/Profile_01";
import Breadcrumb from "@/components/ui/module/Breadcrumb";
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04";

// 私たちについて
const AboutPage = () => {
  return (
    <div>
      <div className=" md:max-w-[1240px] mx-auto pt-[90px] md:pt-[120px] px-5">
        <Breadcrumb mainTitle="私たちについて" />
      </div>
      <div className="mt-10 md:mt-[120px]">
        <Lowerkv_04
          enTitle="私たちについて"
          mainTitle="Who we are"
          imageSrc="/common/lowerkv_about.jpg"
        />
      </div>
      <About_01 />
      <Message_04 />
      <Profile_01 />
    </div>
  );
};

export default AboutPage;
