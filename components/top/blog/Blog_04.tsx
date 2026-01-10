// components/blog/Blog_04.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import { microcms } from "@/lib/microcms";
import { Cms } from "@/types";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import MoreButton from "@/components/ui/button/MoreButton";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { blogsFetch } from "@/lib/api/blogsFetch";
import SectionContent from "@/components/ui/frame/SectionContent";

interface BlogProps {
  limit?: number;
}

const Blog_04 = ({ limit = 6 }: BlogProps) => {
  const [contents, setContents] = useState<Cms[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 旧 microcms 呼び出し
    /*
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "blogs",
          queries: { limit },
        });
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
      setLoading(false);
    };
    getWorks();
    */

    // 新 blogsFetch 利用
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await blogsFetch.list(Math.min(limit ?? 100, 100));
        if (mounted) setContents(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        if (mounted) setContents([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [limit]);

  return (
    <SectionContent>
      <section className="md:max-w-[1200px] mx-auto">
        <div className="">
          <ContentHeadline subTitle="ブログ" mainTitle="Blog" />
        </div>
        {loading ? (
          <div className="mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-full flex space-x-4">
                <div className="w-[120px] h-[120px] flex-shrink-0 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="flex-1 flex flex-col">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-20 ml-auto"></div>
                  <div className="h-5 bg-gray-200 rounded animate-pulse mb-2 w-24"></div>
                  <div className="h-5 bg-gray-200 rounded animate-pulse mb-1 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : !contents || contents.length === 0 ? (
          <div className="mt-10 md:mt-0 flex items-center justify-center py-16">
            <p className="text-baseColor">記事がありません</p>
          </div>
        ) : (
          <>
            <div className="mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {contents.map((post) => (
                <div
                  key={post.id}
                  className="w-full flex flex-col md:flex-row gap-4 border-b border-white py-4"
                >
                  <div className="md:w-[180px] md:h-[130px] flex-shrink-0">
                    {post.image && (
                      <Image
                        src={post.image.url}
                        alt={post.title ?? "ブログサムネイル"}
                        width={180}
                        height={130}
                        className="w-full h-full rounded-[15px] object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="text-white text-xs mb-2">
                      {post.date
                        ? new Date(post.date)
                            .toLocaleDateString("ja-JP", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })
                            .replace(/\//g, ".")
                        : ""}
                    </p>
                    {post.category && post.category.length > 0 && (
                      <div className="mb-4">
                        <span className="border border-accentColor text-accentColor text-xs px-3 py-1 rounded-full">
                          {post.category[0]}
                        </span>
                      </div>
                    )}
                    <p className="text-white text-base md:text-lg font-normal line-clamp-2 leading-[160%]">
                      {post.title}
                    </p>
                    {/* <p className="text-white text-xs line-clamp-2">
                      {post.description}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 md:mt-16 flex justify-center">
              <MoreButton href="/blog" className="text-accentColor border-accentColor" />
            </div>
          </>
        )}
      </section>
    </SectionContent>
  );
};

export default Blog_04;
