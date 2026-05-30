"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { earrings, products } from "../data/products";
import Image from "next/image";
import { cinzel, raleway } from "../utils/fonts";

export function Bestsellers() {
  const tabs = ["All", "Cincin", "Rubang"];
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get("tab") ?? "";
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const activeTab = tabs.includes(tabParam) ? tabParam : selectedTab;

  const allItems = [...products, ...earrings];
  const displayedItems =
    activeTab === "Rubang"
      ? earrings
      : activeTab === "Cincin"
        ? products
        : allItems;

  return (
    <section id="bestsellers" className="pt-20 pb-14 bg-white">
      <div className="max-w-275 mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-around space-x-6 border-b border-gray-200 mb-10  whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${cinzel.className} pb-4 text-[12px] md:text-sm font-semibold tracking-wide relative px-2 ${
                activeTab === tab
                  ? "text-black"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute -bottom-px left-0 w-full h-0.75 bg-black"></div>
              )}
            </button>
          ))}
        </div>

        {/*<div
          className={`${raleway.className} flex justify-center space-x-12 mb-12 text-xs font-bold text-gray-400 uppercase tracking-widest`}
        >
          <button
            className={` text-blue-900 bg-[#f4f7fa] px-6 py-1.5 rounded-full uppercase `}
          >
            All
          </button>
          <button className="hover:text-black transition-colors pt-1.5 uppercase ">
            Cincin
          </button>
          <button className="hover:text-black transition-colors pt-1.5 uppercase ">
            Rubang
          </button>
        </div>*/}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {displayedItems.slice(0, 3).map((item, index) => {
            const priceLabel =
              typeof item.price === "number"
                ? `RM ${item.price.toFixed(2)}`
                : item.price;
            const key = "id" in item ? item.id : `${item.name}-${index}`;
            const materialLabel =
              "material" in item ? item.material : "LORE | MOISSANITE";

            return (
              <div
                key={key}
                className="flex flex-col items-center group cursor-pointer relative"
              >
                <div className="w-full aspect-3/4 mb-6 relative overflow-hidden ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover mix-blend-darken"
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
                  <p
                    className={`${cinzel.className} text-base text-gray-800 font-semibold tracking-wide`}
                  >
                    {priceLabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            className={`${raleway.className} uppercase border-2 border-gray-900   text-xs font-semibold tracking-wider px-12 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300`}
          >
            See Bestseller Ranking
          </button>
        </div>
      </div>
    </section>
  );
}
