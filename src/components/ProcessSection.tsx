"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { DotGrid, BlueprintCorner } from "./SectionTexture";

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <BlueprintCorner className="top-8 -left-24 hidden xl:block opacity-60" />
      <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" />
      <div className="relative max-w-[1440px] mx-auto">
        <SectionHeading
          tag="Our Process"
          title="Precision from concept to handover"
          description="A proven six-step process ensuring every project is delivered with quality, transparency and care."
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5">
          {/* connecting line desktop */}
          <div className="hidden lg:block absolute top-[72px] left-[8%] right-[8%] h-px bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0" />
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-[6px] p-6 border border-charcoal/10 overflow-hidden group hover:border-gold/20 transition-colors"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold/60 group-hover:bg-gold transition-colors" aria-hidden />
                <span className="absolute -top-1 -right-1 font-archivo font-extrabold text-[48px] leading-none text-charcoal/[0.04]">{step.number}</span>
                <div className="relative">
                  <div className="w-10 h-10 rounded-[4px] bg-charcoal flex items-center justify-center text-white mb-4">
                    <Icon size={16} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-serif font-medium text-[15px] text-charcoal mb-1.5">{step.title}</h3>
                  <p className="text-[13px] leading-relaxed text-charcoal/70">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
