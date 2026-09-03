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
          DEFAULT: "#B9975B",
          light: "#C9A96A",
          dark: "#A88A4F",
          muted: "rgba(185,151,91,0.12)",
          50: "#FDF8EF",
          100: "#F5E6C8",
        },
        "off-white": "#FFFFFF",
        "warm-white": "#F2F0EB",
        cream: "#F2F0EB",
        stone: {
          50: "#F2F0EB",
          100: "#E8E6E1",
          200: "#D6D3CC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "serif"],
        archivo: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.14em",
        wide2: "0.22em",
        label: "0.16em",
        labelWide: "0.22em",
      },
      boxShadow: {
        premium: "0 20px 60px -12px rgba(11,15,20,0.14)",
        "premium-lg": "0 32px 80px -16px rgba(11,15,20,0.18)",
        gold: "0 12px 32px rgba(185,151,91,0.22)",
        soft: "0 8px 24px rgba(0,0,0,0.05)",
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
