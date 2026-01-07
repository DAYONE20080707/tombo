import Cases_01 from "@/components/cases/cases/Cases_01";
import Lowerkv_04 from "@/components/lowerkv/Lowerkv_04";
import PageHeadline from "@/components/ui/frame/PageHeadline";
import Breadcrumb from "@/components/ui/module/Breadcrumb";

// よくある質問
const CasesPage = () => {
  return (
    <div>
      <div className=" md:max-w-[1240px] mx-auto pt-[60px] md:pt-[120px] px-5">
        <Breadcrumb mainTitle="導入事例" />
      </div>
      <div className="mt-10 md:mt-[120px]">
        <Lowerkv_04
          enTitle="導入事例"
          mainTitle="Cases"
          imageSrc="/common/lowerkv_cases.jpg"
        />
      </div>
      <Cases_01 />
    </div>
  );
};

export default CasesPage;
