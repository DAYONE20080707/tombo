// components/cases/Cases_01.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cms } from "@/types";
import PageContent from "@/components/ui/frame/PageContent";
import MoreButton from "@/components/ui/button/MoreButton";
import MoreButtonClick from "@/components/ui/button/MoreButtonClick";
import { casesFetch } from "@/lib/api/casesFetch";
import SectionContent from "@/components/ui/frame/SectionContent";

interface CasesProps {
  limit?: number;
}

const Cases_01 = ({ limit = 3 }: CasesProps) => {
  const [allContents, setAllContents] = useState<Cms[]>([]);
  const [displayContents, setDisplayContents] = useState<Cms[]>([]);
  const [filteredContents, setFilteredContents] = useState<Cms[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [displayCount, setDisplayCount] = useState(9);

  // 全件取得してカテゴリ抽出
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await casesFetch.list(100); // 全件取得
        if (!mounted) return;
        setAllContents(data);

        // カテゴリー抽出（重複除去）
        const uniqueCats = new Set<string>();
        data.forEach((post) => {
          post.category?.forEach((c) => uniqueCats.add(c));
        });

        setCategories([
          { id: "all", name: "すべて" },
          ...Array.from(uniqueCats).map((c) => ({ id: c, name: c })),
        ]);

        setFilteredContents(data);
        setDisplayContents(data.slice(0, 9));
        setDisplayCount(9);
      } catch (error) {
        console.error("Failed to fetch casess:", error);
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

  // カテゴリ変更時の絞り込み
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
    setDisplayContents(filtered.slice(0, 9));
    setDisplayCount(9);
  }, [activeCategory, allContents]);

  // もっと見るボタンのクリック処理
  const handleLoadMore = () => {
    const nextCount = displayCount + 10;
    setDisplayCount(nextCount);
    setDisplayContents(filteredContents.slice(0, nextCount));
  };

  return (
    <SectionContent className="">
      <section className="md:max-w-[1200px] mx-auto">
        {/* カテゴリボタン */}
        {/* <div className="flex flex-wrap justify-start md:justify-center gap-x-5 md:gap-20 rounded-full mx-auto px-5 md:px-20 w-fit">
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
        </div> */}

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
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 md:mt-16">
              {displayContents.map((post) => (
                <Link
                  key={post.id}
                  href={`/case/${post.id}`}
                  className="w-full hover:opacity-90 transition-opacity"
                >
                  <div className="w-full">
                    <div className="w-full h-[250px] mt-5 md:mt-0">
                      {post.image && (
                        <Image
                          src={post.image.url}
                          alt={post.title ?? "ブログサムネイル"}
                          width={370}
                          height={223}
                          className="w-full h-full rounded-[10px] object-cover"
                        />
                      )}
                    </div>
                    <div className="mt-6">
                      <p className="text-lg font-bold break-words md:min-h-14">
                        {post.title}
                      </p>
                      {/* <p className="mt-2 text-base line-clamp-2">
                        {post.content
                          ?.replace(/<[^>]*>/g, "")
                          .substring(0, 100)}
                      </p> */}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {post.category?.map((cat, index) => (
                          <span key={index} className="text-[#636B7D] text-xs">
                            #{cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {filteredContents.length > displayCount && (
              <div className="flex justify-center mt-16">
                <MoreButtonClick onClick={handleLoadMore} variant="accent">
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

export default Cases_01;
