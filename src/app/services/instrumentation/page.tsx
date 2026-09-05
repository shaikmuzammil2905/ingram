"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gauge,
  CheckCircle2,
  Thermometer,
  Waves,
  Activity,
  ShieldCheck,
  Award,
  Zap,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import { PRIMARY_SERVICES } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function InstrumentationPage() {
  const { openQuoteModal } = useQuoteModal();
  const service = PRIMARY_SERVICES.find((s) => s.id === "instrumentation")!;

  return (
    <div>
      {/* Light Blue Grand & Decent Header Banner */}
      <div className="bg-gradient-to-r from-[#EBF3FC] via-[#F2F7FF] to-[#E4EFFC] text-brand-navy py-16 md:py-24 border-b border-[#D5E5F7] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Instrumentation" },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider border border-brand-purple/20">
              <Gauge className="w-4 h-4 text-brand-purple" />
              <span>Yokogawa Precision Field Measurement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy">
              Industrial Instrumentation Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
              {service.fullDescription[0]}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openQuoteModal("Yokogawa Instrumentation")}
                className="bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200"
              >
                Request Instrument Quote on WhatsApp
              </button>
              <Link
                href="/partners"
                className="bg-white hover:bg-brand-purple-tint text-brand-navy text-sm font-semibold px-6 py-3 rounded-lg border border-gray-300 transition-all duration-200"
              >
                Explore Yokogawa Technologies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                Uncompromising Measurement Accuracy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Accurate, Dependable Field Data for Safety and Quality
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.fullDescription[1]}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.fullDescription[2]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Differential, Gauge & Absolute Pressure Transmitters",
                  "Coriolis, Magnetic, Vortex & Ultrasonic Flowmeters",
                  "Non-Contact Radar & Guided Wave Level Sensors",
                  "Thermocouple, RTD & Smart Temperature Transmitters",
                  "pH, Conductivity & Dissolved Oxygen Liquid Analyzers",
                  "Certified On-Site Calibration & Commissioning",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/service-instrumentation.jpg"
                  alt="Industrial Yokogawa Transmitters"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Process Variables */}
      <section className="py-16 bg-brand-gray border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
              The 4 Core Measurement Dimensions
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 uppercase">Pressure</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Yokogawa DPharp digital resonant sensors deliver industry-leading accuracy, multi-sensing capabilities, and zero long-term drift.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 uppercase">Flow</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Rotamass Coriolis mass flowmeters and ADMAG magnetic flowmeters for high-precision custody transfer, slurry, and conductive liquids.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 uppercase">Level</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Continuous radar, ultrasonic, and hydrostatic level transmitters for extreme pressure vessels, storage silos, and open sumps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <Thermometer className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 uppercase">Temperature</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Smart head-mounted transmitters, thermowells, and multi-point sensors engineered for high-vibration furnaces, kilns, and cryogenic lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
