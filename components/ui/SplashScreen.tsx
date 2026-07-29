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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-hero-gradient transition-opacity duration-500 ease-in-out ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div 
        className="text-[var(--gold-500)] text-xl sm:text-2xl md:text-4xl font-semibold tracking-[4px] md:tracking-[8px]"
      >
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
    </div>
  );
}
