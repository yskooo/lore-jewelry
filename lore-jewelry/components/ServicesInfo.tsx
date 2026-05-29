import React from 'react';

export function ServicesInfo() {
  return (
    <section className="bg-[#e6e2dd]/40 py-24 w-full mt-12">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-32">
        <div className="md:w-[45%]">
          <h2 className="text-2xl font-semibold mb-10 tracking-wide text-gray-900">Our Services</h2>
          
          <div className="space-y-6 text-[13px] text-gray-800 leading-relaxed mb-10">
             <div className="flex items-baseline">
               <span className="font-bold mr-2 text-[12px] tracking-wide whitespace-nowrap">Additional charge</span>
               <span className="text-gray-600">for Ultra Thin Multi-Coated  lenses PHP <span className="text-xl font-bold ml-1 text-black">0</span></span>
             </div>
             
             <div className="flex items-baseline">
               <span className="text-gray-600 whitespace-nowrap mr-2">Completing your spectacles in just</span>
               <span className="text-xl font-bold mr-2 text-black">20</span>
               <span className="text-gray-600">Minutes</span>
             </div>

             <div className="flex flex-col space-y-1">
               <span className="font-bold text-[12px] tracking-wide">Lens replacement <span className="font-normal text-gray-600">including spectacles from other brands</span></span>
               <span className="text-gray-600">PHP <span className="text-xl font-bold ml-1 text-black">2,990</span></span>
             </div>
          </div>

          <button className="border border-gray-300 bg-transparent text-[11px] font-bold tracking-widest px-12 py-3.5 hover:bg-white hover:border-gray-400 transition-colors w-[220px]">
            More Details
          </button>
        </div>
        
        <div className="md:w-[55%]">
          <img src="https://images.unsplash.com/photo-1596941198424-788fcfe4ad62?auto=format&fit=crop&w=1000&q=80" alt="Spectacles" className="w-full mix-blend-multiply drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
