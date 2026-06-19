import { JewelryItem } from "../data/products";

const ringCuts = ["Round Cut", "Oval Cut", "Emerald Cut", "Marquise Cut", "Pear Cut", "Heart Cut"];
const necklaceCuts = ["Round Cut", "Oval Cut", "Emerald Cut"];

export function inferSubCategory(item: JewelryItem, tab: string): string | undefined {
  if (item.subCategory) {
    return item.subCategory;
  }

  const nameLower = item.name.toLowerCase();

  if (tab === "Ring" || tab === "Necklace") {
    const cuts = tab === "Ring" ? ringCuts : necklaceCuts;
    for (const cut of cuts) {
      if (nameLower.includes(cut.toLowerCase())) {
        return cut;
      }
    }
    return "Other";
  }

  if (tab === "Earrings") {
    if (nameLower.includes("drop") || nameLower.includes("hanging") || nameLower.includes("dangle")) {
      return "Hanging";
    }
    if (nameLower.includes("stud")) {
      return "Studs";
    }
    if (nameLower.includes("huggie") || nameLower.includes("hoop")) {
      return "Huggies";
    }
    // Fallback for earrings where the style isn't explicitly named
    return "Other";
  }

  return undefined;
}

/**
 * Builds an O(1) lookup index for Bestsellers based on category and sub-category.
 * Returns a Map where the first key is the Main Tab (e.g. "Ring"),
 * and the inner Map's key is the SubCategory (e.g. "Round Cut").
 */
export function buildBestsellersIndex(
  categoriesMap: Record<string, JewelryItem[]>
): Map<string, Map<string, JewelryItem[]>> {
  const index = new Map<string, Map<string, JewelryItem[]>>();

  for (const [tab, items] of Object.entries(categoriesMap)) {
    const tabMap = new Map<string, JewelryItem[]>();
    // "All" sub-category always contains all items for this tab
    tabMap.set("All", items);

    for (const item of items) {
      const subCategory = inferSubCategory(item, tab);
      if (subCategory) {
        if (!tabMap.has(subCategory)) {
          tabMap.set(subCategory, []);
        }
        tabMap.get(subCategory)!.push(item);
      }
    }
    index.set(tab, tabMap);
  }

  return index;
}
