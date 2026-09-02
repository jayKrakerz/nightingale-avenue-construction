"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

// Clean Axial-faithful hero — matches html.merku.love/axial structure
// Fonts: Archivo 800 for title/numbers, Inter/Roboto for body — uses project's --font-archivo / --font-inter
export default function AxialHero() {
  return (
    <section className="relative overflow-hidden bg-[#001F3F] isolate">
      {/* Blueprint deco — rotated 154deg, lower-left */}
      <div className="hidden sm:block absolute pointer-events-none select-none" aria-hidden style={{ left: "-10%", bottom: "-10%", width: "50%", maxWidth: 860, opacity: 0.5, transform: "rotate(154deg)" }}>
        <div className="relative w-full aspect-[1.4/1]">
          <Image src="/plan.webp" alt="" fill className="object-contain" sizes="50vw" priority={false} />
        </div>
      </div>
      {/* Desktop larger offset */}
      <div className="hidden xl:block absolute pointer-events-none select-none" aria-hidden style={{ left: "-15%", bottom: "-35%", width: "60%", opacity: 0.5, transform: "rotate(154deg)" }}>
        <div className="relative w-full aspect-[1.4/1]">
          <Image src="/plan.webp" alt="" fill className="object-contain" sizes="60vw" />
        </div>
      </div>

      {/* Building — absolute positioned like Axial hero_media */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="absolute right-[-12%] sm:right-[-8%] md:right-0 lg:right-[2%] xl:right-0 bottom-0 z-0 pointer-events-none select-none"
        aria-hidden
      >
        <div className="relative w-[320px] xs:w-[380px] sm:w-[520px] md:w-[560px] lg:w-[620px] xl:w-[760px] h-[380px] sm:h-[440px] md:h-[520px] lg:h-[620px] xl:h-[760px]">
          <Image
            src="/building.webp"
            alt=""
            fill
            className="object-contain object-bottom"
            priority
            sizes="(max-width: 768px) 90vw, 760px"
          />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-[1290px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Hero container — Axial: padding 100px top mobile, 200px tablet, 280px desktop */}
        <div className="pt-[96px] sm:pt-[112px] md:pt-[180px] lg:pt-[200px] xl:pt-[260px] pb-[120px] sm:pb-[140px] md:pb-[120px] lg:pb-[100px] flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative max-w-[540px] lg:max-w-[520px] shrink-0"
          >
            {/* Eyebrow with extended yellow line from far left */}
            <div className="relative inline-flex items-center gap-0 mb-4 md:mb-5">
              <span className="hidden md:block absolute h-[2px] w-[1000px] right-[calc(100%+16px)] top-1/2 -translate-y-1/2 bg-[#FFC631]" aria-hidden />
              <span className="font-[family-name:var(--font-archivo)] font-semibold text-[13px] md:text-[14px] leading-[1.5] tracking-[0.12em] uppercase text-white">
                Professional. Innovative. Reliable.
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-archivo)] font-extrabold text-white leading-[0.92] tracking-[-0.02em] text-[40px] xs:text-[42px] sm:text-[48px] md:text-[48px] lg:text-[56px] xl:text-[62px]">
              <span className="block">Exceptional</span>
              <span className="block">Service Exceeding</span>
              <span className="block">Expectations</span>
            </h1>

            <p className="mt-4 md:mt-5 text-white/85 text-[15px] md:text-[17px] leading-[1.6] max-w-[470px] font-light">
              Our civil and structural team is committed to providing sustainable, creative &amp; efficient engineering solutions for our communities
            </p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              className="mt-7 md:mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#FFC631] hover:bg-[#FFD75A] text-black font-[family-name:var(--font-archivo)] font-bold text-[13px] md:text-[14px] tracking-[0.08em] uppercase px-7 md:px-8 py-[14px] md:py-[15px] leading-none transition-all hover:translate-y-[-2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                CONSULT NOW
              </Link>
            </motion.div>
          </motion.div>

          {/* Main right — numbers + card */}
          <div className="flex flex-col gap-8 md:gap-10 lg:items-end lg:shrink-0 lg:pt-2 w-full lg:w-auto">
            {/* Numbers — top, text-right on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="flex flex-row lg:flex-col gap-6 sm:gap-10 lg:gap-10 lg:text-right order-2 lg:order-1"
            >
              <div>
                <div className="font-[family-name:var(--font-archivo)] font-bold text-[#FFC631] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] leading-none">128+</div>
                <div className="font-bold text-white text-xs md:text-sm leading-tight mt-1">Projects / Year</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-archivo)] font-bold text-[#FFC631] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] leading-none">4.253</div>
                <div className="font-bold text-white text-xs md:text-sm leading-tight mt-1">
                  Million euros<br className="hidden sm:block" /> turnover in 2020
                </div>
              </div>
            </motion.div>

            {/* Card — frosted glass like Axial */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
              className="relative w-full sm:max-w-[388px] lg:w-[388px] order-1 lg:order-2 self-start lg:self-auto"
            >
              <div className="relative overflow-hidden bg-[radial-gradient(97.35%_239.81%_at_1.55%_6.12%,rgba(255,255,255,0.90)_0%,rgba(255,255,255,0.52)_100%)] backdrop-blur-[20px] lg:backdrop-blur-[80px] border border-white/20 p-5 sm:p-6 flex gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-[family-name:var(--font-archivo)] font-bold text-black text-[15px] md:text-[16px] leading-tight">Residential House</h3>
                  <div className="font-[family-name:var(--font-archivo)] font-extrabold text-[#0DA574] text-[22px] md:text-[26px] leading-none mt-3">
                    78 000 м<sup className="text-[14px] relative -top-1">2</sup>
                  </div>
                  <div className="text-black/60 text-xs font-medium mt-1">Amount work done</div>
                  <Link href="/projects" className="inline-flex items-center gap-1.5 mt-4 text-[#0DA574] font-[family-name:var(--font-archivo)] font-semibold text-xs tracking-[0.12em] uppercase hover:gap-2 transition-all">
                    Details <span aria-hidden>→</span>
                  </Link>
                </div>
                <div className="w-[112px] sm:w-[118px] shrink-0 relative overflow-hidden rounded-sm block">
                  <div className="absolute inset-0 rotate-[2deg] scale-[1.08] origin-center">
                    <Image src="/building.webp" alt="Residential House preview" fill className="object-cover" sizes="120px" priority={false} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating cart — bottom-right */}
      <Link
        href="/contact"
        aria-label="Cart"
        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] flex items-center justify-center text-[#0DA574] hover:scale-105 transition-transform"
      >
        <ShoppingCart size={18} />
      </Link>
    </section>
  );
}
