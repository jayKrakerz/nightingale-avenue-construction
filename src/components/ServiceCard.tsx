"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "@/lib/data";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  detailed?: boolean;
}

export default function ServiceCard({ service, index, detailed = false }: ServiceCardProps) {
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-[6px] border border-charcoal/10 overflow-hidden flex flex-col hover:border-charcoal/15 transition-colors"
    >
      <div className="relative h-48 overflow-hidden bg-cream">
        <Image src={service.image} alt={service.title} fill className="object-cover grayscale-[0.08] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" />
        <div className="absolute inset-0 bg-charcoal/10" aria-hidden />
        <div className="absolute top-3 left-3 w-8 h-8 rounded-[4px] bg-white border border-charcoal/10 flex items-center justify-center text-charcoal">
          <Icon size={15} strokeWidth={1.4} />
        </div>
        <span className="absolute top-3 right-3 bg-charcoal text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-[4px]">{num}</span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif font-medium text-[18px] leading-tight text-charcoal">{service.title}</h3>
        <div className="mt-2 h-px w-8 bg-gold" aria-hidden />
        <p className="text-[14px] leading-[1.65] text-charcoal/70 mt-3 line-clamp-3 min-h-[62px]">{detailed ? service.description : service.shortDescription}</p>

        {detailed ? (
          <ul className="space-y-2 mt-4 mb-1">
            {service.features.slice(0, 5).map((feature) => (
              <li key={feature} className="flex gap-2 text-[12px] leading-relaxed text-charcoal/70">
                <span className="mt-[7px] w-1 h-1 bg-gold shrink-0 rounded-[1px]" aria-hidden /> {feature}
              </li>
            ))}
          </ul>
        ) : (
          <Link href="/services" className="mt-auto flex items-center justify-between pt-4 border-t border-charcoal/10 group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-[4px] -mx-1 px-1">
            <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-charcoal group-hover:text-gold transition-colors">Explore</span>
            <span className="w-8 h-8 rounded-[4px] bg-charcoal text-white flex items-center justify-center group-hover:bg-gold transition-colors">
              <ArrowUpRight size={12} strokeWidth={2.2} />
            </span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
