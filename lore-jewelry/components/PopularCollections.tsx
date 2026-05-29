import React from 'react';

export function PopularCollections() {
  const collections = [
    { id: 1, name: 'LORE | Wedding', img: 'https://images.unsplash.com/photo-1596941198424-788fcfe4ad62?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'LORE | Anniversary', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'LORE | Sparkle', img: 'https://images.unsplash.com/photo-1622398925373-3f9eba0e46f3?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'LORE | Gift', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80' },
    { id: 5, name: 'LORE | Elegance', img: 'https://images.unsplash.com/photo-1599643478524-fb6245084bd2?auto=format&fit=crop&w=400&q=80' },
    { id: 6, name: 'LORE | Daily', img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=400&q=80' },
    { id: 7, name: 'LORE | Premium', img: 'https://images.unsplash.com/photo-1574880927981-b1e604ef1db8?auto=format&fit=crop&w=400&q=80' },
    { id: 8, name: 'LORE | Classic', img: 'https://images.unsplash.com/photo-1623916972044-77a8dfbf7ee8?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-center text-2xl font-normal tracking-wide mb-14 text-gray-900">Popular Collections</h2>
        
        {/* Adjusted to 4x2 grid to match Owndays more closely (it shows 4 across) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
           {collections.map(col => (
             <div key={col.id} className="relative group overflow-hidden cursor-pointer aspect-square bg-gray-100">
               <img src={col.img} alt={col.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-6 left-0 w-full text-center px-4">
                 <p className="text-white text-[12px] font-bold tracking-widest">
                   {col.name.split('|')[0]}<span className="font-light mx-1">|</span><span className="font-serif italic align-baseline text-[14px]">{col.name.split('|')[1]}</span>
                 </p>
               </div>
             </div>
           ))}
        </div>

        <div className="text-center mt-6">
          <button className="border border-gray-300 text-[11px] text-gray-700 font-bold uppercase tracking-widest px-20 py-4 hover:border-black hover:text-black transition-colors bg-white">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}
