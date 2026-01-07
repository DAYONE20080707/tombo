import About_01 from "@/components/about/about/About_01";
import About_02 from "@/components/about/about/About_02";
import About_03 from "@/components/about/about/About_03";
import About_04 from "@/components/about/about/About_04";
import Purpose_01 from "@/components/about/purpose/Purpose_01";
import History_01 from "@/components/about/history/History_01";
import Message_01 from "@/components/about/message/Message_01";
import Message_02 from "@/components/about/message/Message_02";
import Message_03 from "@/components/about/message/Message_03";
import Message_04 from "@/components/about/message/Message_04";
import Profile_01 from "@/components/about/profile/Profile_01";
import Profile_02 from "@/components/top/profile/Profile_02";
import Profile_03 from "@/components/top/profile/Profile_03";
import Profile_04 from "@/components/top/profile/Profile_04";
import Breadcrumb from "@/components/ui/module/Breadcrumb";
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04";

// 私たちについて
const AboutPage = () => {
  return (
    <div>
      <div className=" md:max-w-[1240px] mx-auto pt-[60px] md:pt-[120px] px-5">
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
