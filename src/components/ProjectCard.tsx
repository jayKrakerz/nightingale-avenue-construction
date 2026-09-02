"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/lib/data";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const CATEGORY_STYLE: Record<string, string> = {
  Construction: "bg-charcoal text-white",
  "Glass Solutions": "bg-gold text-white",
  Infrastructure: "bg-[#1A3A4A] text-white",
  Procurement: "bg-emerald-900 text-white",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative bg-white rounded-[24px] overflow-hidden border border-charcoal/5 card-premium flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
        <div className={`absolute top-4 left-4 z-20 ${CATEGORY_STYLE[project.category] || "bg-charcoal text-white"} px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide shadow-soft`}>
          {project.category}
        </div>
        <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center text-charcoal opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 shadow-soft">
          <ArrowUpRight size={14} />
        </div>
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="font-serif text-[18px] font-medium leading-tight text-charcoal mb-2 group-hover:text-gold transition-colors line-clamp-2">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 text-charcoal/45 text-xs mb-3">
          <MapPin size={12} className="text-gold" />
          {project.location} <span className="mx-1">•</span> {project.completionYear}
        </div>
        <p className="text-[13.5px] leading-relaxed text-charcoal/60 line-clamp-2 mb-5 flex-1">
          {project.description}
        </p>
        <div className="h-px bg-charcoal/5 mb-4" />
        <div className="flex items-center justify-between">
          <span className="text-[11px] tracking-widest uppercase font-semibold text-charcoal/30">{project.client}</span>
          <span className="text-sm font-medium text-charcoal group-hover:text-gold inline-flex items-center gap-1">
            View <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
