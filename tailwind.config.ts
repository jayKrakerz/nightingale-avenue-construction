import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#111418",
          light: "#1C2128",
          dark: "#0B0F14",
          900: "#0B0F14",
          800: "#111418",
          700: "#1C2128",
        },
        gold: {
          DEFAULT: "#C9A96A",
          light: "#DCBF8A",
          dark: "#A88A4F",
          muted: "rgba(201,169,106,0.12)",
          50: "#FDF8EF",
          100: "#F5E6C8",
        },
        "off-white": "#FBFAF7",
        "warm-white": "#F6F3EE",
        cream: "#F9F6F0",
        stone: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "serif"],
      },
      letterSpacing: {
        luxe: "0.14em",
        wide2: "0.22em",
      },
      boxShadow: {
        premium: "0 20px 60px -12px rgba(11,15,20,0.18)",
        "premium-lg": "0 32px 80px -16px rgba(11,15,20,0.22)",
        gold: "0 12px 32px rgba(201,169,106,0.25)",
        soft: "0 8px 32px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
