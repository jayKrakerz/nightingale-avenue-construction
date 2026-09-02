"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function AxialHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B2340] isolate">
      {/* Blueprint pattern - lower-left */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-12 bottom-0 w-[62%] md:w-[58%] h-[78%] opacity-[0.18]">
          <Image
            src="/plan.webp"
            alt="Blueprint"
            fill
            className="object-contain object-left-bottom"
            priority
            sizes="60vw"
          />
        </div>
        {/* fade into navy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2340]/10 via-transparent to-[#0B2340] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2340]/20 via-transparent to-transparent" />
      </div>

      {/* Yellow thin line from far left aligned with eyebrow */}
      <div className="hidden md:block absolute left-0 top-[148px] lg:top-[156px] h-[1.5px] w-[11%] bg-[#F5C84B] z-20" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-0 items-stretch min-h-[680px] md:min-h-[720px] lg:min-h-[740px] pt-10 md:pt-14 pb-0">
          {/* Left content */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center py-8 md:py-12 lg:py-16 relative">
            {/* Eyebrow */}
            <p className="text-white/90 text-[11px] md:text-xs font-bold tracking-[0.18em] uppercase mb-4 md:mb-5 pl-0 md:pl-[12%]">
              Professional. Innovative. Reliable.
            </p>

            {/* Headline */}
            <h1 className="font-black text-white leading-[0.88] tracking-[-0.03em] text-[44px] xs:text-[48px] sm:text-[56px] md:text-[62px] lg:text-[64px] xl:text-[72px]">
              <span className="block">Exceptional</span>
              <span className="block">Service Exceeding</span>
              <span className="block">Expectations</span>
            </h1>

            <p className="mt-5 md:mt-6 text-white/80 text-[14px] md:text-[15px] leading-relaxed max-w-[520px] font-light">
              Our civil and structural team is committed to providing sustainable, creative &amp; efficient engineering solutions for our communities
            </p>

            <div className="mt-7 md:mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#F5C84B] hover:bg-[#FFD76B] text-black font-black text-[13px] md:text-[14px] tracking-[0.08em] uppercase px-7 md:px-8 py-3.5 md:py-4 rounded-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                CONSULT NOW
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-end justify-center lg:justify-end mt-6 lg:mt-0 min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-0">
            {/* Statistics - upper right */}
            <div className="hidden md:flex absolute top-8 lg:top-10 right-0 lg:right-2 flex-col gap-8 z-20 text-right">
              <div>
                <div className="text-[#F5C84B] font-black text-[36px] lg:text-[42px] leading-none tracking-tight">128+</div>
                <div className="text-white font-bold text-xs lg:text-sm leading-tight mt-1">
                  Projects / Year
                </div>
              </div>
              <div>
                <div className="text-[#F5C84B] font-black text-[36px] lg:text-[42px] leading-none tracking-tight">4.253</div>
                <div className="text-white font-bold text-xs lg:text-sm leading-tight mt-1">
                  Million euros<br />turnover in 2020
                </div>
              </div>
            </div>

            {/* Building image - rising from bottom edge */}
            <div className="relative w-[88%] sm:w-[76%] md:w-[68%] lg:w-[92%] xl:w-[88%] h-[420px] sm:h-[480px] md:h-[560px] lg:h-[660px] xl:h-[700px] z-10">
              <Image
                src="/building.webp"
                alt="Modern residential apartment building"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 768px) 90vw, 50vw"
              />
            </div>

            {/* White project card overlapping building */}
            <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 right-0 sm:right-4 md:right-8 lg:right-6 xl:right-2 z-20 w-[94%] sm:w-[420px] md:w-[420px] bg-white rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex overflow-hidden">
              <div className="flex-1 p-5 sm:p-6">
                <h3 className="font-black text-black text-[15px] md:text-[16px] leading-tight">Residential House</h3>
                <div className="mt-3">
                  <div className="text-[#1CA45A] font-black text-[22px] md:text-[24px] leading-none">78 000 M²</div>
                  <div className="text-black/60 text-xs font-medium mt-1">Amount work done</div>
                </div>
                <Link href="/projects" className="inline-flex items-center gap-1 mt-4 text-[#1CA45A] font-bold text-xs tracking-widest uppercase hover:gap-2 transition-all">
                  Details <span aria-hidden>→</span>
                </Link>
              </div>
              {/* Small cropped preview on right */}
              <div className="w-[118px] sm:w-[128px] shrink-0 relative bg-neutral-100 overflow-hidden hidden xs:block">
                <Image src="/building.webp" alt="Preview" fill className="object-cover object-center" sizes="130px" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile statistics below building - visible only mobile */}
      <div className="md:hidden relative z-10 max-w-[1440px] mx-auto px-5 pb-6 flex gap-8 justify-start">
        <div>
          <div className="text-[#F5C84B] font-black text-2xl leading-none">128+</div>
          <div className="text-white/80 font-bold text-xs leading-tight mt-1">Projects / Year</div>
        </div>
        <div>
          <div className="text-[#F5C84B] font-black text-2xl leading-none">4.253</div>
          <div className="text-white/80 font-bold text-xs leading-tight mt-1">Million euros turnover</div>
        </div>
      </div>

      {/* Floating shopping cart - bottom-right */}
      <Link
        href="/contact"
        aria-label="Shopping cart"
        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-30 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] flex items-center justify-center text-[#1CA45A] border border-black/5 hover:scale-105 transition-transform"
      >
        <ShoppingCart size={18} className="fill-[#1CA45A]/10" />
      </Link>
    </section>
  );
}
