// components/blog/Blog_02.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cms } from "@/types";
import PageContent from "@/components/ui/frame/PageContent";
import MoreButton from "@/components/ui/button/MoreButton";
import MoreButtonClick from "@/components/ui/button/MoreButtonClick";
import { blogsFetch } from "@/lib/api/blogsFetch";
import SectionContent from "@/components/ui/frame/SectionContent";

interface BlogProps {
  limit?: number;
}

const Blog_02 = ({ limit = 3 }: BlogProps) => {
  const [allContents, setAllContents] = useState<Cms[]>([]);
  const [displayContents, setDisplayContents] = useState<Cms[]>([]);
  const [filteredContents, setFilteredContents] = useState<Cms[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [displayCount, setDisplayCount] = useState(10);

  // 全件取得 & カテゴリ一覧生成
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await blogsFetch.list(100); // 全件取得
        if (!mounted) return;
        setAllContents(data);

        // 重複なしカテゴリ抽出
        const uniqueCats = new Set<string>();
        data.forEach((post) => {
          post.category?.forEach((c) => uniqueCats.add(c));
        });

        setCategories([
          { id: "all", name: "すべて" },
          ...Array.from(uniqueCats).map((c) => ({ id: c, name: c })),
        ]);

        setFilteredContents(data);
        setDisplayContents(data.slice(0, 10));
        setDisplayCount(10);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        if (mounted) {
          setAllContents([]);
          setCategories([{ id: "all", name: "すべて" }]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [limit]);

  // カテゴリ変更時
  useEffect(() => {
    let filtered: Cms[] = [];
    if (activeCategory === "all") {
      filtered = allContents;
    } else {
      filtered = allContents.filter((post) =>
        post.category?.includes(activeCategory)
      );
    }
    setFilteredContents(filtered);
    setDisplayContents(filtered.slice(0, 10));
    setDisplayCount(10);
  }, [activeCategory, allContents]);

  // もっと見るボタンのクリック処理
  const handleLoadMore = () => {
    const nextCount = displayCount + 10;
    setDisplayCount(nextCount);
    setDisplayContents(filteredContents.slice(0, nextCount));
  };

  return (
    <SectionContent className="!pt-0 text-baseColor">
      <section className="md:max-w-[1200px] mx-auto">
        {/* カテゴリボタン */}
        <div className="flex flex-wrap justify-start md:justify-center gap-x-5 md:gap-x-20 rounded-[20px] md:rounded-full bg-white mx-auto px-5 md:px-20 w-fit">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-1 py-4 transition-all font-bold whitespace-nowrap ${
                activeCategory === category.id
                  ? "text-accentColor border-b-4 border-accentColor"
                  : "hover:text-accentColor"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center mt-16">
            <h1>Loading...</h1>
          </div>
        ) : displayContents.length === 0 ? (
          <div className="text-center mt-16">
            <p>記事がありません</p>
          </div>
        ) : (
          <>
            <div className="mt-16 grid grid-cols-1 gap-y-6 md:gap-y-6 gap-x-10 md:gap-x-16 bg-white p-4 md:p-16 rounded-[20px] md:rounded-[40px]">
              {displayContents.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="w-full hover:opacity-90 transition-opacity"
                >
                  <div className="w-full md:flex md:space-x-6 pb-6 border-b border-[#636B7D]">
                    <div className="w-full md:w-[180px] h-[200px] md:h-[130px] mt-5 md:mt-0">
                      {post.image && (
                        <Image
                          src={post.image.url}
                          alt={post.title ?? "ブログサムネイル"}
                          width={370}
                          height={223}
                          className="w-full h-full rounded-2xl object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <p className="mt-2 text-[#5f5f5f] text-[14px] font-en font-extrabold leading-[130%]">
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
                      <div className="mt-2 flex flex-wrap gap-2">
                        {post.category?.map((cat, index) => (
                          <span
                            key={index}
                            className="text-accentColor text-xs border border-accentColor rounded-[15px] px-3 py-1 ![line-height:100%]"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-lg">{post.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {filteredContents.length > displayCount && (
              <div className="flex justify-center mt-16">
                <MoreButtonClick onClick={handleLoadMore} variant="white">
                  もっと見る
                </MoreButtonClick>
              </div>
            )}
          </>
        )}
      </section>
    </SectionContent>
  );
};

export default Blog_02;
