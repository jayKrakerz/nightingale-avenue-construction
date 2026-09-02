"use client";

import { motion } from "framer-motion";
import { Target, Eye, Calendar, Linkedin, Award, ShieldCheck, Building, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import CoreValues from "@/components/CoreValues";
import CTASection from "@/components/CTASection";
import { COMPANY, TEAM_MEMBERS, CERTIFICATES } from "@/lib/data";

const TIMELINE = [
  {
    year: "Jan 2024",
    title: "Nightingale Avenue Construction Incorporated",
    description:
      "Nightingale Avenue Construction incorporated as a wholly owned Ghanaian solutions company - construction, glass, procurement & logistics, renewable energy and IT.",
  },
  {
    year: "2024",
    title: "Certificate to Commence Business",
    description:
      "Certified to commence business and duly registered with the Public Procurement Authority (PPA) to engage in Government tenders.",
  },
  {
    year: "2024",
    title: "Tax & SSNIT Compliance",
    description:
      "Achieved Tax Clearance (Act 915) and SSNIT Clearance (Act 766) — fully compliant and trusted for public-sector delivery.",
  },
  {
    year: "2024",
    title: "500 Affordable Units Blueprint - Accra",
    description:
      "Launched blueprint for 500 affordable housing units in Accra targeting middle/high-income earners and essential workers (nurses, doctors, teachers, security personnel).",
  },
  {
    year: "2024",
    title: "Sustainable Community - Kumasi",
    description:
      "Developed sustainable community model in Kumasi with green spaces, premium amenities and renewable energy solutions.",
  },
  {
    year: "2024+",
    title: "Nationwide Solutions Delivery",
    description:
      "Scaling design & build, frameless & aluminium glass installations, and technology-driven procurement & logistics nationwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-dark overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-gold/3 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
              About Nightingale Avenue Construction
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Wholly Ghanaian.{" "}
              <span className="text-gradient">Built for Ghana.</span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed">
              Nightingale Avenue Construction delivers quality housing for all — addressing the housing deficit for essential workers while providing glass innovation and procurement excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-tight mb-6">
                Company Overview
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed mb-4">
                <strong className="text-charcoal">{COMPANY.fullName}</strong> is recognized for excellence in real estate and civil engineering. Incorporated in <strong className="text-charcoal">{COMPANY.incorporated}</strong>, we focus on providing affordable housing solutions tailored to middle and high-income earners while addressing structural challenges in Ghana&apos;s housing market.
              </p>
              <p className="text-neutral-500 text-base leading-relaxed mb-4">
                Our leadership comprises experienced professionals in construction and real estate development — with a strong commitment to delivering quality projects across Ghana. We have an impressive track record in successful design & build delivery.
              </p>
              <p className="text-neutral-500 text-base leading-relaxed mb-4">
                We are a <strong className="text-charcoal">solutions provider in construction, glass innovation, procurement & logistics, renewable energy and IT</strong>. From contemporary communities with premium amenities to frameless & aluminium glass systems and PPA-registered procurement, we deliver end-to-end value.
              </p>
              <p className="text-neutral-500 text-base leading-relaxed">
                Equipment & resources: modern construction machinery, partnerships with reliable material suppliers, and a dedicated workforce trained in professional and safe construction techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-off-white rounded-2xl p-6 border border-neutral-200/40">
                <h3 className="font-bold text-charcoal mb-4 flex items-center gap-2"><Building size={18} className="text-gold"/> At a Glance</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-neutral-500">Incorporated</span><span className="font-semibold text-charcoal">January 2024</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Ownership</span><span className="font-semibold text-charcoal">100% Ghanaian</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Head Office</span><span className="font-semibold text-charcoal text-right">Abelemkpe, Accra<br/>GA 135 6916</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Website</span><a href={COMPANY.websiteUrl} className="font-semibold text-gold hover:underline">{COMPANY.website}</a></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Email</span><span className="font-semibold text-charcoal text-xs">{COMPANY.email}</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Phone</span><span className="font-semibold text-charcoal">{COMPANY.phoneFormatted}</span></div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {CERTIFICATES.map((c) => (
                    <div key={c.title} className="bg-white rounded-xl p-3 border border-neutral-200/60">
                      <div className="flex items-center gap-2 mb-1"><ShieldCheck size={14} className="text-gold"/><span className="text-xs font-bold text-charcoal leading-tight">{c.title}</span></div>
                      <p className="text-[11px] text-neutral-500 leading-tight">{c.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Mission & Vision */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-neutral-200/60"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 text-gold">
                <Target size={26} strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Our Mission
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                To address Ghana&apos;s chronic housing shortage — especially for nurses, doctors, teachers and security personnel — through a social housing blueprint, while delivering sustainable, culturally-tailored contemporary communities with premium amenities at affordable cost.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-neutral-200/60"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 text-gold">
                <Eye size={26} strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Our Vision
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                To transform Ghana&apos;s housing landscape — paving the way for a brighter future where essential public-sector workers and middle-to-high-income earners access decent housing, fostering community development and social equity.
              </p>
            </motion.div>
          </div>

          {/* Social Housing & Stakeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-charcoal-dark rounded-2xl p-8 text-white"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6 text-gold">
                <Users size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3">Blueprint for Social Housing</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Targeting essential public-sector workers — nurses, doctors, teachers, and security personnel — advocating for improved living conditions and community development. Collaborating with government bodies, NGOs and stakeholders; tailoring solutions; facilitating home ownership initiatives.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-neutral-200/60"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 text-gold">
                <Award size={26} />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Modern & Sustainable Communities</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">
                Contemporary architectural style with functionality and comfort. Premium amenities — parks, playgrounds, recreational facilities — ensuring high quality of life without exceeding budget. Culturally tailored for Ghana&apos;s diverse needs, promoting inclusivity and accessibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            tag="Our Journey"
            title="Company Timeline"
            description="From incorporation in January 2024 to nationwide solutions delivery."
          />

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-px" />

            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year + item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gold border-4 border-white -translate-x-1.5 mt-1.5 z-10" />
                <div className="ml-14 md:ml-0 md:w-1/2 bg-off-white rounded-2xl p-6 border border-neutral-200/40">
                  <div className="inline-block bg-gold/10 text-gold text-xs font-bold px-3 py-1 rounded-full mb-3">
                    <Calendar size={12} className="inline mr-1" />
                    {item.year}
                  </div>
                  <h4 className="text-charcoal font-bold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CoreValues />

      {/* Board & Management */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="Our Team"
            title="Board & Management"
            description="Meet the experienced professionals leading Nightingale Avenue Construction in delivering housing and glazing solutions."
          />
          <p className="text-center text-sm text-neutral-500 max-w-3xl mx-auto -mt-8 mb-10">
            The board hires the CEO/Managing Director and assesses overall strategy; Chair and Vice-Chair lead board officers, with a Board Secretary focused on specific activities — filled by non-board members.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/60 card-hover group"
              >
                <div className="h-28 bg-gradient-to-br from-charcoal-dark to-charcoal relative overflow-hidden flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center border border-gold/20">
                    <span className="text-gold text-lg font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0,3)}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-charcoal font-bold text-sm mb-1 group-hover:text-gold transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-gold text-xs font-semibold mb-1">
                    {member.position}
                  </p>
                  <p className="text-neutral-400 text-[11px] mb-2">{member.experience} • {member.qualification}</p>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-3">
                    {member.bio}
                  </p>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-gold transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
