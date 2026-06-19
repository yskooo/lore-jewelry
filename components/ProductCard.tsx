"use client";

import React, { useState } from "react";
import Image from "next/image";
import { montserrat, raleway } from "../utils/fonts";
import { JewelryItem } from "../data/products";

export function ProductCard({ item }: { item: JewelryItem }) {
  // Use first variant as default
  const variants = item.variants && item.variants.length > 0 ? item.variants : [];
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);

  const currentVariant = variants[currentVariantIndex] || null;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentVariantIndex((prev) => (prev > 0 ? prev - 1 : variants.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentVariantIndex((prev) => (prev < variants.length - 1 ? prev + 1 : 0));
  };

  const formatVariantLabel = (label: string) => {
    if (!label || label === "Default") return "ONE SIZE";
    if (/^\d+(\.\d+)?$/.test(label.trim())) {
      return `${label.trim()} CT`;
    }
    return label;
  };

  const materialLabel = item.material || "LORE | MOISSANITE";

  return (
    <div className="flex flex-col items-center group relative w-full bg-white h-full">
      <a
        href={item.url ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full aspect-4/3 sm:aspect-square max-h-80 sm:max-h-none relative overflow-hidden bg-white block"
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain mix-blend-darken group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </a>

      <div className="text-center mt-8 mb-4 w-full flex flex-col justify-between flex-grow px-2">
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
            {materialLabel}
          </p>
          <a href={item.url ?? "#"} target="_blank" rel="noopener noreferrer" className="block group-hover:opacity-80 transition-opacity">
            <h3
              className={`${montserrat.className} text-xs font-normal uppercase tracking-[0.15em] text-gray-700 leading-relaxed`}
            >
              {item.name}
            </h3>
          </a>
        </div>

        {variants.length > 0 && currentVariant && (
          <div className="mt-5 flex flex-col items-center gap-3">
            {/* Toggler UI always shown for consistency */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                disabled={variants.length <= 1}
                className={`p-1.5 rounded-full transition-colors ${variants.length <= 1 ? 'text-gray-200 cursor-default' : 'text-gray-400 hover:text-black bg-gray-50 hover:bg-gray-100'}`}
                aria-label="Previous Variant"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className={`${raleway.className} text-[11px] font-bold uppercase tracking-widest text-gray-700 min-w-[70px] text-center`}>
                {formatVariantLabel(currentVariant.label)}
              </span>
              <button
                onClick={handleNext}
                disabled={variants.length <= 1}
                className={`p-1.5 rounded-full transition-colors ${variants.length <= 1 ? 'text-gray-200 cursor-default' : 'text-gray-400 hover:text-black bg-gray-50 hover:bg-gray-100'}`}
                aria-label="Next Variant"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            {/* Price display */}
            <div className="flex items-center justify-center gap-2 mt-1">
              {currentVariant.discount && (
                <span className={`${raleway.className} text-rose-700 text-[11px] font-bold`}>
                  {currentVariant.discount}
                </span>
              )}
              <span className={`${raleway.className} text-[14px] text-gray-900 font-medium tracking-wider`}>
                ${currentVariant.price.toFixed(2)}
              </span>
              {currentVariant.originalPrice && (
                <span className={`${raleway.className} text-[11px] text-gray-400 line-through tracking-wider`}>
                  ${currentVariant.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
