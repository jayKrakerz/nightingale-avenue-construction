"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Carousel from "./Carousel";
import { DotGrid, WaveLines } from "./SectionTexture";

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <WaveLines opacity={0.04} />
      <div className="absolute top-10 right-10 opacity-[0.04] hidden lg:block" aria-hidden>
        <Quote size={160} className="text-charcoal" />
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      <div className="relative max-w-[1440px] mx-auto">
        <SectionHeading
          tag="Testimonials"
          title="Trusted by those we serve"
          description="Hear from clients who trust Nightingale Avenue Construction with housing, glass and supply chain delivery."
        />

        <Carousel
          items={TESTIMONIALS}
          gap={16}
          slidesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          interval={4200}
          renderItem={(t) => (
            <div className="relative bg-white rounded-[6px] p-6 border border-charcoal/10 h-full flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold/40" aria-hidden />
              <Quote size={20} className="text-gold/20 absolute top-5 right-5" aria-hidden />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={11} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-medium text-[14px] leading-relaxed text-charcoal/80 mb-5 flex-1">“{t.review}”</p>
              <div className="flex items-center gap-3 pt-3 border-t border-charcoal/10 mt-auto">
                <div className="w-8 h-8 rounded-[4px] bg-charcoal text-white flex items-center justify-center font-archivo font-bold text-[10px] shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-charcoal font-bold text-[12px] leading-none tracking-wide uppercase">{t.name}</p>
                  <p className="text-charcoal/40 text-[11px] mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}
