"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { CORE_VALUES } from "@/lib/data";
import { DotGrid } from "./SectionTexture";
import SectionHeading from "./SectionHeading";

export default function CoreValues({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <DotGrid opacity={0.025} />
      <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" aria-hidden />
      <div className="relative max-w-[1440px] mx-auto">
        {showTitle && (
          <SectionHeading tag="Our Values" title="Core Values" description="The principles that guide every project we undertake and every relationship we build." />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CORE_VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="bg-cream rounded-[20px] p-6 md:p-7 border border-charcoal/5 shadow-soft group hover:bg-white hover:border-gold/15 transition-colors duration-300"
            >
              <div className="flex items-start gap-3 mb-2.5">
                <CheckCircle size={18} className="text-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform" aria-hidden />
                <h3 className="font-serif font-medium text-charcoal text-[16px] leading-tight">{value.title}</h3>
              </div>
              <p className="text-charcoal/70 text-[13.5px] leading-relaxed pl-7">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
