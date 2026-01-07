import PageContent from "@/components/ui/frame/PageContent";
import Breadcrumb from "@/components/ui/module/Breadcrumb";
import ComingSoon from "@/components/coming-soon/ComingSoon";
import SectionContent from "@/components/ui/frame/SectionContent";

// お問い合わせ完了
const ComingSoonPage = () => {
  return (
    <PageContent variant="dot">
      <div className="mx-auto max-w-[1200px]">
        <Breadcrumb
          mainTitle="Coming Soon"
          parentDirectoryName=""
          parentDirectoryLink=""
        />
      </div>

      <ComingSoon />
    </PageContent>
  );
};

export default ComingSoonPage;
