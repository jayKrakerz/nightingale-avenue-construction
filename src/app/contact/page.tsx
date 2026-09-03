"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { DotGrid, BlueprintCorner, GrainOverlay, TopoLines } from "@/components/SectionTexture";
import { COMPANY } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      {/* Hero — unified */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal overflow-hidden isolate">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/50 via-charcoal to-charcoal-dark" aria-hidden />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(201,169,106,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,106,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px" }} aria-hidden />
        <BlueprintCorner className="-top-16 -right-16 hidden lg:block opacity-40" />
        <GrainOverlay opacity={0.025} />
        <div className="absolute top-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" aria-hidden />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-gold/60 hidden sm:block" aria-hidden />
              <span className="font-archivo font-semibold text-gold text-[11px] tracking-[0.16em] uppercase">Contact Us</span>
            </div>
            <h1 className="font-archivo font-extrabold text-[40px] md:text-[52px] lg:text-[60px] leading-[0.88] tracking-[-0.03em] uppercase text-white">
              LET&apos;S BUILD <span className="text-gold">SOMETHING GREAT</span>
            </h1>
            <p className="mt-4 text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-xl font-medium">Tell us about your project and our team will get in touch within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content — textured */}
      <section className="section-padding bg-white relative overflow-hidden">
        <DotGrid opacity={0.025} />
        <TopoLines opacity={0.03} />
        <GrainOverlay opacity={0.015} />
        <div className="absolute top-0 inset-x-0 h-px bg-charcoal/5" aria-hidden />
        <div className="relative max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <ContactForm detailed />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="bg-cream rounded-[20px] p-6 border border-charcoal/5 shadow-soft">
                <h3 className="font-serif font-medium text-charcoal text-[18px] mb-6">Get In Touch</h3>
                <div className="space-y-5">
                  {[
                    { icon: MapPin, label: "Office Address", content: COMPANY.address, href: undefined },
                    { icon: Phone, label: "Phone", content: `${COMPANY.phoneFormatted} / ${COMPANY.phone2Formatted}`, href: `tel:${COMPANY.phone}` },
                    { icon: MessageCircle, label: "WhatsApp", content: COMPANY.phoneFormatted, href: `https://wa.me/${COMPANY.whatsapp}` },
                    { icon: Mail, label: "Email", content: `${COMPANY.email} • ${COMPANY.email2}`, href: `mailto:${COMPANY.email}` },
                    { icon: Clock, label: "Business Hours", content: COMPANY.businessHours, href: undefined },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3.5">
                      <span className="w-10 h-10 rounded-xl bg-white border border-charcoal/5 flex items-center justify-center text-gold shrink-0 shadow-soft"><item.icon size={16} aria-hidden /></span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-charcoal/40">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-charcoal/70 hover:text-gold transition-colors break-all mt-1 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">{item.content}</a>
                        ) : (
                          <p className="text-sm text-charcoal/70 mt-1 leading-relaxed">{item.content}</p>
                        )}
                        {item.label === "Email" && <a href={COMPANY.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gold hover:underline mt-1 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">{COMPANY.website}</a>}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="bg-cream rounded-[20px] overflow-hidden border border-charcoal/5 shadow-soft relative h-[320px]">
                <Image src="/images/contact-accra.jpg" alt="Abelemkpe area map" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 480px" />
                <div className="absolute inset-0 bg-charcoal/10" aria-hidden />
                <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 text-xs font-semibold text-charcoal shadow-soft flex items-center gap-2 border border-charcoal/5">
                  <MapPin size={12} className="text-gold" aria-hidden /> Abelemkpe • GA 135 6916
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
