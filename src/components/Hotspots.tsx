"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";

export type Hotspot = {
  id: string;
  x: number; // 0-100 percent
  y: number;
  title: string;
  description: string;
  tag?: string;
  href?: string;
};

interface HotspotsProps {
  imageSrc: string;
  imageAlt: string;
  hotspots: Hotspot[];
  heightClass?: string;
}

export default function Hotspots({ imageSrc, imageAlt, hotspots, heightClass = "h-[440px] sm:h-[520px] md:h-[580px] lg:h-[620px]" }: HotspotsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = hotspots.find((h) => h.id === activeId) || null;

  return (
    <div className={`relative w-full overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-charcoal border border-charcoal/10 shadow-premium ${heightClass} group`}>
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1100px" priority={false} />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" aria-hidden />

      {/* subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "100% 28px" }} aria-hidden />

      {/* dots */}
      {hotspots.map((h) => {
        const isActive = activeId === h.id;
        return (
          <button
            key={h.id}
            onClick={() => setActiveId(isActive ? null : h.id)}
            aria-label={`${h.title} hotspot`}
            aria-expanded={isActive}
            className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-full"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
          >
            <span className="relative flex items-center justify-center">
              {/* pulse ring */}
              <span className={`absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/20 ${isActive ? "animate-ping" : "animate-pulse"}`} aria-hidden />
              <span className={`relative w-7 h-7 md:w-8 md:h-8 rounded-full bg-white border flex items-center justify-center shadow-premium transition-all ${isActive ? "border-gold scale-110 bg-gold text-white" : "border-charcoal/10 text-gold hover:scale-105"}`}>
                {isActive ? <X size={12} /> : <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />}
              </span>
              {/* label pill on hover / active — desktop */}
              <span
                className={`hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 bg-white text-charcoal text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full border border-charcoal/10 shadow-soft whitespace-nowrap transition-all ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none"}`}
              >
                {h.title}
              </span>
            </span>
          </button>
        );
      })}

      {/* card popover */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-auto md:w-[360px] z-20"
          >
            <div className="bg-white rounded-[16px] border border-charcoal/10 shadow-premium p-4 md:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  {active.tag && <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gold">{active.tag}</div>}
                  <h3 className="font-serif font-medium text-charcoal text-[16px] leading-tight mt-0.5">{active.title}</h3>
                </div>
                <button
                  onClick={() => setActiveId(null)}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full bg-cream border border-charcoal/10 flex items-center justify-center text-charcoal/60 hover:text-charcoal transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <X size={14} />
                </button>
              </div>
              <p className="text-[13.5px] leading-relaxed text-charcoal/70 mt-2">{active.description}</p>
              {active.href && (
                <Link href={active.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal hover:text-gold transition-colors mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full px-1 -ml-1">
                  Explore <ArrowRight size={14} aria-hidden />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* idle hint */}
      {!active && (
        <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-charcoal/75 backdrop-blur text-white text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap">
          <Sparkles size={12} className="text-gold" aria-hidden /> Tap dots to explore
        </div>
      )}

      {/* top badge */}
      <span className="absolute top-4 md:top-5 left-4 md:left-5 z-10 bg-white/95 backdrop-blur border border-charcoal/5 text-charcoal text-[11px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-soft flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden /> Interactive
      </span>
    </div>
  );
}
