import { Header } from "@/components/Header";
import SizeGuideClient from "./SizeGuideClient";
import { FooterSections } from "@/components/FooterSections";

export const metadata = {
  title: "Size Guide | Lore Jewelry",
  description: "Ring and necklace size guide for Lore Jewelry"
};

export default function SizeGuide() {
  return (
    <div>
      <Header />
      <SizeGuideClient />
      <FooterSections />
    </div>
  );
}
