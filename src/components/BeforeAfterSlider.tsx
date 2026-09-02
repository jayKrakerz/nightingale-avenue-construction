"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
  initial?: number; // 0-100
  heightClass?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeAlt = "Before image",
  afterAlt = "After image",
  initial = 62,
  heightClass = "h-[360px] xs:h-[380px] sm:h-[420px] md:h-[520px] lg:h-[560px]",
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(4, Math.min(96, (x / rect.width) * 100));
    setPos(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    (e.target as Element).setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    update(e.clientX);
  };
  const onPointerUp = () => setDragging(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 2));
    if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 2));
    if (e.key === "Home") setPos(4);
    if (e.key === "End") setPos(96);
  };

  // touch fallback handled via pointer events

  // disable text selection while dragging
  useEffect(() => {
    if (dragging) document.body.style.userSelect = "none";
    else document.body.style.userSelect = "";
    return () => { document.body.style.userSelect = ""; };
  }, [dragging]);

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="slider"
      aria-label={`${beforeLabel} to ${afterLabel} comparison`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative w-full overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-cream border border-charcoal/5 shadow-premium select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${heightClass} group cursor-ew-resize touch-pan-y`}
    >
      {/* After (bottom layer, full) */}
      <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 900px" priority={false} />
      {/* After label */}
      <span className="absolute top-4 md:top-5 right-4 md:right-5 z-10 bg-white/95 backdrop-blur border border-charcoal/5 text-charcoal text-[11px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-soft">
        {afterLabel}
      </span>

      {/* Before (top layer, clipped with clipPath for true before/after) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden
      >
        <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 900px" />
        <span className="absolute top-4 md:top-5 left-4 md:left-5 z-10 bg-charcoal text-white text-[11px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-soft">
          {beforeLabel}
        </span>
      </div>

      {/* Divider line */}
      <div className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.08)] z-20" style={{ left: `${pos}%` }} aria-hidden />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 z-30 -translate-x-1/2 flex items-center justify-center"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        <div className={`w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-charcoal/10 shadow-premium flex items-center justify-center text-gold transition-transform ${dragging ? "scale-105" : "group-hover:scale-105"}`}>
          {/* three bars like Lillipad */}
          <span className="flex gap-[3px]">
            <span className="w-[2.5px] h-4 bg-gold rounded-full" />
            <span className="w-[2.5px] h-4 bg-gold rounded-full" />
            <span className="w-[2.5px] h-4 bg-gold rounded-full" />
          </span>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-2 bg-charcoal/75 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> Drag to compare
      </div>
    </div>
  );
}
