import React from "react";

export default function Dots({ slides = [], active = 0, onGoTo = () => {}, className = "" }) {
  const total = slides.length;

  return (
    <div className={`dg-dots-wrapper ${className}`}>
      <div className="dg-dots-inner">
        {slides.map((s, i) => {
          const prevIndex = (active - 1 + total) % total;
          const nextIndex = (active + 1) % total;

          
          const isCenter = i === active;
          const isSide = i === prevIndex || i === nextIndex;
          if (!isCenter && !isSide) return null;

          return (
            <button
              key={s.id ?? i}
              type="button"
              className={`dg-dot ${isCenter ? "dg-dot--active" : "dg-dot--side"}`}
              onClick={() => onGoTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={isCenter ? "true" : undefined}
              title={s.title ?? `Slide ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
