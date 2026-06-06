import React from "react";

export function LatestNews() {
  const news = [
    {
      id: 1,
      title: "Mother of Moissanite",
      img: "/images/best-seller/nebula-ring-mossainite.webp",
      text: "Nebula Moissanite Ring"
    },
    {
      id: 2,
      title: "K-STYLE",
      img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
      text: "K-STYLE"
    },
    {
      id: 3,
      title: "GRA",
      img: "/images/best-seller/my-11134207-7qul4-livbuo87wz1f2c.jpg",
      text: "GRA"
    },
    {
      id: 4,
      title: "SWAN",
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80",
      text: "SWAN"
    },
    {
      id: 5,
      title: "NEW",
      img: "/images/best-seller/image-Photoroom.webp",
      text: "NEW"
    }
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header upgrade */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-light tracking-[0.25em] text-gray-900">
            Latest News
          </h2>
          <div className="mt-4 mx-auto w-12 h-px bg-gray-300" />
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* LEFT: Hero tile */}
          <div className="relative group overflow-hidden aspect-square bg-black">
            <img
              src={news[0].img}
              alt={news[0].title}
              className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 opacity-90"
            />

            {/* softer gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* improved typography spacing */}
            <div className="absolute inset-x-0 bottom-10 px-6 text-center">
              <p className="text-white font-light tracking-[0.3em] text-sm md:text-base">
                LORE{" "}
                <span className="font-normal tracking-widest text-xl md:text-3xl mx-2">
                  Nebula
                </span>{" "}
                Moissanite
              </p>
            </div>
          </div>

          {/* RIGHT: Grid tiles */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {news.slice(1).map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden aspect-square bg-gray-100"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* refined overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />

                {/* better spacing for text */}
                <div className="absolute bottom-6 left-0 right-0 text-center px-3">
                  <p className="text-white font-semibold tracking-[0.25em] text-[10px] uppercase">
                    LORE
                  </p>
                  <p className="text-white font-semibold tracking-widest text-lg md:text-xl mt-1 uppercase">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA refinement */}
        <div className="text-center mt-16">
          <button className="border border-gray-300 text-[11px] text-gray-700 font-semibold uppercase tracking-[0.25em] px-16 py-4 hover:border-black hover:text-black transition-all duration-300 bg-white">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
