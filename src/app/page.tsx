"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  CheckCircle2,
  Award,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import { TrustMarquee } from "@/components/Marquee";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import AxialHero from "@/components/AxialHero";
import FAQAccordion from "@/components/FAQAccordion";
import { DotGrid, BlueprintCorner, ArchLines, WaveLines, TopoLines, GrainOverlay } from "@/components/SectionTexture";
import { SERVICES, PROJECTS, COMPANY } from "@/lib/data";

export default function Home() {
  return (
    <>
      <AxialHero />

      {/* Single subtle marquee only */}
      <TrustMarquee />

      {/* Intro - hardened: slab, 6px, tight type, no pills */}
      <section className="section-padding bg-cream relative overflow-hidden border-t border-charcoal/5">
        <div className="absolute top-0 inset-x-0 h-px bg-gold/20" aria-hidden />
        {/* technical rule, not dotgrid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden style={{ backgroundImage: "linear-gradient(rgba(28,33,40,0.8) 1px, transparent 1px)", backgroundSize: "100% 32px" }} />
        <div className="relative max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-gold" aria-hidden />
                <span className="font-archivo font-bold text-charcoal text-[11px] tracking-[0.12em] uppercase">About Nightingale Avenue Construction</span>
              </div>
              <h2 className="font-serif font-light text-charcoal leading-[0.95] tracking-tight text-[30px] md:text-[40px]">
                Building Ghana with <span className="italic font-normal text-gold">excellence & equity.</span>
              </h2>
              <div className="mt-4 h-1 w-12 bg-gold" aria-hidden />
              <div className="mt-5 space-y-3.5 text-[14px] leading-[1.65] text-charcoal/70 font-medium max-w-prose">
                <p><strong className="text-charcoal font-bold">{COMPANY.fullName}</strong> - wholly owned Ghanaian, incorporated <strong className="text-charcoal font-bold">{COMPANY.incorporated}</strong>. Real estate & civil engineering, built on site.</p>
                <p>Social housing blueprint for nurses, doctors, teachers and security personnel - solid communities, hard costs controlled, no render promises.</p>
                <p className="text-charcoal font-semibold text-[13px] tracking-wide">FRAMLESS & ALUMINIUM GLASS • PPA-REGISTERED PROCUREMENT • PLUMBING • ELECTRICAL • CCTV</p>
              </div>
              {/* Spec strip - not pills */}
              <div className="mt-6 grid grid-cols-2 border border-charcoal/10 rounded-[6px] overflow-hidden bg-white">
                {[
                  ["100%","GHANAIAN OWNED"],
                  ["PPA","REGISTERED"],
                  ["TAX / SSNIT","COMPLIANT"],
                  ["2020","ESTABLISHED"],
                ].map(([v,l]) => (
                  <div key={l} className="flex items-center gap-3 px-4 py-3 border-charcoal/10 border-r border-b last:border-r-0 even:border-r-0 nth-[3]:border-b-0 nth-[4]:border-b-0">
                    <span className="font-archivo font-extrabold text-gold text-[14px] leading-none">{v}</span>
                    <span className="text-charcoal text-[11px] font-bold tracking-[0.08em] uppercase leading-tight">{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.06 }} className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="bg-white rounded-[6px] border border-charcoal/10 p-3 shadow-sm">
                <div className="aspect-[4/3] rounded-[4px] overflow-hidden relative bg-charcoal">
                  <Image src="/images/about-community.jpg" alt="Nightingale Avenue Construction community aerial view" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 520px" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gold" aria-hidden />
                  <div className="absolute bottom-3 left-3 bg-white text-charcoal text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-[4px] border border-charcoal/10">SPINTEX, ACCRA</div>
                  <div className="absolute bottom-3 right-3 bg-charcoal text-white text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-[4px]">Spintex</div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {[
                    { icon: Award, label: "PPA", sub: "Registered" },
                    { icon: ShieldCheck, label: "SSNIT", sub: "Certified" },
                    { icon: Sparkles, label: "NAC", sub: "Since 2020" },
                  ].map((b) => (
                    <div key={b.label} className="bg-cream rounded-[4px] p-2.5 text-center border border-charcoal/10">
                      <b.icon size={13} className="mx-auto text-charcoal mb-1" aria-hidden />
                      <div className="text-[11px] font-bold tracking-wide text-charcoal leading-none">{b.label}</div>
                      <div className="text-[10px] text-charcoal/40 font-medium">{b.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - grid on desktop, swipe hint mobile */}
      <section className="section-padding bg-white relative overflow-hidden">
        <DotGrid opacity={0.025} />
        <div className="absolute top-12 right-0 w-[420px] h-[420px] rounded-full bg-gold/5 blur-3xl pointer-events-none" aria-hidden />
        <ArchLines className="top-0 left-1/2 -translate-x-1/2 opacity-60 hidden md:block" />
        <div className="relative max-w-[1440px] mx-auto">
          <SectionHeading
            tag="Our Solutions"
            title="Five pillars. One trusted partner."
            description="Construction, glass innovation, procurement & logistics, plumbing - delivering value from sourcing to handover."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-1.5 text-charcoal font-medium hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full px-3 py-1">
              Explore All Solutions <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Projects - grid */}
      <section className="section-padding bg-cream relative overflow-hidden">
        <DotGrid opacity={0.03} />
        <TopoLines opacity={0.04} />
        <div className="absolute -bottom-20 -left-20 w-[520px] h-[520px] rounded-full bg-charcoal/5 blur-3xl pointer-events-none" aria-hidden />
        <div className="relative max-w-[1440px] mx-auto">
          <SectionHeading
            tag="Our Work"
            title="Built with precision, lasting value"
            description="500 affordable units in Accra, sustainable community in Kumasi, worker housing renovations and nationwide glass & procurement delivery."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 6).map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projects" className="inline-flex items-center gap-2 bg-charcoal text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-charcoal-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal">
              View All Projects <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="section-padding bg-white relative overflow-hidden">
        <WaveLines opacity={0.06} />
        <DotGrid opacity={0.02} />
        <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" aria-hidden />
        <div className="relative max-w-[1440px] mx-auto">
          <SectionHeading
            tag="Before / After"
            title="See the transformation"
            description="Drag to compare - bare structure to finishing, shell to glass. Craftsmanship you can feel."
          />
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <div>
              <BeforeAfterSlider
                beforeSrc="/images/before-stairs.png"
                afterSrc="/images/after-stairs.png"
                beforeLabel="Before"
                afterLabel="After"
                beforeAlt="Staircase before renovation"
                afterAlt="Staircase after renovation"
                initial={58}
              />
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-serif text-[15px] font-medium text-charcoal">Staircase - Before → After</h3>
                <span className="text-xs text-charcoal/40">Renovation • Accra</span>
              </div>
              <p className="text-sm text-charcoal/70 mt-1">Raw concrete to finished balustrade - precise glass and metal craftsmanship.</p>
            </div>
            <div>
              <BeforeAfterSlider
                beforeSrc="/images/path-before.png"
                afterSrc="/images/path-after.png"
                beforeLabel="Before"
                afterLabel="After"
                beforeAlt="Pathway before paving"
                afterAlt="Pathway after paving"
                initial={62}
              />
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-serif text-[15px] font-medium text-charcoal">Pathway - Before → After</h3>
                <span className="text-xs text-charcoal/40">Paving • Accra</span>
              </div>
              <p className="text-sm text-charcoal/70 mt-1">From bare ground to paved walkway - durable, drainage-ready finishing.</p>
            </div>
          </div>
          <p className="text-center text-xs text-charcoal/30 mt-6 tracking-wide">Tip: Drag the handle or use ← → keys. Focus the slider and try.</p>
        </div>
      </section>

      <ProcessSection />
      <Testimonials />
      {/* FAQ - homepage teaser */}
      <section className="section-padding bg-cream relative border-t border-charcoal/5">
        <div className="max-w-[900px] mx-auto">
          <SectionHeading tag="FAQ" title="Questions, answered" description="Housing, glass, procurement - hard answers before you call." />
          <FAQAccordion limit={6} />
        </div>
      </section>
      <CTASection />

      {/* Contact */}
      <section className="section-padding bg-white relative overflow-hidden">
        <TopoLines opacity={0.035} />
        <GrainOverlay opacity={0.02} />
        <BlueprintCorner className="-bottom-24 -right-24 opacity-50 hidden lg:block" />
        <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" aria-hidden />
        <div className="relative max-w-[1440px] mx-auto">
          <SectionHeading tag="Get In Touch" title="Start your project today" description="Tell us about your housing, glass, procurement or energy project - our team responds within 24 hours." />
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-cream rounded-[20px] p-6 border border-charcoal/5">
                <h3 className="font-serif text-lg font-medium text-charcoal mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="w-9 h-9 rounded-full bg-white border border-charcoal/5 flex items-center justify-center text-gold shrink-0"><MapPin size={14} aria-hidden /></span>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/40">Office</p>
                      <p className="text-sm text-charcoal mt-1">{COMPANY.address}</p>
                      <a href={COMPANY.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">{COMPANY.website}</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-9 h-9 rounded-full bg-white border border-charcoal/5 flex items-center justify-center text-gold shrink-0"><Phone size={14} aria-hidden /></span>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/40">Phone</p>
                      <a href={`tel:${COMPANY.phone}`} className="text-sm text-charcoal block mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">{COMPANY.phoneFormatted}</a>
                      <a href={`tel:${COMPANY.phone2}`} className="text-sm text-charcoal/70 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">{COMPANY.phone2Formatted}</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-9 h-9 rounded-full bg-white border border-charcoal/5 flex items-center justify-center text-gold shrink-0"><Mail size={14} aria-hidden /></span>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/40">Email</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-sm text-charcoal block mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">{COMPANY.email}</a>
                      <a href={`mailto:${COMPANY.email2}`} className="text-sm text-charcoal/70 block break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">{COMPANY.email2}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[20px] overflow-hidden border border-charcoal/5 h-[280px] relative bg-cream">
                <Image src="/images/contact-accra.jpg" alt="Spintex area map placeholder" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 480px" />
                <div className="absolute inset-0 bg-charcoal/15" />
                <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 text-xs font-semibold text-charcoal shadow-soft flex items-center gap-2">
                  <MapPin size={12} className="text-gold" aria-hidden /> Spintex • Baatsona
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
