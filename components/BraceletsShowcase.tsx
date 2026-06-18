import React from "react";
import { bracelets } from "../data/products";

export function BraceletsShowcase() {
  const displayItems = bracelets.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-4">
            Featured Collection
          </p>

          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-950 leading-snug">
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
            <a
              key={item.id}
              href={item.url ?? "#"}
              target={item.url && item.url !== "#" ? "_blank" : undefined}
              rel={item.url && item.url !== "#" ? "noreferrer" : undefined}
              className="group block overflow-hidden bg-white border border-gray-100"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-white p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 mix-blend-darken"
                />
              </div>

              {/* Content */}
              <div className="px-4 pb-6 pt-5 text-center bg-gray-50/50">
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500 mb-3">
                  {item.material}
                </p>

                <h3 className="text-sm font-medium tracking-wide text-slate-950 min-h-[40px]">
                  {item.name}
                </h3>

                <div className="mt-4 pt-4">
                  <p className="text-sm font-semibold tracking-[0.2em] text-slate-900">
                    USD ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
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
