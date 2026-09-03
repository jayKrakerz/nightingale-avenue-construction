import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark text-white/70 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 pt-14 pb-8">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center overflow-hidden">
                <Image src="/logo.jpeg" alt="Nightingale Avenue Construction Logo" width={44} height={44} className="object-contain p-1" />
              </div>
              <div>
                <span className="font-archivo font-extrabold text-white text-[16px] tracking-[-0.01em] uppercase leading-none block">Nightingale Avenue</span>
                <span className="text-gold text-[10px] tracking-[0.14em] uppercase font-bold">Construction — NAC</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/70 max-w-md mb-6 font-medium">
              Wholly owned Ghanaian solutions provider since Jan 2024. Construction & affordable housing, glass innovation, procurement & logistics, renewable energy and IT.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-[4px] bg-white/5 border border-white/10 text-white/70">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> PPA Registered • Tax & SSNIT Compliant
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Navigate</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1.5 group">
                    {l.label} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Solutions</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0,5).map((s) => (
                <li key={s.slug}><Link href="/services" className="text-sm text-white/70 hover:text-white transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Abelemkpe, Accra</h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3 text-sm text-white/70"><MapPin size={16} className="text-gold mt-0.5 shrink-0" />{COMPANY.address}</li>
              <li className="flex gap-3 text-sm"><Phone size={16} className="text-gold shrink-0" /><a href={`tel:${COMPANY.phone}`} className="text-white/70 hover:text-white">{COMPANY.phoneFormatted} / {COMPANY.phone2Formatted}</a></li>
              <li className="flex gap-3 text-sm"><Mail size={16} className="text-gold shrink-0" /><a href={`mailto:${COMPANY.email}`} className="text-white/70 hover:text-white break-all">{COMPANY.email}</a></li>
            </ul>
            <div className="flex gap-2 mt-6">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-charcoal hover:border-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                  <Icon size={14} aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} {COMPANY.fullName}. All Rights Reserved. — Crafted in Accra</p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
            <a href={COMPANY.websiteUrl} target="_blank" className="hover:text-gold">{COMPANY.website}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
