"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, User, Clock, ArrowRight, X } from "lucide-react";
import CTASection from "@/components/CTASection";
import { DotGrid, BlueprintCorner, GrainOverlay, TopoLines } from "@/components/SectionTexture";
import { PROJECTS } from "@/lib/data";
import type { ProjectItem } from "@/lib/data";

const CATEGORIES = ["All", "Construction", "Glass Solutions", "Infrastructure", "Procurement"];

const CATEGORY_STYLE: Record<string, string> = {
  Construction: "bg-charcoal text-white",
  "Glass Solutions": "bg-gold text-white",
  Infrastructure: "bg-[#1A3A4A] text-white",
  Procurement: "bg-emerald-900 text-white",
};

function ProjectModal({ project, onClose }: { project: ProjectItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-charcoal-dark/70 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.98, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98, y: 10 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="bg-white rounded-[20px] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-premium-lg border border-charcoal/5" onClick={(e) => e.stopPropagation()}>
        <div className="aspect-[16/9] bg-cream relative rounded-t-[20px] overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-charcoal-dark/10 to-transparent" />
          <div className={`absolute top-4 left-4 ${CATEGORY_STYLE[project.category] || "bg-charcoal text-white"} px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide shadow-soft`}>{project.category}</div>
          <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur rounded-full flex items-center justify-center text-charcoal hover:bg-white transition-colors shadow-soft border border-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
            <X size={16} />
          </button>
        </div>
        <div className="p-6 md:p-8">
          <h2 className="font-serif font-medium text-charcoal text-[22px] md:text-[26px] leading-tight">{project.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 mb-6">
            <div className="flex items-center gap-2 text-[13px] text-charcoal/70"><User size={12} className="text-gold shrink-0" />{project.client}</div>
            <div className="flex items-center gap-2 text-[13px] text-charcoal/70"><MapPin size={12} className="text-gold shrink-0" />{project.location}</div>
            <div className="flex items-center gap-2 text-[13px] text-charcoal/70"><Calendar size={12} className="text-gold shrink-0" />{project.completionYear}</div>
            <div className="flex items-center gap-2 text-[13px] text-charcoal/70"><Clock size={12} className="text-gold shrink-0" />{project.duration}</div>
          </div>
          <p className="text-charcoal/65 text-[14.5px] leading-relaxed">{project.fullDescription}</p>
          <div className="mt-6">
            <h3 className="text-charcoal font-semibold text-[11px] tracking-[0.14em] uppercase mb-3">Scope of Work</h3>
            <div className="flex flex-wrap gap-2">
              {project.scope.map((item) => (
                <span key={item} className="bg-cream text-charcoal text-xs font-medium px-3 py-1.5 rounded-full border border-charcoal/5">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero — with plan on right */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal overflow-hidden isolate">
        <div className="hidden lg:block absolute right-0 bottom-0 w-[620px] opacity-[0.14] pointer-events-none select-none" aria-hidden>
          <div className="relative w-full aspect-[1.4/1]">
            <Image src="/plan.webp" alt="" fill className="object-contain grayscale invert brightness-[1.6] contrast-125" sizes="560px" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/50 via-charcoal to-charcoal-dark" aria-hidden />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(201,169,106,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,106,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px" }} aria-hidden />
        <BlueprintCorner className="-top-16 -right-16 hidden lg:block opacity-40" />
        <GrainOverlay opacity={0.025} />
        <div className="absolute top-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" aria-hidden />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-gold/60 hidden sm:block" aria-hidden />
              <span className="font-archivo font-semibold text-gold text-[11px] tracking-[0.16em] uppercase">Our Work</span>
            </div>
            <h1 className="font-serif font-light text-[38px] md:text-[50px] lg:text-[56px] leading-[0.9] tracking-tight text-white">Our projects</h1>
            <p className="mt-4 text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-xl font-medium">From 500 affordable units in Accra to Kumasi sustainable community, glass installations and PPA-registered procurement — a showcase of delivery.</p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Projects — with textures, light cards */}
      <section className="section-padding bg-white relative overflow-hidden">
        <DotGrid opacity={0.025} />
        <TopoLines opacity={0.035} />
        <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" aria-hidden />
        <div className="relative max-w-[1440px] mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${activeCategory === cat ? "bg-charcoal text-white shadow-soft" : "bg-cream text-charcoal/70 hover:text-charcoal border border-charcoal/5 hover:bg-white"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedProject(project)}
                  onMouseMove={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    const r = el.getBoundingClientRect();
                    const ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
                    const rx = (0.5 - (e.clientY - r.top) / r.height) * 5;
                    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
                  }}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "")}
                  className="group bg-white rounded-[20px] overflow-hidden border border-charcoal/5 shadow-soft cursor-pointer will-change-transform hover:shadow-premium transition-shadow duration-300"
                  style={{ transformStyle: "preserve-3d" } as React.CSSProperties}
                >
                  <div className="aspect-[4/3] bg-cream relative overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                    <div className={`absolute top-4 left-4 z-20 ${CATEGORY_STYLE[project.category] || "bg-charcoal text-white"} px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide shadow-soft`}>{project.category}</div>
                    <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center text-charcoal opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 shadow-soft border border-charcoal/5">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-medium text-charcoal text-[17px] leading-tight group-hover:text-gold transition-colors line-clamp-2">{project.title}</h3>
                    <div className="flex items-center gap-1.5 text-charcoal/45 text-xs mt-2"><MapPin size={12} className="text-gold" />{project.location}</div>
                    <p className="text-charcoal/70 text-[13.5px] leading-relaxed mt-2 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-charcoal/5">
                      <span className="text-charcoal/30 text-[11px] font-semibold tracking-[0.14em] uppercase">{project.completionYear}</span>
                      <span className="text-charcoal text-sm font-medium inline-flex items-center gap-1 group-hover:text-gold group-hover:gap-1.5 transition-all">View <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTASection />

      <AnimatePresence>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
    </>
  );
}
