"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
  slidesPerView?: { mobile: number; tablet: number; desktop: number };
  gap?: number;
  showArrows?: boolean;
  showDots?: boolean;
  loop?: boolean;
  className?: string;
}

export default function Carousel<T>({
  items,
  renderItem,
  autoPlay = true,
  interval = 3800,
  slidesPerView = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 24,
  showArrows = true,
  showDots = true,
  loop = true,
  className = "",
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(slidesPerView.desktop);
  const containerRef = useRef<HTMLDivElement>(null);

  // responsive perView
  useEffect(() => {
    const calc = () => {
      if (window.innerWidth < 768) setPerView(slidesPerView.mobile);
      else if (window.innerWidth < 1024) setPerView(slidesPerView.tablet);
      else setPerView(slidesPerView.desktop);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [slidesPerView.mobile, slidesPerView.tablet, slidesPerView.desktop]);

  const maxIndex = Math.max(0, items.length - perView);
  const pageCount = maxIndex + 1;

  const next = useCallback(() => {
    setIndex((i) => (loop ? (i + 1) % pageCount : Math.min(i + 1, maxIndex)));
  }, [loop, pageCount, maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (loop ? (i - 1 + pageCount) % pageCount : Math.max(i - 1, 0)));
  }, [loop, pageCount]);

  // autoplay respects reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!autoPlay || paused || pageCount <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, paused, next, interval, pageCount]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 60;
    if (info.offset.x < -threshold) next();
    else if (info.offset.x > threshold) prev();
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Track */}
      <div ref={containerRef} className="overflow-hidden rounded-[8px] -mx-1 px-1">
        <motion.div
          className="flex"
          style={{ gap: `${gap}px` }}
          animate={{ x: `calc(-${index * (100 / perView)}% - ${index * gap}px / ${perView})` }}
          transition={{ type: "spring", stiffness: 280, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="shrink-0"
              style={{ width: `calc(${100 / perView}% - ${gap - gap / perView}px)` }}
            >
              {renderItem(item, i, i >= index && i < index + perView)}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Arrows */}
      {showArrows && pageCount > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 w-11 h-11 rounded-full bg-white border border-charcoal/10 shadow-soft text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal transition-all items-center justify-center z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 w-11 h-11 rounded-full bg-white border border-charcoal/10 shadow-soft text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal transition-all items-center justify-center z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Dots + pause */}
      {showDots && pageCount > 1 && (
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1} of ${pageCount}`}
                aria-current={i === index ? "true" : undefined}
                className={`transition-all duration-500 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  i === index
                    ? "w-8 h-2 bg-gold"
                    : "w-2 h-2 bg-charcoal/15 hover:bg-charcoal/30"
                }`}
              />
            ))}
          </div>
          {autoPlay && (
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play" : "Pause"}
              className="ml-2 w-7 h-7 rounded-full bg-charcoal/5 hover:bg-charcoal/10 flex items-center justify-center text-charcoal/50 hover:text-charcoal transition-colors"
            >
              {paused ? <Play size={12} /> : <Pause size={12} />}
            </button>
          )}
          <span className="ml-2 text-xs tracking-widest font-medium text-charcoal/30">
            {String(index + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}
          </span>
        </div>
      )}

      {/* Mobile swipe hint */}
      <p className="md:hidden text-center text-xs text-charcoal/30 mt-4 tracking-wide">← Swipe to explore →</p>
    </div>
  );
}
