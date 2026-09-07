"use client";

import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { COMPANY } from "@/lib/data";

interface ContactMapProps {
  heightClass?: string;
}

export default function ContactMap({ heightClass = "h-[280px]" }: ContactMapProps) {
  const query = encodeURIComponent(COMPANY.address);
  // Google Maps embed without API key - uses maps.google.com output=embed
  const embedSrc = `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <div className={`rounded-[20px] overflow-hidden border border-charcoal/5 relative bg-cream shadow-soft ${heightClass} group`}>
      <iframe
        title="Nightingale Avenue Construction - Map - Spintex, Baatsona, Accra"
        src={embedSrc}
        className="absolute inset-0 w-full h-full border-0 grayscale-[0.15] contrast-[1.02]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {/* subtle texture overlay - not blocking interaction */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_1px_rgba(28,33,40,0.04)]" aria-hidden />
      {/* bottom bar */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
        <div className="bg-white rounded-full px-3.5 py-2 text-xs font-semibold text-charcoal shadow-soft flex items-center gap-2 border border-charcoal/5">
          <MapPin size={12} className="text-gold shrink-0" aria-hidden /> Spintex • Baatsona
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal text-white rounded-full px-3.5 py-2 text-xs font-semibold flex items-center gap-1.5 hover:bg-charcoal-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <ExternalLink size={12} aria-hidden /> Open
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-white rounded-full px-3.5 py-2 text-xs font-semibold flex items-center gap-1.5 hover:bg-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Navigation size={12} aria-hidden /> Directions
          </a>
        </div>
      </div>
      {/* mobile secondary action - stacked */}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="sm:hidden absolute top-3 right-3 bg-white text-charcoal rounded-full px-3 py-1.5 text-xs font-semibold shadow-soft border border-charcoal/5 flex items-center gap-1.5"
      >
        <Navigation size={12} className="text-gold" aria-hidden /> Directions
      </a>
    </div>
  );
}
