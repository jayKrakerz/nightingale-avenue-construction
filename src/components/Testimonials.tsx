"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Carousel from "./Carousel";

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading
          tag="Testimonials"
          title="Trusted by those we serve"
          description="Hear from clients who trust Nightingale Avenue Construction with housing, glass and supply chain delivery."
        />

        <Carousel
          items={TESTIMONIALS}
          gap={20}
          slidesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          interval={4200}
          renderItem={(t) => (
            <div className="relative bg-white rounded-[20px] p-7 border border-charcoal/5 card-premium h-full flex flex-col">
              <Quote size={28} className="text-gold/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={12} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-serif text-[15px] leading-relaxed text-charcoal/80 italic mb-6 flex-1">
                “{t.review}”
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-charcoal/5 mt-auto">
                <div className="w-9 h-9 rounded-full bg-charcoal text-white flex items-center justify-center font-serif text-xs shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-charcoal font-semibold text-[13px] leading-none">{t.name}</p>
                  <p className="text-charcoal/45 text-xs mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}
