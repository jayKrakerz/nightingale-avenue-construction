"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BlueprintRevealProps {
  builtSrc?: string;
  initial?: number;
  heightClass?: string;
}

function BlueprintSVG() {
  return (
    <svg viewBox="0 0 1000 620" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architectural blueprint - NAC 500 units Accra">
      <defs>
        <pattern id="bp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7" />
        </pattern>
        <pattern id="bp-grid-minor" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="0.5" cy="0.5" r="0.4" fill="rgba(255,255,255,0.07)" />
        </pattern>
        <linearGradient id="bp-paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E3A5D" />
          <stop offset="100%" stopColor="#0A2F4D" />
        </linearGradient>
      </defs>

      {/* paper */}
      <rect width="1000" height="620" rx="18" fill="url(#bp-paper)" />
      <rect width="1000" height="620" rx="18" fill="url(#bp-grid-minor)" />
      <rect width="1000" height="620" rx="18" fill="url(#bp-grid)" />

      {/* outer border — blueprint sheet */}
      <rect x="10" y="10" width="980" height="600" rx="12" fill="none" stroke="rgba(255,255,255,0.95)" strokeWidth="1.8" />
      <rect x="18" y="18" width="964" height="584" rx="8" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.9" strokeDasharray="8 6" />

      {/* header band */}
      <g>
        <rect x="10" y="10" width="980" height="28" rx="12" fill="rgba(255,255,255,0.06)" />
        <rect x="10" y="22" width="980" height="16" fill="#0E3A5D" />
        <text x="24" y="28" fill="rgba(255,255,255,0.9)" fontSize="9" fontFamily="monospace" letterSpacing="3.5" fontWeight="700">NIGHTINGALE AVENUE CONSTRUCTION LTD — 69 MANGO ST • BLUE PLAZA • BAATSONA TOTAL • SPINTEX</text>
        <text x="920" y="28" fill="#C9A96A" fontSize="8" fontFamily="monospace" letterSpacing="2" fontWeight="700" textAnchor="end">SHEET 01 / 03</text>
      </g>

      {/* site boundary */}
      <rect x="54" y="64" width="640" height="420" fill="none" stroke="white" strokeWidth="1.4" strokeDasharray="10 6" rx="2" />
      <text x="58" y="76" fill="white" fontSize="7.5" fontFamily="monospace" letterSpacing="2">SITE BOUNDARY — 4.2 Ha</text>

      {/* roads */}
      <g stroke="rgba(255,255,255,0.55)" strokeWidth="0.9" fill="none">
        <path d="M54 420 L694 420" strokeDasharray="2 8" />
        <path d="M54 64 L54 484" />
        <path d="M694 64 L694 484" />
      </g>
      <text x="320" y="434" fill="rgba(255,255,255,0.65)" fontSize="7" fontFamily="monospace" letterSpacing="2" textAnchor="middle">ACCESS ROAD — 8.0m</text>

      {/* main blocks — 4 terraces */}
      {[
        { x: 88, y: 96, w: 138, h: 84 },
        { x: 246, y: 96, w: 138, h: 84 },
        { x: 404, y: 96, w: 138, h: 84 },
        { x: 562, y: 96, w: 100, h: 84 },
        { x: 88, y: 210, w: 138, h: 84 },
        { x: 246, y: 210, w: 138, h: 84 },
        { x: 404, y: 210, w: 138, h: 84 },
        { x: 562, y: 210, w: 100, h: 84 },
        { x: 88, y: 324, w: 138, h: 76 },
        { x: 246, y: 324, w: 138, h: 76 },
        { x: 404, y: 324, w: 138, h: 76 },
        { x: 562, y: 324, w: 100, h: 76 },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="rgba(255,255,255,0.04)" stroke="white" strokeWidth="1.2" />
          {/* interior walls */}
          <line x1={b.x + 26} y1={b.y} x2={b.x + 26} y2={b.y + b.h} stroke="white" strokeWidth="0.7" opacity="0.95" />
          <line x1={b.x} y1={b.y + 32} x2={b.x + b.w} y2={b.y + 32} stroke="white" strokeWidth="0.7" opacity="0.9" />
          {/* doors */}
          <path d={`M ${b.x + 18} ${b.y + 32} A 16 16 0 0 1 ${b.x + 32} ${b.y + 18}`} fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="0.7" />
          <path d={`M ${b.x + 74} ${b.y + b.h} A 16 16 0 0 0 ${b.x + 88} ${b.y + b.h - 14}`} fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="0.7" />
          {/* windows */}
          <line x1={b.x + 46} y1={b.y} x2={b.x + 78} y2={b.y} stroke="rgba(201,169,106,0.95)" strokeWidth="1.6" />
          <line x1={b.x + 96} y1={b.y} x2={b.x + 118} y2={b.y} stroke="rgba(201,169,106,0.95)" strokeWidth="1.6" />
          {/* room label */}
          <text x={b.x + b.w / 2} y={b.y + b.h / 2 - 2} fill="rgba(255,255,255,0.9)" fontSize="6.2" fontFamily="monospace" letterSpacing="1.2" textAnchor="middle" fontWeight="700">UNIT {String(i + 1).padStart(2, "0")}</text>
          <text x={b.x + b.w / 2} y={b.y + b.h / 2 + 8} fill="rgba(255,255,255,0.5)" fontSize="5.5" fontFamily="monospace" letterSpacing="1" textAnchor="middle">2BR • 68m²</text>
        </g>
      ))}

      {/* central green / park */}
      <g>
        <rect x="88" y="414" width="574" height="58" rx="2" fill="none" stroke="rgba(201,169,106,0.9)" strokeWidth="1" strokeDasharray="6 4" />
        <text x="375" y="433" fill="rgba(201,169,106,0.95)" fontSize="7" fontFamily="monospace" letterSpacing="2" textAnchor="middle" fontWeight="700">COMMUNAL GREEN — PARK + PLAYGROUND</text>
        <g stroke="rgba(201,169,106,0.35)" strokeWidth="0.6" fill="none">
          <circle cx="150" cy="447" r="14" />
          <circle cx="380" cy="444" r="10" strokeDasharray="3 3" />
          <circle cx="560" cy="447" r="12" />
        </g>
        <text x="150" y="450" fill="rgba(255,255,255,0.5)" fontSize="5" fontFamily="monospace" textAnchor="middle">TREE</text>
      </g>

      {/* dimension lines — top */}
      <g stroke="white" strokeWidth="0.6" fill="none">
        <line x1="88" y1="54" x2="662" y2="54" />
        <line x1="88" y1="50" x2="88" y2="58" />
        <line x1="662" y1="50" x2="662" y2="58" />
        <line x1="88" y1="54" x2="88" y2="64" strokeDasharray="2 3" opacity="0.6" />
        <line x1="662" y1="54" x2="662" y2="64" strokeDasharray="2 3" opacity="0.6" />
      </g>
      <text x="375" y="52" fill="white" fontSize="6.5" fontFamily="monospace" letterSpacing="1.5" textAnchor="middle" fontWeight="700">574.00</text>

      {/* dimension vertical */}
      <g stroke="white" strokeWidth="0.6" fill="none">
        <line x1="42" y1="96" x2="42" y2="400" />
        <line x1="38" y1="96" x2="46" y2="96" />
        <line x1="38" y1="400" x2="46" y2="400" />
      </g>
      <text x="26" y="252" fill="white" fontSize="6.5" fontFamily="monospace" letterSpacing="1.2" textAnchor="middle" transform="rotate(-90 26 252)" fontWeight="700">304.00</text>

      {/* north arrow + scale */}
      <g transform="translate(760,120)">
        <circle cx="0" cy="0" r="22" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="0" cy="0" r="1.8" fill="white" />
        <path d="M0 -16 L4 -4 L0 -7 L-4 -4 Z" fill="white" />
        <text x="0" y="32" fill="white" fontSize="7" fontFamily="monospace" letterSpacing="2" textAnchor="middle" fontWeight="700">N</text>
        <text x="0" y="44" fill="rgba(255,255,255,0.6)" fontSize="5.5" fontFamily="monospace" letterSpacing="1" textAnchor="middle">TRUE NORTH</text>
        {/* scale bar */}
        <g transform="translate(-22,62)">
          <rect x="0" y="0" width="44" height="6" fill="none" stroke="white" strokeWidth="0.7" />
          <rect x="0" y="0" width="11" height="6" fill="white" />
          <rect x="22" y="0" width="11" height="6" fill="white" />
          <text x="22" y="14" fill="rgba(255,255,255,0.7)" fontSize="5" fontFamily="monospace" letterSpacing="1" textAnchor="middle">SCALE 1:500</text>
          <text x="22" y="21" fill="rgba(255,255,255,0.45)" fontSize="4.5" fontFamily="monospace" textAnchor="middle">0 — 20 — 40m</text>
        </g>
      </g>

      {/* legend */}
      <g transform="translate(760,300)">
        <rect x="0" y="0" width="186" height="98" rx="6" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" />
        <text x="10" y="14" fill="white" fontSize="6.5" fontFamily="monospace" letterSpacing="1.8" fontWeight="700">LEGEND</text>
        <g fontSize="5.8" fontFamily="monospace" fill="rgba(255,255,255,0.85)">
          <line x1="10" y1="26" x2="26" y2="26" stroke="white" strokeWidth="1.1" />
          <text x="32" y="28.5">WALL — 150mm BLOCK</text>
          <line x1="10" y1="40" x2="26" y2="40" stroke="#C9A96A" strokeWidth="1.5" />
          <text x="32" y="42.5">WINDOW — ALUMINIUM</text>
          <path d="M10 52 A8 8 0 0 1 18 44" stroke="white" strokeWidth="0.7" fill="none" />
          <text x="32" y="56">DOOR SWING</text>
          <rect x="10" y="66" width="16" height="8" fill="none" stroke="rgba(201,169,106,0.9)" strokeDasharray="4 2" />
          <text x="32" y="72">GREEN / PLAY</text>
          <circle cx="18" cy="84" r="4" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          <text x="32" y="86">TREE / SHADE</text>
        </g>
      </g>

      {/* title block — bottom */}
      <g>
        <rect x="10" y="512" width="980" height="98" rx="10" fill="white" />
        <line x1="10" y1="532" x2="990" y2="532" stroke="#1C2128" strokeWidth="0.7" opacity="0.12" />
        <line x1="720" y1="512" x2="720" y2="610" stroke="#1C2128" strokeWidth="0.7" opacity="0.1" />
        <line x1="860" y1="512" x2="860" y2="610" stroke="#1C2128" strokeWidth="0.7" opacity="0.1" />
        {/* left */}
        <text x="24" y="530" fill="#1C2128" fontSize="7" fontFamily="monospace" letterSpacing="2" fontWeight="800">NIGHTINGALE AVENUE CONSTRUCTION LTD</text>
        <text x="24" y="542" fill="rgba(28,33,40,0.55)" fontSize="6" fontFamily="monospace" letterSpacing="1.2">69 MANGO ST • BLUE PLAZA • BAATSONA TOTAL • SPINTEX • ACCRA • GHANA</text>
        <text x="24" y="562" fill="#1C2128" fontSize="9.5" fontFamily="serif" fontWeight="700" letterSpacing="-0.3">500 UNITS AFFORDABLE HOUSING — ACCRA</text>
        <text x="24" y="576" fill="rgba(28,33,40,0.6)" fontSize="6" fontFamily="monospace" letterSpacing="1">SITE PLAN — COMMUNITY LAYOUT • ROADS + DRAINS • PARKS + PLUMBING • COST-CONTROLLED DELIVERY</text>
        <text x="24" y="596" fill="rgba(28,33,40,0.4)" fontSize="5.5" fontFamily="monospace" letterSpacing="1">DRAWN: E. GORLEKU (MSc PM) • CHECKED: W. A. TAY (HND BC) • DATE: MAR 2020 • REV: 03</text>
        {/* middle */}
        <text x="734" y="530" fill="rgba(28,33,40,0.45)" fontSize="6" fontFamily="monospace" letterSpacing="1.6" fontWeight="700">SCALE</text>
        <text x="734" y="544" fill="#1C2128" fontSize="11" fontFamily="monospace" fontWeight="800">1:500</text>
        <text x="734" y="558" fill="rgba(28,33,40,0.45)" fontSize="6" fontFamily="monospace" letterSpacing="1.6" fontWeight="700">SHEET</text>
        <text x="734" y="572" fill="#1C2128" fontSize="11" fontFamily="monospace" fontWeight="800">A1 — 01</text>
        <text x="734" y="592" fill="rgba(28,33,40,0.45)" fontSize="5" fontFamily="monospace" letterSpacing="1">PPA REG • TAX 915 • SSNIT 766</text>
        {/* right — stamp */}
        <g transform="translate(915,556)">
          <rect x="-42" y="-18" width="84" height="36" rx="6" fill="none" stroke="#C9A96A" strokeWidth="1.2" />
          <text x="0" y="-4" fill="#C9A96A" fontSize="6.5" fontFamily="monospace" letterSpacing="2" fontWeight="800" textAnchor="middle">APPROVED</text>
          <text x="0" y="7" fill="rgba(28,33,40,0.55)" fontSize="5" fontFamily="monospace" letterSpacing="1" textAnchor="middle">NAC • 2020</text>
        </g>
      </g>

      {/* fold marks */}
      <g stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" fill="none">
        <path d="M500 10 L500 18 M500 602 L500 610" />
        <path d="M10 310 L18 310 M982 310 L990 310" />
      </g>
    </svg>
  );
}

export default function BlueprintReveal({ builtSrc = "/images/featured-estate.jpg", initial = 52, heightClass = "h-[420px] sm:h-[480px] md:h-[560px] lg:h-[620px]" }: BlueprintRevealProps) {
  const [pos, setPos] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(4, Math.min(96, (x / rect.width) * 100));
    setPos(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    (e.target as Element).setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    update(e.clientX);
  };
  const onPointerUp = () => setDragging(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 2));
    if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 2));
    if (e.key === "Home") setPos(4);
    if (e.key === "End") setPos(96);
  };

  useEffect(() => {
    if (dragging) document.body.style.userSelect = "none";
    else document.body.style.userSelect = "";
    return () => {
      document.body.style.userSelect = "";
    };
  }, [dragging]);

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="slider"
      aria-label="Blueprint to built comparison"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative w-full overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-[#0A2F4D] border border-charcoal/10 shadow-premium select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${heightClass} group cursor-ew-resize touch-pan-y`}
    >
      {/* Built layer — full */}
      <Image src={builtSrc} alt="Built - finished community" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1100px" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" aria-hidden />
      <span className="absolute top-4 md:top-5 right-4 md:right-5 z-10 bg-white/95 backdrop-blur border border-charcoal/5 text-charcoal text-[11px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-soft">
        Built
      </span>

      {/* Blueprint layer — SVG clipped */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} aria-hidden>
        <div className="absolute inset-0 bg-[#0A2F4D] flex items-center justify-center p-0">
          <BlueprintSVG />
        </div>
        <span className="absolute top-4 md:top-5 left-4 md:left-5 z-10 bg-white text-[#0A2F4D] text-[11px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-soft flex items-center gap-1.5 border border-white">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden /> Blueprint • 1:500
        </span>
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.08)] z-20" style={{ left: `${pos}%` }} aria-hidden />

      {/* Handle */}
      <div className="absolute top-1/2 -translate-y-1/2 z-30 -translate-x-1/2 flex items-center justify-center" style={{ left: `${pos}%` }} aria-hidden>
        <div className={`w-11 h-11 md:w-12 md:h-12 rounded-full bg-white border border-charcoal/10 shadow-premium flex items-center justify-center text-gold transition-transform ${dragging ? "scale-105" : "group-hover:scale-105"}`}>
          <span className="flex gap-[3px]">
            <span className="w-[2.5px] h-4 bg-gold rounded-full" />
            <span className="w-[2.5px] h-4 bg-gold rounded-full" />
            <span className="w-[2.5px] h-4 bg-gold rounded-full" />
          </span>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-charcoal/75 backdrop-blur text-white text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden /> Drag — Blueprint → Built
      </div>
    </div>
  );
}
