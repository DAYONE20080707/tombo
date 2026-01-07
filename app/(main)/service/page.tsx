import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04";
import About_01 from "@/components/service/about/About_01";
import Service_01 from "@/components/service/service1/Service_01";
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
      <Service_01/>
      <Cta_03 />
    </div>
  );
};

export default ServicePage;
