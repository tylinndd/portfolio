import React from 'react';
import profileImg from '../assets/tdelane1@students.kennesaw.edu-e244cae4.jpg';

const IDCard = () => {
  return (
    <div className="w-[300px] md:w-[380px] border border-green p-4 bg-black relative group perspective-1000 select-none flex flex-col shrink-0">
      
      {/* Container for 3D tilt effect */}
      <div className="transition-transform duration-300 transform-style-3d group-hover:[transform:rotateY(5deg)_rotateX(2deg)] w-full aspect-[3/4] relative">
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
          <div className="w-1/2 h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent absolute top-[-50%] left-[-100%] group-hover:animate-shimmer skew-x-[-20deg]"></div>
        </div>
        
        {/* Grain overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none z-40 mix-blend-overlay">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {/* Photo */}
        <div className="w-full h-full border border-green bg-green relative overflow-hidden">
          <img 
            src={profileImg} 
            alt="Profile" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply grayscale contrast-125"
          />
          {/* Chromatic aberration overlays */}
          <div className="absolute inset-0 mix-blend-screen opacity-40 translate-x-[2px]" style={{ backgroundColor: 'red' }}>
            <img src={profileImg} alt="" className="w-full h-full object-cover mix-blend-multiply grayscale contrast-125" />
          </div>
          <div className="absolute inset-0 mix-blend-screen opacity-40 translate-x-[-2px]" style={{ backgroundColor: 'blue' }}>
            <img src={profileImg} alt="" className="w-full h-full object-cover mix-blend-multiply grayscale contrast-125" />
          </div>
          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,255,65,0.1)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px]"></div>
        </div>
        
        {/* Verified stamp blinking on hover (Removed as requested) */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-red text-red font-press text-2xl p-3 rotate-[-15deg] opacity-0 group-hover:opacity-100 group-hover:animate-blink z-50 pointer-events-none bg-black/50 shadow-[0_0_15px_rgba(255,0,60,0.5)]">
          VERIFIED
        </div> */}
      </div>
    </div>
  );
};

export default IDCard;