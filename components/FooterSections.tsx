import React from "react";

export function FooterSections() {
  return (
    <>
      {/* Information Row */}
      <section className="pt-24 pb-32 ">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-1/5 shrink-0 flex flex-row lg:flex-col justify-between items-start">
            <h3 className="text-xl font-normal mb-4 tracking-wide text-gray-900">
              Information
            </h3>
            <a
              href="#"
              className="text-blue-500 text-sm font-bold flex items-center hover:underline tracking-wide"
            >
              See all Information <span className="ml-1 text-xs">▶</span>
            </a>
          </div>
          <div className="lg:w-4/5 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                date: "2026.05.28 | Latest Information",
                title: "LORE JEWELRY Kuala Lumpur Jun 12, 2026 Fri. New Open!",
                img: "/lore-jewelry-logo.jpeg"
              },
              {
                date: "2026.05.15 | Press Release",
                title: "Announcement on Moissanite Product Line Quality",
                outline: true
              },
              {
                date: "2026.04.11 | Press Release",
                title:
                  "LORE REVAMPS BRAND IDENTITY, DEBUTING NEW RETAIL DESIGN IN MALAYSIA",
                outline: true
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col group cursor-pointer">
                <div className="aspect-[16/10] bg-[#bebebe] mb-4 overflow-hidden flex items-center justify-center relative">
                  {item.outline ? (
                    <div className="text-center">
                      {/* Mock of OWNDAYS empty info image */}
                      <div className="w-12 h-6 border-2 border-white/60 mx-auto rounded-sm flex items-center justify-center opacity-80 mb-2">
                        <div className="w-2 h-2 rounded-full border border-white/60 mx-1"></div>
                        <div className="w-2 h-2 rounded-full border border-white/60 mx-1"></div>
                      </div>
                      <p className="text-white text-[12px] font-bold tracking-[0.2em] uppercase">
                        LORE
                      </p>
                    </div>
                  ) : (
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                </div>
                <p className="text-xs text-gray-500 mb-2 font-medium tracking-wide">
                  {item.date}
                </p>
                <p className="text-sm text-gray-800 font-medium leading-relaxed max-w-[280px]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map / Shops Section */}
      <section className="bg-white relative flex justify-center mt-20 mb-32">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center top-[-100px]">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/198/050/non_2x/dotted-world-map-png.png"
            alt="World Map"
            className="w-[1100px] object-contain opacity-10"
          />
        </div>

        <div className="w-[90%] max-w-[600px] relative z-10 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <div className="p-6 md:p-16 flex flex-col justify-center">
            <h3 className="text-2xl font-normal mb-8 tracking-wide">Shops</h3>
            <p className="text-sm text-gray-600 mb-10 leading-relaxed max-w-[400px]">
              With physical locations in Malaysia, LORE is committed to bringing
              the best ethical jewelry to customers around the world.
            </p>
            <div className="flex border border-gray-300 mb-4 h-12 overflow-hidden">
              <div className="flex items-center px-2 md:px-4 text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="flex-1 w-0 px-2 text-sm outline-none placeholder-gray-400 font-medium"
              />
              <button className="bg-[#2b2b2b] text-white px-4 md:px-8 text-sm font-bold tracking-wider hover:bg-black transition-colors shrink-0">
                Search
              </button>
            </div>
            <button className="border border-gray-300 text-sm font-bold tracking-widest px-8 py-3.5 hover:border-black hover:text-black transition-colors flex items-center justify-center w-full bg-white text-gray-600">
              Store Locator
            </button>
          </div>
        </div>
      </section>

      {/* EYE CAMP (CSR) */}
      {/* <section className="relative h-[480px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80"
          alt="CSR Eye Camp"
          className="absolute inset-0 w-full h-full object-cover drop-shadow"
        />
        <div className="absolute inset-0 bg-[#7c8b4c]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-end max-w-[1100px] mx-auto px-4 lg:px-12 w-full">
          <div className="w-full lg:w-[45%] text-white ml-auto">
            <h2 className="text-xl font-medium mb-6 tracking-wide uppercase">
              LORE EARTH
            </h2>
            <p className="text-sm font-bold mb-6 tracking-wide">
              Sharing the vision with the world.
            </p>
            <p className="text-sm leading-7 mb-10 opacity-95 text-justify">
              LORE launched a CSR initiative which prioritizes ethical sourcing
              and environmental sustainability. For every Moissanite ring
              purchased, a portion supports local community education and
              environmental restoration efforts.
              <br />
              <br />
              By choosing lab-grown moissanite, we reduce the environmental
              impact of typical diamond mining operations, providing brilliant
              luster while remaining conflict-free.
            </p>
            <button className="border border-white/60 bg-transparent text-white text-sm font-bold tracking-widest px-10 py-3.5 hover:bg-white hover:text-black transition-colors w-[320px]">
              Learn More About Our CSR Activities
            </button>
          </div>
        </div>
      </section> */}

      {/* <section className="py-24 bg-white">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-normal tracking-wide mb-4">Instagram</h2>
          <div className="text-center mb-12">
            <a href="#" className="text-[#0095f6] text-[11px] font-bold uppercase tracking-widest hover:underline">#LOREJEWELRY</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0">
             {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
               <div key={i} className="aspect-square bg-gray-100 overflow-hidden cursor-pointer group">
                  <img src={`https://images.unsplash.com/photo-1599643478524-fb6245084bd2?auto=format&fit=crop&w=300&q=80&sig=${i}`} alt={`Instagram ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               </div>
             ))}
          </div>
        </div>
      </section> */}

      {/* Footer Nav */}
      <footer className="bg-[#f2f2f2] pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-12 mb-20 text-sm">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] mb-5 text-gray-900">
                PRODUCTS
              </h4>
              <ul className="space-y-4 text-gray-500">
                <li>
                  <a href="#" className="hover:text-black">
                    Ring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Earring
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-1">
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] mb-5 text-gray-900">
                PURCHASE
              </h4>
              <ul className="space-y-4 text-gray-500">
                <li>
                  <a href="#" className="hover:text-black">
                    LORE Customer Guarantees
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] mb-5 text-gray-900">
                ABOUT
              </h4>
              <ul className="space-y-4 text-gray-500">
                <li>
                  <a href="#" className="hover:text-black">
                    Shops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Corporate Information
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] mb-5 text-gray-900">
                SUPPORT
              </h4>
              <ul className="space-y-4 text-gray-500">
                <li>
                  <a href="#" className="hover:text-black">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    System Requirements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-2 mt-4 lg:mt-0">
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] mb-5 text-gray-900">
                CONTACT US
              </h4>
              <p className="text-xl font-bold mb-3 tracking-wider text-black">
                0917-701-6030
              </p>
              <p className="text-sm text-gray-500 mb-1.5 font-medium">
                Monday to Friday
              </p>
              <p className="text-sm text-black font-bold tracking-wide">
                Operating Hours 9:30 - 12:00 and 13:00 - 18:30
              </p>
            </div>
          </div>

          <div className="flex flex-col pb-8">
            <div className="flex items-center space-x-6 mb-8 text-black">
              <a href="#" className="hover:text-gray-600 transition-colors">
                <svg
                  className="w-[18px] h-[18px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-600 transition-colors">
                <svg
                  className="w-[18px] h-[18px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                COPYRIGHT (C) LORE JEWELRY co., ltd. ALL RIGHTS RESERVED.
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center text-sm text-gray-600 font-medium">
                <span>Philippine</span>
                <span className="hidden md:inline mx-2 text-gray-300">|</span>
                <span className="mt-1 md:mt-0">English</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
