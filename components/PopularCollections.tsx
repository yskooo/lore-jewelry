import React from "react";
import { montserrat, raleway } from "../utils/fonts";

export function PopularCollections() {
  const popularCollections = [
    {
      name: "Crescent Star Moissanite Ring S925 0.5 CT",
      image: "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/321ff2c52c6548edb53fc84173c87c5e~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
      url: "https://vm.tiktok.com/ZP9jhg6GHo7oQ-uOTPW/"
    },
    {
      name: "Adeline Oval Moissanite Ring S925 1.0 CT",
      image: "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/ebde91b93af443489903a0ef8710b14a~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
      url: "https://vm.tiktok.com/ZP9jhgpJeaC8a-m2eKX/"
    },
    {
      name: "Quinn Wave Halo Moissanite Ring S925 1.0 CT",
      image: "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/5f64628546ff4191999dac4be3bd863d~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
      url: "https://vm.tiktok.com/ZP9jhpJGoH2Lb-9cfuY/"
    },
    {
      name: "Square Shaped Moissanite Ring S925",
      image: "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b668b6e0a32644229ffe1c5378b27d7b~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
      url: "https://vm.tiktok.com/ZP9jhbwyv5XbE-mpKde/"
    },
    {
      name: "Mae Silver Moissanite Ring S925",
      image: "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/4a0facf349234b79805837c50a4a8b86~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
      url: "https://vm.tiktok.com/ZP9jhbEo5pAhR-JBAnR/"
    },
    {
      name: "Twin Stars Moissanite Ring S925",
      image: "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/7604471473e94af98c6fc985e79c18c2~tplv-fhlh96nyum-crop-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
      url: "https://vm.tiktok.com/ZP9jhg19T9qrn-8xj7Z/"
    },
    {
      name: "Britney Moissanite Ring S925",
      image: "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/bcdba79dbf354456aac58dd2bac820d7~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
      url: "https://vm.tiktok.com/ZP9jhgJt9UKCx-4JEPi/"
    },
    {
      name: "Florence Moissanite Ring S925",
      image: "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/b1187ad6312b4757b79fde3743232b60~tplv-fhlh96nyum-crop-webp:1024:1024.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=607f11de&idc=useast5&from=2378011839",
      url: "https://vm.tiktok.com/ZP9jhgd3WM51e-ICQxI/"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header spacing improved */}
        <div className="text-center mb-16">
          <h2 className={`${montserrat.className} text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-gray-900 leading-snug`}>
            Popular Collections
          </h2>
          <div className="mt-4 mx-auto w-12 h-px bg-gray-300" />
        </div>

        {/* Grid spacing + layout refinement */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {popularCollections.map((col) => (
            <a
              key={col.name}
              href={col.url}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden bg-gray-100 block rounded-sm"
            >
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
              />

              {/* softer gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />

              {/* improved text spacing */}
              <div className="absolute bottom-0 left-0 w-full px-5 py-5 text-white">
                <p className={`${montserrat.className} text-xs font-normal uppercase tracking-[0.15em] leading-snug`}>
                  {col.name}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA spacing + refinement
        <div className="text-center">
          <button className="border border-gray-300 text-[11px] text-gray-700 font-semibold uppercase tracking-[0.25em] px-16 py-4 hover:border-black hover:text-black transition-all duration-300 bg-white">
            View More
          </button>
        </div> */}
      </div>
    </section>
  );
}
