"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-dark" />
      <div className="absolute inset-0 hero-gradient opacity-80" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(201,169,106,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,106,0.6) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-4">
              <Sparkles size={14} /> Start your project
            </div>
            <h2 className="font-serif font-light text-[32px] md:text-[40px] leading-[1] tracking-tight text-white">
              Have a project in mind? <span className="italic font-normal text-gold">Let&apos;s build it together.</span>
            </h2>
            <p className="mt-4 text-white/60 text-[14.5px] leading-relaxed max-w-xl">
              From affordable housing to glass façades and nationwide logistics — Nightingale Avenue Construction delivers with PPA-registered reliability and Ghanaian craftsmanship.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal-dark px-8 py-4 rounded-full font-semibold text-sm transition-all hover:shadow-gold hover:gap-3">
              Request a Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 px-8 py-4 rounded-full font-semibold text-sm backdrop-blur">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
