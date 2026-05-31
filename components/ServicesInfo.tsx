import React from "react";
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

export function ServicesInfo() {
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
          {/* Left Side - Image and Background */}
          <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-[#e6e2dd]/60 to-[#f5f1ed]  overflow-hidden flex items-center justify-center">
            <Image
              src="/images/best-seller/my-11134207-7qul4-livbuo87wz1f2c.jpg"
              alt="Our Services"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
