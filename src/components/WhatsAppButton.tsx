"use client";

import Image from "next/image";
import { COMPANY } from "@/lib/data";

export default function WhatsAppButton() {
  const url = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      <span className="hidden md:inline-flex bg-white text-charcoal text-xs font-semibold px-3 py-2 rounded-full shadow-soft border border-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity">
        Chat on WhatsApp
      </span>
      <span className="w-14 h-14 rounded-full bg-white border border-charcoal/5 shadow-premium flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden p-2.5">
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-full h-full object-contain"
          priority={false}
        />
      </span>
    </a>
  );
}
