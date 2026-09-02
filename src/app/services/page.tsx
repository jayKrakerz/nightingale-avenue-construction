"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-dark overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Our Solutions — 5 Pillars
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Solutions Built{' '}
              <span className="text-gradient">Around Ghana&apos;s Needs</span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed">
              Construction & affordable housing, frameless & aluminium glass, procurement & logistics (PPA-registered), renewable energy and IT — tailored, transparent and technology-driven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      {SERVICES.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={service.slug}
            className={`section-padding ${isEven ? "bg-white" : "bg-off-white"}`}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={!isEven ? "lg:col-start-2" : ""}
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 text-gold">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal leading-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-neutral-500 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-neutral-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal-dark px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:gap-3"
                  >
                    Book a Consultation
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <div className="aspect-[4/3] bg-neutral-200 rounded-2xl overflow-hidden relative">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 560px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-charcoal shadow-soft flex items-center gap-2">
                      <Icon size={14} className="text-gold" /> {service.title}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
