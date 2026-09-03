"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
    label: "Construction • Abelemkpe, Accra",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    label: "Contemporary Living • 500 Units",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    label: "Glass Innovation • Frameless & Aluminium",
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 4800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <Image src={SLIDES[i].src} alt={SLIDES[i].label} fill className="object-cover" priority={i === 0} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-charcoal-dark/60" />
      <div className="absolute inset-0 hero-gradient" />

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1 rounded-full transition-all duration-700 ${idx === i ? "w-8 bg-gold" : "w-4 bg-white/30"}`}
          />
        ))}
      </div>
      <div className="absolute bottom-6 right-6 lg:right-8 z-20 hidden md:flex items-center gap-2 text-white/70 text-xs tracking-widest uppercase">
        <span className="w-6 h-px bg-white/30" /> {SLIDES[i].label}
      </div>
    </div>
  );
}
