"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cog, SlidersHorizontal, Gauge, Network } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PRIMARY_SERVICES } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ServicesPage() {
  const { openQuoteModal } = useQuoteModal();

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "industrial-automation":
        return <Cog className="w-8 h-8 text-brand-purple" />;
      case "process-control":
        return <SlidersHorizontal className="w-8 h-8 text-brand-purple" />;
      case "instrumentation":
        return <Gauge className="w-8 h-8 text-brand-purple" />;
      case "digital-transformation":
        return <Network className="w-8 h-8 text-brand-purple" />;
      default:
        return <Cog className="w-8 h-8 text-brand-purple" />;
    }
  };

  return (
    <div>
      {/* Logo Colour Header Banner */}
      <div className="bg-gradient-to-r from-brand-purple via-[#351E6B] to-brand-navy text-white py-14 md:py-20 border-b border-brand-purple-light/40 relative overflow-hidden">
        {/* Subtle geometric polygon decorative motif from logo */}
        <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-20 z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full text-white">
            <polygon points="100,10 170,50 170,140 100,190 30,140 30,50" fill="none" stroke="currentColor" strokeWidth="2" />
            <polygon points="100,30 150,60 150,130 100,170 50,130 50,60" fill="currentColor" fillOpacity="0.15" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} theme="dark" />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-brand-purple-tint text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <span>Industrial Engineering Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Our Industrial Services
            </h1>
            <p className="text-base sm:text-lg text-purple-100 mt-3 leading-relaxed font-normal">
              Comprehensive automation, precision Yokogawa instrumentation, process control and digital transformation engineered for mission-critical industrial reliability in Tanzania.
            </p>
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {PRIMARY_SERVICES.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <ScrollReveal key={service.id} direction="up" distance={30}>
                <div
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-brand transition-all duration-300 bg-gradient-to-br from-[#FAFCFF] to-white"
                >
                {/* Image (5 cols) */}
                <div
                  className={`lg:col-span-5 relative h-72 sm:h-80 rounded-xl overflow-hidden shadow-md bg-gray-100 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Details (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-purple-tint flex items-center justify-center">
                      {getServiceIcon(service.id)}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                        Engineering Capability
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {service.fullDescription[0]}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {service.fullDescription[1]}
                  </p>

                  {/* Key Capabilities Pills */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Key Capabilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.keyPoints.map((pt, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-colors group"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <button
                      onClick={() => openQuoteModal(service.title)}
                      className="inline-flex items-center gap-2 bg-white hover:bg-brand-purple-tint text-gray-800 hover:text-brand-purple border border-gray-200 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                      <span>Request Quote on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
