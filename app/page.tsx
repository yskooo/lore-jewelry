import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Bestsellers } from "@/components/Bestsellers";
// import { ServicesInfo } from "@/components/ServicesInfo";
// import { LatestNews } from "@/components/LatestNews";
import { StarterProducts } from "@/components/StarterProducts";
import { NewCollection } from "@/components/NewCollection";
// import { SearchCategories } from "@/components/SearchCategories";
import { PopularCollections } from "@/components/PopularCollections";
import { FooterSections } from "@/components/FooterSections";
import { NecklacesShowcase } from "@/components/NecklacesShowcase";
import { BraceletsShowcase } from "@/components/BraceletsShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200">
      <Header />
      <Hero />
      <Suspense fallback={<div className="py-20" />}>
        <Bestsellers />
      </Suspense>
      <StarterProducts />
      <NecklacesShowcase />
      <NewCollection />
      <BraceletsShowcase />
      <hr className="border-t border-gray-200 mx-20" />
      {/* <ServicesInfo /> */}
      {/* <LatestNews /> */}
      {/* <SearchCategories /> */}
      <PopularCollections />
      <FooterSections />
    </div>
  );
}
