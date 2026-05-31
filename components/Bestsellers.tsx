"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { earrings, rings } from "../data/products";
import Image from "next/image";
import { cinzel, raleway } from "../utils/fonts";

const ITEMS_PER_PAGE = 6;

export function Bestsellers() {
  const tabs = ["All", "Cincin", "Rubang"];
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const tabParam = searchParams?.get("tab") ?? "";
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const activeTab = tabs.includes(tabParam) ? tabParam : selectedTab;

  const allItems = [...rings, ...earrings];
  const displayedItems =
    activeTab === "Rubang"
      ? earrings
      : activeTab === "Cincin"
        ? rings
        : allItems;

  const hasPagination = activeTab !== "Rubang";
  const totalPages = hasPagination
    ? Math.ceil(displayedItems.length / ITEMS_PER_PAGE)
    : 1;
  const paginatedItems = hasPagination
    ? displayedItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : displayedItems;

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    setCurrentPage(1);

    // Update the URL so it reflects the selected tab
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (tab === "All") {
      params.delete("tab");
    } else {
      params.set("tab", tab);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section id="bestsellers" className="pt-20 pb-14 bg-white">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-around space-x-6  border-b border-gray-200 mb-10 whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${cinzel.className} cursor-pointer  pb-4 text-[12px] md:text-sm font-semibold tracking-wide relative px-2 ${
                activeTab === tab
                  ? "text-black"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute -bottom-px left-0 w-full h-0.75 bg-black"></div>
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {paginatedItems.map((item, index) => {
            const priceLabel =
              item.price == null
                ? null
                : typeof item.price === "number"
                  ? `RM ${item.price.toFixed(2)}`
                  : item.price;
            const key = "id" in item ? item.id : `${item.name}-${index}`;
            const materialLabel =
              "material" in item ? item.material : "LORE | MOISSANITE";

            return (
              <a
                key={key}
                href={item.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group cursor-pointer relative"
              >
                <div className="w-full aspect-square mb-6 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover mix-blend-darken group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="text-center mt-auto w-full space-y-3">
                  <p className="text-xs text-gray-400 tracking-widest uppercase font-medium">
                    {materialLabel}
                  </p>
                  <h3
                    className={`${raleway.className} text-sm font-medium uppercase tracking-widest text-gray-800`}
                  >
                    {item.name}
                  </h3>
                  {priceLabel && (
                    <p
                      className={`${cinzel.className} text-base text-gray-800 font-semibold tracking-wide`}
                    >
                      {priceLabel}
                    </p>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        {/* Pagination */}
        {hasPagination && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-14">
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
                className={`${cinzel.className} w-8 h-8 text-xs font-semibold tracking-wider border transition-all duration-200 ${
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
            className={`${raleway.className} uppercase border-2 border-gray-900 text-xs font-semibold tracking-wider px-12 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300`}
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
