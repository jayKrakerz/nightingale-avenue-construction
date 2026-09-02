"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-14 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {tag && (
        <div className={`inline-flex items-center gap-3 mb-6 ${align === "center" ? "justify-center w-full" : ""}`}>
          <span className={`w-8 h-px ${light ? "bg-gold/40" : "bg-gold-dark/30"}`} />
          <span className={`${light ? "text-gold" : "text-gold-dark"} text-[11px] font-semibold tracking-[0.28em] uppercase`}>
            {tag}
          </span>
          <span className={`w-8 h-px ${light ? "bg-gold/40" : "bg-gold-dark/30"}`} />
        </div>
      )}
      <h2
        className={`font-serif font-light tracking-tight leading-[0.95] text-[34px] md:text-[46px] lg:text-[54px] ${light ? "text-white" : "text-charcoal"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[15px] md:text-[16px] leading-relaxed max-w-[640px] font-light ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/60" : "text-charcoal/55"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
