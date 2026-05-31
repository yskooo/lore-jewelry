import React from 'react';

export function SearchCategories() {
  return (
    <section className="pt-8 pb-24 bg-[#f9f9f9]/40 border-t border-gray-100">
      <div className="max-w-[1000px] mx-auto px-4">
        <h2 className="text-center text-2xl font-normal tracking-wide mb-10 text-gray-900">Search Jewelry</h2>
        
        {/* Mocking the owndays table-like filter layout */}
        <div className="flex border border-gray-300 mb-8 max-w-[900px] mx-auto">
          {['Type', 'Gender', 'Material', 'Colour'].map((tab, i) => (
             <div key={tab} className={`flex-1 text-center py-3.5 text-[12px] text-gray-600 font-medium tracking-wide bg-white cursor-pointer hover:bg-gray-50 flex items-center justify-center group ${i === 0 ? 'border-b-4 border-black text-black font-bold bg-[#fbfbfb]' : 'border-b border-gray-300'} ${i !== 3 ? 'border-r border-gray-300' : ''}`}>
               {tab}
               {i === 0 && <span className="ml-2 mt-1 text-[8px] rotate-180">▲</span>}
             </div>
          ))}
        </div>

        {/* Content Type visually mimicking Owndays */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mb-12 max-w-[900px] mx-auto">
          {[
            {name: 'Solitaire Ring', desc: 'For a classic look'},
            {name: 'Halo Ring', desc: 'For a glamorous look'},
            {name: 'Pendant', desc: 'For a gentle touch'},
            {name: 'Tennis Bracelet', desc: 'For a versatile style'},
            {name: 'Hoop Earrings', desc: 'For a bold look'},
            {name: 'Stud Earrings', desc: 'For every day wear'},
            {name: 'Couple Set', desc: 'For lasting bonds'},
            {name: 'Exclusive', desc: 'For rare moments'}
          ].map((type) => (
             <div key={type.name} className="bg-white hover:bg-gray-50 flex flex-col items-center justify-center py-10 cursor-pointer transition-colors group px-4">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-black opacity-80 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-[12px] font-bold text-gray-800 tracking-wide text-center">{type.name}</div>
                <div className="text-[10px] text-gray-500 mt-2 tracking-wide text-center px-2 leading-relaxed">{type.desc}</div>
             </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-gray-300 text-[11px] text-gray-700 font-bold tracking-widest px-20 py-4 hover:border-black hover:text-black transition-colors bg-white">
            See All Products
          </button>
        </div>
      </div>
    </section>
  );
}
