"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.86)"]);
  const headerBlur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(16px)"]);
  const headerShadow = useTransform(scrollY, [0, 80], ["0 0 0 rgba(0,0,0,0)", "0 8px 32px rgba(0,0,0,0.06)"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // close on escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // close drawer on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent z-[61] pointer-events-none" />
      <motion.header
        style={{ backgroundColor: headerBg as unknown as string, backdropFilter: headerBlur as unknown as string, WebkitBackdropFilter: headerBlur as unknown as string, boxShadow: headerShadow as unknown as string }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-charcoal/5 py-3" : "border-transparent py-5"}`}
      >
        <nav className="max-w-[1440px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xl">
            <div
              className={`relative w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center transition-colors duration-300 border ${scrolled ? "bg-white border-charcoal/5 shadow-soft" : "bg-white border-white/15 shadow-soft"}`}
            >
              <Image src="/logo.jpeg" alt="Nightingale Avenue Construction Logo" width={44} height={44} className="object-contain p-1.5" priority />
            </div>
            <div className="hidden sm:block">
              <span className={`font-archivo font-extrabold text-[15px] tracking-[-0.01em] leading-none uppercase block transition-colors ${scrolled ? "text-charcoal" : "text-white"}`}>Nightingale Avenue</span>
              <span className={`text-[10px] font-bold tracking-[0.14em] uppercase transition-colors ${scrolled ? "text-charcoal/70" : "text-white/70"}`}>Limited — NAC</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${active ? (scrolled ? "bg-charcoal text-white" : "bg-white text-charcoal") : scrolled ? "text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5" : "text-white/85 hover:text-white hover:bg-white/10"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${COMPANY.phone}`} className={`hidden xl:flex items-center gap-2 text-xs font-medium transition-colors ${scrolled ? "text-charcoal/70 hover:text-charcoal" : "text-white/70 hover:text-white"}`}>
              <Phone size={14} className="text-gold" aria-hidden /> {COMPANY.phoneFormatted}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-charcoal text-white hover:bg-charcoal-dark px-6 py-3 rounded-full text-[13px] font-semibold tracking-wide transition-colors duration-200 hover:shadow-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Get a Quote <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold shadow-soft ${scrolled ? "bg-charcoal text-white" : "bg-white text-charcoal"}`}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer — outside header flow, covers viewport */}
      <div
        id="mobile-nav"
        aria-hidden={!isOpen}
        className={`lg:hidden fixed inset-0 z-40 bg-cream transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        style={{ paddingTop: "64px" }}
      >
        <div className="h-[100dvh] overflow-y-auto overscroll-contain flex flex-col px-6 pt-6 pb-8">
          <div className="flex-1">
            <nav className="flex flex-col mt-2" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center justify-between py-4 border-b border-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg px-1 -mx-1 ${active ? "text-gold" : "text-charcoal"}`}
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <span className={`font-archivo font-extrabold text-[26px] tracking-[-0.02em] uppercase leading-none transition-colors ${active ? "text-gold" : "text-charcoal group-hover:text-gold"}`}>{link.label}</span>
                    <span className="text-xs font-medium tracking-widest text-charcoal/25 group-hover:text-gold shrink-0 ml-3">0{i + 1}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="space-y-3 mt-8">
            <a href={`tel:${COMPANY.phone}`} className="bg-white rounded-2xl p-4 border border-charcoal/5 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
              <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Phone size={18} aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] tracking-widest uppercase text-charcoal/40 font-medium">Call us</p>
                <p className="font-semibold text-charcoal text-sm leading-tight truncate">
                  {COMPANY.phoneFormatted} • {COMPANY.phone2Formatted}
                </p>
              </div>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-charcoal text-white w-full py-4 rounded-full font-semibold text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors hover:bg-charcoal-dark"
            >
              Get a Quote <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      {/* backdrop */}
      <button
        aria-label="Close menu backdrop"
        onClick={() => setIsOpen(false)}
        className={`lg:hidden fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-30 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        tabIndex={-1}
      />
    </>
  );
}
