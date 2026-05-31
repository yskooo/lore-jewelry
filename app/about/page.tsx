"use client";
import React from "react";
import Image from "next/image";
import { Header } from "../../components/Header";
import { FooterSections } from "../../components/FooterSections";
import { cinzel, raleway } from "../../utils/fonts";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col pt-24 bg-white">
      <Header />
      <main className="flex-grow container w-full  mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
        <h1
          className={`${cinzel.className} text-3xl md:text-5xl font-bold tracking-widest text-center text-gray-900 mb-12`}
        >
          ABOUT LORE JEWELRY
        </h1>

        <div className="max-w-4xl w-full space-y-12">
          {/* Section 1 */}
          <div className="flex flex-col items-center space-y-6">
            <h2
              className={`${cinzel.className} text-xl md:text-2xl font-semibold tracking-wide text-gray-800`}
            >
              Our Craftsmanship
            </h2>
            <div className="w-full relative aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-gray-100">
              <img
                src="https://down-aka-my.img.susercontent.com/my-11134210-7qula-licw674tmueb4a.webp"
                alt="Lore Jewelry Craftsmanship"
                className="w-full h-full object-contain"
              />
            </div>
            <p
              className={`${raleway.className} text-gray-600 text-center leading-relaxed tracking-wide`}
            >
              We are committed to exceptional craftsmanship, combining
              traditional techniques with modern precision to bring you the
              finest moissanite jewelry.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center space-y-6">
            <h2
              className={`${cinzel.className} text-xl md:text-2xl font-semibold tracking-wide text-gray-800`}
            >
              Diamond vs Moissanite
            </h2>
            <div className="w-full relative aspect-[3/4] md:aspect-auto md:h-[600px] overflow-hidden bg-gray-">
              <img
                src="https://down-aka-my.img.susercontent.com/my-11134210-23020-dj6rwb86ohnv07.webp"
                alt="Diamond vs Moissanite Comparison"
                className="w-full h-full object-contain"
              />
            </div>
            <p
              className={`${raleway.className} text-gray-600 text-center leading-relaxed tracking-wide`}
            >
              Discover the brilliant difference. Moissanite offers extraordinary
              fire and brilliance, often surpassing traditional diamonds while
              remaining a conflict-free and eco-friendly choice.
            </p>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col items-center space-y-6">
            <h2
              className={`${cinzel.className} text-xl md:text-2xl font-semibold tracking-wide text-gray-800`}
            >
              The Ethical Choice
            </h2>
            <div className="w-full relative aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-gray-100">
              <img
                src="https://down-aka-my.img.susercontent.com/my-11134210-7qul3-licw674to8yr55.webp"
                alt="Ethical Choice Jewelry"
                className="w-full h-full object-contain"
              />
            </div>
            <p
              className={`${raleway.className} text-gray-600 text-center leading-relaxed tracking-wide`}
            >
              Our lab-grown moissanite provides brilliant luster without the
              environmental impact of typical diamond mining operations. Wear
              with pride and a clear conscience.
            </p>
          </div>
        </div>
      </main>
      <FooterSections />
    </div>
  );
}
