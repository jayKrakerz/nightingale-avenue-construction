"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  items: (string | ReactNode)[];
  speed?: number;
  reverse?: boolean;
  variant?: "light" | "dark" | "gold" | "cream" | "subtle";
  pauseOnHover?: boolean;
  separator?: ReactNode;
}

export default function Marquee({
  items,
  speed = 42,
  reverse = false,
  variant = "subtle",
  pauseOnHover = true,
  separator = <span className="mx-5 text-gold/40">•</span>,
}: MarqueeProps) {
  const bg =
    variant === "dark"
      ? "bg-charcoal-dark text-white/80 border-white/5"
      : variant === "gold"
        ? "bg-gold text-charcoal border-gold-dark/10"
        : variant === "cream"
          ? "bg-cream text-charcoal/70 border-charcoal/5"
          : variant === "subtle"
            ? "bg-cream text-charcoal/70 border-charcoal/10"
            : "bg-white text-charcoal/70 border-charcoal/5";

  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden border-y ${bg} ${pauseOnHover ? "group/marquee" : ""} py-3`}>
      <div
        className="flex w-max will-change-transform marquee-track"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        <style>{`.group\\/marquee:hover .marquee-track { animation-play-state: paused !important; } @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none !important; transform: none !important; } }`}</style>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase whitespace-nowrap">
              {typeof item === "string" ? item : item}
            </span>
            <span className="shrink-0 flex items-center">{separator}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </div>
  );
}

export function TrustMarquee() {
  const items = [
    "PPA REGISTERED",
    "TAX CLEARANCE - ACT 915",
    "SSNIT CERTIFIED - ACT 766",
    "100% GHANAIAN OWNED",
    "EST. MAR 2020",
    "SPINTEX • ACCRA",
    "500+ UNITS BLUEPRINT",
  ];
  return <Marquee items={items} variant="subtle" speed={38} />;
}
