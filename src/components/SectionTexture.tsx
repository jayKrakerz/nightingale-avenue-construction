"use client";

export function DotGrid({ className = "", opacity = 0.04 }: { className?: string; opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#1C2128" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
      </svg>
    </div>
  );
}

export function DiagonalHatch({ className = "", opacity = 0.04 }: { className?: string; opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diag" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="#B9975B" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>
    </div>
  );
}

export function BlueprintCorner({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute pointer-events-none ${className}`} width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g opacity="0.07" stroke="#1C2128" strokeWidth="0.8">
        <rect x="20" y="20" width="380" height="380" rx="16" />
        <rect x="40" y="40" width="340" height="340" rx="12" strokeDasharray="8 8" />
        <line x1="20" y1="140" x2="400" y2="140" />
        <line x1="140" y1="20" x2="140" y2="400" />
        <circle cx="210" cy="210" r="90" />
        <circle cx="210" cy="210" r="140" strokeDasharray="6 6" />
        <path d="M210 70 L210 350 M70 210 L350 210" strokeOpacity="0.6" />
      </g>
      <g opacity="0.05" fill="#B9975B">
        <circle cx="210" cy="210" r="3" />
        <circle cx="140" cy="140" r="2" />
        <circle cx="280" cy="140" r="2" />
        <circle cx="140" cy="280" r="2" />
        <circle cx="280" cy="280" r="2" />
      </g>
    </svg>
  );
}

export function ArchLines({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute pointer-events-none ${className}`} width="600" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g opacity="0.06" stroke="#1C2128" strokeWidth="0.9">
        <path d="M0 300 Q300 0 600 300" />
        <path d="M40 300 Q300 40 560 300" strokeDasharray="6 6" />
        <path d="M80 300 Q300 80 520 300" opacity="0.6" />
        <line x1="0" y1="300" x2="600" y2="300" />
        <line x1="150" y1="300" x2="150" y2="180" strokeOpacity="0.4" />
        <line x1="300" y1="300" x2="300" y2="120" strokeOpacity="0.4" />
        <line x1="450" y1="300" x2="450" y2="180" strokeOpacity="0.4" />
      </g>
    </svg>
  );
}

export function WaveLines({ className = "", opacity = 0.05 }: { className?: string; opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden style={{ opacity }}>
      <svg width="100%" height="100%" viewBox="0 0 1440 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 200 C 360 100, 720 300, 1080 200 S 1440 200, 1440 200" stroke="#1C2128" strokeWidth="0.9" fill="none" />
        <path d="M0 230 C 360 130, 720 330, 1080 230 S 1440 230, 1440 230" stroke="#B9975B" strokeWidth="0.7" fill="none" strokeDasharray="8 8" />
        <path d="M0 170 C 360 70, 720 270, 1080 170 S 1440 170, 1440 170" stroke="#1C2128" strokeWidth="0.6" fill="none" opacity="0.6" />
      </svg>
    </div>
  );
}

export function TopoLines({ className = "", opacity = 0.06 }: { className?: string; opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden style={{ opacity }}>
      <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#1C2128" strokeWidth="0.7" fill="none">
          <path d="M0 120 Q200 80 400 140 T800 120" />
          <path d="M0 200 Q200 160 400 220 T800 200" strokeDasharray="10 8" />
          <path d="M0 280 Q200 240 400 300 T800 280" opacity="0.7" />
          <path d="M0 360 Q200 320 400 380 T800 360" strokeDasharray="6 6" opacity="0.5" />
          <ellipse cx="400" cy="300" rx="140" ry="90" stroke="#B9975B" strokeWidth="0.8" strokeDasharray="8 8" />
          <ellipse cx="400" cy="300" rx="90" ry="55" />
        </g>
      </svg>
    </div>
  );
}

export function GrainOverlay({ className = "", opacity = 0.025 }: { className?: string; opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
