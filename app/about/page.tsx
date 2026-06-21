"use client";
import React from "react";
import { Header } from "../../components/Header";
import { FooterSections } from "../../components/FooterSections";
import { montserrat, raleway } from "../../utils/fonts";

const highlights = [
  { value: "925", label: "Sterling Silver" },
  { value: "D", label: "Color Grade" },
  { value: "18K", label: "White Gold Plated" },
  { value: "VVS1", label: "Clarity" }
];

const materials = [
  {
    title: "Designed in New York",
    body: "We believe fine jewelry should combine exceptional beauty, lasting quality, and everyday wearability. Our collections are crafted using premium S925 sterling silver and finished with a luxurious layer of 18K white gold plating, creating a brilliant shine and enhanced durability."
  },
  {
    title: "Genuine Moissanite",
    body: "Every piece features 100% genuine moissanite stones, carefully selected in the highest D color grade for their remarkable brilliance, clarity, and diamond-like appearance. Known for its exceptional sparkle and durability, moissanite offers a luxurious look while remaining suitable for everyday wear."
  },
  {
    title: "Timeless Cuts",
    body: "Our jewelry is available in a variety of timeless cuts, including Round, Oval, Emerald, and other classic silhouettes. Each design is thoughtfully created to balance elegance and versatility, making every piece suitable for both daily styling and special occasions."
  },
  {
    title: "Crafted to Last",
    body: "From material selection to final finishing, we are committed to delivering jewelry that reflects superior craftsmanship, enduring quality, and sophisticated design. The result is a collection that looks and feels luxurious while remaining accessible for modern jewelry lovers."
  }
];

const features = [
  {
    title: "Our Craftsmanship",
    image:
      "/images/1.png",
    alt: "Lore Jewelry Craftsmanship",
    body: "We are committed to exceptional craftsmanship, combining traditional techniques with modern precision to bring you the finest moissanite jewelry."
  },
  {
    title: "Diamond vs Moissanite",
    image:
      "/images/2.png",
    alt: "Diamond vs Moissanite Comparison",
    body: "Discover the brilliant difference. Moissanite offers extraordinary fire and brilliance, often surpassing traditional diamonds while remaining a conflict-free and eco-friendly choice."
  },
  {
    title: "The Ethical Choice",
    image:
      "/images/3.png",
    alt: "Ethical Choice Jewelry",
    body: "Our lab-grown moissanite provides brilliant luster without the environmental impact of typical diamond mining operations. Wear with pride and a clear conscience."
  }
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col pt-24 bg-white">
      <Header />
      <main className="flex-grow w-full">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
          <p
            className={`${raleway.className} text-[11px] md:text-xs uppercase tracking-[0.5em] text-gray-400 mb-6`}
          >
            Mother of Moissanite
          </p>
          <h1
            className={`${montserrat.className} text-3xl md:text-6xl font-bold tracking-widest text-gray-900`}
          >
            ABOUT LORE JEWELRY
          </h1>
          <div className="mx-auto mt-8 mb-8 h-px w-16 bg-gray-300" />
          <p
            className={`${raleway.className} max-w-2xl text-base md:text-lg text-gray-600 leading-relaxed tracking-wide`}
          >
            A premium jewellery brand specializing in 925 sterling silver
            moissanite accessories — focused purely on high-fire premium
            moissanite and genuine sterling silver. No alloy, no imitation
            stones.
          </p>
        </section>

        {/* Brand Story */}
        <section className="bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
            <div
              className={`${raleway.className} space-y-6 text-gray-700 leading-relaxed tracking-wide`}
            >
              <p>
                LORE JEWELRY, officially defined as the{" "}
                <span className="font-semibold text-gray-900">
                  Mother of Moissanite
                </span>
                , has focused purely on moissanite jewellery since its
                establishment — using only high-fire premium moissanite stones
                and genuine 925 sterling silver.
              </p>
              <p>
                Moissanite is known as the star stone of the galaxy, possessing
                extraordinary sparkle, clarity and brilliant fire that
                outshines ordinary diamonds. Every LORE JEWELRY piece is crafted
                from 100% 925 sterling silver — hypoallergenic, durable and
                anti-tarnish, perfectly designed for daily long-term wear. With
                precise cutting, strict stone selection and professional inlay
                techniques, every ring, necklace and earring delivers high-end
                texture and lasting elegance.
              </p>
            </div>

            <blockquote
              className={`${montserrat.className} mt-12 text-center text-xl md:text-2xl text-gray-900 italic tracking-wide leading-relaxed`}
            >
              “To bring eternal starlight brilliance into everyday life.”
            </blockquote>

            <p
              className={`${raleway.className} mt-12 text-gray-700 leading-relaxed tracking-wide text-center`}
            >
              As the Mother of Moissanite, we eliminate unreasonable luxury
              markups and insist on honest materials and fine craftsmanship —
              allowing every wearer to own high-class, eye-catching and timeless
              moissanite jewellery at an accessible price.
            </p>
          </div>
        </section>

        {/* Highlights / specs strip */}
        <section className="container mx-auto px-4 py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-white flex flex-col items-center justify-center text-center py-10 px-4"
              >
                <span
                  className={`${montserrat.className} text-3xl md:text-4xl font-bold text-gray-900`}
                >
                  {item.value}
                </span>
                <span
                  className={`${raleway.className} mt-3 text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Materials & Craftsmanship */}
        <section className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2
              className={`${montserrat.className} text-2xl md:text-3xl font-semibold tracking-wide text-gray-900`}
            >
              Materials &amp; Craftsmanship
            </h2>
            <div className="mx-auto mt-6 h-px w-12 bg-gray-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {materials.map((item) => (
              <div key={item.title} className="bg-white p-8 md:p-10">
                <h3
                  className={`${montserrat.className} text-lg md:text-xl font-semibold tracking-wide text-gray-900 mb-4`}
                >
                  {item.title}
                </h3>
                <p
                  className={`${raleway.className} text-gray-600 leading-relaxed tracking-wide`}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature rows (alternating) */}
        <section className="bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 py-16 md:py-24 space-y-16 md:space-y-28">
            {features.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-10 md:gap-16 lg:gap-24 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
              >
                <div className="w-full md:w-[65%] lg:w-[70%]">
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 group">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[35%] lg:w-[30%] text-center md:text-left flex flex-col justify-center px-4 md:px-0">
                  <h2
                    className={`${montserrat.className} text-2xl md:text-3xl lg:text-4xl font-normal tracking-wider text-gray-900 mb-6 uppercase`}
                  >
                    {item.title}
                  </h2>
                  <div
                    className={`h-[1px] w-16 bg-gray-900 mb-8 mx-auto ${index % 2 === 1 ? "md:ml-auto md:mr-0" : "md:mx-0"
                      }`}
                  />
                  <p
                    className={`${raleway.className} text-gray-600 text-sm lg:text-base leading-relaxed tracking-wide max-w-md mx-auto md:mx-0`}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <FooterSections />
    </div>
  );
}
