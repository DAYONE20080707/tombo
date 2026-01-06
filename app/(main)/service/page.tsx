import Lowerkv_01 from "@/components/lowerkv/Lowerkv_01";
import Lowerkv_02 from "@/components/lowerkv/Lowerkv_02";
import Lowerkv_03 from "@/components/lowerkv/Lowerkv_03";
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04";
import About_01 from "@/components/service/about/About_01";
import About_02 from "@/components/service/about/About_02";
import About_03 from "@/components/service/about/About_03";
import About_04 from "@/components/service/about/About_04";
import Service1_01 from "@/components/service/service1/Service_01";
import Service1_02 from "@/components/service/service1/Service_02";
import Service1_03 from "@/components/service/service1/Service_03";
import Service2_01 from "@/components/service/service2/Service_01";
import Service2_02 from "@/components/service/service2/Service_02";
import Service2_03 from "@/components/service/service2/Service_03";
import Service3_01 from "@/components/service/service3/Service_01";
import Service3_02 from "@/components/service/service3/Service_02";
import Service3_03 from "@/components/service/service3/Service_03";
import Breadcrumb from "@/components/ui/module/Breadcrumb";
import Cta_03 from "@/components/ui/module/cta/Cta_03";

// 事業内容
const ServicePage = () => {
  return (
    <div>
      <div className=" md:max-w-[1240px] mx-auto pt-[60px] md:pt-[120px] px-5">
        <Breadcrumb mainTitle="人事コンサルティング" />
      </div>
      <div className="mt-10 md:mt-[120px]">
        <Lowerkv_04
          enTitle="人事コンサルティング"
          mainTitle="HR consulting"
          imageSrc="/common/lowerkv_service.jpg"
        />
      </div>
      <About_01 />
      <Service1_01/>
      <Service2_01/>
      <Service3_01/>
      <Cta_03 />
    </div>
  );
};

export default ServicePage;
