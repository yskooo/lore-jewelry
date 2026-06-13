"use client";
import { Crown } from "lucide-react";
import React, { useState } from "react";
import { products, newArrivals } from "../data/products";
import { socialLinks } from "../data/site";
export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<"bestsellers" | "new">(
    "bestsellers"
  );
  const currentItems = activeTab === "bestsellers" ? products : newArrivals;
  return (
    <section className="py-24 bg-white" id="rings">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Tabs */}{" "}
        <div className="flex justify-center border-b border-gray-200 mb-12">
          {" "}
          <button
            className={`px-8 py-4 text-[11px] font-bold tracking-[0.1em] uppercase transition-all relative ${activeTab === "bestsellers" ? "text-black" : "text-gray-400 hover:text-gray-800"}`}
            onClick={() => setActiveTab("bestsellers")}
          >
            {" "}
            Weekly Bestsellers{" "}
            {activeTab === "bestsellers" && (
              <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-black"></span>
            )}{" "}
          </button>{" "}
          <button
            className={`px-8 py-4 text-[11px] font-bold tracking-[0.1em] uppercase transition-all relative ${activeTab === "new" ? "text-black" : "text-gray-400 hover:text-gray-800"}`}
            onClick={() => setActiveTab("new")}
          >
            {" "}
            New Arrivals{" "}
            {activeTab === "new" && (
              <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-black"></span>
            )}{" "}
          </button>{" "}
        </div>{" "}
        {/* Product Grid */}{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {" "}
          {currentItems.map((item, index) => (
            <div key={item.id} className="group cursor-pointer relative">
              {" "}
              {/* Crown for Top 3 Bestsellers */}{" "}
              {activeTab === "bestsellers" && index < 3 && (
                <div className="absolute -top-6 left-0 z-10 hidden sm:block">
                  {" "}
                  <Crown
                    className="w-6 h-6"
                    fill={
                      index === 0
                        ? "#FFD700"
                        : index === 1
                          ? "#C0C0C0"
                          : "#CD7F32"
                    }
                    color={
                      index === 0
                        ? "#DAA520"
                        : index === 1
                          ? "#A9A9A9"
                          : "#8B4513"
                    }
                    strokeWidth={1.5}
                  />{" "}
                </div>
              )}{" "}
              <div className="relative aspect-[4/3] mb-6 flex items-center justify-center p-4 overflow-hidden">
                {" "}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                />{" "}
              </div>{" "}
              <div className="text-center">
                {" "}
                <h3 className="text-[11px] text-gray-500 mb-1 tracking-wider uppercase truncate px-2">
                  {item.name}
                </h3>{" "}
                <p className="text-[11px] font-bold text-gray-900 mb-2 uppercase tracking-[0.15em]">
                  {item.material}
                </p>{" "}
                <p className="text-[11px] text-gray-500 tracking-wider">
                  RM {item.price.toFixed(2)}
                </p>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {activeTab === "bestsellers" && (
          <div className="mt-16 text-center">
            {" "}
            <a
              href={socialLinks.tiktok}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-gray-300 text-gray-800 hover:border-black transition-all px-16 py-3 text-[11px] font-bold tracking-[0.1em] uppercase"
            >
              {" "}
              Shop on TikTok Shop{" "}
            </a>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </section>
  );
}
