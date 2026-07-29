"use client";
import React, { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out after 2.8 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2800);

    // Remove from DOM completely after fade out completes
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 3300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  const textArray = [
    "स", "श", "क्त",
    " ", "·", " ",
    "स", "क्ष", "म",
    " ", "·", " ",
    "सु", "र", "क्षि", "त"
  ];
  
  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050f24] overflow-hidden transition-opacity duration-700 ease-in-out ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background Concentric Circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-white/20 animate-[spin_40s_linear_infinite]"></div>
        <div className="absolute w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full border border-white/10 border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>
        <div className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full border border-white/15 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-white/5 animate-[spin_80s_linear_infinite_reverse]"></div>
        <div className="absolute w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full border border-white/5 border-dashed animate-[spin_100s_linear_infinite]"></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative flex flex-col items-center justify-center gap-6 md:gap-10 z-10">
        
        {/* Top Glowing Line */}
        <div className="relative flex items-center justify-center w-[250px] md:w-[400px]">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent opacity-60"></div>
          <div className="absolute w-[4px] h-[4px] rounded-full bg-[#ffeba1] shadow-[0_0_12px_3px_var(--gold-500)] animate-pulse"></div>
        </div>

        {/* Text */}
        <div className="text-[var(--gold-500)] text-xl sm:text-2xl md:text-3xl font-medium tracking-[4px] md:tracking-[8px]">
          {textArray.map((char, index) => (
            <span
              key={index}
              className="inline-block opacity-0 translate-y-2 animate-letter-reveal"
              style={{ 
                animationDelay: `${index * 0.08}s`,
                animationFillMode: 'forwards' 
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>

        {/* Bottom Glowing Line */}
        <div className="relative flex items-center justify-center w-[250px] md:w-[400px]">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent opacity-60"></div>
          <div className="absolute w-[4px] h-[4px] rounded-full bg-[#ffeba1] shadow-[0_0_12px_3px_var(--gold-500)] animate-pulse"></div>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className="absolute bottom-24 md:bottom-32 flex flex-col items-center gap-4 z-10">
        <div className="relative flex items-center justify-center w-[150px] md:w-[200px]">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-500)] to-transparent opacity-40"></div>
          <div className="absolute w-[3px] h-[3px] rounded-full bg-[#ffeba1] shadow-[0_0_8px_2px_var(--gold-500)] animate-dot-slide" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <span className="text-[var(--gold-500)] text-[10px] md:text-[11px] font-montserrat tracking-[0.4em] uppercase opacity-70 animate-pulse">
          Loading...
        </span>
      </div>
    </div>
  );
}
