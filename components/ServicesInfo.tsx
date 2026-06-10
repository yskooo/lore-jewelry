"use client";

import React, { useState, useEffect } from "react";
import { Cinzel, Raleway } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const images = [
  "/images/best-seller/slide-1.webp",
  "/images/best-seller/slide-2.webp",
  "/images/best-seller/slide-3.webp"
];

export function ServicesInfo() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-28 w-full">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* LEFT: Content (moved here) */}
          <div>
            <h2
              className={`${cinzel.className} text-3xl sm:text-4xl md:text-5xl font-medium tracking-wider text-gray-900`}
            >
              Jewelry Services
            </h2>

            <div className="mt-10 space-y-10">
              {/* Service 1 */}
              <div className="pb-8 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <span
                    className={`${raleway.className} font-semibold text-xs sm:text-sm tracking-widest uppercase text-gray-900`}
                  >
                    Complimentary
                  </span>
                  <span
                    className={`${raleway.className} text-gray-600 text-xs sm:text-sm`}
                  >
                    custom design consultation
                  </span>
                </div>

                <div className="mt-4">
                  <span
                    className={`${cinzel.className} text-2xl sm:text-3xl font-semibold text-gray-900`}
                  >
                    $0
                  </span>
                </div>
              </div>

              {/* Service 2 */}
              <div className="pb-8 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <span
                    className={`${raleway.className} text-gray-600 text-xs sm:text-sm`}
                  >
                    Ring resizing and engraving completed in
                  </span>

                  <span
                    className={`${cinzel.className} text-2xl sm:text-3xl font-semibold text-gray-900`}
                  >
                    24
                  </span>

                  <span
                    className={`${raleway.className} text-gray-600 text-xs sm:text-sm`}
                  >
                    Hours
                  </span>
                </div>
              </div>

              {/* Service 3 */}
              <div>
                <div
                  className={`${raleway.className} font-semibold text-xs sm:text-sm tracking-widest uppercase text-gray-900`}
                >
                  Gemstone care
                </div>

                <p
                  className={`${raleway.className} text-gray-600 text-xs sm:text-sm mt-2 mb-4 leading-relaxed`}
                >
                  certified moissanite polishing and precious metal repair
                </p>

                <span
                  className={`${cinzel.className} text-2xl sm:text-3xl font-semibold text-gray-900`}
                >
                  $37.50+
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-14">
              <button
                className={`${raleway.className} bg-black text-white text-xs sm:text-sm font-semibold tracking-[0.25em] px-12 py-4 hover:bg-gray-900 transition-all duration-300`}
              >
                Book a Consultation
              </button>
            </div>
          </div>

          {/* RIGHT: Image carousel (now right side) */}
          <div className="hidden md:flex relative h-[520px] rounded-2xl overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-black/60 z-10" />

            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Service Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 scale-105"
                    : "opacity-0 scale-100"
                }`}
              />
            ))}

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
