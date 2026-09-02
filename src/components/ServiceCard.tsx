"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "@/lib/data";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  detailed?: boolean;
}

export default function ServiceCard({
  service,
  index,
  detailed = false,
}: ServiceCardProps) {
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="group relative bg-white rounded-[24px] border border-charcoal/5 overflow-hidden card-premium flex flex-col"
    >
      {/* HD Image header */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent" />
        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur border border-white/40 flex items-center justify-center text-charcoal shadow-soft">
          <Icon size={18} strokeWidth={1.6} />
        </div>
        <span className="absolute top-4 right-4 bg-charcoal text-white text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full">
          {num}
        </span>
      </div>

      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-serif text-[19px] font-medium leading-tight text-charcoal mb-2 pr-2">
          {service.title}
        </h3>
        <p className="text-[13.5px] leading-relaxed text-charcoal/60 mb-5 line-clamp-3 min-h-[60px]">
          {detailed ? service.description : service.shortDescription}
        </p>

        {detailed ? (
          <ul className="space-y-2.5 mb-2">
            {service.features.slice(0, 5).map((feature) => (
              <li key={feature} className="flex gap-2.5 text-[13px] leading-relaxed text-charcoal/70">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-auto flex items-center justify-between pt-5 border-t border-charcoal/5">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-charcoal/40 group-hover:text-charcoal transition-colors">
              Explore
            </span>
            <span className="w-9 h-9 rounded-full bg-charcoal text-white flex items-center justify-center group-hover:bg-gold transition-colors">
              <ArrowUpRight size={14} />
            </span>
          </div>
        )}
      </div>
      {/* Gold hairline */}
      <div className="absolute bottom-0 left-7 right-7 h-px bg-gold/0 group-hover:bg-gold/30 transition-colors duration-500" />
    </motion.div>
  );
}
