"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Calendar, Award, ShieldCheck, Building, Users, HardHat, Ruler, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import CoreValues from "@/components/CoreValues";
import CTASection from "@/components/CTASection";
import { COMPANY, TEAM_MEMBERS, CERTIFICATES } from "@/lib/data";
import Image from "next/image";

const TIMELINE = [
  { year: "JAN 2024", title: "Incorporated", desc: "Wholly owned Ghanaian solutions company — construction, glass, procurement & logistics, renewable energy and IT. No. 5 Nii Lomo Tackie Link, Abelemkpe." },
  { year: "MAR 2024", title: "Commence Business", desc: "Certificate to Commence Business + PPA registration — cleared to tender for Government." },
  { year: "MAY 2024", title: "Tax & SSNIT Cleared", desc: "Tax Clearance Act 915 + SSNIT Act 766 — fully compliant for public-sector delivery." },
  { year: "JUL 2024", title: "500 Units Blueprint", desc: "Accra affordable housing blueprint — targeting nurses, doctors, teachers, security personnel." },
  { year: "SEP 2024", title: "Kumasi Model", desc: "Sustainable community model — green spaces, premium amenities, renewable integration." },
  { year: "2024+", title: "Nationwide Rollout", desc: "Design & build + frameless/aluminium glass + technology-driven logistics at scale." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — hard slab with site proof strip */}
      <section className="relative bg-charcoal overflow-hidden isolate">
        <div className="absolute inset-0 bg-charcoal" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-px bg-gold/30" aria-hidden />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(201,169,106,0.5) 1px, transparent 1px)", backgroundSize: "100% 32px" }} aria-hidden />
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 pt-32 pb-0 md:pt-40">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-7 pb-10 md:pb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" aria-hidden />
                <span className="font-archivo font-bold text-gold text-[11px] tracking-[0.14em] uppercase">About Nightingale Avenue Construction</span>
              </div>
              <h1 className="font-archivo font-extrabold text-white text-[40px] md:text-[52px] lg:text-[58px] leading-[0.88] tracking-[-0.03em] uppercase">
                WHOLLY GHANAIAN. <br />
                <span className="text-gold">BUILT FOR GHANA.</span>
              </h1>
              <p className="mt-4 text-white/70 text-[14px] leading-[1.6] max-w-[520px] font-medium">Incorporated January 2024. Housing for essential workers, glass systems, PPA procurement — not decks. Site-first, cost-controlled, Ghanaian-led.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "PPA REGISTERED",
                  "TAX ACT 915",
                  "SSNIT ACT 766",
                  "GA 135 6916",
                ].map((t) => (
                  <span key={t} className="bg-white text-charcoal text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-[4px] border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-[6px] overflow-hidden border border-white/10 bg-charcoal-light relative">
                <Image src="/images/about-community.jpg" alt="Nightingale Avenue community" fill className="object-cover" sizes="520px" priority />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" aria-hidden />
                <div className="absolute bottom-3 left-3 bg-white text-charcoal text-[11px] font-bold px-2.5 py-1 rounded-[4px]">ABELEMKPE • ACCRA</div>
              </div>
              <p className="mt-2 text-white/40 text-[11px] font-medium tracking-wide">No. 5 Nii Lomo Tackie Link — head office & yard</p>
            </div>
          </div>
          {/* spec strip — hard 6px, not cream card */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-[6px] overflow-hidden bg-white">
            {[
              ["JAN 2024", "INCORPORATED"],
              ["100% GHANAIAN", "OWNERSHIP"],
              ["5 PILLARS", "SOLUTIONS"],
              ["500 UNITS", "BLUEPRINT"],
            ].map(([v, l]) => (
              <div key={l} className="px-4 py-3 border-r border-charcoal/10 last:border-r-0 border-b md:border-b-0 even:border-r-0 md:even:border-r md:last:border-r-0 flex items-baseline gap-2">
                <span className="font-archivo font-extrabold text-charcoal text-[13px] leading-none">{v}</span>
                <span className="text-charcoal/40 text-[10px] font-bold tracking-[0.08em] uppercase">{l}</span>
              </div>
            ))}
          </div>
          <div className="h-6 md:h-8" />
        </div>
      </section>

      {/* Who we are — two col, hard type, spec list */}
      <section className="section-padding bg-white relative border-t border-charcoal/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-px bg-gold" aria-hidden />
                <span className="font-archivo font-bold text-charcoal text-[11px] tracking-[0.12em] uppercase">Who We Are</span>
              </div>
              <h2 className="font-archivo font-extrabold text-charcoal text-[28px] md:text-[36px] leading-[0.9] tracking-[-0.02em] uppercase">COMPANY OVERVIEW</h2>
              <div className="mt-3 h-1 w-10 bg-gold" aria-hidden />
              <div className="mt-5 space-y-3.5 text-[14px] leading-[1.65] text-charcoal/70 font-medium">
                <p>
                  <strong className="text-charcoal font-extrabold">{COMPANY.fullName}</strong> — incorporated <strong className="text-charcoal font-extrabold">{COMPANY.incorporated}</strong> for housing that essential workers can actually own. Nurses, doctors, teachers, security personnel — not abstract demand.
                </p>
                <p>Leadership built on site: 33-year MD, 24-year construction engineer, project managers with HND/Building Technology. Design & build with modern plant, vetted suppliers, safety-led crews.</p>
                <p className="font-archivo font-bold text-charcoal text-[12px] tracking-[0.04em] uppercase">CONSTRUCTION • GLASS (FRAMELESS & ALUMINIUM) • PROCUREMENT & LOGISTICS • RENEWABLE ENERGY • IT</p>
            </div>
              <ul className="mt-6 space-y-2">
                {[
                  "Design & Build — roads, drainage, full infrastructure",
                  "Contemporary, culturally-tailored communities — parks, playgrounds, not renders",
                  "PPA-registered sourcing — military, medical, ICT, tyres, fire — QA before acceptance",
                ].map((li) => (
                  <li key={li} className="flex gap-2.5 text-[13px] leading-relaxed text-charcoal/70">
                    <CheckCircle2 size={14} className="text-gold mt-0.5 shrink-0" aria-hidden /> {li}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-cream rounded-[6px] border border-charcoal/10 p-4">
                <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.08em] uppercase text-charcoal">
                  <Building size={14} className="text-gold" /> At a Glance
                </div>
                <div className="mt-3 divide-y divide-charcoal/10 border border-charcoal/10 rounded-[6px] bg-white overflow-hidden text-[13px]">
                  <div className="flex justify-between px-3 py-2.5"><span className="text-charcoal/50 font-medium">Incorporated</span><span className="font-bold text-charcoal">January 2024</span></div>
                  <div className="flex justify-between px-3 py-2.5"><span className="text-charcoal/50 font-medium">Ownership</span><span className="font-bold text-charcoal">100% Ghanaian</span></div>
                  <div className="flex justify-between px-3 py-2.5"><span className="text-charcoal/50 font-medium">Office</span><span className="font-bold text-charcoal text-right text-xs">Abelemkpe, Accra<br />GA 135 6916</span></div>
                  <div className="flex justify-between px-3 py-2.5"><span className="text-charcoal/50 font-medium">Contact</span><span className="font-bold text-charcoal text-xs">{COMPANY.phoneFormatted}</span></div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {CERTIFICATES.map((c) => (
                    <div key={c.title} className="bg-white rounded-[6px] p-3 border border-charcoal/10">
                      <div className="flex items-center gap-1.5"><ShieldCheck size={11} className="text-gold" /><span className="text-[11px] font-extrabold uppercase tracking-wide text-charcoal leading-none">{c.title}</span></div>
                      <p className="text-[11px] text-charcoal/50 leading-tight mt-1">{c.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-[11px] text-charcoal/40 font-medium">Tax & SSNIT compliance — documents available on request.</p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Mission / Vision — hard 6px, top gold rule */}
      <section className="section-padding bg-cream relative border-t border-charcoal/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Target, kicker: "MISSION", title: "HOUSING THAT WORKERS CAN OWN", text: "Social housing blueprint for nurses, doctors, teachers, security personnel — sustainable, culturally-tailored, premium amenities at hard-controlled cost." },
              { icon: Eye, kicker: "VISION", title: "GHANA'S HOUSING, FIXED AT SITE", text: "Transform the deficit into communities — not estates — fostering equity, ownership, and streets that work." },
            ].map((c) => (
              <div key={c.kicker} className="bg-white rounded-[6px] border border-charcoal/10 p-6 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />
                <div className="w-9 h-9 rounded-[4px] bg-charcoal flex items-center justify-center text-white mb-4"><c.icon size={16} /></div>
                <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-gold">{c.kicker}</div>
                <h3 className="font-archivo font-extrabold text-charcoal text-[14px] tracking-[-0.01em] uppercase mt-1">{c.title}</h3>
                <p className="text-charcoal/70 text-[13px] leading-relaxed mt-2">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-charcoal rounded-[6px] p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />
              <div className="w-9 h-9 rounded-[4px] bg-white/10 flex items-center justify-center text-gold mb-4"><Users size={16} /></div>
              <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-gold">SOCIAL HOUSING</div>
              <h3 className="font-archivo font-extrabold text-white text-[13px] uppercase mt-1">FOR ESSENTIAL WORKERS</h3>
              <p className="text-white/65 text-[13px] leading-relaxed mt-2">With government, NGOs, and communities — needs assessment first, then design, then home-ownership facilitation.</p>
            </div>
            <div className="bg-white rounded-[6px] border border-charcoal/10 p-6 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold" aria-hidden />
              <div className="w-9 h-9 rounded-[4px] bg-gold/15 flex items-center justify-center text-charcoal mb-4"><Award size={16} /></div>
              <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-gold">SUSTAINABLE</div>
              <h3 className="font-archivo font-extrabold text-charcoal text-[13px] uppercase mt-1">PARKS, PLAYGROUNDS, RENEWABLES</h3>
              <p className="text-charcoal/70 text-[13px] leading-relaxed mt-2">Function + comfort + culture. Not imported estates — Ghanaian streets, shade, play, and cost that holds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline — hard vertical with left gold rule, not alternating pills */}
      <section className="section-padding bg-white relative border-t border-charcoal/5">
        <div className="max-w-[900px] mx-auto">
          <SectionHeading tag="Our Journey" title="Company Timeline" description="Six steps from incorporation to nationwide delivery — dated, not vague." />
          <div className="relative border-l border-charcoal/10 ml-3 md:ml-0">
            {TIMELINE.map((item, i) => (
              <div key={item.title} className="relative pl-8 md:pl-8 pb-6 last:pb-0">
                <span className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-gold rounded-[2px] border-2 border-white shadow-sm" aria-hidden />
                <div className="bg-cream rounded-[6px] border border-charcoal/10 p-4 md:p-5">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-archivo font-extrabold text-gold text-[11px] tracking-[0.08em] uppercase">{item.year}</span>
                    <span className="w-1 h-1 bg-charcoal/20 rounded-full" aria-hidden />
                    <h4 className="font-archivo font-extrabold text-charcoal text-[13px] uppercase tracking-[-0.01em]">{item.title}</h4>
                  </div>
                  <p className="text-charcoal/70 text-[13px] leading-relaxed mt-1.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoreValues />

      {/* Team — hard 6px, no tilt, initials only, 8 leaders + rest collapsed */}
      <section className="section-padding bg-cream relative border-t border-charcoal/5">
        <div className="max-w-[1440px] mx-auto">
          <SectionHeading tag="Our Team" title="Board & Management" description="Leaders who approve strategy and manage site — not a wall of faces." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM_MEMBERS.slice(0, 8).map((m) => (
              <div key={m.name} className="bg-white rounded-[6px] border border-charcoal/10 overflow-hidden">
                <div className="h-1 bg-gold" aria-hidden />
                <div className="h-20 bg-charcoal flex items-center justify-center relative">
                  <div className="w-12 h-12 rounded-[4px] bg-white/10 border border-white/10 flex items-center justify-center">
                    <span className="font-archivo font-extrabold text-gold text-[11px]">{m.name.split(" ").map((n) => n[0]).join("").slice(0, 3)}</span>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-white text-charcoal text-[10px] font-bold px-1.5 py-0.5 rounded-[4px]">{m.experience}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-archivo font-extrabold text-charcoal text-[12px] uppercase tracking-[-0.01em] leading-tight">{m.name}</h3>
                  <p className="text-gold text-[11px] font-bold uppercase tracking-wide mt-0.5">{m.position}</p>
                  <p className="text-charcoal/40 text-[11px] mt-1">{m.qualification}</p>
                  <p className="text-charcoal/70 text-[12px] leading-relaxed mt-2 line-clamp-2">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <details className="mt-6 group">
            <summary className="cursor-pointer list-none inline-flex items-center gap-2 text-charcoal font-bold text-[12px] tracking-[0.06em] uppercase border border-charcoal/10 rounded-[6px] px-4 py-2 bg-white hover:bg-charcoal hover:text-white transition-colors">
              <span className="w-2 h-2 bg-gold rounded-[2px] group-open:rotate-45 transition-transform" aria-hidden /> Show all {TEAM_MEMBERS.length} members
            </summary>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TEAM_MEMBERS.slice(8).map((m) => (
                <div key={m.name} className="bg-white rounded-[6px] border border-charcoal/10 p-4">
                  <h3 className="font-archivo font-extrabold text-charcoal text-[12px] uppercase">{m.name}</h3>
                  <p className="text-gold text-[11px] font-bold uppercase">{m.position}</p>
                  <p className="text-charcoal/40 text-[11px] mt-1">{m.experience} • {m.qualification}</p>
                </div>
              ))}
            </div>
          </details>
          <p className="mt-4 text-[11px] text-charcoal/40 font-medium">Board appoints MD, Chair & Vice-Chair lead governance, Secretary is non-board.</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
