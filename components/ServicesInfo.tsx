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
  "https://down-aka-my.img.susercontent.com/my-11134210-23020-xb825b13ohnv18.webp",
  "https://down-aka-my.img.susercontent.com/my-11134210-23020-dwl45b13ohnv3d.webp",
  "https://down-aka-my.img.susercontent.com/my-11134210-23020-xe825b13ohnv0b.webp"
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
              className={`${cinzel.className} text-4xl md:text-5xl font-semibold mb-12 tracking-wider text-gray-900`}
            >
              Jewelry Services
            </h2>

            <div className="space-y-8">
              {/* Service 1 */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-baseline gap-3">
                  <span
                    className={`${raleway.className} font-semibold text-sm tracking-widest uppercase text-gray-900`}
                  >
                    Complimentary
                  </span>
                  <span
                    className={`${raleway.className} text-gray-600 text-sm`}
                  >
                    custom design consultation
                  </span>
                </div>
                <div className="mt-3">
                  <span
                    className={`${cinzel.className} text-3xl font-bold text-gray-900`}
                  >
                    RM 0
                  </span>
                </div>
              </div>

              {/* Service 2 */}
              <div className="border-b border-gray-200 pb-8">
                <div className="flex items-baseline gap-3">
                  <span
                    className={`${raleway.className} text-gray-600 text-sm`}
                  >
                    Ring resizing and engraving completed in
                  </span>
                  <span
                    className={`${cinzel.className} text-3xl font-bold text-gray-900`}
                  >
                    24
                  </span>
                  <span
                    className={`${raleway.className} text-gray-600 text-sm`}
                  >
                    Hours
                  </span>
                </div>
              </div>

              {/* Service 3 */}
              <div className="pb-8">
                <div
                  className={`${raleway.className} font-semibold text-sm tracking-widest uppercase text-gray-900 mb-2`}
                >
                  Gemstone care
                </div>
                <p
                  className={`${raleway.className} text-gray-600 text-sm mb-3`}
                >
                  certified moissanite polishing and precious metal repair
                </p>
                <div>
                  <span
                    className={`${cinzel.className} text-3xl font-bold text-gray-900`}
                  >
                    RM 150+
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <button
                className={`${raleway.className} border-2 border-black bg-black text-white text-xs font-semibold tracking-widest px-12 py-3 hover:bg-black hover:text-white transition-all duration-300`}
              >
                Book a Consultation
              </button>
            </div>
          </div>
          {/* Left Side - Image and Background (Now a Carousel) */}
          <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-[#e6e2dd]/60 to-[#f5f1ed] overflow-hidden rounded-2xl flex items-center justify-center p-4">
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Service Slide ${index + 1}`}
                className={`absolute inset-4 max-w-[calc(100%-2rem)] max-h-[calc(100%-4rem)] m-auto object-contain transition-opacity duration-1000 rounded-xl ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}

            {/* Slider dots */}
            <div className="absolute bottom-6 flex space-x-3 z-20 w-full justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
