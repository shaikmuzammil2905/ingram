"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cog, SlidersHorizontal, Gauge, Network } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
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
      {/* Subpage Header Banner */}
      <div className="bg-brand-navy text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/hero-bg.jpg"
            alt="Ingram Engineering Services"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="max-w-3xl mt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Our Industrial Services
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mt-4 leading-relaxed">
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
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-brand transition-all duration-300"
              >
                {/* Image (5 cols) */}
                <div
                  className={`lg:col-span-5 relative h-72 sm:h-80 rounded-xl overflow-hidden shadow-md ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/40 via-transparent to-transparent" />
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
                      className="inline-flex items-center gap-2 bg-gray-100 hover:bg-brand-purple-tint text-gray-800 hover:text-brand-purple text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                      <span>Request Quote on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
