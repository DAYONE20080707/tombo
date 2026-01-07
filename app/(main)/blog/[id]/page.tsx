import BlogDetail_01 from "@/components/blog/blogDetail/BlogDetail_01";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { id } = await params;

  return <BlogDetail_01 params={{ id }} />;
};

export default BlogDetailPage;
