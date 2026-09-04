"use client";

import { useState } from "react";
import { Send, CheckCircle, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function ContactForm({ detailed = false }: { detailed?: boolean }) {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "", company: "", phone: "", whatsapp: "", email: "", service: "", location: "", startDate: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus("idle"), 5000);
    setFormData({ name: "", company: "", phone: "", whatsapp: "", email: "", service: "", location: "", startDate: "", message: "" });
  };

  const inputCls = "w-full px-4 py-3.5 rounded-xl border border-charcoal/10 bg-white text-charcoal text-[14px] placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold/40 transition-colors";
  const labelCls = "block text-[11px] font-semibold tracking-[0.14em] uppercase text-charcoal/50 mb-2";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-[20px] border border-charcoal/5 shadow-soft p-6 md:p-8 space-y-5">
      <div className="flex items-center gap-3 pb-2 border-b border-charcoal/5">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold"><Send size={16} /></div>
        <div>
          <h3 className="font-serif text-lg font-medium text-charcoal leading-none">Project inquiry</h3>
          <p className="text-xs text-charcoal/45 mt-1">Response within 24 hours • PPA registered</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} className={inputCls} placeholder="Your full name" />
        </div>
        {detailed && (
          <div>
            <label className={labelCls}>Company</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputCls} placeholder="Company name" />
          </div>
        )}
        {!detailed && (
          <div>
            <label className={labelCls}>Phone *</label>
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputCls} placeholder="+233 ..." />
          </div>
        )}
      </div>

      {detailed && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div><label className={labelCls}>Phone *</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className={inputCls} placeholder="+233 ..." /></div>
          <div><label className={labelCls}>WhatsApp</label><input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className={inputCls} placeholder="+233 ..." /></div>
        </div>
      )}

      <div><label className={labelCls}>Email *</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputCls} placeholder="your@email.com" /></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Service Needed *</label>
          <select name="service" required value={formData.service} onChange={handleChange} className={`${inputCls} appearance-none`}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => (<option key={s.slug} value={s.title}>{s.title}</option>))}
          </select>
        </div>
        {detailed && (<div><label className={labelCls}>Project Location</label><input type="text" name="location" value={formData.location} onChange={handleChange} className={inputCls} placeholder="e.g. East Legon, Accra" /></div>)}
      </div>

      {detailed && (
        <div>
          <label className={labelCls}>Desired Start Date</label><input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className={inputCls} />
        </div>
      )}

      <div><label className={labelCls}>Message *</label><textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${inputCls} resize-none`} placeholder="Tell us about your project..." /></div>

      {status === "success" && (
        <div className="flex items-start gap-2.5 text-emerald-700 bg-emerald-50 border border-emerald-100 px-4 py-3 rounded-2xl text-sm">
          <CheckCircle size={16} className="mt-0.5 shrink-0" /> Thank you! Your message has been sent. We&apos;ll respond within 24 hours.
        </div>
      )}

      <button type="submit" className="w-full bg-charcoal hover:bg-charcoal-dark text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 hover:shadow-premium">
        {detailed ? "Submit Project Inquiry" : "Send Message"} <Send size={14} />
      </button>
      <p className="flex items-center justify-center gap-1.5 text-[11px] text-charcoal/40"><ShieldCheck size={12} className="text-gold" /> PPA-registered • Tax & SSNIT compliant • Secure</p>
    </form>
  );
}
