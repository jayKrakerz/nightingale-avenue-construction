"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { DotGrid, BlueprintCorner, ArchLines, GrainOverlay } from "@/components/SectionTexture";
import { SERVICES } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      {/* Hero — with plan on right */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal overflow-hidden isolate">
        <div className="hidden lg:block absolute right-0 bottom-0 w-[620px] opacity-[0.14] pointer-events-none select-none" aria-hidden>
          <div className="relative w-full aspect-[1.4/1]">
            <Image src="/plan.webp" alt="" fill className="object-contain grayscale invert brightness-[1.6] contrast-125" sizes="560px" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/50 via-charcoal to-charcoal-dark" aria-hidden />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(201,169,106,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,106,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px" }} aria-hidden />
        <BlueprintCorner className="-top-16 -right-16 hidden lg:block opacity-40" />
        <GrainOverlay opacity={0.025} />
        <div className="absolute top-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" aria-hidden />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-gold/60 hidden sm:block" aria-hidden />
              <span className="font-archivo font-semibold text-gold text-[11px] tracking-[0.16em] uppercase">Our Solutions — 5 Pillars</span>
            </div>
            <h1 className="font-serif font-light text-[38px] md:text-[50px] lg:text-[56px] leading-[0.9] tracking-tight text-white">
              Solutions built <span className="italic font-normal text-gold">around Ghana&apos;s Needs</span>
            </h1>
            <p className="mt-4 text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-xl font-medium">Construction & affordable housing, frameless & aluminium glass, procurement & logistics (PPA-registered), renewable energy and IT — tailored, transparent and technology-driven.</p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services — alternating with textures */}
      {SERVICES.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;
        return (
          <section key={service.slug} className={`section-padding relative overflow-hidden ${isEven ? "bg-white" : "bg-cream"}`}>
            {isEven ? <DotGrid opacity={0.025} /> : <><DotGrid opacity={0.03} /><ArchLines className="top-10 left-1/2 -translate-x-1/2 opacity-40 hidden lg:block" /></>}
            {isEven && <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" aria-hidden />}
            {!isEven && <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" aria-hidden />}
            <div className="relative max-w-[1440px] mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={!isEven ? "lg:col-start-2" : ""}>
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5 text-gold"><Icon size={20} strokeWidth={1.7} aria-hidden /></div>
                  <h2 className="font-serif font-light text-[28px] md:text-[34px] leading-[0.95] tracking-tight text-charcoal">{service.title}</h2>
                  <p className="mt-4 text-charcoal/70 text-[15px] leading-relaxed">{service.description}</p>
                  <ul className="space-y-2.5 mt-6 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-charcoal/70">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" aria-hidden /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-white hover:bg-charcoal-dark px-6 py-3.5 rounded-full text-[13px] font-semibold tracking-wide transition-colors hover:shadow-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    Book a Consultation <ArrowRight size={14} aria-hidden />
                  </Link>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="aspect-[4/3] bg-cream rounded-[20px] overflow-hidden relative border border-charcoal/5 shadow-soft">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 560px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-charcoal shadow-soft flex items-center gap-2 border border-charcoal/5">
                      <Icon size={12} className="text-gold" aria-hidden /> {service.title}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
