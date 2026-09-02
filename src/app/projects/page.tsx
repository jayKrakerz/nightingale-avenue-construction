"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  User,
  Clock,
  ArrowRight,
  X,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import { PROJECTS } from "@/lib/data";
import type { ProjectItem } from "@/lib/data";

const CATEGORIES = [
  "All",
  "Construction",
  "Glass Solutions",
  "Infrastructure",
  "Procurement",
];

const CATEGORY_COLORS: Record<string, string> = {
  Construction: "bg-blue-500/90",
  "Glass Solutions": "bg-cyan-500/90",
  Infrastructure: "bg-orange-500/90",
  Procurement: "bg-emerald-500/90",
};

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-charcoal-dark/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-[16/9] bg-neutral-200 relative rounded-t-2xl overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-charcoal-dark/20 to-transparent" />
          <div
            className={`absolute top-4 left-4 ${CATEGORY_COLORS[project.category] || "bg-gold/90"} px-3 py-1 rounded-full shadow-soft`}
          >
            <span className="text-white text-xs font-semibold">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-charcoal hover:bg-white transition-colors shadow-soft"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
            {project.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <User size={14} className="text-gold shrink-0" />
              {project.client}
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <MapPin size={14} className="text-gold shrink-0" />
              {project.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <Calendar size={14} className="text-gold shrink-0" />
              {project.completionYear}
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <Clock size={14} className="text-gold shrink-0" />
              {project.duration}
            </div>
          </div>

          <p className="text-neutral-600 leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          <div>
            <h3 className="text-charcoal font-bold text-sm uppercase tracking-wider mb-3">
              Scope of Work
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.scope.map((item) => (
                <span
                  key={item}
                  className="bg-off-white text-charcoal text-xs font-medium px-3 py-1.5 rounded-full border border-neutral-200/60"
                >
                  {item}
                </span>
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
  const [selectedProject, setSelectedProject] =
    useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-dark overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Our Projects
            </h1>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed">
              From 500 affordable units in Accra to Kumasi sustainable community, glass installations and PPA-registered procurement — a showcase of Nightingale Avenue Construction delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Projects */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold text-charcoal-dark shadow-lg shadow-gold/20"
                    : "bg-off-white text-neutral-500 hover:bg-neutral-200 border border-neutral-200/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-charcoal rounded-2xl overflow-hidden cursor-pointer card-hover"
                >
                  <div className="aspect-[4/3] bg-neutral-200 relative overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-transparent to-transparent z-10" />
                    <div
                      className={`absolute top-4 left-4 z-20 ${CATEGORY_COLORS[project.category] || "bg-gold/90"} px-3 py-1 rounded-full shadow-soft`}
                    >
                      <span className="text-white text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 relative z-20">
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-neutral-400 text-sm mb-3">
                      <MapPin size={14} className="text-gold" />
                      {project.location}
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold text-xs font-medium">
                        {project.completionYear}
                      </span>
                      <span className="text-gold text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Project
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTASection />

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
