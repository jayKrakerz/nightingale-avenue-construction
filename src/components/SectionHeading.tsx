"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({ tag, title, description, align = "center", light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 md:mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {tag && (
        <div className={`inline-flex items-center gap-3 mb-4 ${align === "center" ? "justify-center w-full" : ""}`}>
          <span className={`w-8 h-px ${light ? "bg-gold/50" : "bg-gold"}`} aria-hidden />
          <span className={`${light ? "text-gold" : "text-gold"} text-[11px] font-bold tracking-[0.12em] uppercase`}>{tag}</span>
          <span className={`w-8 h-px ${light ? "bg-gold/50" : "bg-gold"}`} aria-hidden />
        </div>
      )}
      <h2 className={`font-serif font-light tracking-tight leading-[0.95] text-[32px] md:text-[40px] lg:text-[44px] ${light ? "text-white" : "text-charcoal"}`}>{title}</h2>
      {description && <p className={`mt-3 text-[14px] leading-[1.6] max-w-[640px] font-medium ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/70" : "text-charcoal/65"}`}>{description}</p>}
    </motion.div>
  );
}
