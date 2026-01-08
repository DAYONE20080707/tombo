// components/blog/blogDetail/BlogDetail_01.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cms } from "@/types";
import { blogsFetch } from "@/lib/api/blogsFetch";
import styles from "@/styles/microcms.module.css";
import Breadcrumb from "@/components/ui/module/Breadcrumb";

interface BlogDetailProps {
  params: {
    id: string;
  };
}

const BlogDetail_01 = ({ params }: BlogDetailProps) => {
  const { id } = params;
  const [post, setPost] = useState<Cms | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Cms[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // 記事取得
        const currentPost = await blogsFetch.get(id);
        if (!mounted) return;

        if (!currentPost) {
          setError("記事が見つかりませんでした");
          return;
        }

        setPost(currentPost);

        // 関連記事取得（同カテゴリーで最新順）
        let related: Cms[] = [];
        if (
          Array.isArray(currentPost.category) &&
          currentPost.category.length > 0
        ) {
          const allSameCategory = await blogsFetch.list(100);
          if (mounted) {
            related = allSameCategory
              .filter(
                (p) =>
                  p.id !== id &&
                  Array.isArray(p.category) &&
                  p.category.includes(currentPost.category![0])
              )
              .slice(0, 5);
            setRelatedPosts(related);
          }
        }
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        if (mounted) {
          setError("記事の取得に失敗しました");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <>
      <div className=" md:max-w-[1240px] mx-auto py-[100px] md:pt-[150px] px-5">
        <Breadcrumb
          parentDirectoryName="ブログ"
          parentDirectoryLink="/blog"
          mainTitle={post?.title || "記事"}
        />
        {loading ? (
          <article className="mt-10 md:mt-20">
            <div className="h-10 bg-gray-200 rounded animate-pulse mb-6 w-3/4"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-2">
              <div className="flex gap-2">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-20"></div>
                <div className="h-6 bg-gray-200 rounded animate-pulse w-20"></div>
              </div>
              <div className="h-5 bg-gray-200 rounded animate-pulse w-24"></div>
            </div>
            <div className="w-full h-[586px] bg-gray-200 rounded-[40px] animate-pulse mb-24"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
            </div>
          </article>
        ) : error || !post ? (
          <article className="mt-10 md:mt-20">
            <div className="text-center py-16">
              <p className="text-white">
                {error || "記事が見つかりませんでした"}
              </p>
            </div>
          </article>
        ) : (
          <article className="mt-10 md:mt-20">
            <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-2">
              <div className="flex flex-wrap gap-2">
                {Array.isArray(post.category) && post.category.length > 0 ? (
                  post.category.map((cat, i) => (
                    <span
                      key={i}
                      className="text-white text-xs border border-white rounded-[15px] px-3 py-1"
                    >
                      {cat}
                    </span>
                  ))
                ) : (
                  <span className="text-white text-xs border border-white rounded-[15px] px-3 py-1">
                    カテゴリーなし
                  </span>
                )}
              </div>
              {post.date && (
                <time className="text-base">
                  {new Date(post.date)
                    .toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/\//g, ".")}
                </time>
              )}
            </div>

            {post.image && (
              <div className="w-full h-[200px] md:h-[586px] relative mb-10 md:mb-24">
                <Image
                  src={post.image.url}
                  alt={post.title}
                  fill
                  className="object-cover rounded-[20px] md:rounded-[40px]"
                />
              </div>
            )}

            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        )}

        {/* 関連記事 */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 border-t border-[#636B7D] pt-10">
            <h2 className="text-2xl mb-6 text-accentColor font-bold">関連記事</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="overflow-hidden duration-300 hover:opacity-80 text-white"
                >
                  {relatedPost.image && (
                    <div className="relative w-full pt-[56.25%] overflow-hidden md:h-[180px]">
                      <Image
                        src={relatedPost.image.url}
                        alt={relatedPost.title}
                        fill
                        className="object-cover rounded-[15px]"
                      />
                    </div>
                  )}
                  <div className="mt-4">
                    {relatedPost.date && (
                      <time className="text-xs block">
                        {new Date(relatedPost.date)
                          .toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })
                          .replace(/\//g, ".")}
                      </time>
                    )}
                    <p className="text-lg font-semibold line-clamp-2 mt-1">
                      {relatedPost.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default BlogDetail_01;
