"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/lib/data";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const CATEGORY_STYLE: Record<string, string> = {
  Construction: "bg-charcoal text-white",
  "Glass Solutions": "bg-gold text-charcoal",
  Infrastructure: "bg-[#1A3A4A] text-white",
  Procurement: "bg-emerald-900 text-white",
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-[6px] overflow-hidden border border-charcoal/10 flex flex-col"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold z-20" aria-hidden />
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <Image src={project.image} alt={project.title} fill className="object-cover grayscale-[0.06] group-hover:scale-[1.02] transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px" />
        <div className="absolute inset-0 bg-charcoal/5" aria-hidden />
        <div className={`absolute top-3 left-3 z-20 ${CATEGORY_STYLE[project.category] || "bg-charcoal text-white"} px-2.5 py-1 rounded-[4px] text-[10px] font-bold tracking-wide`}>{project.category}</div>
        <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-[4px] bg-white border border-charcoal/10 flex items-center justify-center text-charcoal opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={12} strokeWidth={2.2} />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-archivo font-extrabold text-[14px] leading-tight tracking-[-0.01em] text-charcoal uppercase line-clamp-2">{project.title}</h3>
        <div className="flex items-center gap-1.5 text-charcoal/40 text-[11px] font-semibold tracking-wide mt-1.5">
          <MapPin size={11} className="text-gold" /> {project.location} <span className="mx-1">•</span> {project.completionYear}
        </div>
        <p className="text-[13px] leading-[1.55] text-charcoal/60 line-clamp-2 mt-2.5 flex-1">{project.description}</p>
        <div className="h-px bg-charcoal/10 my-3" />
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-[0.08em] uppercase font-bold text-charcoal/30 truncate pr-2">{project.client}</span>
          <Link href="/projects" className="text-[11px] font-bold tracking-[0.06em] uppercase text-charcoal group-hover:text-gold inline-flex items-center gap-1 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-[4px] px-1">
            View <ArrowUpRight size={11} strokeWidth={2.2} className="group-hover:translate-x-0.5 transition-transform" aria-hidden />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
