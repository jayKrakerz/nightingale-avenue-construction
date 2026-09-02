"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { CORE_VALUES } from "@/lib/data";

interface CoreValuesProps {
  showTitle?: boolean;
}

export default function CoreValues({ showTitle = true }: CoreValuesProps) {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal">
              Core Values
            </h2>
            <p className="mt-4 text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
              The principles that guide every project we undertake and every
              relationship we build.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-off-white rounded-2xl p-6 border border-neutral-200/40 card-hover group"
            >
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle
                  size={20}
                  className="text-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-charcoal font-bold text-lg">
                  {value.title}
                </h3>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed pl-8">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
