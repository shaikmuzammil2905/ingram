"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Inbox,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  User,
  Layers,
  ArrowRight,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { COMPANY_INFO, PRIMARY_SERVICES } from "@/data/company";
import { getWhatsAppUrl, QuoteFormData } from "@/lib/whatsapp";

export default function ContactPage() {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    industry: "Manufacturing & FMCG",
    service: "Industrial Automation",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappUrl = getWhatsAppUrl(formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <div>
      {/* Subpage Header Banner */}
      <div className="bg-brand-navy text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/hero-bg.jpg"
            alt="Ingram Head Office"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <div className="max-w-3xl mt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Contact Ingram Enterprises Ltd
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mt-4 leading-relaxed">
              Connect with our automation engineering and instrumentation experts in Dar Es Salaam for technical consultations, product quotations, and emergency site support.
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Information Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-purple mb-2">
                  Head Office & Workshop
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Let&apos;s Build a Reliable Solution Together
                </h2>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Our team is on standby to assist plant managers, electrical engineers, and instrumentation leads across Tanzania.
                </p>
              </div>

              {/* Direct Details Grid */}
              <div className="space-y-5">
                {/* Physical Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                  <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Physical Location
                    </h4>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {COMPANY_INFO.poBox}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                  <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Telephone
                    </h4>
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="text-sm font-semibold text-gray-900 hover:text-brand-purple block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-xs text-gray-500">
                      Available Mon - Fri, 8:00 AM - 5:00 PM EAT
                    </span>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-green-200 bg-green-50/40">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-green-700">
                      WhatsApp Quick Chat
                    </h4>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-gray-900 hover:text-green-600 block mt-0.5"
                    >
                      {COMPANY_INFO.whatsapp}
                    </a>
                    <p className="text-xs text-gray-600 mt-0.5">
                      Instant response for quotations and specs
                    </p>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                  <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Email Inquiries
                    </h4>
                    <div className="mt-0.5 space-y-0.5">
                      <a
                        href={`mailto:${COMPANY_INFO.emails[0]}`}
                        className="text-sm font-semibold text-brand-purple hover:underline block"
                      >
                        {COMPANY_INFO.emails[0]}
                      </a>
                      <a
                        href={`mailto:${COMPANY_INFO.emails[1]}`}
                        className="text-sm font-semibold text-brand-purple hover:underline block"
                      >
                        {COMPANY_INFO.emails[1]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-brand">
              <div className="border-b border-gray-100 pb-6 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple-tint text-brand-purple text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Fast WhatsApp Forwarding</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Send Us an Enquiry
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Fill out the form below to immediately dispatch your inquiry to our engineering team on WhatsApp ({COMPANY_INFO.phone}).
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-green-50 rounded-xl border border-green-200">
                  <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto" />
                  <h4 className="text-xl font-bold text-gray-900">
                    Thank you! Your enquiry has been received.
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    We have prepared your message and opened WhatsApp directly with our engineering team at{" "}
                    <strong>{COMPANY_INFO.phone}</strong>. We will respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-brand-purple text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-purple-hover"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Eng. Sarah Mangi"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company / Facility Name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@plant.co.tz"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+255 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white"
                      >
                        {PRIMARY_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Yokogawa Instrumentation Supply">
                          Yokogawa Instrumentation Supply
                        </option>
                        <option value="PLC / SCADA Integration">
                          PLC / SCADA Integration
                        </option>
                        <option value="Digital Transformation & IIoT">
                          Digital Transformation & IIoT
                        </option>
                        <option value="Emergency Breakdown / Calibration">
                          Emergency Breakdown / Calibration
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                        Industry
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) =>
                          setFormData({ ...formData, industry: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white"
                      >
                        <option value="Manufacturing & FMCG">Manufacturing & FMCG</option>
                        <option value="Oil & Gas / Petrochemical">Oil & Gas / Petrochemical</option>
                        <option value="Mining & Metallurgy">Mining & Metallurgy</option>
                        <option value="Energy & Utilities">Energy & Utilities</option>
                        <option value="Water & Wastewater">Water & Wastewater</option>
                        <option value="Chemical & Process">Chemical & Process</option>
                        <option value="Other Industry">Other Industry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                      Project Requirements / Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please outline the plant issue, required instrument specifications, or control architecture scope..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full p-3.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white font-semibold py-3.5 px-6 rounded-lg shadow-md transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span>Submitting to WhatsApp...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry via WhatsApp</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-500">
                    Immediately forwards to official WhatsApp: <strong>{COMPANY_INFO.phone}</strong>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Map Location Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-purple-tint text-brand-purple flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">
              Ingram Enterprises Ltd - Dar Es Salaam Facility
            </h3>
            <p className="text-sm text-gray-600 max-w-lg mx-auto">
              {COMPANY_INFO.fullAddress}
            </p>
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Kinondoni,Dar+Es+Salaam,Tanzania"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-purple hover:underline"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
