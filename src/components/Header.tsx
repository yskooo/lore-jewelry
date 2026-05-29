import { Heart, Search, Menu } from 'lucide-react';
import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold tracking-[0.2em] text-black shrink-0 cursor-pointer">
          LORE
        </div>
        
        <nav className="hidden md:flex flex-1 justify-center space-x-12">
          {['RINGS', 'NECKLACES', 'Earrings', 'Services', 'Find Shops'].map((item, idx) => (
            <a key={item} href="#" className={`text-[12px] font-bold tracking-widest text-black hover:text-gray-500 transition-colors ${idx < 2 ? 'uppercase' : ''}`}>
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <button className="text-black hover:text-gray-500 hidden md:block">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="text-black hover:text-gray-500 hidden md:block">
            <Heart className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="text-black hover:text-gray-500 md:hidden">
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </header>
  );
}
