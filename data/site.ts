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
        label: "Rings & Bands",
        href: "/?tab=Ring#bestsellers",
        items: [
          { label: "Moissanite Rings", href: "/?tab=Ring#bestsellers" },
          { label: "Moissanite Bands", href: "/?tab=Bands#bestsellers" }
        ]
      },
      {
        label: "Earrings & Necklaces",
        href: "/?tab=Earrings#bestsellers",
        items: [
          { label: "Moissanite Earrings", href: "/?tab=Earrings#bestsellers" },
          { label: "Moissanite Necklaces", href: "/?tab=Necklace#bestsellers" }
        ]
      },
      {
        label: "Alternative Gemstones",
        href: "/?tab=Artificial#bestsellers",
        items: [
          { label: "Artificial Jewelry", href: "/?tab=Artificial#bestsellers" }
        ]
      }
    ]
  },
  {
    title: "Men",
    groups: [
      {
        label: "Rings",
        href: "/?tab=Men's Ring#bestsellers",
        items: [
          { label: "Men's Rings", href: "/?tab=Men's Ring#bestsellers" },
          // { label: "Men's Bands", href: "/?tab=Men's Ring#bestsellers" }
        ]
      },
      {
        label: "Collections",
        href: "/#bestsellers",
        items: [
          { label: "New Arrivals", href: "/#new-collection" }
        ]
      }
    ]
  }
];
