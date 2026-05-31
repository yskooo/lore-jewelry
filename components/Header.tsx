"use client";
import { Heart, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { cinzel, raleway } from "../utils/fonts";
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: "Cincin", href: "/?tab=Cincin#bestsellers" },
    { label: "Rubang", href: "/?tab=Rubang#bestsellers" },
    { label: "About", href: "/about" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className=" container mx-auto px-4 h-24 md:h-28 flex items-center justify-between">
        <Link href="/" className="shrink-0 cursor-pointer">
          <Image
            src="/lore-jewelry-logo.jpeg"
            alt="Lore Jewelry Logo"
            width={240}
            height={120}
            className="object-contain h-20 md:h-28 w-auto mix-blend-multiply"
            priority
          />
        </Link>

        <nav className="hidden md:flex flex-1 justify-center space-x-16 ">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${raleway.className} text-[14px] font-semibold tracking-widest text-gray-800 hover:text-gray-500 transition-colors}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <button className="text-black hover:text-gray-500 hidden md:block">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="text-black hover:text-gray-500 hidden md:block">
            <Heart className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button
            className="text-black hover:text-gray-500 md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${raleway.className} block text-sm font-semibold tracking-widest text-black hover:text-gray-500 transition-colors py-2`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <button className="text-black hover:text-gray-500">
                <Search className="w-5 h-5 stroke-[1.5]" />
              </button>
              <button className="text-black hover:text-gray-500">
                <Heart className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
