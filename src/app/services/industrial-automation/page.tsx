"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Cog,
  CheckCircle2,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Factory,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import { PRIMARY_SERVICES } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function IndustrialAutomationPage() {
  const { openQuoteModal } = useQuoteModal();
  const service = PRIMARY_SERVICES.find((s) => s.id === "industrial-automation")!;

  return (
    <div>
      {/* Light Blue Grand & Decent Header Banner */}
      <div className="bg-gradient-to-r from-[#EBF3FC] via-[#F2F7FF] to-[#E4EFFC] text-brand-navy py-16 md:py-24 border-b border-[#D5E5F7] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Industrial Automation" },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider border border-brand-purple/20">
              <Cog className="w-4 h-4 text-brand-purple" />
              <span>Plant Automation & Control Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy">
              Industrial Automation Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
              {service.fullDescription[0]}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openQuoteModal("Industrial Automation")}
                className="bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200"
              >
                Get a Quote on WhatsApp
              </button>
              <Link
                href="/contact"
                className="bg-white hover:bg-brand-purple-tint text-brand-navy text-sm font-semibold px-6 py-3 rounded-lg border border-gray-300 transition-all duration-200"
              >
                Speak with an Automation Engineer
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
                Engineered for High-Consequence Plants
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Achieve Safer, Smarter and More Profitable Production
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.fullDescription[1]}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Whether retrofitting legacy PLC systems, integrating complex multi-vendor skids into a centralized SCADA network, or commissioning complete greenfield automation architectures, Ingram Enterprises delivers engineering rigor aligned with global safety standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Programmable Logic Controllers (PLC)",
                  "Distributed Control Systems (DCS)",
                  "Supervisory Control & Data Acquisition (SCADA)",
                  "Safety Instrumented Systems (SIS / SIL-rated)",
                  "Motor Control Centers (MCC) & VFD Automation",
                  "Factory Floor & Packaging Line Modernization",
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
                  src="/images/service-automation.jpg"
                  alt="PLC & Automation Panel Engineering"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-16 bg-brand-gray border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
              Business & Operational Benefits
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Maximum Plant Reliability</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Mitigate equipment trip risks and eliminate human operational errors through automated interlocks, deterministic timing, and redundant hardware architectures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Higher Throughput & Yield</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Maintain optimal process setpoints continuously without drift, maximizing product quality, reducing batch cycle times, and minimizing raw material waste.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Safety & Compliance</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Ensure full personnel protection and environmental compliance with certified emergency shutdown logic (ESD) and comprehensive event audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Across Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
              Target Industrial Applications
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Food & Beverage Packaging",
                desc: "High-speed conveyor pacing, bottling synchronization, and recipe management.",
              },
              {
                title: "Mining Grinding & Flotation",
                desc: "SAG/Ball mill feed optimization, slurry pumping, and automated reagent dosing.",
              },
              {
                title: "Oil & Gas Terminals",
                desc: "Automated truck loading racks, tank level custody interlocks, and emergency ESD.",
              },
              {
                title: "Cement & Clinker Plants",
                desc: "Raw meal kiln automation, clinker cooler temperature regulation, and bag house sequencing.",
              },
            ].map((app, i) => (
              <div key={i} className="p-5 rounded-xl border border-gray-200 hover:border-brand-purple/40 bg-gray-50/50 space-y-2">
                <Factory className="w-5 h-5 text-brand-purple" />
                <h4 className="text-sm font-bold text-gray-900">{app.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
