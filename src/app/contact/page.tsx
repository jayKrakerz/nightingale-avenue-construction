"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal-dark overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Let&apos;s Build{' '}
              <span className="text-gradient">Something Great</span>
            </h1>
            <p className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed">
              Tell us about your project and our team will get in touch with
              you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm detailed />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-off-white rounded-2xl p-6 border border-neutral-200/40"
              >
                <h3 className="text-charcoal font-bold text-lg mb-6">
                  Get In Touch
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal mb-0.5">
                        Office Address
                      </p>
                      <p className="text-sm text-neutral-500">
                        {COMPANY.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="text-sm text-neutral-500 hover:text-gold transition-colors block"
                      >
                        {COMPANY.phoneFormatted}
                      </a>
                      <a
                        href={`tel:${COMPANY.phone2}`}
                        className="text-sm text-neutral-500 hover:text-gold transition-colors block"
                      >
                        {COMPANY.phone2Formatted}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <MessageCircle size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal mb-0.5">
                        WhatsApp
                      </p>
                      <a
                        href={`https://wa.me/${COMPANY.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-500 hover:text-gold transition-colors"
                      >
                        {COMPANY.phoneFormatted}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-sm text-neutral-500 hover:text-gold transition-colors break-all block"
                      >
                        {COMPANY.email}
                      </a>
                      <a
                        href={`mailto:${COMPANY.email2}`}
                        className="text-sm text-neutral-500 hover:text-gold transition-colors break-all block"
                      >
                        {COMPANY.email2}
                      </a>
                      <a href={COMPANY.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gold hover:underline block mt-1">{COMPANY.website}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal mb-0.5">
                        Business Hours
                      </p>
                      <p className="text-sm text-neutral-500">
                        {COMPANY.businessHours}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-off-white rounded-2xl overflow-hidden border border-neutral-200/40"
              >
                <div className="h-72 relative bg-neutral-200 flex items-center justify-center">
                  <div className="text-center text-neutral-400">
                    <MapPin size={40} className="mx-auto mb-3" />
                    <p className="font-medium">Google Maps</p>
                    <p className="text-sm">{COMPANY.address}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
