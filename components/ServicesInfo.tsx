"use client";

import React, { useState, useEffect } from "react";
import { Cinzel, Raleway } from "next/font/google";
import Image from "next/image";

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
    <section className="bg-white py-24 w-full">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Right Side - Content */}
          <div>
            {/* Section Title */}
            <h2
              className={`${cinzel.className} text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-12 tracking-wider text-gray-900`}
            >
              Jewelry Services
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {/* Service 1 */}
              <div className="border-b border-gray-200 pb-6 sm:pb-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3">
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
                <div className="mt-3">
                  <span
                    className={`${cinzel.className} text-2xl sm:text-3xl font-bold text-gray-900`}
                  >
                    RM 0
                  </span>
                </div>
              </div>

              {/* Service 2 */}
              <div className="border-b border-gray-200 pb-6 sm:pb-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3">
                  <span
                    className={`${raleway.className} text-gray-600 text-xs sm:text-sm`}
                  >
                    Ring resizing and engraving completed in
                  </span>
                  <span
                    className={`${cinzel.className} text-2xl sm:text-3xl font-bold text-gray-900`}
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
              <div className="pb-6 sm:pb-8">
                <div
                  className={`${raleway.className} font-semibold text-xs sm:text-sm tracking-widest uppercase text-gray-900 mb-2`}
                >
                  Gemstone care
                </div>
                <p
                  className={`${raleway.className} text-gray-600 text-xs sm:text-sm mb-3`}
                >
                  certified moissanite polishing and precious metal repair
                </p>
                <div>
                  <span
                    className={`${cinzel.className} text-2xl sm:text-3xl font-bold text-gray-900`}
                  >
                    RM 150+
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 sm:mt-12">
              <button
                className={`${raleway.className} border-2 border-black bg-black text-white text-xs sm:text-sm font-semibold tracking-widest px-10 sm:px-12 py-3 hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto`}
              >
                Book a Consultation
              </button>
            </div>
          </div>
          {/* Left Side - Image and Background (Now a Carousel) */}
          <div className="hidden relative h-[260px] sm:h-[320px] md:h-[550px] bg-gradient-to-br overflow-hidden rounded-2xl md:flex items-center justify-center p-3 sm:p-4">
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Service Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 rounded-sm ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}

            {/* Slider dots <div className="absolute bottom-6 flex space-x-3 z-20 w-full justify-center">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-black"
                      : "bg-black/30 hover:bg-black/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
