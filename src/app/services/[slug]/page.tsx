"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { useWebsiteContent } from "@/context/WebsiteContentContext";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function DynamicServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { services, settings } = useWebsiteContent();
  const { openQuoteModal } = useQuoteModal();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <Cpu className="w-16 h-16 text-brand-purple opacity-40 animate-pulse" />
        <h1 className="text-2xl font-bold text-brand-navy">Service Not Found</h1>
        <p className="text-sm text-gray-500 max-w-md">
          The requested engineering practice or service could not be located.
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-purple text-white text-xs font-bold rounded-xl shadow-md"
        >
          <span>Return to All Services</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const phone = settings?.phone || "+255 744 550 551";
  const email = settings?.email_primary || "info@ingram.co.tz";

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-brand-purple via-[#351E6B] to-brand-navy text-white py-14 md:py-20 border-b border-brand-purple-light/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Industrial Engineering & Technology Solution</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {service.title}
          </h1>

          {service.subtitle && (
            <p className="text-base sm:text-lg text-purple-200 max-w-2xl leading-relaxed">
              {service.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src={service.image_url || "/images/service-automation.jpg"}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-sm sm:prose max-w-none text-gray-700 space-y-4">
              <h2 className="text-2xl font-bold text-brand-navy">Service Overview</h2>
              <p className="text-base leading-relaxed">{service.description}</p>

              {service.full_description && service.full_description.length > 0 && (
                <div className="space-y-3 pt-2">
                  {service.full_description.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Key Deliverables */}
            {service.key_points && service.key_points.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-purple/5 to-white border border-brand-purple/20 space-y-4">
                <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                  <span>Key Engineering Deliverables & Capabilities</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.key_points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-2xs text-xs sm:text-sm text-gray-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: CTA & Consultation Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                  Consultation
                </span>
                <h3 className="text-lg font-extrabold text-brand-navy">
                  Speak with an Engineer
                </h3>
                <p className="text-xs text-gray-500">
                  Request detailed design proposals, field instrumentation quotes, or turnkey commissioning.
                </p>
              </div>

              <button
                onClick={() => openQuoteModal(service.title)}
                className="w-full py-3 px-4 bg-brand-purple hover:bg-brand-purple-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Request Proposal for {service.short_title || service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-4 border-t border-gray-100 space-y-3 text-xs text-gray-600">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-purple" />
                  <span>{phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand-purple" />
                  <span>{email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
