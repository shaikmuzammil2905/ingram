"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SlidersHorizontal,
  CheckCircle2,
  Cpu,
  Layers,
  Activity,
  ShieldCheck,
  TrendingUp,
  Settings2,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CtaBanner from "@/components/home/CtaBanner";
import { PRIMARY_SERVICES } from "@/data/company";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ProcessControlPage() {
  const { openQuoteModal } = useQuoteModal();
  const service = PRIMARY_SERVICES.find((s) => s.id === "process-control")!;

  return (
    <div>
      {/* Light Blue Grand & Decent Header Banner */}
      <div className="bg-gradient-to-r from-[#EBF3FC] via-[#F2F7FF] to-[#E4EFFC] text-brand-navy py-16 md:py-24 border-b border-[#D5E5F7] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Process Control" },
            ]}
          />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider border border-brand-purple/20">
              <SlidersHorizontal className="w-4 h-4 text-brand-purple" />
              <span>DCS, PLC & Process Optimization</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy">
              Process Control Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
              {service.fullDescription[0]}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => openQuoteModal("Process Control")}
                className="bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-200"
              >
                Get a Quote on WhatsApp
              </button>
              <Link
                href="/contact"
                className="bg-white hover:bg-brand-purple-tint text-brand-navy text-sm font-semibold px-6 py-3 rounded-lg border border-gray-300 transition-all duration-200"
              >
                Consult a Control Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                Continuous & Batch Precision
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Stable, Safe and Efficient Operations Across Complex Facilities
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.fullDescription[1]}
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.fullDescription[2]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Distributed Control Systems (DCS) Engineering",
                  "PLC / PAC Multi-Axis & Sequence Control",
                  "PID Loop Tuning & Advanced Process Control (APC)",
                  "High-Performance HMI / Operator Cockpits",
                  "Alarm Rationalization (ISA-18.2 compliant)",
                  "Integrated Emergency Shutdown Systems (ESD)",
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
                  src="/images/service-process-control.jpg"
                  alt="Process Control Room Console"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Supported */}
      <section className="py-16 bg-brand-gray border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight uppercase">
              Technology Domains
            </h2>
            <div className="w-16 h-1 bg-brand-purple mx-auto mt-2.5 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Distributed Control Systems (DCS)</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Centralized multi-loop architectures designed for continuous chemical reactions, oil refining units, and thermal power plant processes requiring 99.999% uptime.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">High-Reliability PLC & PAC</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Robust programmable logic controllers executing deterministic high-speed interlocks, conveyor dispatch, pump station sequencing, and batch recipes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-purple-tint text-brand-purple flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Advanced Loop Optimization</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Eliminate oscillatory valve behavior, mitigate dead-band hysteresis, and stabilize distillation temperatures through rigorous mathematical loop tuning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
