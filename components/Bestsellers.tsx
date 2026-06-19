"use client";
import React, { useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { allProducts, JewelryItem, ProductVariant, rings, menRings, earrings, necklaces, bracelets, artificial } from "../data/products";
import { buildBestsellersIndex } from "../utils/categorization";
import { ProductCard } from "./ProductCard";
import { montserrat, raleway } from "../utils/fonts";

const ITEMS_PER_PAGE = 6;

const getLowestVariantPrice = (item: JewelryItem): number => {
  if (!item.variants || item.variants.length === 0) return item.price || 0;
  return Math.min(...item.variants.map((v) => v.price));
};

export function Bestsellers() {
  const tabs = ["All", "Ring", "Men's Ring", "Bands", "Earrings", "Necklace", "Bracelet", "Artificial"];
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const tabParam = searchParams?.get("tab") ?? "";
  const subParam = searchParams?.get("sub") ?? "All";
  
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedSub, setSelectedSub] = useState("All");
  
  const [sortOrder, setSortOrder] = useState<
    "default" | "lowToHigh" | "highToLow"
  >("default");
  const [currentPage, setCurrentPage] = useState(1);
  
  const activeTab = tabs.includes(tabParam) ? tabParam : selectedTab;
  const activeSub = searchParams?.has("sub") ? subParam : selectedSub;

  const categoriesMap = useMemo(() => ({
    "Ring": rings,
    "Men's Ring": menRings,
    "Bands": [],
    "Earrings": earrings,
    "Necklace": necklaces,
    "Bracelet": bracelets,
    "Artificial": artificial
  }), []);

  const bestsellersIndex = useMemo(() => buildBestsellersIndex(categoriesMap), [categoriesMap]);

  const allItems = useMemo(() => allProducts, []);

  const displayedItems = useMemo(() => {
    if (activeTab === "All") return allItems;
    const tabMap = bestsellersIndex.get(activeTab);
    if (!tabMap) return [];
    
    // Fallback to "All" if the sub-category doesn't exist for this tab
    return tabMap.get(activeSub) || tabMap.get("All") || [];
  }, [activeTab, activeSub, bestsellersIndex, allItems]);

  const availableSubTabs = useMemo(() => {
    if (activeTab === "All") return [];
    const tabMap = bestsellersIndex.get(activeTab);
    if (!tabMap) return [];
    
    const keys = Array.from(tabMap.keys());
    // Only show sub-tabs if there are specific subcategories beyond just "All"
    return keys.length > 1 ? ["All", ...keys.filter(k => k !== "All" && k !== "Other"), ...(keys.includes("Other") ? ["Other"] : [])] : [];
  }, [activeTab, bestsellersIndex]);

  const sortedItems = useMemo(() => {
    const items = [...displayedItems];
    if (sortOrder === "lowToHigh") {
      return items.sort(
        (a, b) => getLowestVariantPrice(a) - getLowestVariantPrice(b)
      );
    }
    if (sortOrder === "highToLow") {
      return items.sort(
        (a, b) => getLowestVariantPrice(b) - getLowestVariantPrice(a)
      );
    }
    return items;
  }, [displayedItems, sortOrder]);

  const hasPagination = activeTab !== "Earrings";
  const totalPages = hasPagination
    ? Math.ceil(sortedItems.length / ITEMS_PER_PAGE)
    : 1;
  const paginatedItems = hasPagination
    ? sortedItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : sortedItems;

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    setSelectedSub("All");
    setCurrentPage(1);

    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.delete("sub");
    if (tab === "All") {
      params.delete("tab");
    } else {
      params.set("tab", tab);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSubTabChange = (sub: string) => {
    setSelectedSub(sub);
    setCurrentPage(1);

    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (sub === "All") {
      params.delete("sub");
    } else {
      params.set("sub", sub);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section id="bestsellers" className="pt-32 pb-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex overflow-x-auto gap-6 border-b border-gray-200 mb-4 whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${montserrat.className} cursor-pointer pb-4 text-[12px] md:text-[13px] font-normal uppercase tracking-[0.25em] relative px-2 shrink-0 transition-colors duration-300 ${
                activeTab === tab
                  ? "text-gray-900 font-medium"
                  : "text-gray-400 hover:text-gray-700"
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute -bottom-px left-0 w-full h-[1px] bg-gray-900"></div>
              )}
            </button>
          ))}
        </div>

        {/* Sub Tabs */}
        {availableSubTabs.length > 0 && (
          <div className="flex overflow-x-auto gap-4 mb-6 whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-1 animate-in fade-in slide-in-from-top-2">
            {availableSubTabs.map((subTab) => (
              <button
                key={subTab}
                className={`${raleway.className} cursor-pointer px-5 py-2 rounded-full text-[11px] md:text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 border ${
                  activeSub === subTab
                    ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                }`}
                onClick={() => handleSubTabChange(subTab)}
              >
                {subTab}
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Sort by
            </p>
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              id="price-sort"
              value={sortOrder}
              onChange={(event) => {
                setSortOrder(
                  event.target.value as "default" | "lowToHigh" | "highToLow"
                );
                setCurrentPage(1);
              }}
              className="w-full appearance-none outline-none py-2 px-2 border border-gray-300 bg-white  pr-10 text-xs font-medium uppercase tracking-[0.25em] text-gray-700 transition duration-200 ease-out "
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Price: low to high</option>
              <option value="highToLow">Price: high to low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {paginatedItems.map((item, index) => {
            const key = "id" in item ? item.id : `${item.name}-${index}`;
            return (
              <ProductCard key={key} item={item} />
            );
          })}
        </div>

        {/* Pagination */}
        {hasPagination && totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mb-14 px-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`${raleway.className} px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border border-gray-300 transition-all duration-200 ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:border-gray-900 hover:text-gray-900"
              }`}
            >
              ‹
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${montserrat.className} w-8 h-8 text-xs font-semibold tracking-wider border transition-all duration-200 ${
                  currentPage === page
                    ? "bg-gray-900 text-white border-gray-900"
                    : "text-gray-500 border-gray-300 hover:border-gray-900 hover:text-gray-900"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`${raleway.className} px-3 py-1.5 text-xs font-semibold tracking-wider uppercase border border-gray-300 transition-all duration-200 ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-gray-600 hover:border-gray-900 hover:text-gray-900"
              }`}
            >
              ›
            </button>
          </div>
        )}

        <div className="text-center">
          <button
            className={`${raleway.className} cursor-pointer uppercase border-2 border-gray-900 text-xs font-semibold tracking-wider px-12 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300`}
            onClick={() => {
              document
                .getElementById("bestsellers")
                ?.scrollIntoView({ behavior: "smooth" });
              handleTabChange("All");
            }}
          >
            See Bestseller Ranking
          </button>
        </div>
      </div>
    </section>
  );
}
