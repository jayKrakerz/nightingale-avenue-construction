import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQS } from "@/lib/faqs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ | Nightingale Avenue Construction",
  description: "Answers about affordable housing, glass systems, procurement, timelines and aftercare - Nightingale Avenue Construction, Ghana.",
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-charcoal overflow-hidden isolate">
        <div className="hidden lg:block absolute right-0 bottom-0 w-[620px] opacity-[0.14] pointer-events-none select-none" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/plan.webp" alt="" className="w-full h-auto grayscale invert brightness-[1.6] contrast-125" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/50 via-charcoal to-charcoal-dark" aria-hidden />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-gold/60 hidden sm:block" aria-hidden />
              <span className="font-archivo font-bold text-gold text-[11px] tracking-[0.14em] uppercase">Help Center</span>
            </div>
            <h1 className="font-serif font-light text-white text-[38px] md:text-[50px] lg:text-[56px] leading-[0.9] tracking-tight">
              Frequently asked <span className="italic font-normal text-gold">questions</span>
            </h1>
            <p className="mt-4 text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-xl font-medium">Housing, glass, procurement - hard answers. If not here, call 0596327400 within 24h reply.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="max-w-[900px] mx-auto">
          <FAQAccordion />
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-charcoal text-white px-6 py-3 rounded-[6px] text-[13px] font-semibold hover:bg-charcoal-dark transition-colors">
              Still need help? Contact us <ArrowRight size={13} />
            </Link>
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-white border border-charcoal/10 text-charcoal px-6 py-3 rounded-[6px] text-[13px] font-semibold hover:bg-charcoal hover:text-white transition-colors">
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
