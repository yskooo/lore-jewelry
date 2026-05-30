import React from "react";

export function LatestNews() {
  const news = [
    {
      id: 1,
      title: "Mother of Moissanite",
      img: "/images/best-seller/nebula-ring-mossainite.webp",
      text: "Nebula Moissanite Ring",
    },
    {
      id: 2,
      title: "K-STYLE",
      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
      text: "K-STYLE",
    },
    {
      id: 3,
      title: "GRA",
      img: "/images/best-seller/my-11134207-7qul4-livbuo87wz1f2c.jpg",
      text: "GRA",
    },
    {
      id: 4,
      title: "SWAN",
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80",
      text: "SWAN",
    },
    {
      id: 5,
      title: "NEW",
      img: "/images/best-seller/image-Photoroom.webp",
      text: "NEW",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-center text-2xl font-normal tracking-wide mb-14 text-gray-900">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main Large Square */}
          <div className="relative group overflow-hidden cursor-pointer aspect-square bg-gray-900">
            <img
              src={news[0].img}
              alt={news[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700  "
            />
            <div className="absolute inset-x-0 bottom-12 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-white font-bold tracking-widest uppercase text-xl md:text-2xl">
                LORE{" "}
                <span className="font-light normal-case text-2xl md:text-4xl mx-2">
                  Nebula
                </span>{" "}
                Moissanite
              </p>
            </div>
          </div>

          {/* 4 Small Squares */}
          <div className="grid grid-cols-2 gap-4">
            {news.slice(1).map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden cursor-pointer aspect-square bg-gray-100"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                  <p className="text-white font-bold tracking-[0.2em] text-[10px] uppercase">
                    LORE
                  </p>
                  <p className="text-white font-bold tracking-widest text-2xl mt-1 uppercase ">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="border border-gray-300 text-[11px] text-gray-700 font-bold uppercase tracking-widest px-20 py-4 hover:border-black hover:text-black transition-colors bg-white">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
