"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BlueprintReveal from "@/components/BlueprintReveal";
import Hotspots from "@/components/Hotspots";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { DotGrid, BlueprintCorner, GrainOverlay, TopoLines, WaveLines } from "@/components/SectionTexture";

type TransformItem = {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

// PLACEHOLDER DATA — swap beforeSrc/afterSrc when real images are shared
// Keep the same 4 assets duplicated so layout is verifiable without broken images
const TRANSFORMATIONS: TransformItem[] = [
  {
    id: "stairs-1",
    title: "Staircase Renovation — Raw to Finished",
    category: "Construction",
    location: "Accra — Spintex",
    description: "Raw concrete to finished balustrade with glass and metal craftsmanship.",
    beforeSrc: "/images/before-stairs.png",
    afterSrc: "/images/after-stairs.png",
    beforeAlt: "Staircase before renovation",
    afterAlt: "Staircase after renovation",
  },
  {
    id: "path-1",
    title: "Pathway Paving — Bare Ground to Walkway",
    category: "Construction",
    location: "Accra — Baatsona",
    description: "From bare ground to paved, drainage-ready walkway.",
    beforeSrc: "/images/path-before.png",
    afterSrc: "/images/path-after.png",
    beforeAlt: "Pathway before paving",
    afterAlt: "Pathway after paving",
  },
  {
    id: "glass-1",
    title: "Glass Balustrade — Shell to Glazed",
    category: "Glass Solutions",
    location: "Accra — East Legon",
    description: "Shell opening to frameless tempered glass balustrade. Placeholder — replace with project.",
    beforeSrc: "/images/before-stairs.png",
    afterSrc: "/images/after-stairs.png",
    beforeAlt: "Placeholder before glass",
    afterAlt: "Placeholder after glass",
  },
  {
    id: "glass-2",
    title: "Shopfront Glazing — Brick to Curtain Wall",
    category: "Glass Solutions",
    location: "Accra — Commercial",
    description: "Masonry facade to aluminium + glass shopfront. Placeholder.",
    beforeSrc: "/images/path-before.png",
    afterSrc: "/images/path-after.png",
    beforeAlt: "Placeholder before shopfront",
    afterAlt: "Placeholder after shopfront",
  },
  {
    id: "plumbing-1",
    title: "Bathroom Plumbing — Strip-out to Fit-out",
    category: "Plumbing",
    location: "Kumasi",
    description: "Exposed pipework to finished fixtures and tiling. Placeholder.",
    beforeSrc: "/images/before-stairs.png",
    afterSrc: "/images/after-stairs.png",
    beforeAlt: "Placeholder before plumbing",
    afterAlt: "Placeholder after plumbing",
  },
  {
    id: "electrical-1",
    title: "Electrical Rewire — Surface to Concealed",
    category: "Electrical",
    location: "Accra",
    description: "Surface wiring to concealed distribution and lighting. Placeholder.",
    beforeSrc: "/images/path-before.png",
    afterSrc: "/images/path-after.png",
    beforeAlt: "Placeholder before electrical",
    afterAlt: "Placeholder after electrical",
  },
  {
    id: "carpentry-1",
    title: "Kitchen Carpentry — Carcass to Fitted",
    category: "Carpentry",
    location: "Spintex, Accra",
    description: "Bare carcass to fitted kitchen with hardware. Placeholder.",
    beforeSrc: "/images/before-stairs.png",
    afterSrc: "/images/after-stairs.png",
    beforeAlt: "Placeholder before carpentry",
    afterAlt: "Placeholder after carpentry",
  },
  {
    id: "water-1",
    title: "Water Services — Trench to Pressurised",
    category: "Water Services",
    location: "Nationwide",
    description: "Trench and tank base to pressurised supply network. Placeholder.",
    beforeSrc: "/images/path-before.png",
    afterSrc: "/images/path-after.png",
    beforeAlt: "Placeholder before water",
    afterAlt: "Placeholder after water",
  },
  {
    id: "recycle-1",
    title: "Site Clearance — Rubble to Clean Handover",
    category: "Infrastructure",
    location: "Accra",
    description: "Demolition rubble to clean, graded handover. Placeholder.",
    beforeSrc: "/images/before-stairs.png",
    afterSrc: "/images/after-stairs.png",
    beforeAlt: "Placeholder before clearance",
    afterAlt: "Placeholder after clearance",
  },
  {
    id: "solar-1",
    title: "Solar PV — Bare Roof to Grid-Ready Array",
    category: "Solar Panel",
    location: "Accra — Residential",
    description: "Unfitted roof to mounted panels, inverter and monitoring — clean energy handover. Placeholder.",
    beforeSrc: "/images/path-before.png",
    afterSrc: "/images/path-after.png",
    beforeAlt: "Placeholder before solar installation",
    afterAlt: "Placeholder after solar installation",
  },
  {
    id: "cctv-1",
    title: "CCTV & Security — Open Site to Monitored Perimeter",
    category: "CCTV",
    location: "Accra — Commercial",
    description: "No coverage to mounted cameras, NVR and remote viewing — perimeter and entry monitoring. Placeholder.",
    beforeSrc: "/images/before-stairs.png",
    afterSrc: "/images/after-stairs.png",
    beforeAlt: "Placeholder before CCTV installation",
    afterAlt: "Placeholder after CCTV installation",
  },
];

const CATEGORIES = [
  "All",
  "Construction",
  "Glass Solutions",
  "Plumbing",
  "Electrical",
  "Carpentry",
  "Water Services",
  "Solar Panel",
  "CCTV",
  "Infrastructure",
];

const CATEGORY_STYLE: Record<string, string> = {
  Construction: "bg-charcoal text-white",
  "Glass Solutions": "bg-gold text-white",
  Infrastructure: "bg-[#1A3A4A] text-white",
  Plumbing: "bg-[#1E3A5F] text-white",
  Electrical: "bg-amber-600 text-white",
  Carpentry: "bg-stone-700 text-white",
  "Water Services": "bg-sky-700 text-white",
  "Solar Panel": "bg-emerald-700 text-white",
  CCTV: "bg-indigo-800 text-white",
};

export default function BeforeAfterPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? TRANSFORMATIONS : TRANSFORMATIONS.filter((t) => t.category === active);

  return (
    <>
      {/* Hero */}
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
              <span className="font-archivo font-semibold text-gold text-[11px] tracking-[0.16em] uppercase">Proof — Before / After</span>
            </div>
            <h1 className="font-serif font-light text-[38px] md:text-[50px] lg:text-[56px] leading-[0.9] tracking-tight text-white">
              See the <span className="italic font-normal text-gold">transformation</span>
            </h1>
            <p className="mt-4 text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-xl font-medium">
              Drag to compare — bare structure to finishing. Real sites, real craft. Placeholders below — swap in your images when ready.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-white/50 bg-white/10 backdrop-blur border border-white/10 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden /> {TRANSFORMATIONS.length} transformations • {CATEGORIES.length - 1} categories
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blueprint → Built — hero interactive */}
      <section className="section-padding bg-cream relative overflow-hidden border-t border-charcoal/5">
        <WaveLines opacity={0.05} />
        <DotGrid opacity={0.025} />
        <div className="relative max-w-[1440px] mx-auto">
          <SectionHeading tag="Blueprint → Built" title="From plan to handover" description="Same drag DNA as Before/After — but blueprint paper to finished estate. Swap plan.webp + built image when you share finals." />
          <BlueprintReveal builtSrc="/images/featured-estate.jpg" />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-charcoal/60">Drag to reveal — blueprint on left, built community on right.</p>
            <span className="text-xs text-charcoal/40">1:500 • Accra • NAC Plan</span>
          </div>
        </div>
      </section>

      {/* Hotspots — tap to explore */}
      <section className="section-padding bg-white relative overflow-hidden">
        <DotGrid opacity={0.02} />
        <TopoLines opacity={0.035} />
        <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" aria-hidden />
        <div className="relative max-w-[1440px] mx-auto">
          <SectionHeading tag="Explore the Details" title="Tap the dots — craftsmanship, up close" description="Same building, different lenses. Hotspots reuse your 10 pillars — replace image + copy with real site photo." />
          <Hotspots
            imageSrc="/images/hotspots-house.png"
            imageAlt="Modern house at dusk with exposed plumbing and interior lighting - hotspots"
            hotspots={[
              { id: "glass", x: 27, y: 33, title: "Frameless Glass", description: "Frameless balustrade on balcony + staircase glazing — tempered safety glass, clean sightlines, light-filled living.", tag: "Glass Solutions", href: "/services" },
              { id: "aluminium", x: 78, y: 28, title: "Aluminium Systems", description: "Black aluminium window & door frames, curtain wall — durable, colour-matched, corrosion-resistant.", tag: "Glass • Aluminium", href: "/services" },
              { id: "carpentry", x: 32, y: 20, title: "Carpentry", description: "Timber soffits, decking, vertical slats + fitted interiors — precision joinery and finishing.", tag: "Carpentry", href: "/services" },
              { id: "plumbing", x: 30, y: 83, title: "Plumbing & Water", description: "Exposed cross-section shows drainage, water tanks & pressurised supply — borehole to fixture.", tag: "Plumbing • Water", href: "/services" },
              { id: "electrical", x: 92, y: 45, title: "Electrical & CCTV", description: "CCTV, wall lighting, EV charger & distribution in garage — certified wiring and smart systems.", tag: "Electrical • Security", href: "/services" },
            ]}
          />
          <p className="text-center text-xs text-charcoal/40 mt-4">Tip: Tap any gold dot — hotspots are positioned by % so they stay pinned on mobile. Edit in src/app/before-after/page.tsx:Hotspots</p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        <TopoLines opacity={0.035} />
        <DotGrid opacity={0.025} />
        <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" aria-hidden />
        <div className="relative max-w-[1440px] mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  active === cat ? "bg-charcoal text-white shadow-soft" : "bg-cream text-charcoal/70 hover:text-charcoal border border-charcoal/5 hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Placeholder banner */}
          <div className="mb-8 bg-amber-50 border border-amber-200 rounded-[14px] px-4 py-3 flex items-start gap-3">
            <span className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shrink-0">!</span>
            <p className="text-[13px] leading-relaxed text-amber-900">
              <strong>Placeholders active.</strong> 9 of 11 cards reuse the 2 demo pairs. Replace <code className="bg-white border border-amber-200 rounded px-1.5 py-0.5 text-xs">beforeSrc</code> / <code className="bg-white border border-amber-200 rounded px-1.5 py-0.5 text-xs">afterSrc</code> in <code className="bg-white border border-amber-200 rounded px-1.5 py-0.5 text-xs">src/app/before-after/page.tsx:20</code> or in <code className="bg-white border border-amber-200 rounded px-1.5 py-0.5 text-xs">src/lib/data.ts</code> once you share images. Keep filenames like <code className="bg-white border border-amber-200 rounded px-1.5 py-0.5 text-xs">/images/before-*.png</code>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="relative">
                    <div className={`absolute top-3 left-3 z-10 ${CATEGORY_STYLE[item.category] || "bg-charcoal text-white"} px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide shadow-soft`}>
                      {item.category}
                    </div>
                    <BeforeAfterSlider
                      beforeSrc={item.beforeSrc}
                      afterSrc={item.afterSrc}
                      beforeAlt={item.beforeAlt}
                      afterAlt={item.afterAlt}
                      initial={i % 2 === 0 ? 58 : 62}
                    />
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <h3 className="font-serif text-[15px] font-medium text-charcoal leading-tight">{item.title}</h3>
                    <span className="text-xs text-charcoal/40 shrink-0 flex items-center gap-1">
                      <MapPin size={11} className="text-gold" /> {item.location}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal/70 mt-1 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-charcoal/50 text-sm mt-10">No transformations in this category yet.</p>
          )}

          <div className="text-center mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="/projects" className="inline-flex items-center gap-2 bg-white border border-charcoal/10 text-charcoal px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
              View Projects <ArrowRight size={14} aria-hidden />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-charcoal text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-charcoal-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
              Start Your Transformation <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          <p className="text-center text-xs text-charcoal/30 mt-6 tracking-wide">Tip: Drag the handle or use ← → keys. Focus the slider and try.</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
