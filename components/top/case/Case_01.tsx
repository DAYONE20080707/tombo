// components/case/Case_01.tsx

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
// import { microcms } from "@/lib/microcms";
import { Cms } from "@/types";
import ContentHeadline from "@/components/ui/frame/ContentHeadline";
import MoreButton from "@/components/ui/button/MoreButton";
import { casesFetch } from "@/lib/api/casesFetch";
import SectionContent from "@/components/ui/frame/SectionContent";

interface CaseProps {
  limit?: number;
}

const Case_01 = ({ limit = 3 }: CaseProps) => {
  const [contents, setContents] = useState<Cms[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // --- 旧 microcms 実装 ---
    /*
    const getWorks = async () => {
      try {
        const data = await microcms.get({
          endpoint: "cases",
          queries: { limit },
        });
        if (data && Array.isArray(data.contents)) {
          setContents(data.contents);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Failed to fetch cases:", error);
      }
      setLoading(false);
    };

    getWorks();
    */

    // --- 新 casesFetch 実装 ---
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const data = await casesFetch.list(Math.min(limit ?? 100, 100));
        if (mounted) setContents(data);
      } catch (error) {
        console.error("Failed to fetch cases:", error);
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
    <SectionContent className="bg-white rounded-t-[20px] md:rounded-t-[40px] text-baseColor">
      <section className="md:max-w-[1200px] mx-auto">
        <ContentHeadline subTitle="導入事例" mainTitle="Cases" />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="w-full">
                <div className="w-full h-[250px] mt-5 md:mt-0 rounded-t-2xl bg-gray-200 animate-pulse"></div>
                <div className="mt-6">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : !contents || contents.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-baseColor">記事がありません</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-10">
            {contents.map((post) => (
              <div key={post.id} className="w-full">
                <div className="w-full h-[250px] mt-5 md:mt-0 rounded-t-2xl">
                  {post.image && (
                    <Image
                      src={post.image.url}
                      alt={post.title ?? "導入事例サムネイル"}
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
                  <p className="mt-2 text-[#5f5f5f] text-xs">
                    {Array.isArray(post.category) && post.category.length > 0
                      ? post.category.map((cat) => `#${cat}`).join(" ")
                      : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-16">
          <MoreButton variant="accent" />
        </div>
      </section>
    </SectionContent>
  );
};

export default Case_01;
