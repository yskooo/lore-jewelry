import React, { useState } from 'react';
import { products } from '../data/products';

export function Bestsellers() {
  const tabs = ['Weekly Bestsellers', 'New Arrivals', 'Staff Picks'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center space-x-6 md:space-x-16 border-b border-gray-200 mb-10 overflow-x-auto whitespace-nowrap">
          {tabs.map(tab => (
            <button 
              key={tab}
              className={`pb-4 text-[12px] md:text-[13px] font-bold tracking-wide relative px-2 ${activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-black"></div>
              )}
            </button>
          ))}
        </div>

        <div className="flex justify-center space-x-12 mb-16 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <button className="text-blue-900 bg-[#f4f7fa] px-6 py-1.5 rounded-full">ALL</button>
          <button className="hover:text-black transition-colors pt-1.5">MEN</button>
          <button className="hover:text-black transition-colors pt-1.5">WOMEN</button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 mb-20 px-8">
          {products.slice(0,3).map((item, index) => (
            <div key={item.id} className="flex flex-col items-center group cursor-pointer relative">
               <div className="absolute -top-4 left-0 text-3xl z-10 filter drop-shadow-sm opacity-90">
                 {index === 0 && '👑'} 
                 {index === 1 && '🥈'} 
                 {index === 2 && '🥉'} 
               </div>
               
               <div className="w-full aspect-[4/2.5] mb-8 relative">
                 <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-darken transform group-hover:scale-105 transition-transform duration-700 ease-out" />
               </div>
               
               <div className="text-center mt-auto w-full">
                 <p className="text-[10px] text-gray-400 tracking-widest mb-2 uppercase font-medium">{item.id}2041N-5B {index+1}1</p>
                 <h3 className="text-[11px] font-bold uppercase tracking-widest mb-2.5 text-gray-800">LORE | ESSENTIAL</h3>
                 <p className="text-[10px] text-gray-400 font-medium tracking-wide">RM {item.price.toFixed(2)}</p>
               </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-gray-300 text-[11px] text-gray-600 font-bold tracking-widest px-14 py-4 hover:border-black hover:text-black transition-colors bg-white">
            See Bestseller Ranking
          </button>
        </div>
      </div>
    </section>
  );
}
