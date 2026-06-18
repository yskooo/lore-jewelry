import React from "react";
import { necklaces } from "../data/products";
import { montserrat, raleway } from "../utils/fonts";
import { formatPriceUSD } from "../utils/currency";

export function NecklacesShowcase() {
  // Let's take the first 4 or 8 items from necklaces
  const displayItems = necklaces.slice(0, 8);

  return (
    <section className="py-32 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-4">
            New Arrival
          </p>

          <h2 className={`${montserrat.className} text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-gray-900 leading-snug`}>
            Stunning Moissanite Necklaces
          </h2>

          <div className="mx-auto mt-6 mb-8 h-px w-16 bg-zinc-300"></div>

          <p className="text-sm leading-7 text-slate-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of moissanite necklaces, featuring brilliant cuts and premium sterling silver settings.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayItems.map((item) => (
            <a
              key={item.id}
              href={item.url ?? "#"}
              target={item.url && item.url !== "#" ? "_blank" : undefined}
              rel={item.url && item.url !== "#" ? "noreferrer" : undefined}
              className="group block overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="px-4 pb-6 pt-5 text-center">
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500 mb-3">
                  {item.material}
                </p>

                <h3 className={`${montserrat.className} text-xs font-normal tracking-[0.15em] uppercase text-gray-700 min-h-[40px]`}>
                  {item.name}
                </h3>

                <div className="mt-4 pt-4 border-t border-zinc-100">
                  <p className={`${raleway.className} text-xs font-medium tracking-widest text-gray-500`}>
                    {formatPriceUSD(item.price)}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
