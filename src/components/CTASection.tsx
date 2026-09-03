"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-dark" />
      <div className="absolute inset-0 hero-gradient opacity-80" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(201,169,106,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,106,0.6) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      {/* SVG texture spice */}
      <svg className="absolute -top-24 -right-24 w-[520px] h-[520px] pointer-events-none opacity-[0.07]" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle cx="260" cy="260" r="200" stroke="#B9975B" strokeWidth="0.8" strokeDasharray="10 10" />
        <circle cx="260" cy="260" r="140" stroke="#ffffff" strokeWidth="0.6" />
        <rect x="100" y="100" width="320" height="320" rx="24" stroke="#ffffff" strokeWidth="0.6" strokeDasharray="12 12" />
      </svg>
      <svg className="absolute -bottom-20 -left-20 w-[380px] h-[380px] pointer-events-none opacity-[0.05]" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M0 190 Q190 0 380 190 T380 190" stroke="#B9975B" strokeWidth="0.8" fill="none" />
        <path d="M0 230 Q190 40 380 230" stroke="#ffffff" strokeWidth="0.6" fill="none" strokeDasharray="8 8" />
      </svg>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="rounded-[6px] border border-white/10 bg-charcoal p-7 md:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.12em] uppercase font-bold mb-3">
              <Sparkles size={12} aria-hidden /> Start your project
            </div>
            <h2 className="font-serif font-light text-[28px] md:text-[32px] leading-[0.95] tracking-tight text-white">
              Have a project in mind? <span className="italic font-normal text-gold">Let&apos;s build it together.</span>
            </h2>
            <p className="mt-3 text-white/70 text-[14px] leading-relaxed max-w-xl mx-auto lg:mx-0">From affordable housing to glass façades and nationwide logistics — PPA-registered, Ghanaian-built.</p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-6 py-3 rounded-[6px] font-archivo font-bold text-[13px] tracking-wide uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
              Request Consultation <ArrowRight size={14} strokeWidth={2.2} aria-hidden />
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/15 px-6 py-3 rounded-[6px] font-semibold text-sm hover:bg-white hover:text-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
