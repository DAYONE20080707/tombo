// components/cases/casesDetail/CasesDetail_01.tsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cms } from "@/types";
import { casesFetch } from "@/lib/api/casesFetch";
import styles from "@/styles/microcms.module.css";
import Breadcrumb from "@/components/ui/module/Breadcrumb";
import { NavigationArrow } from "@/components/ui/icons/NavigationArrow";

interface CasesDetailProps {
  params: {
    id: string;
  };
}

const CasesDetail_01 = ({ params }: CasesDetailProps) => {
  const { id } = params;
  const [post, setPost] = useState<Cms | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Cms[]>([]);
  const [prevPost, setPrevPost] = useState<Cms | null>(null);
  const [nextPost, setNextPost] = useState<Cms | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // 記事取得
        const currentPost = await casesFetch.get(id);
        if (!mounted) return;

        if (!currentPost) {
          setError("記事が見つかりませんでした");
          return;
        }

        setPost(currentPost);

        // 一覧取得（前後記事判定用 & 関連記事用）
        const allCases = await casesFetch.list(100);

        if (!mounted) return;

        // 前後記事取得（一覧の並び順に基づく）
        const currentIndex = allCases.findIndex((p) => p.id === id);
        if (currentIndex !== -1) {
          // 一般的に一覧が新しい順の場合:
          //   PREV = ひとつ後ろ（古い記事）、NEXT = ひとつ前（新しい記事）
          const prev = allCases[currentIndex + 1] ?? null;
          const next = allCases[currentIndex - 1] ?? null;
          setPrevPost(prev);
          setNextPost(next);
        } else {
          setPrevPost(null);
          setNextPost(null);
        }

        // 関連記事取得（同カテゴリーで最新順）
        let related: Cms[] = [];
        if (
          Array.isArray(currentPost.category) &&
          currentPost.category.length > 0
        ) {
          related = allCases
            .filter(
              (p) =>
                p.id !== id &&
                Array.isArray(p.category) &&
                p.category.includes(currentPost.category![0])
            )
            .slice(0, 5);
          setRelatedPosts(related);
        }
      } catch (err) {
        console.error("Failed to fetch cases post:", err);
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
          parentDirectoryLink="/cases"
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
              <div className="w-full h-[586px] relative mb-24">
                <Image
                  src={post.image.url}
                  alt={post.title}
                  fill
                  className="object-cover rounded-[40px]"
                />
              </div>
            )}

            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        )}

        {/* 前後記事ナビ */}
        <nav className="mt-24 border-t border-b border-white py-4">
          <div className="flex justify-between items-center relative">
            {prevPost ? (
              <Link
                href={`/cases/${prevPost.id}`}
                className="group flex items-center text-white hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
              >
                <NavigationArrow direction="left" className="text-white" />
                <div>
                  <p className="text-base mb-1 font-bold font-lato">PREV</p>
                  <p className="text-lg font-semibold line-clamp-2">
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="w-[calc(50%-20px)]" />
            )}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-16 bg-white"></div>

            {nextPost ? (
              <Link
                href={`/cases/${nextPost.id}`}
                className="group flex items-center justify-end text-white hover:text-gray-600 transition-colors duration-200 w-[calc(50%-20px)] gap-6"
              >
                <div className="text-left">
                  <p className="text-base mb-1 font-bold font-lato">NEXT</p>
                  <p className="text-lg font-semibold line-clamp-2">
                    {nextPost.title}
                  </p>
                </div>
                <NavigationArrow direction="right" className="text-white" />
              </Link>
            ) : (
              <div className="w-[calc(50%-20px)]" />
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default CasesDetail_01;
