"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="relative bg-charcoal-dark overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(201,169,106,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,106,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/5 hidden md:block" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="text-center py-8 md:py-2 px-6"
            >
              <div className="font-serif font-light text-[36px] md:text-[44px] leading-none tracking-tight text-white mb-2">
                {stat.value}
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="w-4 h-px bg-gold/60 hidden md:block" />
                <p className="text-[11px] tracking-[0.18em] uppercase font-medium text-white/50">
                  {stat.label}
                </p>
                <span className="w-4 h-px bg-gold/60 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
