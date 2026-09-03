"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function AxialHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -16]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal isolate">
      {/* Hard slab — no gradient wash, flat charcoal */}
      <div className="absolute inset-0 bg-charcoal" aria-hidden />
      {/* Hairline — 1px brass rule, not glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gold/30" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden />

      {/* Blueprint — faint, technical, 90deg, no rotate/spring — single 1px stroke */}
      <div className="absolute pointer-events-none select-none hidden lg:block" aria-hidden style={{ right: "2%", bottom: "4%", width: "680px", opacity: 0.06 }}>
        <div className="relative w-full aspect-[1.4/1]">
          <Image src="/plan.webp" alt="" fill className="object-contain grayscale contrast-125" sizes="680px" priority={false} />
        </div>
      </div>

      {/* Building — grounded, cropped hard edge, no parallax float */}
      <div className="absolute right-0 bottom-0 z-0 pointer-events-none select-none hidden md:block" aria-hidden>
        <div className="relative w-[640px] lg:w-[700px] h-[560px] lg:h-[640px]">
          <Image src="/building.webp" alt="" fill className="object-contain object-bottom grayscale-[0.15] contrast-110" priority sizes="700px" />
        </div>
      </div>
      <div className="absolute right-[-6%] bottom-0 z-0 pointer-events-none select-none md:hidden opacity-[0.14]" aria-hidden>
        <div className="relative w-[340px] h-[400px]">
          <Image src="/building.webp" alt="" fill className="object-contain object-bottom" sizes="340px" />
        </div>
      </div>

      {/* Bottom scrim — hard 60% charcoal, not soft gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent pointer-events-none md:hidden" aria-hidden />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="pt-[104px] sm:pt-[120px] md:pt-[168px] lg:pt-[192px] xl:pt-[216px] pb-[64px] md:pb-[72px] flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-8">
          {/* Header — hard type */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } } }}
            className="relative max-w-[600px] shrink-0"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }} className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold" aria-hidden />
              <span className="font-archivo font-bold text-[11px] tracking-[0.14em] uppercase text-gold">Professional • Innovative • Reliable</span>
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
              className="font-archivo font-extrabold text-white leading-[0.88] tracking-[-0.03em] text-[40px] sm:text-[48px] md:text-[52px] lg:text-[60px]"
            >
              <span className="block">EXCEPTIONAL</span>
              <span className="block">SERVICE</span>
              <span className="block text-gold">EXCEEDING</span>
              <span className="block text-white/90">EXPECTATIONS</span>
            </motion.h1>

            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.45 } } }} className="mt-5 text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[480px] font-medium">
              Ghanaian-owned since January 2024 — affordable housing, glass systems, procurement & logistics, renewable energy and IT. Built on site, not slides.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }} className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal font-archivo font-bold text-[13px] tracking-[0.04em] uppercase px-7 py-3.5 rounded-[6px] leading-none hover:bg-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                Consult Now <ArrowRight size={14} strokeWidth={2.2} aria-hidden />
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 text-[13px] font-semibold tracking-wide px-6 py-3.5 rounded-[6px] hover:bg-white hover:text-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                View Projects
              </Link>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4, delay: 0.12 } } }} className="mt-7 flex items-center gap-3 text-[11px] font-semibold tracking-wide text-white/50 border-t border-white/10 pt-4 max-w-[420px]">
              <span className="w-2 h-2 bg-emerald-400 rounded-[1px]" aria-hidden /> PPA REGISTERED <span className="text-white/20">/</span> TAX & SSNIT COMPLIANT <span className="text-white/20">/</span> GA 135 6916
            </motion.div>
          </motion.div>

          {/* Right — slab card, no float/blur/tilt, 6px radius */}
          <div className="flex flex-col lg:items-end lg:shrink-0 lg:pt-1 w-full lg:w-auto">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.28 }} className="relative w-full sm:max-w-[380px] lg:w-[380px] self-start lg:self-auto">
              <div className="relative overflow-hidden rounded-[6px] bg-white border border-charcoal/10 p-5 flex gap-4">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold" aria-hidden />
                <div className="flex-1 min-w-0 pt-1">
                  <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-charcoal/40">Featured — Accra</div>
                  <h3 className="font-archivo font-extrabold text-charcoal text-[15px] leading-tight mt-1">AFFORDABLE HOUSING</h3>
                  <div className="font-archivo font-extrabold text-charcoal text-[28px] leading-none mt-2">
                    500 <span className="text-[12px] font-bold tracking-wide text-gold">UNITS</span>
                  </div>
                  <div className="text-charcoal/50 text-xs font-semibold mt-1 tracking-wide">DESIGN & BUILD • PARKS & AMENITIES</div>
                  <Link href="/projects" className="inline-flex items-center gap-1.5 mt-4 bg-charcoal text-white text-[11px] font-bold tracking-[0.06em] uppercase px-3.5 py-2 rounded-[4px] hover:bg-charcoal-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    Details <ArrowRight size={11} aria-hidden />
                  </Link>
                </div>
                <div className="w-[110px] shrink-0 relative overflow-hidden rounded-[4px] bg-cream border border-charcoal/5 aspect-[4/3]">
                  <Image src="/images/featured-estate.jpg" alt="Featured affordable housing estate" fill className="object-cover grayscale-[0.1]" sizes="110px" />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[11px] font-medium text-white/40">
                <span className="w-6 h-px bg-white/20" aria-hidden /> 500 units • Design & Build • 2024
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
