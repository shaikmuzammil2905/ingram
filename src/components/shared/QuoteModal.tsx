"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, MessageSquare, Building2, Phone, Mail, User, Layers, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { getWhatsAppUrl, QuoteFormData } from "@/lib/whatsapp";
import { COMPANY_INFO, PRIMARY_SERVICES } from "@/data/company";

export default function QuoteModal() {
  const { isOpen, preselectedService, closeQuoteModal } = useQuoteModal();
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    industry: "Manufacturing",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    } else {
      setFormData((prev) => ({ ...prev, service: "Industrial Automation" }));
    }
  }, [preselectedService, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build the WhatsApp message link
    const whatsappUrl = getWhatsAppUrl(formData);

    // Mark success feedback and trigger redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Open WhatsApp in new tab/window
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Auto close modal after brief delay
      setTimeout(() => {
        closeQuoteModal();
      }, 2500);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden">
          {/* Dark overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-navy-dark/75 backdrop-blur-sm"
            onClick={closeQuoteModal}
          />

          {/* Modal dialog box / Mobile Bottom Sheet */}
          <motion.div
            initial={{ y: "100%", opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative w-full sm:max-w-xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden border-t sm:border border-gray-100 z-10 max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-purple to-brand-navy p-5 sm:p-6 text-white relative shrink-0">
              {/* Mobile Drag Indicator */}
              <div className="w-12 h-1.5 bg-white/40 rounded-full mx-auto mb-3 sm:hidden" />

              <button
                onClick={closeQuoteModal}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close quote modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold uppercase tracking-wider mb-2 text-brand-purple-tint">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Fast WhatsApp Quotation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Request a Consultation & Quote</h3>
              <p className="text-xs sm:text-sm text-purple-100 mt-1">
                Submit your requirements to connect instantly with our engineering team on WhatsApp ({COMPANY_INFO.phone}).
              </p>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto flex-1 p-5 sm:p-6">
        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Enquiry Forwarded!</h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Your inquiry has been compiled and is opening in WhatsApp directly to{" "}
              <span className="font-semibold text-brand-purple">{COMPANY_INFO.phone}</span>. Our lead automation engineer will assist you promptly.
            </p>
            <div className="pt-2">
              <button
                onClick={closeQuoteModal}
                className="bg-brand-purple text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-purple-hover transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Eng. John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Company / Organization
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Tanzania Breweries / Geita Gold"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Phone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+255 7XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="engineer@company.co.tz"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Service Area
                </label>
                <div className="relative">
                  <Layers className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent bg-white text-gray-800"
                  >
                    {PRIMARY_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Yokogawa Instrumentation Supply">Yokogawa Instrumentation Supply</option>
                    <option value="PLC / SCADA Integration">PLC / SCADA Integration</option>
                    <option value="Digital Transformation & IIoT">Digital Transformation & IIoT</option>
                    <option value="Maintenance & Field Calibration">Maintenance & Field Calibration</option>
                  </select>
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Industry Sector
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent bg-white text-gray-800"
                >
                  <option value="Manufacturing & FMCG">Manufacturing & FMCG</option>
                  <option value="Oil & Gas / Petrochemical">Oil & Gas / Petrochemical</option>
                  <option value="Mining & Metallurgy">Mining & Metallurgy</option>
                  <option value="Power & Utilities">Power & Utilities</option>
                  <option value="Water & Wastewater">Water & Wastewater</option>
                  <option value="Chemical & Process">Chemical & Process</option>
                  <option value="Other Industry">Other Industry</option>
                </select>
              </div>
            </div>

            {/* Message / Project Scope */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Project Scope / Technical Needs
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your process, required instruments, or operational challenge..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-brand-purple hover:bg-brand-purple-hover text-white font-semibold rounded-lg shadow-md hover:shadow-brand transition-all duration-200"
              >
                {isSubmitting ? (
                  <span>Preparing WhatsApp Enquiry...</span>
                ) : (
                  <>
                    <span>Submit & Chat Directly on WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  </div>
)}
</AnimatePresence>
);
}
