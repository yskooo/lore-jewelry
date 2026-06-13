import React from "react";

export function PopularCollections() {
  const popularCollections = [
    {
      name: "Meera Silver Moissanite Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qul1-livbuo86v1om99.webp",
      price: "$115.42",
      url: "https://shopee.com.my/Lore-Jewellery-Meera-Silver-Moissanite-Ring-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONAL-CERTIFICATE-i.865633567.18590516245?extraParams=%7B%22display_model_id%22%3A206859899830%2C%22model_selection_logic%22%3A3%7D"
    },
    {
      name: "Adeline Oval Shaped Moissanite Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qul4-livbuo8722iu5a.webp",
      price: "$107.17",
      url: "https://shopee.com.my/Lore-Jewellery-Adeline-Oval-Shaped-Moissanite-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONAL-CERTIFICATE-i.865633567.20481544902?extraParams=%7B%22display_model_id%22%3A231772960618%2C%22model_selection_logic%22%3A3%7D"
    },
    {
      name: "Qiun Wave Silver Moissanite Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qul1-livh27h7awxyf9.webp",
      price: "$57.67",
      url: "https://shopee.com.my/Lore-Jewellery-Qiun-Wave-Silver-Moissanite-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONACERTIFICAT-i.865633567.18890517215?extraParams=%7B%22display_model_id%22%3A221774173722%2C%22model_selection_logic%22%3A3%7D"
    },
    {
      name: "Silver Xavier Luxury Moissanite Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qul8-lixx5gq67h43d1.webp",
      price: "$78.38",
      url: "https://shopee.com.my/Lore-Jewellery-Silver-Xavier-Luxury-Moissanite-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONA-i.865633567.22547529020?extraParams=%7B%22display_model_id%22%3A128670435432%2C%22model_selection_logic%22%3A3%7D"
    },
    {
      name: "Laia Simple Moissanite Ring",
      details:
        "0.01 Carat, VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7quky-liww02li761v50.webp",
      price: "$32.92",
      url: "https://shopee.com.my/Lore-Jewellery-Laia-Simple-Moissanite-Ring-0.01-Carat-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONA-i.865633567.22147482344?extraParams=%7B%22display_model_id%22%3A184412733814%2C%22model_selection_logic%22%3A3%7D"
    },
    {
      name: "Crescent Star Silver Moissanite Ring",
      details:
        "0.5 Carat, VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qukw-liwsozi2uxqe09.webp",
      price: "$57.67",
      url: "https://shopee.com.my/Lore-Jewellery-Crescent-Star-Silver-Moissanite-0.5-Carat-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONA-i.865633567.23672972204?extraParams=%7B%22display_model_id%22%3A158272548887%2C%22model_selection_logic%22%3A3%7D"
    },
    {
      name: "Ross and Rachel Couple Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134201-7qukw-liwry0k6p5xi54.webp",
      price: "$107.17",
      url: "https://shopee.com.my/Lore-Jewellery-Ross-and-Rachel-Couple-Ring-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONAL-CERTIFICAT-i.865633567.16195233855?extraParams=%7B%22display_model_id%22%3A214412391912%2C%22model_selection_logic%22%3A3%7D"
    },
    {
      name: "Harper Round Silver Moissanite Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qula-liwsozi21ft21a.webp",
      price: "$65.92",
      url: "https://shopee.com.my/Lore-Jewellery-Harper-Round-Silver-Moissanite-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONA-i.865633567.20390536087?extraParams=%7B%22display_model_id%22%3A186862261570%2C%22model_selection_logic%22%3A3%7D"
    }
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header spacing improved */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-light tracking-[0.2em] text-gray-900">
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
                <p className="text-sm font-medium tracking-wide leading-snug">
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
