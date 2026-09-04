"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY, TEAM_MEMBERS } from "@/lib/data";

const TIMELINE = [
  { year: "2020.03", k: "Foundation", t: "Wholly Ghanaian incorporation - 69 Mango Street, Blue Plaza, Baatsona Total, Spintex. Solutions company on paper, site crew on ground.", img: "/images/construction.jpg" },
  { year: "2020.06", k: "Licensed", t: "Certificate to Commence Business + PPA registration. Cleared to tender for Government.", img: "/images/procurement.jpg" },
  { year: "2020.09", k: "Compliant", t: "Tax Act 915 & SSNIT Act 766 cleared - trust for public-sector delivery.", img: "/images/about-community.jpg" },
  { year: "2021", k: "Blueprint", t: "500 affordable units - Accra. For nurses, doctors, teachers, security.", img: "/images/featured-estate.jpg" },
  { year: "2022", k: "Kumasi", t: "Sustainable community model - green spaces, premium amenities and plumbing.", img: "/images/renewable.jpg" },
  { year: "2023 →", k: "Nationwide", t: "Design & build + frameless glass + logistics at scale.", img: "/images/glass-frameless.jpg" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO - unified dark slab with plan on right */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal overflow-hidden isolate">
        <div className="hidden lg:block absolute right-0 bottom-0 w-[620px] opacity-[0.14] pointer-events-none select-none" aria-hidden>
          <div className="relative w-full aspect-[1.4/1]">
            <Image src="/plan.webp" alt="" fill className="object-contain grayscale invert brightness-[1.6] contrast-125" sizes="560px" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/50 via-charcoal to-charcoal-dark" aria-hidden />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(185,151,91,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(185,151,91,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px" }} aria-hidden />
        <div className="absolute top-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" aria-hidden />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-gold/60 hidden sm:block" aria-hidden />
              <span className="font-archivo font-bold text-gold text-[11px] tracking-[0.14em] uppercase">About - Nightingale Avenue Construction</span>
            </div>
            <h1 className="font-serif font-light text-white text-[38px] md:text-[50px] lg:text-[56px] leading-[0.9] tracking-tight">
              Housing <span className="italic font-normal text-gold">for people</span> <br /> who keep Ghana running.
            </h1>
            <p className="mt-4 text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-xl font-medium">Incorporated March 2020. For nurses, doctors, teachers and security personnel - contemporary streets with parks and plumbing, cost-controlled and Ghanaian-led.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="bg-white rounded-[4px] border border-white/10 p-2 pr-3 flex gap-2.5 items-center">
                <span className="w-8 h-8 rounded-[4px] bg-cream border border-charcoal/10 flex items-center justify-center text-gold shrink-0"><ShieldCheck size={14} /></span>
                <div>
                  <div className="text-charcoal text-[11px] font-bold leading-none">PPA Registered • 2020</div>
                  <div className="text-charcoal/50 text-[10px] leading-none mt-1">Tax 915 • SSNIT 766 - Mar 2020</div>
                </div>
                <div className="ml-2 w-8 h-8 rounded-[4px] overflow-hidden bg-cream border border-charcoal/10 relative shrink-0 hidden sm:block">
                  <Image src="/images/procurement.jpg" alt="Certificate" fill className="object-cover" sizes="32px" />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/15 rounded-[4px] p-2 pr-3 flex gap-2.5 items-center">
                <span className="w-8 h-8 rounded-[4px] bg-gold flex items-center justify-center text-charcoal shrink-0"><Building2 size={14} /></span>
                <div>
                  <div className="text-white text-[11px] font-bold leading-none">500 Units - Accra</div>
                  <div className="text-white/50 text-[10px] leading-none mt-1">Blueprint • Spintex, Baatsona</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE - large serif, not pill */}
      <section className="bg-cream border-y border-charcoal/5">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8 py-12 md:py-16 text-center">
          <Quote size={18} className="mx-auto text-gold mb-4" aria-hidden />
          <p className="font-serif font-light text-charcoal text-[22px] md:text-[28px] leading-[1.3] tracking-tight">“We don&apos;t sell renders. We pour streets, fix drains, hang glass - and hand keys to the people who keep Ghana running.”</p>
          <div className="mt-4 text-[12px]"><span className="font-bold text-charcoal">John Awua Kyerematen</span><span className="text-charcoal/40"> - Managing Director, 33 years • BSc, ACMA</span></div>
        </div>
      </section>

      {/* STORY - asymmetric, drop-cap feel */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-gold">Our story</div>
              <h2 className="mt-2 font-serif font-light text-charcoal text-[28px] md:text-[32px] leading-[0.95] tracking-tight">Company <br /> overview</h2>
              <div className="mt-4 w-8 h-px bg-gold" aria-hidden />
              <p className="mt-4 text-charcoal/50 text-[12px] leading-relaxed">Modern plant, vetted suppliers, safety-led crews. Design & build with roads and drainage, not just walls.</p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="prose prose-neutral max-w-none">
              <p className="text-charcoal text-[15px] leading-[1.75] font-medium">
                <span className="font-serif text-[48px] leading-none float-left mr-2 mt-1 text-gold">N</span>
                ightingale Avenue Construction is recognised for real estate and civil engineering. Incorporated March 2020, we focus on affordable housing for middle-income and essential workers - while solving Ghana&apos;s structural housing deficit.
              </p>
              <p className="text-charcoal/70 text-[15px] leading-[1.75] mt-4">
                Leadership from site: HND Building Technology, BSc Construction Engineering, MSc Project Management. We deliver contemporary communities with premium amenities - parks, playgrounds - without exceeding budget. Culturally tailored, inclusive, and built to last.
              </p>
              <p className="text-charcoal/70 text-[15px] leading-[1.75] mt-4">
                We are a solutions provider in construction, frameless & aluminium glass, procurement & logistics (PPA-registered), plumbing - from sourcing to handover.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-[11px]">
              <span className="bg-charcoal text-white px-3 py-2 rounded-[4px] font-bold uppercase tracking-wide flex items-center gap-1.5"><CheckCircle2 size={11} className="text-gold" /> PPA</span>
              <span className="bg-white border border-charcoal/10 text-charcoal px-3 py-2 rounded-[4px] font-bold uppercase tracking-wide">Tax Act 915</span>
              <span className="bg-white border border-charcoal/10 text-charcoal px-3 py-2 rounded-[4px] font-bold uppercase tracking-wide">SSNIT Act 766</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES - 8/4 editorial with proof, not 7/5 equal cards */}
      <section className="bg-cream border-y border-charcoal/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Mission - 8col, left gold rule, watermark 01 */}
            <div className="lg:col-span-8 bg-white border border-charcoal/10 p-8 md:p-10 relative overflow-hidden">
              <span className="absolute -top-2 -left-1 font-archivo font-extrabold text-[72px] leading-none text-gold/[0.06] select-none" aria-hidden>
                01
              </span>
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gold" aria-hidden />
              <div className="relative pl-4">
                <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-gold">Mission - What we do</div>
                <h3 className="mt-1 font-serif font-light text-charcoal text-[26px] md:text-[30px] leading-[0.95] tracking-tight">Housing that workers <span className="italic font-normal text-gold">can own.</span></h3>
                <p className="mt-3 text-charcoal/65 text-[14px] leading-[1.7] max-w-[560px]">For nurses, doctors, teachers, security - sustainable, contemporary communities at controlled cost. Social blueprint, not slogan.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-cream border border-charcoal/10 text-charcoal text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-[4px]">500 Units • Accra</span>
                  <span className="bg-cream border border-charcoal/10 text-charcoal text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-[4px]">Parks & Amenities</span>
                  <span className="bg-charcoal text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-[4px]">Cost-Controlled</span>
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-charcoal/50 border-l-2 border-gold/30 pl-3 italic">“We pour streets, fix drains, hang glass - and hand keys to the people who keep Ghana running.” - JAK, MD</p>
              </div>
            </div>
            {/* Vision - 4col, image-backed, compact */}
            <div className="lg:col-span-4 bg-charcoal relative overflow-hidden p-8 flex flex-col">
              <div className="absolute inset-0 opacity-[0.14]">
                <Image src="/images/glass-frameless.jpg" alt="" fill className="object-cover" sizes="400px" />
              </div>
              <div className="absolute inset-0 bg-charcoal/70" aria-hidden />
              <span className="absolute -top-1 -right-1 font-archivo font-extrabold text-[64px] leading-none text-white/[0.06] select-none" aria-hidden>
                02
              </span>
              <div className="relative">
                <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-gold">Vision - Where we go</div>
                <h3 className="mt-1 font-serif font-light text-white text-[24px] leading-[1] tracking-tight">Streets <span className="italic font-normal text-gold">that work.</span></h3>
                <p className="mt-3 text-white/65 text-[13px] leading-relaxed">Not estates on paper - equity, ownership, and future you can walk. Ghanaian streets, shade, play.</p>
                <div className="mt-6 flex items-center gap-2 text-white/50 text-[11px] font-medium">
                  <span className="w-6 h-px bg-gold/50" aria-hidden /> Spintex • Kumasi • Nationwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE - horizontal on desktop, editorial, with images */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-serif font-light text-charcoal text-[28px] md:text-[32px] tracking-tight">Timeline</h2>
          <span className="text-charcoal/30 text-xs hidden md:inline">Mar 2020 → Nationwide</span>
        </div>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
          {TIMELINE.map((t) => (
            <div key={t.year} className="snap-start shrink-0 w-[300px] border border-charcoal/10 bg-white">
              <div className="aspect-[4/3] relative bg-cream overflow-hidden">
                <Image src={t.img} alt={t.k} fill className="object-cover" sizes="300px" />
              </div>
              <div className="p-4">
                <div className="text-[11px] font-bold tracking-[0.08em] text-gold">{t.year} - {t.k}</div>
                <div className="font-serif font-medium text-charcoal text-[14px] mt-1 leading-tight">{t.t}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM - featured MD large, rest 7 small */}
      <section className="bg-cream border-y border-charcoal/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif font-light text-charcoal text-[28px] md:text-[32px] tracking-tight">Leadership</h2>
            <Link href="/contact" className="hidden md:inline-flex items-center gap-1 text-gold text-xs font-bold uppercase tracking-wide">Work with us <ArrowUpRight size={12} /></Link>
          </div>
          {/* Featured */}
          <div className="mt-6 grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-white border border-charcoal/10 p-6 flex gap-4">
              <div className="w-20 h-24 bg-charcoal flex items-center justify-center shrink-0"><span className="font-archivo font-extrabold text-gold text-xs">JAK</span></div>
              <div>
                <h3 className="font-serif font-medium text-charcoal text-[16px]">{TEAM_MEMBERS[0].name}</h3>
                <p className="text-gold text-[11px] font-bold uppercase tracking-wide">{TEAM_MEMBERS[0].position} • {TEAM_MEMBERS[0].experience}</p>
                <p className="text-charcoal/60 text-[12px] leading-relaxed mt-2">{TEAM_MEMBERS[0].bio}</p>
                <p className="text-charcoal/40 text-[11px] mt-1">{TEAM_MEMBERS[0].qualification}</p>
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-3">
              {TEAM_MEMBERS.slice(1, 7).map((m) => (
                <div key={m.name} className="bg-white border border-charcoal/10 p-4">
                  <div className="font-serif font-medium text-charcoal text-[13px] leading-tight">{m.name}</div>
                  <div className="text-gold text-[10px] font-bold uppercase tracking-wide mt-1">{m.position}</div>
                  <div className="text-charcoal/40 text-[10px] mt-1">{m.experience}</div>
                </div>
              ))}
            </div>
          </div>
          <details className="mt-6 group">
            <summary className="list-none inline-flex items-center gap-2 text-charcoal font-bold text-[11px] tracking-[0.06em] uppercase border border-charcoal/10 rounded-[4px] px-3 py-2 bg-white cursor-pointer"><span className="w-2 h-2 bg-gold rounded-[2px] group-open:rotate-45 transition-transform" aria-hidden /> Show all {TEAM_MEMBERS.length}</summary>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {TEAM_MEMBERS.slice(7).map((m) => (
                <div key={m.name} className="bg-white border border-charcoal/10 p-3">
                  <div className="font-serif font-medium text-charcoal text-[12px]">{m.name}</div>
                  <div className="text-gold text-[10px] font-bold uppercase">{m.position}</div>
                  <div className="text-charcoal/40 text-[10px]">{m.experience} • {m.qualification}</div>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* VALUES - quiet 3-col, not card wall */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-8 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-6 border-t border-charcoal/10 pt-6">
          {[
            ["Quality & Affordability", "Housing that enhances living without exceeding budget."],
            ["Sustainability", "Green spaces and plumbing integrated from day one."],
            ["Inclusivity", "Tailored to Ghana's diverse cultural and social dynamics."],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-gold">{t}</div>
              <p className="text-charcoal/60 text-[13px] leading-relaxed mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
