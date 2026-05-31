import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Bestsellers } from "@/components/Bestsellers";
import { ServicesInfo } from "@/components/ServicesInfo";
import { LatestNews } from "@/components/LatestNews";
import { SearchCategories } from "@/components/SearchCategories";
import { PopularCollections } from "@/components/PopularCollections";
import { FooterSections } from "@/components/FooterSections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200">
      <Header />
      <Hero />
      <Bestsellers />
      <hr className="border-t border-gray-200 mx-20" />
      <ServicesInfo />
      <LatestNews />
      <SearchCategories />
      <PopularCollections />
      <FooterSections />
    </div>
  );
}
