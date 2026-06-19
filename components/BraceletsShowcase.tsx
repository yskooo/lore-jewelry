import React from "react";
import { bracelets } from "../data/products";
import { montserrat } from "../utils/fonts";
import { ProductCard } from "./ProductCard";

export function BraceletsShowcase() {
  const displayItems = bracelets.slice(0, 4);

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-4">
            Featured Collection
          </p>

          <h2 className={`${montserrat.className} text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-gray-900 leading-snug`}>
            Elegant Bracelets
          </h2>

          <div className="mx-auto mt-6 mb-8 h-px w-16 bg-zinc-300"></div>

          <p className="text-sm leading-7 text-slate-600 max-w-2xl mx-auto">
            Grace your wrist with the timeless brilliance of moissanite. Shop our new bracelet collection.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayItems.map((item) => (
            <ProductCard key={item.id || item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
