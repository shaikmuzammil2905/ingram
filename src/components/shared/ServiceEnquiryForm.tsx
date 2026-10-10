"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageCircle, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppUrl, QuoteFormData } from "@/lib/whatsapp";
import { submitEnquiryToSupabase } from "@/lib/db-seed";

interface ServiceEnquiryFormProps {
  defaultService?: string;
  title?: string;
  subtitle?: string;
  serviceOptions?: string[];
}

const DEFAULT_SERVICE_OPTIONS = [
  "Industrial Automation",
  "Process Control (DCS / PLC / SCADA)",
  "Yokogawa Instrumentation (Flow, Pressure, Level, Temp)",
  "Digital Transformation & IIoT Analytics",
  "Plant Automation Retrofit & Integration",
  "On-Site Calibration & Maintenance",
];

export default function ServiceEnquiryForm({
  defaultService = "Industrial Automation",
  title = "Request a Technical Consultation or Quote",
  subtitle = "Discuss your plant specifications, instrumentation requirements, or automation architecture with our engineers in Dar Es Salaam.",
  serviceOptions = DEFAULT_SERVICE_OPTIONS,
}: ServiceEnquiryFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: defaultService,
    industry: "Manufacturing & FMCG",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitEnquiryToSupabase({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service_interest: formData.service,
        message: `${formData.industry ? `[Industry: ${formData.industry}] ` : ""}${formData.message}`,
        source_page: typeof window !== "undefined" ? window.location.pathname : "",
      });
    } catch (err) {
      console.warn("Supabase enquiry sync warning:", err);
    }

    const whatsappUrl = getWhatsAppUrl(formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-brand-purple to-brand-navy p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-brand-purple-tint text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>Fast Response Within 24 Hours</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-purple-100 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="p-8 text-center space-y-4 bg-green-50 rounded-xl border border-green-200 animate-in fade-in">
            <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto" />
            <h4 className="text-xl font-bold text-gray-900">
              Thank You! Your Enquiry Has Been Transmitted.
            </h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Our engineering team has received your details and will get back to you promptly. If WhatsApp opened, you can also send your message directly.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSubmitted(false)}
                className="bg-brand-purple text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-purple-hover cursor-pointer transition-colors"
              >
                Submit Another Request
              </button>
              <a
                href={getWhatsAppUrl(formData)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Eng. Sarah Mangi"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Company / Organization <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Tanzania Industrial Mills Ltd"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g., sarah@company.co.tz"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+255 7XX XXX XXX"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Service / Solution Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white transition-all"
                >
                  {serviceOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Industry Sector
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white transition-all"
                >
                  <option value="Manufacturing & FMCG">Manufacturing & FMCG</option>
                  <option value="Oil & Gas / Petrochemical">Oil & Gas / Petrochemical</option>
                  <option value="Mining & Metallurgy">Mining & Metallurgy</option>
                  <option value="Energy & Utilities">Energy & Utilities</option>
                  <option value="Water & Wastewater">Water & Wastewater</option>
                  <option value="Food, Beverage & Agro-processing">Food, Beverage & Agro-processing</option>
                  <option value="Pharmaceutical & Chemicals">Pharmaceutical & Chemicals</option>
                  <option value="Other Industry">Other Industry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Project Scope / Technical Requirements / Message
              </label>
              <textarea
                rows={4}
                placeholder="Please describe your facility requirements, loop tuning needs, Yokogawa instrument models, or automation scope..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-brand-purple shrink-0" />
                <span>Your details are kept strictly confidential by Ingram Enterprises.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover active:bg-brand-navy text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-brand transition-all duration-200 active:scale-[0.99] cursor-pointer text-sm"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Service Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
