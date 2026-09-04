"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/faqs";
import type { FAQItem } from "@/lib/faqs";

export default function FAQAccordion({ items = FAQS, limit }: { items?: FAQItem[]; limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const list = limit ? items.slice(0, limit) : items;
  return (
    <div className="divide-y divide-charcoal/10 border border-charcoal/10 rounded-[6px] bg-white overflow-hidden">
      {list.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="group">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-4 text-left p-5 md:p-6 hover:bg-cream/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
            >
              <span className="font-serif font-medium text-charcoal text-[15px] leading-tight pr-2">{item.q}</span>
              <span className={`shrink-0 w-8 h-8 rounded-[4px] border flex items-center justify-center transition-colors ${isOpen ? "bg-charcoal text-white border-charcoal" : "bg-white text-charcoal border-charcoal/10 group-hover:border-gold/20"}`}>
                {isOpen ? <Minus size={12} /> : <Plus size={12} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-charcoal/70 text-[14px] leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
