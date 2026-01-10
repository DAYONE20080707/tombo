import Blog_02 from "@/components/blog/blog/Blog_02";
import PageHeadline from "@/components/ui/frame/PageHeadline";
import Breadcrumb from "@/components/ui/module/Breadcrumb";

// よくある質問
const BlogPage = () => {
  return (
    <div>
      <div className=" md:max-w-[1240px] mx-auto pt-[100px] md:pt-[150px] px-5">
        <Breadcrumb mainTitle="お問い合わせ" />
        <div className="mt-10 md:mt-[120px]">
          <PageHeadline
            enTitle="ブログ"
            mainTitle="Blog"
          />
        </div>
      </div>
      <Blog_02 />
    </div>
  );
};

export default BlogPage;
