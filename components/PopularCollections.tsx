import React from "react";

export function PopularCollections() {
  const popularCollections = [
    {
      name: "Meera Silver Moissanite Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qul1-livbuo86v1om99.webp",
      price: "RM461.67",
      url: "https://shopee.com.my/Lore-Jewellery-Meera-Silver-Moissanite-Ring-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONAL-CERTIFICATE-i.865633567.18590516245?extraParams=%7B%22display_model_id%22%3A206859899830%2C%22model_selection_logic%22%3A3%7D",
    },
    {
      name: "Adeline Oval Shaped Moissanite Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qul4-livbuo8722iu5a.webp",
      price: "RM428.67",
      url: "https://shopee.com.my/Lore-Jewellery-Adeline-Oval-Shaped-Moissanite-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONAL-CERTIFICATE-i.865633567.20481544902?extraParams=%7B%22display_model_id%22%3A231772960618%2C%22model_selection_logic%22%3A3%7D",
    },
    {
      name: "Qiun Wave Silver Moissanite Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qul1-livh27h7awxyf9.webp",
      price: "RM230.67",
      url: "https://shopee.com.my/Lore-Jewellery-Qiun-Wave-Silver-Moissanite-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONAL-CERTIFICAT-i.865633567.18890517215?extraParams=%7B%22display_model_id%22%3A221774173722%2C%22model_selection_logic%22%3A3%7D",
    },
    {
      name: "Silver Xavier Luxury Moissanite Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qul8-lixx5gq67h43d1.webp",
      price: "RM313.50",
      url: "https://shopee.com.my/Lore-Jewellery-Silver-Xavier-Luxury-Moissanite-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONA-i.865633567.22547529020?extraParams=%7B%22display_model_id%22%3A128670435432%2C%22model_selection_logic%22%3A3%7D",
    },
    {
      name: "Laia Simple Moissanite Ring",
      details:
        "0.01 Carat, VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7quky-liww02li761v50.webp",
      price: "RM131.67",
      url: "https://shopee.com.my/Lore-Jewellery-Laia-Simple-Moissanite-Ring-0.01-Carat-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONA-i.865633567.22147482344?extraParams=%7B%22display_model_id%22%3A184412733814%2C%22model_selection_logic%22%3A3%7D",
    },
    {
      name: "Crescent Star Silver Moissanite Ring",
      details:
        "0.5 Carat, VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qukw-liwsozi2uxqe09.webp",
      price: "RM230.67",
      url: "https://shopee.com.my/Lore-Jewellery-Crescent-Star-Silver-Moissanite-0.5-Carat-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONA-i.865633567.23672972204?extraParams=%7B%22display_model_id%22%3A158272548887%2C%22model_selection_logic%22%3A3%7D",
    },
    {
      name: "Ross and Rachel Couple Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134201-7qukw-liwry0k6p5xi54.webp",
      price: "RM428.67",
      url: "https://shopee.com.my/Lore-Jewellery-Ross-and-Rachel-Couple-Ring-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONAL-CERTIFICAT-i.865633567.16195233855?extraParams=%7B%22display_model_id%22%3A214412391912%2C%22model_selection_logic%22%3A3%7D",
    },
    {
      name: "Harper Round Silver Moissanite Ring",
      details:
        "VVS 1 Color Grade D, 18K White Gold / GRA INTERNATIONAL CERTIFICATE",
      image:
        "https://down-my.img.susercontent.com/file/my-11134207-7qula-liwsozi21ft21a.webp",
      price: "RM263.67",
      url: "https://shopee.com.my/Lore-Jewellery-Harper-Round-Silver-Moissanite-VVS-1-Color-Grade-D-Ring-18K-White-Gold-GRA-INTERNATIONA-i.865633567.20390536087?extraParams=%7B%22display_model_id%22%3A186862261570%2C%22model_selection_logic%22%3A3%7D",
    },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-center text-2xl font-normal tracking-wide mb-14 text-gray-900">
          Popular Collections
        </h2>

        {/* Adjusted to 4x2 grid to match Owndays more closely (it shows 4 across) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {popularCollections.map((col) => (
            <a
              key={col.name}
              href={col.url}
              target="_blank"
              rel="noreferrer"
              className="relative group overflow-hidden cursor-pointer aspect-square bg-gray-100 block"
            >
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-0 w-full px-4 text-white text-left">
                <p className="text-sm  font-medium leading-5 tracking-widest">
                  {col.name}
                </p>
                {/*<p className="mt-1 text-[11px] font-light leading-5">
                  {col.details}
                </p>*/}
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="border border-gray-300 text-[11px] text-gray-700 font-bold uppercase tracking-widest px-20 py-4 hover:border-black hover:text-black transition-colors bg-white">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
