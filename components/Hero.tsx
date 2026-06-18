import React from "react";
import Image from "next/image";
import Link from "next/link";
import { montserrat, raleway } from "../utils/fonts";

export function Hero() {
  return (
    <section className="relative w-full mt-[96px] bg-[#fafafa] flex flex-col md:flex-row min-h-[calc(100vh-96px)]">
      {/* Left side: Large Portrait (Bride) */}
      <div className="relative w-full md:w-[55%] h-[60vh] md:h-auto">
        <Image
          src="/images/new-hero/Bule (14)(1).png"
          alt="LORE Jewelry Bridal Portrait"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </div>

      {/* Right side: Ring Macro and Text */}
      <div className="w-full md:w-[45%] flex flex-col h-auto md:h-auto">
        {/* Top block: Typography */}
        <div className="flex flex-col justify-center items-center text-center p-12 md:p-16 lg:p-24 bg-white h-[45%] md:h-[50%] shrink-0">
          <h1 className={`${montserrat.className} text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] uppercase text-gray-900 mb-6 leading-tight`}>
            Mother of <br /> Moissanite
          </h1>
          <p className={`${raleway.className} text-sm text-gray-500 mb-10 max-w-sm mx-auto leading-relaxed`}>
            Eliminating unreasonable luxury markups to bring you eternal starlight brilliance in everyday life.
          </p>
          <Link 
            href="/#bestsellers"
            className={`${montserrat.className} border border-gray-900 text-gray-900 text-xs font-bold tracking-[0.2em] uppercase px-10 py-4 hover:bg-gray-900 hover:text-white transition-colors duration-300`}
          >
            Shop The Collection
          </Link>
        </div>

        {/* Bottom block: Box Image (Ring) */}
        <div className="relative w-full h-[55%] md:h-[50%] min-h-[400px]">
          <Image
            src="/images/new-hero/Bule (15) (1)_1(1).png"
            alt="LORE Moissanite Ring Detail"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
