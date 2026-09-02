"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Top hairline */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent z-[60]" />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-charcoal/5 shadow-soft py-3"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className={`relative w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-500 ${scrolled ? "bg-charcoal shadow-soft" : "bg-white shadow-premium"}`}>
              <Image
                src="/logo.jpeg"
                alt="Nightingale Avenue Construction Logo"
                width={44}
                height={44}
                className="object-contain p-1.5"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className={`font-serif font-semibold text-[17px] tracking-tight leading-none block transition-colors ${scrolled ? "text-charcoal" : "text-white"}`}>
                Nightingale Avenue
              </span>
              <span className={`text-[10px] font-medium tracking-[0.22em] uppercase transition-colors ${scrolled ? "text-charcoal/60" : "text-white/70"}`}>
                Limited — NAC
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${active ? (scrolled ? "bg-charcoal text-white" : "bg-white text-charcoal") : scrolled ? "text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5" : "text-white/80 hover:text-white hover:bg-white/10"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${COMPANY.phone}`} className={`hidden xl:flex items-center gap-2 text-xs font-medium transition-colors ${scrolled ? "text-charcoal/60" : "text-white/70"}`}>
              <Phone size={14} className="text-gold" /> {COMPANY.phoneFormatted}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-charcoal-dark text-white hover:bg-charcoal px-6 py-3 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 hover:shadow-premium hover:gap-3 group/btn"
            >
              Get a Quote
              <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${scrolled ? "bg-charcoal text-white" : "bg-white text-charcoal"} shadow-soft`}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden fixed inset-0 bg-cream transition-all duration-500 overflow-y-auto overscroll-contain ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
          style={{ height: "100dvh" }}
        >
          <div className="flex flex-col min-h-[100dvh] px-5 sm:px-6 pt-20 pb-6 safe-pb">
            <div className="flex-1">
              <div className="flex flex-col gap-0 mt-6">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`group flex items-center justify-between py-4 border-b border-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg px-1 ${active ? "text-gold" : ""}`}
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <span className={`font-serif text-[28px] sm:text-3xl font-light tracking-tight ${active ? "text-gold" : "text-charcoal group-hover:text-gold"} transition-colors`}>{link.label}</span>
                      <span className="text-xs font-medium tracking-widest text-charcoal/30 group-hover:text-gold shrink-0 ml-3">0{i+1}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <div className="bg-white rounded-2xl p-4 border border-charcoal/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0"><Phone size={18} /></div>
                <div className="min-w-0">
                  <p className="text-[11px] tracking-widest uppercase text-charcoal/40 font-medium">Call us</p>
                  <p className="font-semibold text-charcoal text-sm leading-tight truncate">{COMPANY.phoneFormatted} • {COMPANY.phone2Formatted}</p>
                </div>
              </div>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 bg-charcoal text-white w-full py-4 rounded-full font-semibold text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center justify-center gap-2 text-charcoal/60 text-sm py-2">Or call {COMPANY.phoneFormatted}</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
