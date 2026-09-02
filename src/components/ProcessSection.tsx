"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" />
      <div className="max-w-[1440px] mx-auto">
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
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative bg-cream rounded-[20px] p-7 md:p-8 border border-charcoal/5 overflow-hidden group hover:bg-white hover:border-gold/15 transition-all duration-500"
              >
                <span className="absolute -top-1 -right-2 font-serif text-[64px] font-light leading-none text-charcoal/[0.04] group-hover:text-gold/[0.07] transition-colors">
                  {step.number}
                </span>
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-white border border-charcoal/5 flex items-center justify-center text-charcoal group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-all duration-500 mb-5 shadow-soft">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>
                  <h3 className="font-serif text-[17px] font-medium text-charcoal mb-2">{step.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-charcoal/60">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
