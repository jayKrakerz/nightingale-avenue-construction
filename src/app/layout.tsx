import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nightingale Avenue Construction | Construction, Glass, Procurement & Logistics - Ghana",
    template: "%s | NAC - Nightingale Avenue Construction",
  },
  description:
    "Nightingale Avenue Construction — wholly owned Ghanaian solutions provider since January 2024. Construction & affordable housing, glass innovation (frameless & aluminium), procurement & logistics (PPA registered), renewable energy and IT & communications. No. 5 Nii Lomo Tackie Link, Abelemkpe, Accra.",
  keywords: [
    "NAC",
    "Nightingale Avenue Construction",
    "construction company Ghana",
    "affordable housing Ghana",
    "glass solutions Ghana",
    "frameless glass Accra",
    "aluminium windows doors Ghana",
    "curtain wall Ghana",
    "procurement logistics Ghana",
    "PPA registered supplier Ghana",
    "renewable energy Ghana",
    "IT solutions Ghana",
  ],
  openGraph: {
    title: "Nightingale Avenue Construction | Solutions Provider in Ghana",
    description:
      "Construction, glass innovation, procurement & logistics, renewable energy and IT — wholly owned Ghanaian company delivering quality housing for all since 2024.",
    type: "website",
    locale: "en_GH",
    siteName: "Nightingale Avenue Construction",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-cream">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-charcoal text-white px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gold">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
