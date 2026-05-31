import React from 'react';

export function Hero() {
  return (
    <section className="relative w-full mt-16 bg-gray-50 flex items-center justify-center overflow-hidden h-[500px] md:h-[650px]">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="w-full h-full object-cover"
      >
        <source src="https://down-aka-my.vod.susercontent.com/api/v4/11110109/ori/my_86093bdf-3114-4173-a17b-4ec0dd44e762_000146.ori.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
      
      {/* OWNDAYS-style simple slider dots at bottom */}
      <div className="absolute bottom-8 flex space-x-3 z-10 w-full justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-black/20"></div>
      </div>
    </section>
  );
}
