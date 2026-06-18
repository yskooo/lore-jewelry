"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { montserrat, raleway } from "../utils/fonts";

const leftImages = [
  "/images/new-hero/Bule (14)(1).png",
  "/images/new-hero/Bule (25)(1).png",
  "/images/new-hero/Bule (35)(1).png"
];

const rightImages = [
  "/images/new-hero/Bule (15) (1)_1(1).png",
  "/images/new-hero/Bule (17)(1).png",
  "/images/new-hero/Bule (15) (1)_1(1).png" // Reused to match length
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % leftImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full mt-[96px] bg-[#fafafa] flex flex-col md:flex-row min-h-[calc(100vh-96px)]">
      {/* Left side: Large Portrait Slider */}
      <div className="relative w-full md:w-[55%] h-[60vh] md:h-auto overflow-hidden">
        {leftImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`LORE Jewelry Bridal Portrait ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover object-top transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, 55vw"
          />
        ))}
        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-0 w-full flex justify-center space-x-4 z-10">
          {leftImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? "w-8 h-1 bg-white" 
                  : "w-2 h-1 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right side: Ring Macro and Text */}
      <div className="w-full md:w-[45%] flex flex-col h-auto md:h-auto">
        {/* Top block: Typography */}
        <div className="flex flex-col justify-center items-center text-center p-12 md:p-16 lg:p-24 bg-white h-[45%] md:h-[50%] shrink-0">
          <h1 className={`${montserrat.className} text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] uppercase text-gray-900 mb-6 leading-tight`}>
            Mother of <br /> Moissanite
          </h1>
          <p className={`${raleway.className} text-xs tracking-wide text-gray-500 mb-10 max-w-sm mx-auto leading-relaxed`}>
            Eliminating unreasonable luxury markups to bring you eternal starlight brilliance in everyday life.
          </p>
          <Link 
            href="/#bestsellers"
            className={`${montserrat.className} border border-gray-900 text-gray-900 text-[10px] font-bold tracking-[0.25em] uppercase px-10 py-4 hover:bg-gray-900 hover:text-white transition-colors duration-300`}
          >
            Shop The Collection
          </Link>
        </div>

        {/* Bottom block: Box Image Slider */}
        <div className="relative w-full h-[55%] md:h-[50%] min-h-[400px] overflow-hidden">
          {rightImages.map((src, index) => (
            <Image
              key={`${src}-${index}`}
              src={src}
              alt={`LORE Moissanite Detail ${index + 1}`}
              fill
              priority={index === 0}
              className={`object-cover object-center transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
