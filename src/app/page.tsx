"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
import { SERVICES, PROJECTS, COMPANY } from "@/lib/data";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <>
      {/* Single-image Hero — mobile optimized */}
      <section ref={heroRef} className="relative min-h-[82vh] sm:min-h-[78vh] md:min-h-[92vh] flex items-center overflow-hidden bg-charcoal-dark">
        <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
          <Image
            src="/images/hero-housing.jpg"
            alt="Contemporary housing by Nightingale Avenue Construction in Accra"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-charcoal-dark/60 md:bg-charcoal-dark/55" />
        <div className="absolute inset-0 hero-gradient" />
        <motion.div style={{ opacity }} className="absolute inset-0 opacity-[0.04] pointer-events-none hidden sm:block">
          <div className="w-full h-full" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
        </motion.div>

        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 md:pb-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-6 md:mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden /> Est. Jan 2024 • Wholly Ghanaian Owned • PPA Registered
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.06 }}
                className="font-serif font-light text-[32px] xs:text-[34px] sm:text-[38px] md:text-[56px] lg:text-[68px] leading-[0.9] tracking-[-0.02em] text-white"
              >
                Quality Housing
                <span className="block font-light italic text-gold">for All.</span>
                <span className="block text-[26px] sm:text-[30px] md:text-[44px] lg:text-[52px] font-light opacity-90">Solutions for Ghana.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.14 }}
                className="mt-4 sm:mt-5 md:mt-6 text-white/70 text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed max-w-xl font-light"
              >
                {COMPANY.tagline}. PPA-registered, SSNIT & tax compliant — affordable housing, glass & logistics across Ghana.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 mt-7 sm:mt-8"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal-dark px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm font-semibold transition-all hover:shadow-gold hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-dark w-full sm:w-auto"
                >
                  Request a Consultation <ArrowRight size={16} aria-hidden />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-1.5 text-white/90 hover:text-white text-sm font-medium tracking-wide px-2 py-3 sm:py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-full w-full sm:w-auto border border-white/15 sm:border-0 bg-white/5 sm:bg-transparent"
                >
                  View Our Projects <ArrowRight size={14} aria-hidden className="opacity-60" />
                </Link>
              </motion.div>
            </div>

            {/* Featured card — now visible on tablet+ with compact mobile fallback */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 relative hidden md:block"
            >
              <div className="ml-auto max-w-[420px] rounded-[28px] bg-white p-6 shadow-premium-lg border border-white/50">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-charcoal/40">Featured • Accra</span>
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold"><Sparkles size={14} aria-hidden /></span>
                </div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-cream relative mb-5 border border-charcoal/5">
                  <Image src="/images/featured-estate.jpg" alt="500-unit estate sustainable community" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 420px" />
                  <div className="absolute bottom-3 left-3 bg-charcoal text-white text-xs font-semibold px-3 py-1.5 rounded-full">500 Units • Design & Build</div>
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal leading-tight">Affordable Housing — Sustainable Community Model</h3>
                <p className="text-sm text-charcoal/60 mt-2 leading-relaxed">Contemporary, culturally-tailored with parks, playgrounds and renewable integration.</p>
                <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-charcoal/5">
                  {[
                    { k: "500+", v: "Units" },
                    { k: "Kumasi", v: "Green model" },
                    { k: "PPA", v: "Certified" },
                  ].map((s) => (
                    <div key={s.k} className="text-center">
                      <div className="font-serif font-medium text-charcoal">{s.k}</div>
                      <div className="text-xs text-charcoal/45">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-gold/15 rounded-full blur-3xl" aria-hidden />
            </motion.div>
          </div>

          {/* Mobile featured strip */}
          <div className="md:hidden mt-6 flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-5 px-5 pb-2">
            <div className="snap-start shrink-0 bg-white rounded-2xl p-4 flex items-center gap-3 border border-white/20 min-w-[260px] max-w-[80vw]">
              <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0"><Award size={16} /></span>
              <div className="min-w-0"><p className="text-xs font-semibold text-charcoal leading-tight">PPA Registered</p><p className="text-xs text-charcoal/50">Government tenders</p></div>
            </div>
            <div className="snap-start shrink-0 bg-white rounded-2xl p-4 flex items-center gap-3 border border-white/20 min-w-[260px] max-w-[80vw]">
              <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0"><ShieldCheck size={16} /></span>
              <div className="min-w-0"><p className="text-xs font-semibold text-charcoal leading-tight">500+ Units</p><p className="text-xs text-charcoal/50">Accra blueprint</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Single subtle marquee only */}
      <TrustMarquee />

      {/* Intro */}
      <section className="section-padding bg-cream relative">
        <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" />
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-gold-dark text-[11px] tracking-[0.22em] uppercase font-semibold mb-4">
                <span className="w-6 h-px bg-gold-dark/30" /> About Nightingale Avenue Construction
              </div>
              <h2 className="font-serif font-light text-[36px] md:text-[46px] leading-[0.95] tracking-tight text-charcoal">
                Building Ghana with <span className="italic font-normal text-gold">excellence <br /> & equity.</span>
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-charcoal/70 font-light max-w-prose">
                <p><strong className="text-charcoal font-medium">{COMPANY.fullName}</strong> — wholly owned Ghanaian, incorporated <strong className="text-charcoal font-medium">{COMPANY.incorporated}</strong>, recognized for excellence in real estate & civil engineering.</p>
                <p>Our social housing blueprint tackles the chronic shortage faced by nurses, doctors, teachers and security personnel — contemporary communities with premium amenities at affordable cost.</p>
                <p>Beyond housing: <strong className="text-charcoal font-medium">frameless & aluminium glass</strong>, <strong className="text-charcoal font-medium">PPA-registered procurement & logistics</strong>, <strong className="text-charcoal font-medium">renewable energy</strong> and <strong className="text-charcoal font-medium">IT & communications.</strong></p>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3 mt-8">
                {[
                  "Wholly Ghanaian Owned",
                  "PPA Registered Supplier",
                  "Tax & SSNIT Compliant",
                  "End-to-End Solutions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 bg-white rounded-full px-3.5 sm:px-4 py-2.5 border border-charcoal/5">
                    <CheckCircle2 size={14} className="text-gold shrink-0" aria-hidden />
                    <span className="text-charcoal text-[11px] sm:text-xs font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }} className="lg:col-span-5">
              <div className="bg-white rounded-[28px] border border-charcoal/5 p-6 shadow-soft">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative bg-charcoal">
                  <Image src="/images/about-community.jpg" alt="Nightingale Avenue Construction community aerial view" fill className="object-cover opacity-90" sizes="(max-width: 1024px) 100vw, 520px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-white text-charcoal text-xs font-semibold px-3 py-1.5 rounded-full">Abelemkpe, Accra</span>
                    <span className="bg-gold text-charcoal text-xs font-bold px-3 py-1.5 rounded-full">GA 135 6916</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { icon: Award, label: "PPA", sub: "Registered" },
                    { icon: ShieldCheck, label: "SSNIT", sub: "Certified" },
                    { icon: Sparkles, label: "NAC", sub: "Since 2024" },
                  ].map((b) => (
                    <div key={b.label} className="bg-cream rounded-2xl p-3 text-center border border-charcoal/5">
                      <b.icon size={16} className="mx-auto text-gold mb-1" aria-hidden />
                      <div className="text-xs font-semibold text-charcoal">{b.label}</div>
                      <div className="text-[11px] text-charcoal/40">{b.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services — grid on desktop, swipe hint mobile */}
      <section className="section-padding bg-white">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            tag="Our Solutions"
            title="Five pillars. One trusted partner."
            description="Construction, glass innovation, procurement & logistics, renewable energy and IT — delivering value from sourcing to handover."
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

      {/* Projects — grid */}
      <section className="section-padding bg-cream">
        <div className="max-w-[1440px] mx-auto">
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

      {/* Before / After — Nightingale Avenue Construction Transformations (Lillipad-style) */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" />
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading
            tag="Before / After"
            title="See the transformation"
            description="Drag to compare — bare structure to finishing, shell to glass. Craftsmanship you can feel, like Lillipad's Work/Life mode."
          />
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <div>
              <BeforeAfterSlider
                beforeSrc="/images/construction.jpg"
                afterSrc="/images/featured-estate.jpg"
                beforeLabel="Bare Structure"
                afterLabel="Finished Home"
                beforeAlt="Bare construction site before completion"
                afterAlt="Completed affordable housing after finishing"
                initial={58}
              />
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-serif text-[15px] font-medium text-charcoal">Construction → Completion</h3>
                <span className="text-xs text-charcoal/40">500 Units • Accra</span>
              </div>
              <p className="text-sm text-charcoal/60 mt-1">Design & Build from shell to sustainable community with parks & renewable integration.</p>
            </div>
            <div>
              <BeforeAfterSlider
                beforeSrc="/images/about-community.jpg"
                afterSrc="/images/glass-frameless.jpg"
                beforeLabel="Solid Wall"
                afterLabel="Frameless Glass"
                beforeAlt="Solid wall before glass installation"
                afterAlt="Frameless glass partition after installation"
                initial={62}
              />
              <div className="mt-3 flex items-center justify-between">
                <h3 className="font-serif text-[15px] font-medium text-charcoal">Solid → Glass Innovation</h3>
                <span className="text-xs text-charcoal/40">Frameless • Accra</span>
              </div>
              <p className="text-sm text-charcoal/60 mt-1">Clean, frameless partitions and curtain walls that maximize light and openness.</p>
            </div>
          </div>
          <p className="text-center text-xs text-charcoal/30 mt-6 tracking-wide">Tip: Drag the handle or use ← → keys. Focus the slider and try.</p>
        </div>
      </section>

      <ProcessSection />
      <Testimonials />
      <CTASection />

      {/* Contact */}
      <section className="section-padding bg-white">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading tag="Get In Touch" title="Start your project today" description="Tell us about your housing, glass, procurement or energy project — our team responds within 24 hours." />
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-cream rounded-[24px] p-6 border border-charcoal/5">
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
                      <a href={`tel:${COMPANY.phone2}`} className="text-sm text-charcoal/60 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">{COMPANY.phone2Formatted}</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-9 h-9 rounded-full bg-white border border-charcoal/5 flex items-center justify-center text-gold shrink-0"><Mail size={14} aria-hidden /></span>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-charcoal/40">Email</p>
                      <a href={`mailto:${COMPANY.email}`} className="text-sm text-charcoal block mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">{COMPANY.email}</a>
                      <a href={`mailto:${COMPANY.email2}`} className="text-sm text-charcoal/60 block break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">{COMPANY.email2}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[24px] overflow-hidden border border-charcoal/5 h-[280px] relative bg-cream">
                <Image src="/images/contact-accra.jpg" alt="Abelemkpe area map placeholder" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 480px" />
                <div className="absolute inset-0 bg-charcoal/20" />
                <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 text-xs font-semibold text-charcoal shadow-soft flex items-center gap-2">
                  <MapPin size={12} className="text-gold" aria-hidden /> Abelemkpe • GA 135 6916
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
