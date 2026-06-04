// Centralized site content provided by the client (social links, product taxonomy).
// Update this file when the client delivers the e-commerce / store details.

export const socialLinks = {
  instagram: "https://www.instagram.com/lorejewelryofficial.us",
  tiktok: "https://www.tiktok.com/@lorejewelryus"
} as const;

export interface CategoryGroup {
  label: string;
  href: string;
  /** Optional sub-categories (e.g. ring cuts, earring styles). */
  items?: { label: string; href: string }[];
}

export interface CategorySection {
  title: string;
  groups: CategoryGroup[];
}

// Where data exists in `data/products.ts`, categories link to the filtered
// bestsellers grid (`?tab=`). Others point at the bestsellers section so no
// link is a dead end until dedicated category pages / data are supplied.
export const categories: CategorySection[] = [
  {
    title: "Women",
    groups: [
      {
        label: "Moissanite Rings",
        href: "/?tab=Ring#bestsellers",
        items: [
          { label: "Round Cut", href: "/?tab=Ring#bestsellers" },
          { label: "Oval Cut", href: "/?tab=Ring#bestsellers" },
          { label: "Emerald Cut", href: "/?tab=Ring#bestsellers" },
          { label: "Marquise Cut", href: "/?tab=Ring#bestsellers" },
          { label: "Pear Cut", href: "/?tab=Ring#bestsellers" }
        ]
      },
      { label: "Moissanite Bands", href: "/?tab=Ring#bestsellers" },
      { label: "Moissanite Bracelet", href: "/#bestsellers" },
      {
        label: "Moissanite Earrings",
        href: "/?tab=Earrings#bestsellers",
        items: [
          { label: "Studs", href: "/?tab=Earrings#bestsellers" },
          { label: "Huggies", href: "/?tab=Earrings#bestsellers" },
          { label: "Hanging", href: "/?tab=Earrings#bestsellers" }
        ]
      },
      {
        label: "Moissanite Necklace",
        href: "/#bestsellers",
        items: [
          { label: "Round Cut", href: "/#bestsellers" },
          { label: "Oval Cut", href: "/#bestsellers" },
          { label: "Emerald Cut", href: "/#bestsellers" }
        ]
      },
      { label: "Artificial Gemstone Jewelry", href: "/#bestsellers" }
    ]
  },
  {
    title: "Men",
    groups: [{ label: "Men's Ring", href: "/?tab=Ring#bestsellers" }]
  }
];
